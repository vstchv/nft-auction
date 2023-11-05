import axios from "axios";

const Axios = axios.create();
Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
Axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, POST, PATCH, PUT, DELETE, OPTIONS";
Axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, Content-Type, X-Auth-Token";

export default Axios;
