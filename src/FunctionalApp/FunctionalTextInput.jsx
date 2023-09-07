
export const FunctionalTextInput = ({ labelText, inputPrompts, isPhoneNumber=false }) => {
  return (
    <div className="input-wrap">
      <label htmlFor={labelText.toLowerCase()}>{labelText}:</label>
      <input {...inputPrompts} />
      {isPhoneNumber && (
        <div id="phone-input-wrap">
          <input type="text" id="phone-input-1" placeholder="55" />
          -
          <input type="text" id="phone-input-2" placeholder="55" />
          -
          <input type="text" id="phone-input-3" placeholder="55" />
          -
          <input type="text" id="phone-input-4" placeholder="5" />
        </div>
      )}
    </div>
  );
};

// <div className="input-wrap">
//   <label htmlFor="phone">Phone:</label>
//   <div id="phone-input-wrap">
//     <input type="text" id="phone-input-1" placeholder="55" />
//     -
//     <input type="text" id="phone-input-2" placeholder="55" />
//     -
//     <input type="text" id="phone-input-3" placeholder="55" />
//     -
//     <input type="text" id="phone-input-4" placeholder="5" />
//   </div>
// </div>;
