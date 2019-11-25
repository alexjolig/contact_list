import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
 import {changeCurrentContact} from '../redux/actions';

function List() {

  const props = useSelector(state=>({
    currentList: state.currentList,
  }));

  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {
    setList(props.currentList);
  },[props.currentList]);

  const changeHandler = (event, contact) => {
    dispatch(changeCurrentContact(contact));
  }

  return (
    <div className="list">
      {list.map(contact=>(
        <div key={contact.login.uuid} onClick={(e)=>{changeHandler(e, contact)}}>
          <h3>{contact.name.first}, {contact.name.last}</h3>
        </div>
      ))}
    </div>
  );
}

export default List;
