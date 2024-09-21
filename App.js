import React, { useState } from "react";
import ServiceList from "./ServiceList";
import AddService from "./AddService";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setCurrentService(null);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const editService = (service) => {
    setCurrentService(service);
  };

  return (
    <div className="container mt-4">
      <h1>Healthcare Services Management</h1>
      <AddService
        onAdd={addService}
        currentService={currentService}
        onUpdate={updateService}
      />
      <ServiceList
        services={services}
        onDelete={deleteService}
        onEdit={editService}
      />
    </div>
  );
}

export default App;
