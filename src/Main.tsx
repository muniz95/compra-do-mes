import Header from './components/Header'

const Main = ({ children }) => (
  <div>
    <Header />
    <div className="container">{children}</div>
  </div>
)

export default Main