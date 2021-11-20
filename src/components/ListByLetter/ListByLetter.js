import React from 'react';
import UserItem from './../UserItem';
import PropTypes from 'prop-types';
import './ListByLetter.css';

const ListByLetter = ({ users }) => {
    return (
        <div className="listByLetter">
            {users.map(user => {
                return <UserItem user={user} key={user.id} />;
            })}
        </div>
    );
};

ListByLetter.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            dob: PropTypes.string,
        }).isRequired,
    ).isRequired,
};

export default ListByLetter;
