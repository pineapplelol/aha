// @flow
import React from 'react';
import type { Node } from 'react';
import { Col, Row } from 'antd';

type Props = {
  cards: Array<Node>,
};

function WordCardGrid(props: Props): Node {
  const { cards } = props;

  const cardLayout = Array(Math.ceil(cards.length / 3))
    .fill()
    .map((_, i) => {
      return (
        <Row gutter={[16, 16]}>
          <Col xs={24} xl={8}>
            {cards[i * 3]}
          </Col>
          {i * 3 + 1 < cards.length && (
            <Col xs={24} xl={8}>
              {cards[i * 3 + 1]}
            </Col>
          )}
          {i * 3 + 2 < cards.length && (
            <Col xs={24} xl={8}>
              {cards[i * 3 + 2]}
            </Col>
          )}
        </Row>
      );
    });

  return <>{cardLayout}</>;
}

export default WordCardGrid;
