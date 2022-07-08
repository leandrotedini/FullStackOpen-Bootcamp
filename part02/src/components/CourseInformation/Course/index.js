import React from 'react';
import Content from '../Content';
import Header from '../Header';

const Course = ({ name, parts }) => {

  
  return (
    <>
      <Header header={name} />
      <Content parts={parts} />
    </>

  )
}

export default Course