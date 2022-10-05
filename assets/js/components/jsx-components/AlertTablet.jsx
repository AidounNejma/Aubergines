import React from 'react';
import '../../../styles/components/subcomponents/alert-tablet.scss';

const AlertTablet = ({number}) => {
    
    let alert;
    
    if (number == ""){
        alert="";
    }
    else{
        alert = <p className='alert-tablet'>{number}</p> ;
    }

    return (
        alert
    );
};

export default AlertTablet;