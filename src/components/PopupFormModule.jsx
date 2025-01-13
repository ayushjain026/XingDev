import React, { useState } from 'react';
import '../sass/PopupFormModal.css';  // Import custom CSS for styling

const PopupFormModal = () => {
  // State for controlling modal visibility and form data
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Toggle modal visibility
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with Name: ${name} and Email: ${email}`);
    setName('');
    setEmail('');
    handleClose();
  };

  return (
    <div>
      {/* Button to trigger modal */}
      <button className="open-modal-btn" onClick={handleShow}>
        Open Form
      </button>

      {/* Modal */}
      {show && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Popup Form</h3>
              <button className="close-btn" onClick={handleClose}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="modal-footer">
                <button className="submit-btn" type="submit">Submit</button>
                <button className="cancel-btn" type="button" onClick={handleClose}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupFormModal;
