/* eslint no-restricted-syntax: "off", no-param-reassign: "off" */
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const idx = array.indexOf(value);
    array[idx] = appendString + value;
  }
  return array;
}
