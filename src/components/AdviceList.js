import React from "react";
import Card from "react-bootstrap/Card";

function AdviceList({ adviceList }) {
  return (
    <div className="App-advice-list">
      {adviceList.map((advice) => (
        <Card key={advice.id} className="mb-2">
          <Card.Body>
            <Card.Text>{advice.advice}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AdviceList;
