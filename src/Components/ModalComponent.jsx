import "./Modal.css";
export const ModalComponent = ({ closeModal, imageUrl }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <button onClick={() => closeModal(false)} className="close-btn">
          X
        </button>
      </div>
    </div>
  );
};
