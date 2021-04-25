import styles from "./Card.module.css";

const Card = props => {
  return (
    <div className={`${styles.base} ${props.className && props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
