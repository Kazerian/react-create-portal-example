import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = props => {
  if (props.users.length === 0) {
    return null;
  }
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map(user => (
          <li key={user.id}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
