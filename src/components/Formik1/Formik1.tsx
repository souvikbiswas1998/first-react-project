import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './Formik1.scss';

export interface Formik1Props {
  prop?: string;
}

// Render Prop
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useState } from 'react';

export function Formik1() {
  let init = { email: "aaa@com", password: '123456' }
  return (
    <div className="app">
      <Formik
        initialValues={init}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email()
            .required("Required"),
          password: Yup.string().required("Password is Required")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="on"
                onSubmit={handleSubmit}
              >
                <div>
                  <TextField id="email" label="Enter your email" variant="outlined"
                    error={Boolean(errors.email && touched.email)} helperText={errors.email}
                    type="text" name="email" value={values.email} onChange={handleChange}
                    onBlur={handleBlur} required
                  />
                </div>
                <div>
                  <TextField
                    error={Boolean(errors.password && touched.password)}
                    helperText={errors.password}
                    variant="standard"
                    id="password" label="Password"
                    type="password" name="password" value={values.password} onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <Button type="button" variant="outlined" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</Button>
                <Button type="submit" variant="contained" disabled={isSubmitting}>Submit</Button>
              </Box>
            </>
          );
        }}
      </Formik>
    </div>
  )
}
