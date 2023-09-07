import { useRef, useState } from "react"
import { FunctionalTextInput } from "./FunctionalTextInput"

export const FunctionalPhoneInput = () => {
  const [phoneInputState, setPhoneInputState] = useState(["","","",""]);
  const maxLengths = [2,2,2,1];
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const createOnChangeHandler = (index) => (e) => {
    const value = e.target.value;
    const currentMaxLength = maxLengths[index];
    const nextRef = refs[(index < refs.length - 1) ? index + 1 : index];
    const prevRef = refs[(index > 0) ? index - 1 : index];
    const shouldGoToNextRef = value.length === currentMaxLength;
    const shouldGoToPrevRef = value.length === 0;

    const newState = phoneInputState.map((phoneInput, phoneIndex) => 
      (index === phoneIndex) ? value : phoneInput);

    if (shouldGoToNextRef) {
      nextRef.current?.focus();
    }

    if (shouldGoToPrevRef) {
      prevRef.current?.focus();
    }
    
    setPhoneInputState(newState);
  } 
  return (
    <div className="input-wrap">
      <label htmlFor="phone">Phone:</label>
      <div id="phone-input-wrap">
        <FunctionalTextInput 
          inputPrompts={{
            type: "text",
            id: "phone-input-1",
            placeholder: "55",
            value: phoneInputState[0],
            onChange: createOnChangeHandler(0),
            ref: refs[0]
          }}
          isPhoneInput={true}
        />
        -
        <FunctionalTextInput 
          inputPrompts={{
            type: "text",
            id: "phone-input-2",
            placeholder: "55",
            value: phoneInputState[1],
            onChange: createOnChangeHandler(1),
            ref: refs[1]
          }}
          isPhoneInput={true}
        />
        -
        <FunctionalTextInput 
          inputPrompts={{
            type: "text",
            id: "phone-input-3",
            placeholder: "55",
            value: phoneInputState[2],
            onChange: createOnChangeHandler(2),
            ref: refs[2]
          }}
          isPhoneInput={true}
        />
        -
        <FunctionalTextInput 
          inputPrompts={{
            type: "text",
            id: "phone-input-4",
            placeholder: "5",
            value: phoneInputState[3],
            onChange: createOnChangeHandler(3),
            ref: refs[3],
            maxLength: maxLengths[maxLengths.length - 1]
          }}
          isPhoneInput={true}
        />
      </div>
    </div>
  )
}