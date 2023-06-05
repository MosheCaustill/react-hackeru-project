import PageHeader from "./common/pageHeader";

function About() {
  return (
    <PageHeader
      title={
        <>
          About Real<i className="bi bi-geo-fill"></i>App
        </>
      }
      description={"something about the app"}
    ></PageHeader>
  );
}

export default About;
