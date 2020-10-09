import React from "react";
import { Col, Row } from "antd";
import WordCard from "./WordCard";

function WordCardGrid(props) {
  const { words } = props;

  const cards = Array(Math.ceil(words.length / 3))
    .fill()
    .map((_, index) => {
      const first = words[index * 3];
      const second = index * 3 + 1 < words.length ? words[index * 3 + 1] : null;
      const third = index * 3 + 2 < words.length ? words[index * 3 + 2] : null;

      return (
        <Row gutter={[16, 16]}>
          <Col span={8} align="middle">
            <WordCard word={first} />
          </Col>
          {second && (
            <Col span={8} align="middle">
              <WordCard word={second} />
            </Col>
          )}
          {third && (
            <Col span={8} align="middle">
              <WordCard word={third} />
            </Col>
          )}
        </Row>
      );
    });

  return <>{cards}</>;
}

export default WordCardGrid;
