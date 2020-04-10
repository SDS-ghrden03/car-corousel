import { setLoading, setError, setCars } from '../actions';
import { fetchData } from '../utils/fetchData';
import { combineData } from '../utils/combineData';

export const getAllCars = () => {
  const carsUrl = 'http://localhost:2999/cars/9876540';
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