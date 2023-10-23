import axios from "axios";

const urlBase = 'http://localhost:8000/'

const fetchData = async (endPoint) => {
    try {
        const res = await axios.get(urlBase + endPoint);
        return res.data;
    } catch (e) {
        console.log(e);
        throw e; 
    }
};

export default fetchData;