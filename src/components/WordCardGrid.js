import React from "react";
import { Col, Row } from "antd";

function WordCardGrid({ cards }) {
  const cardLayout = Array(Math.ceil(cards.length / 3))
    .fill()
    .map((_, i) => {
      const first = cards[i * 3];
      const second = i * 3 + 1 < cards.length ? cards[i * 3 + 1] : null;
      const third = i * 3 + 2 < cards.length ? cards[i * 3 + 2] : null;

      return (
        <Row gutter={[16, 16]}>
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
