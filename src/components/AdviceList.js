import React from "react";
import Card from "react-bootstrap/Card";

function AdviceList({ adviceList, currentPage, itemsPerPage }) {
  // Calcular o índice do primeiro item na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Filtrar a lista de conselhos para exibir apenas os itens da página atual
  const adviceListToDisplay = adviceList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      {adviceListToDisplay.map((advice, index) => (
        <Card key={advice.id} className="mb-3">
          <Card.Body>
            <Card.Text>
              <strong>{startIndex + index + 1}. </strong>
              {advice.advice}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AdviceList;
