import React from "react";
import {
  ErrorMessage,
  Formik,
  Field,
} from "formik";
import * as yup from "yup";
const signUpValidation = yup
  .object()
  .shape({
    name: yup
      .string()
      .required(
        "please enter your name"
      ),
    password: yup
      .string()
      .required(
        "please enter password"
      ),
    description: yup
      .string()
      .required(
        "please describe yourself in not more than 50 words"
      )
      .max(
        50,
        "please describe yourself in not more than 50 words"
      ),
    email: yup
      .string()
      .email()
      .required(
        "please enter your email address"
      ),
    title: yup
      .string()
      .required(
        "please select something"
      ),
    gender: yup
      .string()
      .required(
        "please select one"
      ),
    hobbies: yup
      .array()
      .min(
        1,
        "please select at least 1"
      )
      .required(
        "please select at least 1"
      ),

    policy: yup
      .boolean()
      .required(
        "please accept term and condition"
      )
      .oneOf(
        [true],
        "please accept term and condition"
      ),
  });

const SignUpForm = () => (
  <Formik
    initialValues={{
      name: "",
      password: "",
      description: "",
      email: "",
      title: "",
      gender: "",
      hobbies: "",
      policy: "",
    }}
    validationSchema={
      signUpValidation
    }
    onSubmit={(
      values,
      { setSubmitting }
    ) => {
      alert(
        JSON.stringify(values)
      );
      setSubmitting(false);
    }}
  >
    {({
      handleSubmit,
      isSubmitting,
    }) => (
      <form
        onSubmit={
          handleSubmit
        }
        className='container mx-6 px-6'
      >
        <div className='mb-3 row'>
          <label
            htmlFor='name'
            className='col-sm-2 col-form-label'
          >
            NAME
          </label>
          <div className='col-sm-10'>
            <Field
              type='text'
              className='form-control'
              name='name'
            />

            <ErrorMessage
              name='name'
              component='div'
              className='text-danger'
            />
          </div>
        </div>

        <div className='mb-3 row'>
          <label
            htmlFor='password'
            className='col-sm-2 col-form-label'
          >
            PASSWORD
          </label>
          <div className='col-sm-10'>
            <Field
              type='password'
              className='form-control'
              name='password'
              autoComplete='off'
            />

            <ErrorMessage
              name='password'
              component='div'
              className='text-danger'
            />
          </div>
        </div>

        <div className='mb-3 row'>
          <label
            htmlFor='description'
            className='col-sm-2 col-form-label'
          >
            DESCRIPTION
          </label>
          <div className='col-sm-10'>
            <Field
              type='description'
              className='form-control'
              name='description'
            />
            <ErrorMessage
              name='description'
              component='div'
              className='text-danger'
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label
            htmlFor='email'
            className='col-sm-2 col-form-label'
          >
            EMAIL
          </label>
          <div className='col-sm-10'>
            <Field
              type='email'
              className='form-control'
              name='email'
            />
            <ErrorMessage
              name='email'
              component='div'
              className='text-danger'
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label
            htmlFor='title'
            className='col-sm-2 col-form-label'
          >
            TITLE
          </label>
          <div className='col-sm-10'>
            <Field
              name='title'
              className='form-select'
              as='select'
            >
              <option value='red'>
                Red
              </option>
              <option value='green'>
                Green
              </option>
              <option value='blue'>
                Blue
              </option>
            </Field>

            <ErrorMessage
              name='title'
              component='div'
              className='text-danger'
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label
            htmlFor='gender'
            className='col-sm-2 col-form-label'
          >
            GENDER
          </label>
          <div className='col-sm-10 row'>
            <div className='form-check mr-3'>
              <Field
                type='radio'
                name='gender'
                value='male'
                className='form-check-input'
              />

              <label
                className='form-check-label'
                htmlFor='gender'
              >
                male
              </label>
            </div>
            <div className='form-check'>
              <Field
                type='radio'
                name='gender'
                value='female'
                className='form-check-input'
              />
              <label
                className='form-check-label'
                htmlFor='gender'
              >
                female
              </label>
            </div>

            <ErrorMessage
              name='gender'
              component='div'
              className='text-danger'
            />
          </div>
        </div>
        <div className='mb-1 row'>
          <label
            htmlFor='hobbies'
            className='col-sm-2 col-form-label'
          >
            HOBBIES
          </label>
          <div className='col-sm-10 row'>
            <div className='form-check'>
              <Field
                type='checkbox'
                className='form-check-input'
                name='hobbies'
                value='Cycling'
              />
              <label
                className='form-check-label'
                htmlFor='hobbies'
              >
                Cycling
              </label>
            </div>
            <div className='form-check'>
              <Field
                type='checkbox'
                className='form-check-input'
                name='hobbies'
                value='Reading'
              />
              <label
                className='form-check-label'
                htmlFor='hobbies'
              >
                Reading
              </label>
            </div>
            <div className='form-check'>
              <Field
                type='checkbox'
                className='form-check-input'
                name='hobbies'
                value='Dancing'
              />
              <label
                className='form-check-label'
                htmlFor='hobbies'
              >
                Dancing
              </label>
            </div>
            <div className='form-check'>
              <Field
                type='checkbox'
                className='form-check-input'
                name='hobbies'
                value='Traveling'
              />
              <label
                className='form-check-label'
                htmlFor='hobbies'
              >
                Traveling
              </label>
            </div>
            <ErrorMessage
              name='hobbies'
              component='div'
              className='text-danger'
            />
          </div>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center'>
          <div className='form-check mb-3'>
            <Field
              type='checkbox'
              className='form-check-input'
              name='policy'
            />
            <label>
              I ACCEPT TERMS
              AND CONDITIONS
            </label>
            <ErrorMessage
              name='policy'
              component='div'
              className='text-danger'
            />
          </div>
          <button
            type='submit'
            disabled={
              isSubmitting
            }
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    )}
  </Formik>
);

export default SignUpForm;
