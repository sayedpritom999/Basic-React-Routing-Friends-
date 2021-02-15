import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendID} = useParams();

    // const [friends, setFriends] = useState([]);
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${friendID}`)
    //         .then(res => res.json())
    //         .then(data => setFriends(data))
    // }, [])

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])

    return (
        <div>
            <h3>This is friend details component: {friendID}</h3>
            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;