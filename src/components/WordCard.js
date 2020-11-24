import React from 'react';
import { Card } from 'antd';

function WordCard(props) {
  return (
    <Card hoverable style={{ width: '90%', textAlign: 'left' }}>
      <h2>{props.heading}</h2>
      <p>
        <em>{props.identifier}</em> {props.description}
      </p>
    </Card>
  );
}

export default WordCard;
