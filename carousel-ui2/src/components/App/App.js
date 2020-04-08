import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getAllCars } from '../../thunks';
import { Carousel } from '../Carousel';
import { PageNotFound } from '../PageNotFound';
// import './_app.scss';

const App = () => {
  const { cars, loading } = useSelector(state => ({
    cars: state.cars,
    loading: state.loading
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <div className='app-container'>
      {/* <Route exact path='/' component={PageNotFound}/> */}
      {!loading ?
      <Switch>
        <Route exact path='/' render={({ match }) => {
          const { id } = match.params;
          // const car = findCar(parseInt(9876543));
          if (cars.length > 0) {
            var car = cars[0]
          }
          return car ? <Carousel {...car} /> : <PageNotFound />;
        }} />
      </Switch> :
      <h1>Loading...</h1>
    }
    </div>
  );
}

export default App;
