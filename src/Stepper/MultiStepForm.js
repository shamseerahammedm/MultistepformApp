import React, { useState, useEffect } from "react";
import { useStep } from "react-hooks-helper";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import "./styles.css";



import Categories from "./Categories"; // ---->  Categories
import Forms from "./Forms"; // ---->  Form
import Submit from "./Submit"; // ---->  Thank you






const steps = [
    { id: 1, name: "categories" },
    { id: 2, name: "forms" },
    { id: 3, name: "submit" },
    // { id: 3, name: "submit" }
];


// const renderSections = (name, props) => {
//     switch (name)
//     {
//         case "categories":
//             return  <Categories {...props} /> ;
//         case "forms":
//             return <Forms {...props}/>;
//         case "submit":
//             return <Submit {...props}/>;
//         default:
//             return null;
//     }
// }

function renderSections (name, props) {

    console.log('props',props);

    switch (name)
    {
        case "categories":
            return  <Categories {...props} /> ;
        case "forms":
            return <Forms {...props}/>;
        case "submit":
            return <Submit {...props}/>;
        default:
            return null;
    }
}







const MultiStepForm = () => {
    // const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });

    // var data = useStep({ initialStep: 0, steps });
    // var newstep = data.step;
    // var navigation = data.step;

    console.log('step',step);
    const { name } = step;

    const [activeStep, setActiveStep] = useState(0);



    const [someThing, setSomething] = useState(1);
    




    const timeLineData = steps.map(stepItem => stepItem.name);



    const something = 1;
    const props = { navigation, setActiveStep, something };

   

    return (
        <div className="formWrapper">


        {/* 
            <p onClick={() => {
                setSomething( prevSomething => {
                    console.log('prevSomething',prevSomething);
                    return prevSomething + 1
                }); 

                setSomething( prevSomething => prevSomething + 1);
            }}>
                {someThing}
            </p> 
        */}



            <Stepper activeStep={activeStep} alternativeLabel>
                {
                    timeLineData.map((label) => (
                        <Step key={label}>
                            <StepLabel></StepLabel>
                        </Step>
                    ))
                }
                
            </Stepper>
            {
                renderSections(name, props)
            }
        </div>
    );


};








export default MultiStepForm;



// const newArray = [];
// const someArray = [
//     { name : 'shamseer' , id: 1},
//     { name : 'aneesh', id: 2},
//     { name : 'rashid ', id: 3}
// ];


// someArray.forEach( nameItem  => {
//     newArray.push(nameItem.name)
// })


// console.log('newArray',newArray);


// const dataArray = someArray.map(nameItem => {
//     return nameItem.name
// })

//  console.log('dataArray',dataArray);