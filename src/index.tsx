import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import App from './App';
import './index.css';
import Main from './Main';
import { store } from './redux/store';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <Main>
      <App />
    </Main>
  </Provider>
  , document.getElementById('app')
);
registerServiceWorker();
