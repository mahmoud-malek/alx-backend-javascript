/* eslint import/no-unresolved: "off", import/extensions: "off" */
import { uploadPhoto, signUpUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await signUpUser();
    const photo = await uploadPhoto();

    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
