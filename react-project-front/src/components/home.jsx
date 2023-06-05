import PageHeader from "./common/pageHeader";
function Home() {
  return (
    <PageHeader
      title={
        <>
          Real<i className="bi bi-geo-fill"></i>App
        </>
      }
      description={"something about me"}
    ></PageHeader>
  );
}

export default Home;
