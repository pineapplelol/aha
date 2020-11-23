import React from "react";
import { Col, Row } from "antd";

function WordCardGrid({ cards }) {
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
