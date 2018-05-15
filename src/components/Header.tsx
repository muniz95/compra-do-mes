import { Component } from 'inferno';
// import './Header.css'

export default class Header extends Component<{}, {}> {
  public render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <div class="navbar-brand">Compra do mês</div>
          </div>
        </div>
      </nav>
    );
  }
}
