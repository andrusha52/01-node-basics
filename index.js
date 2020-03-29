const argv = require('yargs').argv;
const contacts = require('./contacts')



function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        console.table(contacts.listContacts())
        break;
  
      case 'get':
        console.log(contacts.getContactById(id))
        //... id
        break;
  
      case 'add':
        contacts.addContact(name,email,phone)
          console.log(contacts.listContacts())
         
        // ... name email phone
        break;
  
      case 'remove':
        contacts.removeContact(id)
          console.log(contacts.listContacts())
        // ... id
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  invokeAction(argv);