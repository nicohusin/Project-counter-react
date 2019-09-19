import React from 'react';
import { Formik } from 'formik';


function FormikForm(){
  return(
    <div>
      <h1>Sign Up</h1>
      <Formik 
        initialValues= {{ todo : "" }}
        onSubmit={values => {
            console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit= {handleSubmit}>
            <input
              type= "text"
              name= "todo"
              value= {values.todo}
              onChange= {handleChange}
              placeholder="your schedule"
            />
            <input type = "submit" value="Add"/>
          </form>
        )}  
      </Formik>
    </div>
  )
}




export default FormikForm