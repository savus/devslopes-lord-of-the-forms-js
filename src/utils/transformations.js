export const capitalize = (string) => {
  // todo: build this function
  // `capitalize("jOn")` should output `"Jon"`
  const concatString = string + "";
  const decapitalizedString = concatString.toLowerCase();
  return (
    decapitalizedString.charAt(0).toUpperCase() + decapitalizedString.slice(1)
  );
};

export const formatPhoneNumber = (string) => {
  // todo: build this function
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
  const concatString = string + "";
  return concatString.match(/\d{1,2}/g).join("-");
};
