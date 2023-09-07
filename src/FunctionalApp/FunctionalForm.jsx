import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { isCityValid, isEmailValid, isNameValid } from "../utils/validations";
import { FunctionalTextInput } from "./FunctionalTextInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = () => {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFirstNameValid = isNameValid(firstNameInput);
  const isLastNameValid = isNameValid(lastNameInput);
  const emailIsValid = isEmailValid(emailInput);
  const cityIsValid = isCityValid(cityInput);

  const showFirstNameError = !isFirstNameValid && isSubmitted;
  const showLastNameError = !isLastNameValid && isSubmitted;
  const showEmailError = !emailIsValid && isSubmitted;
  const showCityError = !cityIsValid && isSubmitted;

  const doBadInputsExist = 
    !isFirstNameValid ||
    !isLastNameValid ||
    !emailIsValid ||
    !cityIsValid; 

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSubmitted(true);
      if (doBadInputsExist) {
        alert("Bad Inputs");
      }
    }}>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <FunctionalTextInput 
        labelText={"First Name"}
        inputPrompts={{
          placeholder: "Bilbo", 
          type: "text",
          value: firstNameInput,
          onChange: ({target: {value}}) => setFirstNameInput(value) 
        }}
      />
      <ErrorMessage message={firstNameErrorMessage} show={showFirstNameError} />

      {/* last name input */}
      <FunctionalTextInput 
        labelText={"Last Name"}
        inputPrompts={{
          placeholder: "Baggins", 
          type: "text",
          value: lastNameInput,
          onChange: ({target: {value}}) => setLastNameInput(value) 
        }}
      />
      <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />

      {/* Email Input */}
      <FunctionalTextInput 
        labelText={"Email"}
        inputPrompts={{
          placeholder: "bilbo-baggins@adventurehobbits.net", 
          type: "email",
          value: emailInput,
          onChange: ({target: {value}}) => setEmailInput(value) 
        }}
      />
      <ErrorMessage message={emailErrorMessage} show={showEmailError} />

      {/* City Input */}
      <FunctionalTextInput 
        labelText={"City"}
        inputPrompts={{
          placeholder: "Hobbiton", 
          type: "text",
          value: cityInput,
          onChange: ({target: {value}}) => setCityInput(value) 
        }}
      />
      <ErrorMessage message={cityErrorMessage} show={showCityError} />

      <FunctionalTextInput 
        labelText={"Phone"}
        inputPrompts={{ 
          value: cityInput,
          onChange: ({target: {value}}) => setCityInput(value),
        }}
        isPhoneNumber={true}
      />
      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input type="text" id="phone-input-1" placeholder="55" />
          -
          <input type="text" id="phone-input-2" placeholder="55" />
          -
          <input type="text" id="phone-input-3" placeholder="55" />
          -
          <input type="text" id="phone-input-4" placeholder="5" />
        </div>
      </div>

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
