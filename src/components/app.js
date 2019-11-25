import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {refreshContacts} from '../redux/actions';
import {CONFIG_JSON} from '../config';
import Tabs from './tabs';
import List from './list';
import Card from './card';

function App() {
  document.title = CONFIG_JSON.title;

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(refreshContacts());
  },[dispatch]);

  return (
    <>
      <Tabs />
      <List />
      <Card />
    </>
  );
}

export default App;
