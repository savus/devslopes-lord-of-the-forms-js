export const capitalize = (string) => {
  // todo: build this function
  // `capitalize("jOn")` should output `"Jon"`
  const decapitalizedString = string.toLowerCase();
  return (
    decapitalizedString.charAt(0).toUpperCase() + decapitalizedString.slice(1)
  );
};

export const formatPhoneNumber = (string) => {
  // todo: build this function
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
  return string.match(/\d{1,2}/g).join("-");
};
