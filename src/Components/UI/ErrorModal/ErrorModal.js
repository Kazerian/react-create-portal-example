import ReactDOM from "react-dom";

import Button from "../Button/Button";
import Card from "../Card/Card";

import styles from "./ErrorModal.module.css";

const Backdrop = props => (
  <div className={styles.backdrop} onClick={props.onConfirm} />
);

const ModalOverlay = props => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.content}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
);

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          content={props.content}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
