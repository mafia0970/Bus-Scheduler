import MapWithRoute from "./MapWithRoute";
function Section() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">options here</div>
          <div className="col-8">
            <MapWithRoute />
          </div>
          <div className="col-2">legend here</div>
        </div>
      </div>
    </>
  );
}

export default Section;
