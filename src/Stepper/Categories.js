import React, { Fragment } from "react";
import { useDispatch } from 'react-redux';
import './Categories.scss';
// { type : 'typesomehting', payload : daatToSetInReducer }


const categoriesData = [
    { id: 1, categoryName: 'Sales' },
    { id: 2, categoryName: 'Safety' },
    { id: 3, categoryName: 'Warranty' },
    { id: 4, categoryName: 'Career' },
    { id: 5, categoryName: 'Something' }
]


const Categories = ({ navigation, setActiveStep}) => {

    // const { navigation, setActiveStep } = props;

   

    const { next } = navigation;
    const dispatch = useDispatch();

    return (
        <div className="form">

                <div className="container">
                    <div className="row">
                        {
                            categoriesData.map(catItem => {
                                // console.log('catItem',catItem);
                                return (
                                    <Fragment key={catItem.id}>
                                        <div key={catItem.id} className="col-sm-3" onClick={() => {
                                            next()
                                            dispatch({ type: 'SET_FORM_CATEGORY', payload: catItem })
                                            setActiveStep(prevState => prevState + 1)
                                        }}>
                                            <div className="categoryItem">
                                                {/* icon */}
                                                {catItem.categoryName}
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            

        </div>
    );
};

export default Categories;
