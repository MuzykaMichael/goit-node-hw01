const fs = require("fs").promises;
const nanoid = require("nanoid")
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
    fs.writeFile(contactsPath,JSON.stringify(contacts,null,2))
    return deleteContact;
  }
  
  function addContact(name, email, phone) {
    const newContact = { id: nanoid(), name, email, phone };
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  }