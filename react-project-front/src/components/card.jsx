import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card m-1" style={{ width: "20rem"}}>
      <img src={bizImage} className="card-img-top mt-2 border" alt={bizName} style={{height:"400px",objectFit:"cover"}} />
      <div className="card-body">
        <h5 className="card-title text-center">{bizName}</h5>
        <p className="card-text text-center">{bizDescription}</p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-mailbox">{" "+bizAddress} </i>
          </li>
          <li className="list-group-item">
            <i className="bi bi-telephone"> {bizPhone}</i>
          </li>
        </ul>
      </div>
      <div id="links" className="links d-flex justify-content-between mb-2">
        <Link to={`/my-cards/edit/${_id}`} className="card-link">
          <span className="btn btn-primary">Edit</span>
        </Link>
        <Link to={`/my-cards/delete/${_id}`} className="card-link">
          <span className="btn btn-danger">Delete</span>
        </Link>
        <Link to={`/my-cards/view/${_id}`} className="card-link">
          <span className="btn btn-primary">View</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
