const fs = require("fs")
const path  = require("path");

const contactsPath  = require('./db/contacts.json')




function listContacts() {
    try{
        return contactsPath;
    }catch(error){
        console.log("error: ", error);
    }
  }
  
  function getContactById(contactId) {
    try{
        const resultId = contactsPath.find(el=> el.id===contactId)
        return resultId;
    }catch(error){
        console.log("error: ", error);
    }
  }
  
  function removeContact(contactId) {
    try{
        const resultId = contactsPath.filter(el=> el.id!==contactId)
        return resultId;
    }catch(error){
        console.log("error: ", error);
    }
  }
  
  function addContact(name, email, phone) {
    try{
        lastId = contactsPath.length+1;
        const resultAdd =[ ...contactsPath,{name:name, email:email,phone:phone,id:lastId}];
        return resultAdd
    }catch(error){
        console.log("error: ", error);
    }
  }

module.exports={
    listContacts,
  getContactById,
  removeContact,
  addContact
}