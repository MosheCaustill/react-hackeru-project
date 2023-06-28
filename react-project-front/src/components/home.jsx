import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";
import { useAuth } from "../context/auth.context";
import { exampleCards } from "./exampleCards";
import { Link } from "react-router-dom";

function Home() {
  const cards = useMyCards();
  const { user } = useAuth();
  const exCards = exampleCards();

  return (
    <>
      <PageHeader
        title={
          <>
            My <i className="bi bi-globe-europe-africa"></i> World Home Page
          </>
        }
        description={'Welcome to "My World" together we can make a change'}
      ></PageHeader>
      <div className="row d-flex flex-wrap justify-content-evenly">
        {!user || !user?.biz ? (
          "Sign up as business to create your own unique business card here are some Example Cards"
        ) : user?.biz && !cards.length ? (
          <>
            <p className="text-center">
              You are sign as business but no cards to show you can go to{" "}
              <Link to="/my-cards">My Cards</Link> to create your own unique
              card, here are some Example Cards
            </p>
            <div id="exCardsNoBizUser" className="row d-flex flex-wrap justify-content-evenly">
              {exCards.map((card) => {
                return <Card key={card._id} card={card}></Card>;
              })}
            </div>
          </>
        ) : (
          cards.toReversed().map((card, index) => {
            if (index < 3) {
              return <Card key={card._id} card={card}></Card>;
            }
            return null;
          })
        )}
        <div
          id="exCardsNoUser"
          className="row d-flex flex-wrap justify-content-evenly"
        >
          {!user?.biz &&
            exCards.map((card) => {
              return <Card key={card._id} card={card}></Card>;
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
