import { Route, IndexRoute } from 'inferno-router';
// import Login from './views/Login'
// import NotFound from './views/NotFound'
import App from '../App'
import Main from '../Main'

const routes = (
    <Route component={Main}>
      <IndexRoute component={App}></IndexRoute>
      {/*
      <Route path="/login" component={Login}></Route>
      <Route path="*" component={Home}></Route>
      */}
    </Route>
)

export default routes