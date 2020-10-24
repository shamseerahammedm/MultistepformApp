import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { submitFormApiRequestSimulate } from './utilities';
// import submitFormApiRequestSimulate from './utilities';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const switchFormBasedOnCategory = (currentFormCategory, navigation, setActiveStep) => {

	const { categoryName } = currentFormCategory;
	const categoryNameToLowerCase = categoryName.toLowerCase()

	switch (categoryNameToLowerCase)
	{
		// case "warranty":
		//     return <Safety navigation={navigation} setActiveStep={setActiveStep}/>;
		// case "sales":
		//     return <Safety navigation={navigation} setActiveStep={setActiveStep}/>;
		// case "safety":
		//     return <Safety navigation={navigation} setActiveStep={setActiveStep}/>;
		default:
			return <Safety navigation={navigation} setActiveStep={setActiveStep} />;
	}
}




const Forms = ({ setForm, formData, navigation, setActiveStep }) => {

	// taking category from redux global state
	const currentFormCategory = useSelector(state => state.categoriesReducer.currentFormCategory)


	return (
		<div className="form container">
			<div class="row">
				<div class="col-sm-12">
					<h3>{currentFormCategory.categoryName}</h3>
				</div>
			</div>
			{
				switchFormBasedOnCategory(currentFormCategory, navigation, setActiveStep)
			}
		</div>
	);
};



// const mapStateToProps = ({ postsReducer }) => ({
// 	something : postsReducer.currentFormCategory
// })


// const mapStateToProps = ( state ) => {
// 	const { postsReducer } = state;

// 	 console.log('state',state);
// 	return {
// 		something : postsReducer.currentFormCategory
// 	}
// }





// const mapDispatchToProps = dispatch => {
// 	return {
// 		setCurrentUser : user => {
// 			dispatch(setCurrentUser(user))
// 		}
// 	}
// }





export default Forms;



const safetySchema = Yup.object().shape({
	city: Yup.string()
		.required('City is required')
		.max(100, 'Maximum characters upto 100.')
		.matches(/^[A-Za-z ]*$/, 'Last name should not contain special characters or numbers'),
	state: Yup.string()
		.required('State is required')
		.max(100, 'Maximum characters upto 100.'),
	zip: Yup.string()
		.required('Mobile number is required!')
		.matches(/^[0-9\+\ ]+$/, {
			message: 'Zip must contain only numeric characters',
			excludeEmptyString: true
		})
		.max(13, 'Maximum characters upto 13.')
		.min(10, 'Must have minimum 10 characters.'),
});






const Safety = ({ navigation, setActiveStep }) => {

	const { next, previous } = navigation;


	// loading indicator state
	const [isLoading, setIsLoading] = useState(false);


	// on submit function
	const submitForm = async (values) => {
		console.log('values', values);
		setIsLoading(true);
		const data = await submitFormApiRequestSimulate(values);
		if (data.status === true)
		{
			setIsLoading(false);
			next();
			setActiveStep(prevStep => prevStep + 1)
		}
	}

	return (
		<>


			{
				isLoading && <p>Loading..</p>
			}

			<Formik
				initialValues={{
					zip: '',
					city: '',
					state: '',
				}}
				onSubmit={(values) => submitForm(values)}
				validationSchema={safetySchema}
			>
				{({ values, errors }) => {

					console.log(errors);
					console.log(values);
					return (
						<>
							<Form noValidate="novalidate">
								<div className="containerr">
									<div className="row">
										<div className="col-sm-4">
											<div class="form-group">
												<Field className="form-control" placeholder="Enter Zip" name="zip" />
												<ErrorMessage name="zip" />
											</div>
										</div>
										<div className="col-sm-4">
											<div class="form-group">
												<Field className="form-control" placeholder="Enter City" name="city" />
												<ErrorMessage name="city" />
											</div>
										</div>
										<div className="col-sm-4">
											<div class="form-group">
												<Field className="form-control" placeholder="Enter State" name="state" />
												<ErrorMessage name="state" />
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<button type="submit">Submit</button>
											<button onClick={() => {
												previous()
												setActiveStep(prevStep => prevStep - 1)
											}}>Previous</button>
										</div>
									</div>
									{/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
								</div>
							</Form>
						</>
					);
				}}
			</Formik>

		</>
	)
}


const WarrantyForm = ({ previous, next }) => {
	return (
		<form className="mb-5">
			<p>WarrantyForm</p>
			<button type="submit">submit</button>
		</form>
	)
}
const SalesForm = ({ previous, next }) => {
	return (
		<form className="mb-5">
			<p>SalesForm</p>
			<button type="submit">submit</button>
		</form>
	)
}