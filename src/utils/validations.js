import { allCities } from "./all-cities";

export function isEmailValid(emailAddress) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export function isNameValid(string) {
  return string 
    .split('')
    .every((char) => char.toUpperCase() !== char.toLowerCase()) && string.length > 2;
}

export function isCityValid(string) {
  const decapitalizedCities = allCities
    .map((city) => city.toLowerCase());

    return decapitalizedCities.includes(string.toLowerCase());
}

export function isPhoneValid(array) {
  const concatArray = array.join('');
  const lengthIsSeven = concatArray.length === 7;
  const isOnlyNumbers = /\d+$/.test(concatArray);
  return lengthIsSeven && isOnlyNumbers;
}