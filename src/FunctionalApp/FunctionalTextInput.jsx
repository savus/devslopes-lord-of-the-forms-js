export const FunctionalTextInput = ({
  labelText = "",
  inputPrompts,
  isPhoneInput = false,
}) => {
  return (
    <>
      {isPhoneInput ? (
        <input {...inputPrompts} />
      ) : (
        <div className="input-wrap">
          <label htmlFor={labelText.toLowerCase()}>{labelText}:</label>
          <input {...inputPrompts} />
        </div>
      )}
    </>
  );
};
