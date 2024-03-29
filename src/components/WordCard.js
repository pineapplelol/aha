// @flow
import React from 'react';
import type { Node } from 'react';
import { Card } from 'antd';

type Props = {
  heading: string,
  identifier?: string,
  description?: string,
};

function WordCard(props: Props): Node {
  const { heading, identifier, description } = props;

  return (
    <Card hoverable style={{ width: '90%', textAlign: 'left' }}>
      <h2>{heading}</h2>
      <p>
        <em>{identifier}</em> {description}
      </p>
    </Card>
  );
}

WordCard.defaultProps = {
  identifier: '',
  description: '',
};

export default WordCard;
