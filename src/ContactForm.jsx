/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* eslint-disable-next-line */}
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" component="input" type="text" />
      </div>
      <div>
        {/* eslint-disable-next-line */}
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" component="input" type="text" />
      </div>
      <div>
        {/* eslint-disable-next-line */}
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const Contact = reduxForm({ form: 'contact' })(ContactForm);

export default Contact;
