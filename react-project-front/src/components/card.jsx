import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card m-1" style={{ width: "18rem" }}>
      <img src={bizImage} className="card-img-top mt-2" alt={bizName} />
      <div className="card-body">
        <h5 className="card-title text-center">{bizName}</h5>
        <p className="card-text">
          {" "}
          <i className="bi bi-file-earmark-text"></i> {bizDescription}
        </p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-mailbox"> </i>
            {bizAddress}
          </li>

          <li className="list-group-item">
            <i className="bi bi-telephone"> {bizPhone}</i>
          </li>
        </ul>
      </div>

      <div className="links d-flex justify-content-between mb-2">
        <Link to={`/my-cards/edit/${_id}`} className="card-link">
          <span className="btn btn-primary">Edit</span>
        </Link>
        <Link to={`/my-cards/delete/${_id}`} className="card-link">
          <span className="btn btn-danger">Delete</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
