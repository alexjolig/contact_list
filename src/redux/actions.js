export const UPDATE_CONTACTS = "UPDATE_CONTACTS";
export const CHANGE_LIST = "CHANGE_LIST";
export const CHANGE_LETTER = "CHANGE_LETTER";
export const REFRESH_CONTACTS = "REFRESH_CONTACTS";
export const CHANGE_CURRENT_CONTACT = "CHANGE_CURRENT_CONTACT";
export const CHANGE_CARD_STATUS = "CHANGE_CARD_STATUS";

export function changeCurrentContact(contact) {
   return {
      type: CHANGE_CURRENT_CONTACT,
      contact: contact,
   }
}

export function changeLetter(letter, mainList) {
  const list = mainList.filter(item=>
    item.name.last.charAt(0).toLowerCase() === letter
  );

   return {
      type: CHANGE_LETTER,
      letter: letter,
      currentList: list
   }
}

export function changeList(letter, mainList) {

  const list = mainList.filter(item=>
    item.name.last.charAt(0).toLowerCase() === letter
  );

   return {
      type: CHANGE_LIST,
      currentList: list
   }
}

export function changeCardStatus(shouldOpen) {
   return {
      type: CHANGE_CARD_STATUS,
      shouldOpen: shouldOpen,
   }
}

export function refreshContacts() {
  return {
    type: REFRESH_CONTACTS
  }
}
