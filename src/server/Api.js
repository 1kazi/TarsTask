import axios from 'axios';

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        // console.log(response.data);
        return response
    } catch (error) {
        console.error(error);
    }
}


export default fetchData;





