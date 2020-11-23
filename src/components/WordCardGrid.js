import React from "react";
import { Col, Row } from "antd";

function WordCardGrid({ cards }) {
  const cardLayout = Array(Math.ceil(cards.length / 3))
    .fill()
    .map((_, index) => {
      const first = cards[index * 3];
      const second = index * 3 + 1 < cards.length ? cards[index * 3 + 1] : null;
      const third = index * 3 + 2 < cards.length ? cards[index * 3 + 2] : null;

      return (
        <Row>
          <Col xs={24} xl={8}>
            {first}
          </Col>
          {second && (
            <Col xs={24} xl={8}>
              {second}
            </Col>
          )}
          {third && (
            <Col xs={24} xl={8}>
              {third}
            </Col>
          )}
        </Row>
      );
    });

  return <>{cardLayout}</>;
}

export default WordCardGrid;
