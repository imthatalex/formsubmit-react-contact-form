import './App.css';
import {useState} from 'react';

export default function ContactForm () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validForm, setValidForm] = useState(false);

  function renderSubmitButton(){
    if(firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== ''){
      return (
        <button onClick={validateForm} type="submit">Submit</button>
      )
    }
    return null;
  }


  // react is pure, you cannot mutate original data, you must make a copy of original data to mutate
  function validateForm() {
    const emailValidation = email;
    var emailSyntax = /\S+@\S+\.\S+/;
    if(emailSyntax.test(emailValidation)){
      return true;
    }
    return false;
  }



  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="container">
        <div className="row">
          <div className="col">
              <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="First Name"/>
          </div>
          <div className="col">{firstName}</div>
        </div>
        <div className="row">
          <div className="col">
              <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name"/>
          </div>
          <div className="col">{lastName}</div>
        </div>
        <div className="row">
          <div className="col">
              <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="E-Mail"/>
          </div>
          <div className="col">{email}</div>
        </div>
        <div className="row">
          <div className="col">
              <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="text" placeholder="Phone Number"/>
          </div>
          <div className="col">{phoneNumber}</div>
        </div>
        <div className="row">
          <div className="col">
            {renderSubmitButton()}
          </div>
          <div className="col">
            {validateForm() ? 'Thank you' : 'Please Fix Errors'}
          </div>
        </div>
      </div>
    </form>
  );
}


