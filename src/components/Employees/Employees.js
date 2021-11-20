import React from 'react';
import ListByLetter from '../ListByLetter';
import { getAlphabetMap, alphabet } from '../../helpers/alphabet.helper';
import PropTypes from 'prop-types';
import './Employees.css';

const Employees = ({ data }) => {
    const users = getAlphabetMap(data);
    return (
        <div className="Employees">
            <h2>Employees</h2>
            <div className="alphabet">
                <ul>
                    {alphabet.map((item, i) => {
                        return (
                            <div key={i}>
                                <li className="alphabetLetter">
                                    <div className="letter">{item}</div>
                                    <div className="usersByLetter">
                                        {users.get(item) ? (
                                            <ListByLetter
                                                users={users.get(item)}
                                            />
                                        ) : (
                                            <div className="noEmployees">
                                                No Employees
                                            </div>
                                        )}
                                    </div>
                                </li>
                                <hr />
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

Employees.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            dob: PropTypes.string,
        }),
    ).isRequired,
};

export default Employees;
