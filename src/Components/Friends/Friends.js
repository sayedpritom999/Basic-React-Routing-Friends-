import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    
    const history = useHistory();
    const handleClick = (friendID) => {
        const url = `/friend/${friendID}`;
        history.push(url)
    }
    const friendStyle = {
        border: '1px solid purple',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'
    }


    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>ID: {id}  <Link to={`/friend/${id}`}>Show Detail of {id}</Link></p>
            <button onClick={() => handleClick(id)}>Show Detail</button>
        </div>
    );
};

export default Friends;