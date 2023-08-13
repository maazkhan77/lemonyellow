import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function CustomToast({ show, message, onClose, variant }) {
  return (
    <ToastContainer
      position={"top-center"}
      style={{ zIndex: 1, marginTop: "70px", color: "white" }}
    >
      <Toast show={show} onClose={onClose} bg={variant}>
        <Toast.Header>
          <img
            src="/llplogo.svg"
            className="rounded me-2"
            alt="logo"
            height={30}
          />
          <strong className="me-auto">{message.title}</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body className={"text-white"}>{message.body}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CustomToast;
