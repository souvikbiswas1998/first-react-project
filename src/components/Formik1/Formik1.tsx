import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './Formik1.scss';

export interface Formik1Props {
  prop?: string;
}

// Render Prop
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useState } from 'react';

export function Formik1() {
  let init = { email: "", password: '' }
  const formik = useFormik({
    initialValues: { ...init },
    onSubmit: async values => {
      await new Promise(resolve => setTimeout(resolve, 500));
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email()
        .required("Required"),
      password: Yup.string().required("Password is Required")
    })
  });
  function reset() {
    console.log(formik.isValid, formik.values);
    // formik.resetForm({ values: { password: '1234', email: '' }, });
    formik.resetForm();
  }
  return (
    <Box className='box'
      component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate autoComplete="on" onSubmit={formik.handleSubmit}
    >
      <TextField id="email" label="Enter your email" variant="outlined"
        error={Boolean(formik.errors.email && formik.touched.email)} type="text"
        name="email" value={formik.values.email} onChange={formik.handleChange}
        onBlur={formik.handleBlur} helperText={formik.errors.email} required
      />
      <TextField id="password" label="Password" variant="standard" type="password"
        error={Boolean(formik.errors.password && formik.touched.password)}
        helperText={formik.errors.password} name="password" onBlur={formik.handleBlur}
        value={formik.values.password} onChange={formik.handleChange}
      />
      <div className='btn-div'>
        <Button type="button" variant="outlined" onClick={reset} disabled={!formik.dirty || formik.isSubmitting}>Reset</Button>
        <Button type="submit" variant="contained" disabled={formik.isSubmitting}>Submit</Button>
      </div>
    </Box>
  )
}
