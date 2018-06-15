import axios from 'axios';

export default {
  getData: () => {
    return axios.get("/api/transactions/filter")
  }
}