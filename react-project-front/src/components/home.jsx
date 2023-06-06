import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";

function Home() {
  const cards = useMyCards();
  return (
    <>
      <PageHeader
        title={
          <>
            Real<i className="bi bi-geo-fill"></i>App
          </>
        }
        description={"something about me"}
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
