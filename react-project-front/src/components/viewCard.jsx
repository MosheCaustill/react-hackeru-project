import PageHeader from "./common/pageHeader";
import { Link, useParams } from "react-router-dom";
import { useCard } from "../hooks/useCard";
import Card from "./card";

function ViewCard() {
  const { id } = useParams();
  const card = useCard(id);

  return (
    <>
      <PageHeader
        title={
          <>
            My<i className="bi bi-geo-fill"></i>World Business Card View
          </>
        }
        description={"Business Card View"}
      ></PageHeader>
      <div className="d-flex justify-content-center">
        {card && (
          <div className="card m-1" style={{ width: "30rem" }}>
            <img
              src={card.bizImage}
              className="card-img-top p-2 border"
              alt={card.bizName}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{card.bizName}</h5>
              <p className="card-text text-center">{card.bizDescription}</p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-mailbox">{" " + card.bizAddress} </i>
                </li>
                <li className="list-group-item">
                  <i className="bi bi-telephone"> {card.bizPhone}</i>
                </li>
              </ul>
            </div>
            <div
              id="links"
              className="links d-flex justify-content-center mb-2"
            >
              <Link to={`/my-cards`} className="card-link">
                <span className="btn btn-primary">back to My Cards</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ViewCard;
