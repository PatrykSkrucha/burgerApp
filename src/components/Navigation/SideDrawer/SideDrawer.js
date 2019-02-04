import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClass=[classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClass=[classes.SideDrawer, classes.Open];
    }
    return (
        
            <>
            <Backdrop show={props.open} cancel={props.closed}/>
            <div className={attachedClass.join(' ')}>
                <Logo height="11%"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
        
        
        
    )
}

export default sideDrawer;