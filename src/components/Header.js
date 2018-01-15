import { IndexLink } from 'inferno-router'
import Component from 'inferno-component'
// import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <IndexLink className="navbar-item">
            <h1>Compra do mês</h1>
          </IndexLink>
        </div>
      </nav>
    )
  }
}