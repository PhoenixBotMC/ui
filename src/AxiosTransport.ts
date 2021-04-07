import axios from "axios";

const transport = axios.create({
  withCredentials: true,
});

console.log("Transport Created");

export default transport;
