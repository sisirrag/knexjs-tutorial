const personDAO = require('../dao/person');

class PersonService {
    createPerson(personDAO){
        const {firstName,lastName,email}=personDAO;
        return personDAO.createPerson(firstName,lastName,email);
    }
}

module.exports = new PersonService();