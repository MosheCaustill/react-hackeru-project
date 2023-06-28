function PageHeader({ title, description }) {
  return (
    <>
      <div className="row mt-4">
        <div className="col-12 ">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row mt-2 fw-bold fst-italic">
        {description ? (
          <div className="col-12">
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}
 export default PageHeader