import React from "react";
import { Card } from "antd";

function WordCard(props) {
  return (
    <Card style={{ width: "90%", textAlign: "left" }}>
      <h2>{props.word}</h2>
      <p>
        <em>{props.identifier}</em> {props.description}
      </p>
    </Card>
  );
}

export default WordCard;
