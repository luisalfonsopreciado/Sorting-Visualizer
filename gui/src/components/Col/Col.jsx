import React from 'react'
import classes from "./Col.module.css"
const Col = ({height }) => {
    return (
        <div className={classes.Col} style={{height}}>
        </div>
    )
}
export default Col