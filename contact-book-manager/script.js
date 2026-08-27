const contacts = [];
function addContact (name, phone, city, pincode) {
    const contact = {
        Name: name,
        Phone: phone,
        Address: {
            City: city,
            Pincode: pincode
        }
    }
    contacts.push(contact);
    return contact;
}

function showContacts() {
    if(contacts?.length > 0){
        return contacts;
    }else{
        return "There is no contact.";
    }
}

function findContact(name) {
    let foundContact = `There is no contact of ${name}`; 
    contacts.forEach((contact) => {
        const {Name} = contact;
        if(Name === name){
            foundContact = contact;
        }
    });

    return foundContact;
}

function updateContact(name, newPhone) {
    let contactFound = false;
    for(const contact of contacts){
        const {Name} = contact;
        if(Name === name){
            contact.Phone = newPhone;
            contactFound = true;
            break;
        }
    }

    if(!contactFound){
        return `There is no contact exist of ${name}`
    }
}

function removeContact(name) {
    let contactFound = false;
    for(const contact of contacts){
        const {Name} = contact
        if(Name === name){
            const thatContact = contacts.indexOf(contact);
            contacts.splice(thatContact,1);
            contactFound = true;
            break;
        }
    }

    if(!contactFound){
        return `There is no ${name}'s contact exist to remove.`
    }
}

function hasPhoneNumber(contact) {
    return contact.hasOwnProperty("Phone");
}

function safeGetCity(contact){
    return (contact?.Address?.City);
}

function saveContacts(array){
    return JSON.stringify(array);
}

function loadContacts(string) {
    return JSON.parse(string);
}
let newString = saveContacts(contacts);
loadContacts(newString);

while(true){
    let action = prompt("Chose an action --> add contact, show contact, find contact, update contact, remove contact, save contact, quit.");
    let anOption = action.split(" ").join("").toLowerCase();
    if(anOption == "addcontact"){
        let addName = prompt("Enter person's name: ");
        let addphone = prompt("Enter person's phone number: ");
        let addCity = prompt("Enter person's city: ");
        let addPincode = prompt("Enter person's pincode: ");

        if(!(addName && addphone && addCity && addPincode)){
            console.log("Please give complete information - name, phone, city, pincode.");
        }else{
            console.log(addContact(addName, addphone, addCity, addPincode));
        }
    }else if(anOption == "showcontact"){
        console.log(showContacts());
    }else if(anOption == "findcontact"){
        let neededName = prompt("Enter person's name whose contact need to find: ");

        if(neededName){
            console.log(findContact(neededName));
        }
    }else if(anOption == "updatecontact"){
        let neededName1 = prompt("Enter person's name whose contact need to update: ");
        let newNumber = prompt("Enter new phone number: ");

        console.log(updateContact(neededName1, newNumber));
    }else if(anOption == "removecontact"){
        let neededName2 = prompt("Enter person's name whose contact need to remove: ");

        console.log(removeContact(neededName2));
    }else if(anOption == "savecontact"){
        console.log(saveContacts(contacts));
    }else if(anOption == "quit"){
        break;
    }else{
        console.log("Chose an right option.")
    }
}