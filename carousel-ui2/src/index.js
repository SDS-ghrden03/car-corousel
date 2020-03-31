import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

import './styles/index.scss';
// import './components/App/_app.scss';
// import './components/Carousel/_carousel.scss';
// import './components/ImageSlider/_imageSlider.scss';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('car-carousel'));