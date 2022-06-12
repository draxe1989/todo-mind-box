import React from 'react';
import './Footer.css'
import FooterButton from "../../UI/FooterButton/FooterButton";

const Footer = ({todos, filter, setFilter, deleteAllCompleted}) => {
    return (
        <div className={'footer'}>
            <div className={'state-string'}>{`${todos.filter(item=>item.isCompleted).length} items left`}</div>
            <div className={'footer-filters'}>
                <FooterButton filter={filter} setFilter={setFilter} text={'All'}/>
                <FooterButton filter={filter} setFilter={setFilter} text={'Active'}/>
                <FooterButton filter={filter} setFilter={setFilter} text={'Completed'}/>
            </div>
            <button className={'clear-button'} onClick={deleteAllCompleted}>Clear completed</button>
        </div>
    );
};

export default Footer;