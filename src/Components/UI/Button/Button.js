import styles from "./Button.module.css";

const Button = props => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
      {...props.rest}
    >
      {props.children}
    </button>
  );
};

export default Button;
