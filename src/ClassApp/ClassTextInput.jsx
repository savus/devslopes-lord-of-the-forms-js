import { Component } from "react";

export class ClassTextInput extends Component {
  render() {
    const { isPhoneInput = false, inputProps, labelText = "" } = this.props;
    return (
      <>
        {isPhoneInput ? (
          <input {...inputProps} />
        ) : (
          <div className="input-wrap">
            <label>{labelText}:</label>
            <input {...inputProps} />
          </div>
        )}
      </>
    );
  }
}
