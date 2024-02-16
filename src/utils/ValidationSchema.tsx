import * as yup from 'yup';

// validation Schema
export const profileValidationSchema = yup.object().shape({
  firstName: yup.string().required('FirstName is Required'),
  lastName: yup.string().required('lastName is Required'),
  email: yup.string().required('Email is Required'),
  address: yup.string().required('address is Required'),
  profession: yup.string().required('profession is Required'),
  phoneNumber: yup.string().required('phoneNumber is Required'),
});
