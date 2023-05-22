import React, { useState } from "react";

function Task() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isUpdation, setIsUpdation] = useState(false);
  const [updationIndex, setUpdationIndex] = useState(0);

  const handleAddTodoTasks = () => {
    if (!isUpdation) {
      setTasks([...tasks, task]);
      setTask("");
    } else {
      const tempTasks = tasks.map((tk, index) => {
        if (index === updationIndex) {
          return task;
        } else {
          return tk;
        }
      });
      setTasks(tempTasks);
      setIsUpdation(false);
      setTask("");
    }
  };

  const handleDeletionTasks = (delIndex) => {
    const tempTasks = tasks.filter((task, index) => index != delIndex);
    setTasks(tempTasks);
  };

  return (
    <div className="mt-5">
      <h1 className="text-success">Task</h1>
      <div
        className="border bg-dark p-5"
        style={{ width: "30rem", margin: "auto", borderRadius: "20px" }}
      >
        <p className="h2 text-warning">To-do</p>
        <div>
          <div>
            {tasks.map((task, index) => (
              <div
                className="mt-3 border p-2 bg-secondary"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                }}
                key={index}
              >
                <p className="text-white h4"> {task}</p>
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      setIsUpdation(true);
                      setTask(task);
                      setUpdationIndex(index);
                    }}
                  >
                    Updation
                  </button>
                  <button
                    className="btn btn-warning ms-4"
                    onClick={() => handleDeletionTasks(index)}
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
          <input
            className="form-control ms-5 me-5 mt-4 mb-3"
            style={{ width: "20rem" }}
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add Task"
          />
          <button
            className="btn btn-primary pe-5 ps-5"
            onClick={handleAddTodoTasks}
          >
            {isUpdation ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
