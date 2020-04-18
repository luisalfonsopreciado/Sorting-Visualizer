import React from 'react'
import classes from './NavigationItem.module.css'

const NavigationItem = ({children, clicked}) => (
   <li className={classes.NavigationItem}>
       <p onClick={() => clicked()}
            activeClassName={classes.active} >
            {children}
        </p>
    </li>
)
export default NavigationItem