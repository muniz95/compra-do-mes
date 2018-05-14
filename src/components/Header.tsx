import { Component } from 'inferno'
// import './Header.css'

interface IProps {}
interface IState {}

export default class Header extends Component<IProps, IState> {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <div class="navbar-brand">Compra do mês</div>
          </div>
        </div>
      </nav>
    )
  }
}