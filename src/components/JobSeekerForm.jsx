function JobSeekerForm() {
  return (
    <>
      <div className="w-50 mx-auto mt-5">
        <form className="row g-3">
          <div className="col-12">
            {/* <input type="email" className="htmlForm-control" id="inputEmail4" /> */}
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
            />
          </div>
          <div className="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="col-12 input-group">
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Upload
            </label>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default JobSeekerForm;
