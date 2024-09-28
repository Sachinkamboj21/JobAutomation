import "./App.css";
import JobSeekerForm from "./components/JobSeekerForm";
import SIdebar from "./components/SIdebar";

function App() {
  return (
    <>
      <div className="d-flex">
        <SIdebar className="" />
        <JobSeekerForm />
      </div>
    </>
  );
}

export default App;
