import React from 'react';
import { useSelector } from 'react-redux'
import userDetailsStyles from '../../styles/UserDetails.module.css';

const UserDetails = ({ userId }) => {
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === userId);

  return (
    <div>
      {user && (
        <div>
          <h2>{user.name} - Personal Details</h2>
          <div className={userDetailsStyles['user-card']}>
            <div className={userDetailsStyles['user-info']}>
              <h3>Name: {user.name}</h3>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
            </div>
            {user.address && (
              <div className={userDetailsStyles['address-info']}>
                <h3>Address</h3>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zipcode: {user.address.zipcode}</p>
              </div>
            )}
            {user.company && (
              <div className={userDetailsStyles['company-info']}>
                <h3>Company</h3>
                <p>Name: {user.company.name}</p>
                <p>Catchphrase: {user.company.catchPhrase}</p>
                <p>BS: {user.company.bs}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const userId = parseInt(context.params.id);
  return {
    props: {
      userId,
    },
  };
}

export default UserDetails;
