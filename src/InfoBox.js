import React from 'react';
import { Card, CardContent, Typography} from '@material-ui/core';
import './InfoBox.css';

//creat Infoboxes above the map
function InfoBox({ title, cases, total, active, isRed, ...props }) {
    return (
        //Create the card and pass props to the card
        //determine which card is red, and if its not red that make it green
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && "infoBox--red"}`}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
                    {cases}
                </h2>
                <Typography className="infoBox__total" color="textSecondary">{total}</Typography>

            </CardContent>
            
        </Card>
    )
}

export default InfoBox;
