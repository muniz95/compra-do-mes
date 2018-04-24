import { Route } from 'inferno-router';
// import Login from './views/Login'
// import NotFound from './views/NotFound'
import App from '../App'
import Main from '../Main'

const routes = (
    <Route component={Main}>
      <Route path="/" component={App}></Route>
      {/*
      <Route path="/login" component={Login}></Route>
      <Route path="*" component={Home}></Route>
      */}
    </Route>
)

export default routes