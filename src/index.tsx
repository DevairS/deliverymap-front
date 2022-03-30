import { StrictMode } from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import App from '~/app';
import { Firebase } from '~/services';
import reportWebVitals from './reportWebVitals';
import store from './stores';

const firebase = new Firebase();
firebase.initializeFirebase();
ReactDOM.render(
  <StrictMode>
    <Provider rootStore={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
