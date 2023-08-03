import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Access = (props) => {

    const nav = useNavigate();
    const { Component } = props;
    useEffect(() => {
        let userID = window.localStorage.getItem("UserId");
        if (!userID) {
            nav('/login');
        }

        console.log("Component:", Component); // Debugging
    }, [])


    return (
        <Component />
    );
}

export default Access;
