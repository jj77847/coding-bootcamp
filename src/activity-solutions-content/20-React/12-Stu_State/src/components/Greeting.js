import { useState } from "react";

export const Greeting = ({ message, students }) => {
  const [showGreeting, setShowGreeting] = useState(false);

  const toggleGreeting = () => {
    setShowGreeting(!showGreeting);
  };

  return (
    <div className="card text-center">
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={toggleGreeting}
        >
          {showGreeting ? "Hide" : "Show"}
        </button>
      </div>
      {showGreeting && (
        <div className="card-body">
          <h2 className="card-text">{message}</h2>
          <ul className="list-group my-3">
            {students.map((student, index) => (
              <li className="list-group-item" key={index}>
                {student}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
