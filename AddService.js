import React, { useState, useEffect } from "react";

function AddService({ onAdd, currentService, onUpdate }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (currentService) {
      setName(currentService.name);
      setDescription(currentService.description);
      setPrice(currentService.price);
    }
  }, [currentService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) return; // Simple validation

    const serviceData = { name, description, price };
    if (currentService) {
      serviceData.id = currentService.id;
      onUpdate(serviceData);
    } else {
      onAdd(serviceData);
    }

    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">
        {currentService ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
}

export default AddService;
