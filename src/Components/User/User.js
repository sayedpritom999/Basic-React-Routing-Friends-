import React from 'react';

const User = (props) => {
    const familier = props.familier;
    let greetings;
    // if(familier) {
    //     greetings = <p>Welcome, my friend</p>
    // } else {
    //     greetings = <p>Hi, How can I help you?</p>
    // }

    // familier? greetings = <p>Welcome, my friend</p> : greetings = <p>Hi, How can I help you?</p>;
    greetings = familier ? <p>Welcome, my friend</p> : <p>Hi, How can I help you?</p>;

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
            </div>
            <div>
                <h2>Food</h2>
                {familier
                    ? <p>Let's have some food together</p>
                    : <p>Would you like to have some food?</p>}
            </div>
            <div>
                <h2>Connection</h2>
                {familier && <p>Let's join my facebook</p>}
            </div>
        </div>
    );
};

export default User;