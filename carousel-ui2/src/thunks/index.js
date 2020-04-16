import { setLoading, setError, setCars } from '../actions';
import { fetchData } from '../utils/fetchData';
import { combineData } from '../utils/combineData';


export const getAllCars = () => {
  //need to change this to an EC2 url for the redis caching layer VVVV
  console.log('REDIS_URL: ', process.env.REDIS_URL)
  console.log('SERVER_URL: ', process.env.SERVER_URL)
  console.log('DB: ', process.env.DB_DB)
  const carsUrl = `http://${process.env.REDIS_URL}/cars/9987654?url=http://${process.env.SERVER_URL}`;
  // const imagesUrl = 'http://localhost:3001/images/';
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const allCars = await fetchData(carsUrl);
      // const allImages = await fetchData(imagesUrl);
      dispatch(setLoading(false));
      // const combinedData = combineData(allCars, allImages);
      const combinedData = allCars;
      dispatch(setCars(combinedData));
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}