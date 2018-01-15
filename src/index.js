import { render } from 'inferno'
import { Provider } from 'inferno-redux'
import { Router } from 'inferno-router'
import routes from './routes'
import { store } from './store'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import createBrowserHistory from 'history/createBrowserHistory'
const page = <Router history={createBrowserHistory()}>{routes}</Router>

render(
	<Provider store={store}>
		{page}
	</Provider>
	, document.getElementById('app')
)
registerServiceWorker()
