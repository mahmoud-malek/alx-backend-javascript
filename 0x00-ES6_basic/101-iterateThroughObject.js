/* eslint no-restricted-syntax: "off", no-param-reassign: "off" */
export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    result += `${item} | `;
  }
  // Remove the trailing " | "
  if (result.endsWith(' | ')) {
    result = result.slice(0, -3);
  }
  return result;
}
