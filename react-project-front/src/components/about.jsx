import PageHeader from "./common/pageHeader";

function About() {
  return (
    <PageHeader
      title={
        <>
          About My <i className="bi bi-globe-europe-africa"></i> World
        </>
      }
      description={"something about the app"}
    ></PageHeader>
  );
}

export default About;
