// import "./HomeView.css";

const HomeViewContainer = () => {
  return (
    <div className="background-image pt-5">
      <h2 className="me-5 ms-5 pt-5">Lorem Ipsum</h2>
      <p className="m-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the
      </p>
      <div className="d-flex flex-column">
        <button type="button" className="btn btn-primary btn-lg ms-5 me-5 mt-5 mb-5">Start Play</button>
        <button type="button" className="btn btn-info btn-lg ms-5 me-5">How To Play</button>
      </div>
    </div>
  );
};

export default HomeViewContainer;
