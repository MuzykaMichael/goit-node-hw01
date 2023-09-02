// import {nanoid} from 'nanoid'


const fs = require('node:fs');

const contactsPath = './db/contacts.json';


// TODO: задокументувати кожну функцію
function listContacts() {
    const response = fs.readFile(contactsPath, (err,data)=>{
        if(err){
            console.log(err)
        }
        console.log('data',data.toString())
    });
    
}
  
  function getContactById(contactId) {

}
  
  function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
  }

  module.exports = {
    listContacts,
    getContactById,
  }