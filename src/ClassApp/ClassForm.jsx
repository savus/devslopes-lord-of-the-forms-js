import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassTextInput } from "./ClassTextInput";
import {
  isCityValid,
  isEmailValid,
  isNameValid,
  isPhoneValid,
} from "../utils/validations";
import { ClassPhoneInput } from "./ClassPhoneInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component {
  state = {
    firstNameInput: "",
    lastNameInput: "",
    emailInput: "",
    cityInput: "",
    phoneInputState: ["", "", "", ""],
    isSubmitted: false,
  };

  render() {
    const {
      firstNameInput,
      lastNameInput,
      emailInput,
      cityInput,
      phoneInputState,
      isSubmitted,
    } = this.state;

    const { userDataHandler } = this.props;

    const isFirstNameValid = isNameValid(firstNameInput);
    const isLastNameValid = isNameValid(lastNameInput);
    const emailIsValid = isEmailValid(emailInput);
    const cityIsValid = isCityValid(cityInput);
    const phoneIsValid = isPhoneValid(phoneInputState);

    const showFirstNameError = !isFirstNameValid && isSubmitted;
    const showLastNameError = !isLastNameValid && isSubmitted;
    const showEmailError = !emailIsValid && isSubmitted;
    const showCityError = !cityIsValid && isSubmitted;
    const showPhoneError = !phoneIsValid && isSubmitted;

    const doBadInputsExist =
      !isFirstNameValid ||
      !isLastNameValid ||
      !isCityValid ||
      !isEmailValid ||
      !isPhoneValid;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.setState({ isSubmitted: true });
          if (doBadInputsExist) {
            alert("Bad Input Data");
          } else {
            userDataHandler({
              firstName: firstNameInput,
              lastName: lastNameInput,
              email: emailInput,
              city: cityInput,
              phone: phoneInputState,
            });
          }
        }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <ClassTextInput
          inputProps={{
            type: "text",
            placeholder: "Bilbo",
            value: firstNameInput,
            onChange: ({ target: { value } }) =>
              this.setState({ firstNameInput: value }),
          }}
          labelText="First Name"
        />

        <ErrorMessage
          message={firstNameErrorMessage}
          show={showFirstNameError}
        />

        {/* last name input */}
        <ClassTextInput
          inputProps={{
            type: "text",
            placeholder: "Baggins",
            value: lastNameInput,
            onChange: ({ target: { value } }) =>
              this.setState({ lastNameInput: value }),
          }}
          labelText="Last Name"
        />

        <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />

        {/* Email Input */}
        <ClassTextInput
          inputProps={{
            type: "email",
            placeholder: "bilbo-baggins@adventurehobbits.net",
            value: emailInput,
            onChange: ({ target: { value } }) =>
              this.setState({ emailInput: value }),
          }}
          labelText="Email"
        />

        <ErrorMessage message={emailErrorMessage} show={showEmailError} />

        {/* City Input */}
        <ClassTextInput
          inputProps={{
            type: "text",
            placeholder: "Hobbiton",
            value: cityInput,
            onChange: ({ target: { value } }) =>
              this.setState({ cityInput: value }),
          }}
          labelText="City"
        />

        <ErrorMessage message={cityErrorMessage} show={showCityError} />

        <ClassPhoneInput
          phoneInputStateHandler={(phoneInputState) => {
            this.setState({ phoneInputState: phoneInputState });
          }}
        />

        <ErrorMessage message={phoneNumberErrorMessage} show={showPhoneError} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
