import React from 'react';
import './FooterButton.css'


const FooterButton = ({filter, setFilter, text}) => {
    return (
        <button className={'footer-btn ' + (filter===text && 'active')} onClick={()=>setFilter(text)}>{text}</button>
    );
};

export default FooterButton;