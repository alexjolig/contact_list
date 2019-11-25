import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CONFIG_JSON} from  '../config';
import {changeLetter} from '../redux/actions';

function Tabs() {

  const props = useSelector(state=>({
    currentLetter: state.currentLetter,
    allContacts: state.allContacts
  }))
  const dispatch = useDispatch();

  const changeHandler = event => {
    dispatch(changeLetter(event.currentTarget.id, props.allContacts));
  }

  const counter = letter => props.allContacts.filter(item=>
    item.name.last.charAt(0).toLowerCase() === letter
  ).length;

  return (
    <div className="tab-container">
    {CONFIG_JSON.tabs.map(tab=>{
      const count = counter(tab);
      return(
      <div className={"tab " + (tab === props.currentLetter ? "active " : "") + (count === 0 ? "disabled" : "")}  key={tab} id={tab} onClick={count > 0 ? (e)=>{changeHandler(e)}: ()=>{}}>
        {tab}
        <span>{count}</span>
      </div>
    )})}
    </div>
  );
}

export default Tabs;
