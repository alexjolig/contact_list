import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeCardStatus} from '../redux/actions';

function Card() {

  const props = useSelector(state=>({
    openCard: state.openCard,
    currentContact: state.currentContact
  }));
  const [openCard, setOpenCard] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=> {
    setOpenCard(props.openCard);
  },[props.openCard]);

  const closeCard = () => {
    dispatch(changeCardStatus(false));
  }

  if(props.currentContact)
    return (
      <div className={"card" + (openCard ? " active" : "")}>
        <div className="image-holder">
          <img src={props.currentContact.picture.medium} alt={props.currentContact.name.last} />
        </div>
        <div className="contact-info">
          <h2>{props.currentContact.name.last}, {props.currentContact.name.first}</h2>
          <div><strong>e-mail</strong>{props.currentContact.email}</div>
          <div><strong>phone</strong>{props.currentContact.phone}</div>
          <div><strong>street</strong>{props.currentContact.location.street.number} {props.currentContact.location.street.name}</div>
          <div><strong>city</strong>{props.currentContact.location.city}</div>
          <div><strong>state</strong>{props.currentContact.location.state}</div>
          <div><strong>postcode</strong>{props.currentContact.location.postcode}</div>
        </div>
        <div className="username">USERNAME {props.currentContact.login.username}</div>
        <div className="close" onClick={closeCard}></div>
      </div>
    );
  else
    return null;
}

export default Card;
