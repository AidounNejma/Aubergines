import React from 'react';
import AlertTablet from './AlertTablet';
import '../../../styles/components/subcomponents/button-messages.scss';

const ButtonMessages = ({picture, date, number, name, message}) => {
    
    let unseen;
    
    if (number == ""){
        unseen = "";
    }
    else{
        unseen = "unseen-message" ;
    }

    return (
        <button className='container-conversation'>
            <div className='container-img'>
                <img src={picture} alt="" />
            </div>
            <div className='wrapper-name'>
                <h3>{name}</h3>
                <p className={`message ${unseen}`}>{message}</p>
            </div>
            <div className='date-number-wrapper'>
                <p className='date'>{date}</p>
                <AlertTablet number={number}/>
            </div>
        </button>
    );
};

export default ButtonMessages;