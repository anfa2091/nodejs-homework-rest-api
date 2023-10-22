const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);

const getAllContacts = async (req, res, next) => {
    const result = await Contact.find();
    res.json(result)    
};

module.exports = getAllContacts;