import Header from './components/Header';

interface IProps {
  children: any;
}

const Main = ({ children }: IProps) => (
  <div>
    <Header />
    <div className="container">{children}</div>
  </div>
);

export default Main;
