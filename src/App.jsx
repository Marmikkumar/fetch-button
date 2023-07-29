import React, { useState, useEffect } from "react";
import "./styles.css";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [Loading, setLoading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [value, setvalue] = useState(0);

  const fetchitem = async () => {
    try {
      const response = await fetch(url);
      const newjob = await response.json();
      setjobs(newjob);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchitem();
  }, []);

  if (Loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const { title, company, dates, duties } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.id}
              onClick={() => setvalue(index)}
              type="submit"
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {job.company}
            </button>
          ))}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <i className="fa-solid fa-angles-right"></i>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
