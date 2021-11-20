import React, { useEffect, useState } from 'react';
import Employees from './../Employees';
import EmployeesBirthday from './../EmployeesBirthday';
import './App.css';

const App = () => {
    const [usersList, setUsersList] = useState(null);

    useEffect(() => {
        fetch(process.env.REACT_APP_BASE_API_URL)
            .then(res => res.json())
            .then(data => setUsersList(data));
    }, []);

    if (usersList === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <Employees data={usersList} />
            <EmployeesBirthday />
        </div>
    );
};

export default App;
