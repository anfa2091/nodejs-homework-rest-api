const express = require('express');
const { basedir } = global;
const crtl = require(`${basedir}/controllers/contacts`);
const { crtlWrapper } = require(`${basedir}/helpers`);
const router = express.Router()

router.get('/', crtlWrapper(crtl.getAllContacts));

router.get('/:contactId', crtlWrapper(crtl.getContactById));

router.post('/', crtlWrapper(crtl.addContact));

router.delete('/:contactId', crtlWrapper(crtl.removeContact));

router.put('/:contactId', crtlWrapper(crtl.updateContactById));

router.patch('/:contactId/favorite', crtlWrapper(crtl.updateStatusContact));

module.exports = router;
