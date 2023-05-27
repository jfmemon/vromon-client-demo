import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import backgroundImage from '../Assets/images/Rectangle 1.png';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;