import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { UserProvider } from './UserContext';
import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Navigate to="/employees" />} />
            <Route
                path="/employees"
                element={
                    <UserProvider>
                        <App />
                    </UserProvider>
                }
            />
            <Route exact path="*" element={<Navigate to="/employees" />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root'),
); 