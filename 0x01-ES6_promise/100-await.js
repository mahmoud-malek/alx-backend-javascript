/* eslint import/no-unresolved: "off", import/extensions: "off" */
import { uploadPhoto, signUpUser } from 'utils.js';

export default async function asyncUploadUser() {
  try {
    const user = await signUpUser();
    const photo = await uploadPhoto();

    return { user, photo };
  } catch (err) {
    return { user: null, photo: null, error: err };
  }
}
