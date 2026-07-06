import React, { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((emp) => (
        <div className="card" key={emp.id}>
          <h3>{emp.name}</h3>
          <p>Email: {emp.email}</p>
          <p>City: {emp.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;