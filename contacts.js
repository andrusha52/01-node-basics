const fs = require("fs")
const path  = require("path");

const contactsPath  = path.join(__dirname, 'db', 'contacts.json');




function listContacts() {
    try{
        return JSON.parse(
          fs.readFileSync(contactsPath, 'utf-8', async (err) => {
              if (err) throw err;
          }
      ));;
    }catch(error){
        console.log("error: ", error);
    }
  }
  
  function getContactById(contactId) {
    try{
      const contact = listContacts()
        const resultId = contact.find(el=> el.id===contactId)
        return resultId
    }catch(error){
        console.log("error: ", error);
    }
  }
  
  function removeContact(contactId) {
    try{
      const contact = listContacts()
        const resultId = contact.filter(el=> el.id!==contactId)
          fs.writeFileSync(contactsPath, JSON.stringify(resultId), (err) => {
          if (err) throw err;
      });
    }catch(error){
        console.log("error: ", error);
    }
  }
  
  function addContact(name, email, phone) {
    try{
      const contact = listContacts()
        lastId = contact.length+1;
        const resultAdd =[ ...contact,{name:name, email:email,phone:phone,id:lastId}];
          fs.writeFileSync(contactsPath, JSON.stringify(resultAdd), (err) => {
          if (err) throw err;
      });
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