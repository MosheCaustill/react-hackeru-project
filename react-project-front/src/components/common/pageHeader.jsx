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
            <h2>{description}</h2>
          </div>
        ) : null}
      </div>
    </>
  );
}
 export default PageHeader