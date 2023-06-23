import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from '../styles/Login.module.css'; // Import the CSS module

const Login = () => {
  const users = useSelector((state) => state.users);
  console.log("users in login page", users);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Users Details:</h1>
      </div>
      <div className={styles.cardContainer}> 
        {users.map((user, index) => (
          <div className={styles.card} key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
              <Link href={`/user/${user.id}`}>
                <span>View Details</span>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
