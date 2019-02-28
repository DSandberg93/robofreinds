import React from 'react';

const Scroll = (props) => {

    const styles = { 
        overflowY: 'scroll', 
        borderTop: '3px solid black', 
        height: 736
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    );
};

// 

export default Scroll;