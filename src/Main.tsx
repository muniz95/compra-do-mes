import React from 'react';

interface IProps {
  children: any;
}

const Main = ({ children }: IProps) => (
  <React.Fragment>
    <div className="container">{children}</div>
  </React.Fragment>
);

export default Main;
