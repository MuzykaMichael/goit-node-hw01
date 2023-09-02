// import {nanoid} from 'nanoid'


const fs = require("fs").promises;
const path = require("path")
const contactsPath = path.join(__dirname, "db/contacts.json");


// TODO: задокументувати кожну функцію
 function listContacts() {
  const data = fs.readFile(contactsPath);
  return JSON.parse(data.toString())    
}
  
 function getContactById(contactId) {
    const contacts = listContacts();
    const contact = contacts.filter(contact=>contact.id === contactId)
    return contact || null;
}
  
 function removeContact(contactId) {
    const contacts = listContacts();
    const contactToDeleteIndex = contacts.findIndex(contact=>contact.id === contactId)
    if (contactToDeleteIndex === -1) return null;
    const deleteContact = contacts.splice(contactToDeleteIndex,1);
  }
  
  function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
  }

  module.exports = {
    listContacts,
    getContactById,
  }