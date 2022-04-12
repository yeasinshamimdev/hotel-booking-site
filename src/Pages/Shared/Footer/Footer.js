import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer style={{ backgroundColor: '#0f172a', color: 'white', padding: '20px', textAlign: 'center' }}>
            <p>copyright © {year} || Yeasin Shamim</p>
        </footer>
    );
};

export default Footer;