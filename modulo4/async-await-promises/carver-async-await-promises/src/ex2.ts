import axios from "axios"
import { baseURL } from "./baseURL"

axios
  .get(`${baseURL}/subscribers/1/notifications`)
  .then(res => res.data)
  .then(console.log)
  .catch(err => err.response?.data || err.message)
  // interrogação na linha acima evita o "cannot read property id of undefined"
  .then(console.log)
