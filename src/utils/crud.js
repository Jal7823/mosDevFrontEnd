import axios from "axios";

const urlBase = "https://moisesm23.pythonanywhere.com/";
// const urlBase = "http://localhost:8000/";

export const fetchData = async (endPoint) => {
  try {
    const res = await axios.get(urlBase + endPoint);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getOneData = async (endPoint, id) => {
  try {
    const res = await axios.get(urlBase + endPoint + id);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default { fetchData };
