const contactList = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      return console.table(await contactList.listContacts());

    case "get":
      return console.table(await contactList.getContactById(id));

    case "add":
      return console.table(await contactList.addContact(name, email, phone));
    case "remove":
      return console.table(await contactList.removeContact(id));

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
