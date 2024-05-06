import { Driver } from '@/types/driver';
import React from 'react';

interface DriverProps {
  driver: Driver;
}

const ModalWithDriver: React.FC<DriverProps> = ({ driver }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Driver Details</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <p>
          <strong>ID:</strong> {driver.id}
        </p>
        <p>
          <strong>Name:</strong> {driver.name}
        </p>
        <p>
          <strong>Working Shift:</strong> {driver.working_shift}
        </p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalWithDriver;
