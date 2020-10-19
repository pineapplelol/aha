import React from "react";
import { Col, Row } from "antd";

function WordCardGrid(props) {
  const { cards } = props;

  const cardLayout = Array(Math.ceil(cards.length / 3))
    .fill()
    .map((_, index) => {
      const first = cards[index * 3];
      const second = index * 3 + 1 < cards.length ? cards[index * 3 + 1] : null;
      const third = index * 3 + 2 < cards.length ? cards[index * 3 + 2] : null;

      return (
        <Row gutter={[16, 16]}>
          <Col span={8} align="middle">
            {first}
          </Col>
          {second && (
            <Col span={8} align="middle">
              {second}
            </Col>
          )}
          {third && (
            <Col span={8} align="middle">
              {third}
            </Col>
          )}
        </Row>
      );
    });

  return <>{cardLayout}</>;
}

export default WordCardGrid;
