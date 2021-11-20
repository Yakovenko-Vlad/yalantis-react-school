import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { getMonthArray } from '../../helpers/month.helper';
import UserBirthdayItem from './../UserBirthdayItem';
import './EmployeesBirthday.css';

const EmployeesBirthday = () => {
    const { users } = useContext(UserContext);

    return (
        <div className="EmployeesBirthday">
            <h2>Employees birthday</h2>
            {users.length === 0 ? (
                <div className="emptyList">Employees List is empty</div>
            ) : (
                <div className="birthdays">
                    <ul>
                        {getMonthArray().map((item, i) => {
                            return (
                                <li key={i} className="usersByMonth">
                                    <div className="monthName">{item}</div>
                                    <div className="birthdayList">
                                        <UserBirthdayItem
                                            users={users}
                                            month={item}
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EmployeesBirthday;
