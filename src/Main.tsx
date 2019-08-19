import React from 'react';
import Header from './components/Header';

interface IProps {
  children: any;
}

const Main = ({ children }: IProps) => (
  <React.Fragment>
    <Header />
    <div className="container">{children}</div>
  </React.Fragment>
);

export default Main;
