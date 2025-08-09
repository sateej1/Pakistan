import React from 'react';

const CelebrationBanner = ({ message, backgroundColor }) => {
    const bannerStyle = {
        backgroundColor: backgroundColor || '#28a745',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
        fontSize: '2em',
        borderRadius: '5px',
    };

    return (
        <div style={bannerStyle}>
            {message || "Happy Independence Day, Pakistan!"}
        </div>
    );
};

export default CelebrationBanner;