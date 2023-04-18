import { FETCH_DATA} from "../types";
import axios from 'axios';
import { DB_URL } from "../../url";


export const fetchData = () => async (dispatch) => {
    try {
      const res = await axios.get(`${DB_URL} /remotecafe/`);
  
      dispatch({
        type: FETCH_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };