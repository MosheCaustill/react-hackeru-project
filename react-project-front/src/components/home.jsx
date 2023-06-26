import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";

function Home() {
  
  const cards = useMyCards();
  console.log(cards);
  
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
      <div className="row">
        {!cards.length ? (
          <p>no cards...</p>
        ) : (
          cards.toReversed().map((card, index) => {
            if (index < 3) {
              return <Card key={card._id} card={card}></Card>;
            }
            return null
          })
        )}
      </div>
    </>
  );
}

export default Home;
