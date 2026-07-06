import React, { useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
  ]);

  const [products, setProducts] = useState([
  ]);

  const [empName, setEmpName] = useState("");
  const [empPosition, setEmpPosition] = useState("");

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // Add Employee
  const addEmployee = () => {
    if (empName === "" || empPosition === "") return;

    setEmployees([
      ...employees,
      {
        id: Date.now(),
        name: empName,
        position: empPosition,
      },
    ]);

    setEmpName("");
    setEmpPosition("");
  };

  // Remove Employee
  const removeEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // Add Product
  const addProduct = () => {
    if (productName === "" || productPrice === "") return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        name: productName,
        price: productPrice,
      },
    ]);

    setProductName("");
    setProductPrice("");
  };

  // Remove Product
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container">
      <h1>Employee & Product Management</h1>

      {/* Employee Section */}
      <div className="box">
        <h2>Employees</h2>

        <input
          type="text"
          placeholder="Employee Name"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Position"
          value={empPosition}
          onChange={(e) => setEmpPosition(e.target.value)}
        />

        <button onClick={addEmployee}>Add Employee</button>

        {employees.map((emp) => (
          <div className="card" key={emp.id}>
            <div>
              <h3>{emp.name}</h3>
              <p>Position: {emp.position}</p>
            </div>

            <button onClick={() => removeEmployee(emp.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Product Section */}
      <div className="box">
        <h2>Products</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />

        <button onClick={addProduct}>Add Product</button>

        {products.map((product) => (
          <div className="card" key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
            </div>

            <button onClick={() => removeProduct(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;