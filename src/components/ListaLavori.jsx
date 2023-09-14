import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListaLavori = () => {
  const jobs = useSelector((state) => state.addedJobs.content);
  const dispatch = useDispatch();

  return (
    <>
      <h1>LAVORI</h1>
      <Link to="/">
        <button>torna alla home</button>
      </Link>
      {jobs.map((job, i) => {
        return (
          <li key={`job-${i}`}>
            {job.title} | {job.job_type} |<Link to={`/${job.company_name}`}>{job.company_name}</Link>
            <button className="btn btn-danger ms-2 text-light" onClick={() => dispatch({ type: "REMOVE", payload: i })}>
              REMOVE
            </button>
          </li>
        );
      })}
    </>
  );
};

export default ListaLavori;
