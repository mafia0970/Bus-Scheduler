function MainContent() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5" id="Home">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="../../public/images.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Welcome to Bus-Scheduler
            </h1>
            <p className="lead">
              Efficient Bus Scheduling and Route Management
            </p>
            <div className="d-grid gap-2 d-md-flex classNameName-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-5 my-5 text-center" id="Check_Duties">
        <img
          class="d-block mx-auto mb-4"
          src="../../public/images.jpg"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="display-5 fw-bold">Check Your Duties</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Stay Updated with Your Latest Assignments</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>

      <div
        class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
        id="About"
      >
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 font-weight-normal">About Us</h1>
          <p class="lead font-weight-normal">Who We Are and What We Do</p>
          <a class="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
    </>
  );
}

export default MainContent;
