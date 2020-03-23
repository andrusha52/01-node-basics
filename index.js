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
          console.log(contacts.addContact(name,email,phone))
        // ... name email phone
        break;
  
      case 'remove':
          console.log(contacts.removeContact(id))
        // ... id
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }


  invokeAction(argv);