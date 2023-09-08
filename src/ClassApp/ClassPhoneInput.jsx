import { Component, createRef } from "react";
import { ClassTextInput } from "./ClassTextInput";

export class ClassPhoneInput extends Component {
  state = {
    phoneInputState: ["","","",""]
  };

  
  render() {
    const refList = [createRef(), createRef(), createRef(), createRef()];
    const maxLengths = [2,2,2,1];
    const {phoneInputState} = this.state;
    const {phoneInputStateHandler} = this.props;

    const onChangeHandler = (index) => (e) => {
      const value = e.target.value;
      if (isNaN(value)) return;
      const currentMaxLength = maxLengths[index];
      const nextRef = refList[(index < refList.length - 1) ? index + 1 : index];
      const prevRef = refList[(index > 0) ? index - 1 : index];
      const shouldGoToNextRef = value.length === currentMaxLength;
      const shouldGotoPrevRef = value.length === 0;

      const newState = phoneInputState.map((phoneInput, phoneIndex) => 
        (index === phoneIndex) ? value : phoneInput);

      if (shouldGoToNextRef) {
        nextRef?.current.focus();
      }

      if (shouldGotoPrevRef) {
        prevRef?.current.focus();
      }

      this.setState({phoneInputState: newState});
      phoneInputStateHandler(newState);
    }

    return (
      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <ClassTextInput 
            inputProps={{
              type: 'text',
              id: 'phone-input-1',
              placeholder: '55',
              value: phoneInputState[0],
              onChange: onChangeHandler(0),
              ref: refList[0]
            }}
            isPhoneInput={true}
          />
          -
          <ClassTextInput 
            inputProps={{
              type: 'text',
              id: 'phone-input-2',
              placeholder: '55',
              value: phoneInputState[1],
              onChange: onChangeHandler(1),
              ref: refList[1]
            }}
            isPhoneInput={true}
          />
          -
          <ClassTextInput 
            inputProps={{
              type: 'text',
              id: 'phone-input-3',
              placeholder: '55',
              value: phoneInputState[2],
              onChange: onChangeHandler(2),
              ref: refList[2]
            }}
            isPhoneInput={true}
          />
          -
          <ClassTextInput 
            inputProps={{
              type: 'text',
              id: 'phone-input-4',
              placeholder: '55',
              value: phoneInputState[3],
              onChange: onChangeHandler(3),
              ref: refList[3],
              maxLength: maxLengths[maxLengths.length - 1]
            }}
            isPhoneInput={true}
          />
        </div>
      </div>
    )
  }
}