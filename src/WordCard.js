import React from "react";
import { Card } from "antd";

function WordCard(props) {
  return (
    <Card style={{ width: 300 }}>
      <p>{props.word}</p>
    </Card>
  );
}

export default WordCard;
