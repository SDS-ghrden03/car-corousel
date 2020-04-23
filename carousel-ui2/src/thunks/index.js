import { setLoading, setError, setCars } from '../actions';
import { fetchData } from '../utils/fetchData';
import { combineData } from '../utils/combineData';


export const getAllCars = () => {
  //need to change this to an EC2 url for the redis caching layer VVVV
  // const carsUrl = `http://ec2-18-144-38-11.us-west-1.compute.amazonaws.com/cars/9287654?url=http://ec2-13-52-75-33.us-west-1.compute.amazonaws.com`;
  // //   const carsUrl = `http://${process.env.REDIS_URL}/cars/9987654?url=http://${process.env.SERVER_URL}`;
  const carsUrl = 'http://localhost:3001/cars/1';
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