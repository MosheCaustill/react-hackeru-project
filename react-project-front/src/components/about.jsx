import PageHeader from "./common/pageHeader";

function About() {
  return (
    <PageHeader
      title={
        <>
          About My <i className="bi bi-globe-europe-africa"></i> World
        </>
      }
      description={`This website helps you create electronic business cards to your business, e-cards helps us save paper shipping of raw materials and manufacturing polluting chemicals used for ink.`}
    ></PageHeader>
  );
}

export default About;
