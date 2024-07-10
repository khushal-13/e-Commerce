import axios from "axios";

const API = axios.create({
  baseURL: "http://e-commerce-env.eba-3fqbn8ha.eu-north-1.elasticbeanstalk.com/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
