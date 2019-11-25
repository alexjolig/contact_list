import {UPDATE_CONTACTS, CHANGE_LETTER, CHANGE_LIST, CHANGE_CURRENT_CONTACT, CHANGE_CARD_STATUS} from './actions';

const initialState = {
  allContacts: [],
  currentList: [],
  openCard: false,
  currentContact: "",
  currentLetter: "",
};

const changeLetter = (state, action) => {
  return Object.assign({}, state, {
    currentLetter: action.letter,
    currentList: action.currentList,
  });
}

const changeList = (state, action) => {
  return Object.assign({}, state, {
    currentList: action.currentList
  });
}

const changeCardStatus = (state, action) => {
  return Object.assign({}, state, {
    openCard: action.shouldOpen
  });
};

const changeCurrentContact = (state, action) => {
  return Object.assign({}, state, {
    currentContact: action.contact,
    openCard: true
  });
};

const updateContacts = (state, action) => {
  return Object.assign({}, state, {
    allContacts: action.contacts,
  });
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_LETTER:
        return changeLetter(state, action);
    case CHANGE_LIST:
        return changeList(state, action);
    case CHANGE_CARD_STATUS:
        return changeCardStatus(state, action);
    case CHANGE_CURRENT_CONTACT:
        return changeCurrentContact(state, action);
    case UPDATE_CONTACTS:
      return updateContacts(state, action);
    default:
      return state;
  }
}
