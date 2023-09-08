import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";

const defaultUser = {
  email: "default@default.com",
  firstName: "Default",
  lastName: "Default",
  phone: "1234567",
  city: "Hobbiton",
};

export class ClassApp extends Component {
  state = {
    userInformation: null
  }
  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation
          userData={
            // toggle the following lines to change
            // null
            this.state.userInformation
          }
        />
        <ClassForm 
          userDataHandler={(userInformation) => {
            this.setState({userInformation: userInformation});
          }}
        />
      </>
    );
  }
}
