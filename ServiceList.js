import React from "react";

function ServiceList({ services, onDelete, onEdit }) {
  return (
    <ul className="list-group mt-4">
      {services.map((service) => (
        <li
          key={service.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>{service.name}</strong>: {service.description} - $
            {service.price}
          </div>
          <div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => onEdit(service)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm ml-2"
              onClick={() => onDelete(service.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
