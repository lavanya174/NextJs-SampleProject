import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { login, logout, setUsers, addUser } from '../src/actions/authActions';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log("fetchUsers is calling");
  console.log("fetched users", users);
  return users;
};

const Home = ({ initialUsers }) => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    // Fetch user details and dispatch the setUsers action to update the Redux store
    fetchUsers().then((users) => {
      dispatch(setUsers(users));
    });
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
      };
      dispatch(addUser(newUser));
      setName('');
      setEmail('');
      setSuccessMsg('User added successfully');
      setErrorMsg('');
    } else {
      setErrorMsg('Please enter name and email');
      setSuccessMsg('');
    }
  };

  return (
    <div>
      <Head>
        <title>User Profiles</title>
        <meta name='keywords' content='list of user details with personal info is available on this page' />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          {loggedIn ? <p>Welcome! You are logged in.</p> : <p>Please log in.</p>}
          <nav>
            {loggedIn ? (
              <div>
                <p onClick={handleLogout}>
                  <Link href="/logout">Logout</Link>
                </p>
              </div>
            ) : (
              <div>
                <p onClick={handleLogin}>
                  <Link href="/login">Login</Link>
                </p>
              </div>
            )}
          </nav>
          {!loggedIn && (
            <div className={styles.formContainer}>
              <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Add User</button>
              </form>
              {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
              {successMsg && <p className={styles.successMsg}>{successMsg}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const initialUsers = await fetchUsers();
  console.log("serverSideFunction", initialUsers);
  return {
    props: {
      initialUsers,
    },
  };
}

export default Home;
