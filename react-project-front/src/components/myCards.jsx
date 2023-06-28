import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";

function MyCards() {

  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title={
          <>
            My<i className="bi bi-geo-fill"></i>Wold Cards
          </>
        }
        description={"Your cards are in the list below"}
      ></PageHeader>

      <div className="row">
        <Link to="/create-card">Create a new card</Link>
      </div>

      <div className="row d-flex flex-wrap justify-content-evenly">
        {!cards.length ? (
        <p>no cards...</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card}></Card>)
          )}
          
      </div>
    </>
  );
};

export default MyCards;