import axios from "axios";
import { USER_LOGIN_API_URL } from "util/BaseUrl";

export const loginPost = async (idToken: any) =>
  await axios.post(USER_LOGIN_API_URL, { idToken: idToken });
