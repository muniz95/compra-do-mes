import { render } from 'inferno'
import { Provider } from 'inferno-redux'
import { store } from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import App from './App';
import Main from './Main';

render(
	<Provider store={store}>
		<Main><App/></Main>
	</Provider>
	, document.getElementById('app')
)
registerServiceWorker()
