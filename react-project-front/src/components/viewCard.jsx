import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useCard } from "../hooks/useCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ViewCard() {
  const { id } = useParams();
  const cardToView = useCard(id);
  useEffect(() => {
    if (!cardToView) return;


  }, [cardToView]);
  console.log(cardToView);

  return (
    <>
      <PageHeader
        title={
          <>
            My<i className="bi bi-geo-fill"></i>World View Card
          </>
        }
        description={null}
      />
      <Card card={cardToView}></Card>
    </>
  );
}

export default ViewCard;
