import axios from "axios";

const url = "https://gentle-bayou-10294.herokuapp.com/api/data/"; //API Backend

class DataService {
  // Get Data
  static getData() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // Add/ Create Data (eig nicht relevant)
  static insertData(text) {
    return axios.post(url, {
      text,
    });
  }

  // Delete Data
  static deleteData(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default DataService;
