import Component from 'inferno-component'
import { Product } from './components'
import './App.css'

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.setState({
      products: [
        { name: 'Arroz', quantity: 2, price: 7.99 },
        { name: 'Feijão', quantity: 2, price: 2.59 },
        { name: 'Carne moída', quantity: 1.580, price: 15.76 },
        { name: 'Batata', quantity: 0.542, price: 1.02 }
      ]
    })
}

  render() {
    return (
      <p className="App-intro">
        <Product />
      </p>
    )
  }
}

export default App
