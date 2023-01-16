import './App.css';
import { useState } from 'react';

function FormButton({ onClick, value, disabled, type }) {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>{value}</button>
  )
}

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [status, setStatus] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberPattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

  function validateForm() {
    if (firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '') {
      if (emailPattern.test(email) && phoneNumberPattern.test(phoneNumber)) {
        setStatus('Thank you');
        setFormSubmitted(true);
        setEmailError(false);
        setPhoneNumberError(false);
      }
      if (!emailPattern.test(email)) {
        setStatus('Please Fix Errors');
        setFormSubmitted(false);
        setEmailError(true);
      }
      if (phoneNumberPattern.test(phoneNumber) === false) {
        setStatus('Please Fix Errors');
        setFormSubmitted(false);
        setPhoneNumberError(true);
      }
    }
    else {
      setStatus('Please Fill Out All Fields ')
    }
  }

  function resetForm() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setStatus('');
    setFormSubmitted(false);
    setEmailError(false);
    setPhoneNumberError(false);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} target="_blank" action="https://formsubmit.co/example@gmail.com" method="POST">
      <div className="container">

        <div className="row">
          <div className="col">
            <input name="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="First Name" />
          </div>
          <div className="col">
            <input name="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input name="E-Mail" style={{ border: emailError ? '1px solid red' : '1px solid black' }} value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="E-Mail" />
          </div>
          <div className="col">
            <input name="Phone Number" style={{ border: phoneNumberError ? '1px solid red' : '1px solid black' }} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="text" placeholder="Phone Number" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <FormButton type="submit" disabled={formSubmitted} onClick={validateForm} value="Submit" />
            <FormButton onClick={resetForm} value="Reset" />
          </div>
          <div style={{ color: formSubmitted ? 'green' : 'red' }} className="col status">
            {status}
          </div>
        </div>

      </div>
    </form>
  );
}


