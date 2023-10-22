const getAllContacts = require('./getAllContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const removeContact = require('../contacts/removeContact');
const updateContactById = require('../contacts/updateContactById');
const updateStatusContact = require('../contacts/updateStatusContact');

module.exports = {
    getAllContacts,
    getContactById,
    addContact,
    removeContact,
    updateContactById,
    updateStatusContact
}