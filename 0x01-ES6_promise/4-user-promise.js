export default function signUpUser(firstname, lastname) {
  return Promise.resolve({ firstName: firstname, lastName: lastname });
}
