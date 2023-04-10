import { FETCH_DATA} from "../types";
import axios from 'axios';


export const fetchData = () => async (dispatch) => {
    try {
      const res = await axios.get('/remotecafe/');
  
      dispatch({
        type: FETCH_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };