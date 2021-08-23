import React, { useState } from 'react';

export const MessageList = () => {
    const [list] = useState([]);

    return (
        <div>
            {list.map((element, index) => {
                return <div key={index}>{element}</div>
            })}
        </div>
    );
};
