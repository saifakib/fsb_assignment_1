const { faker } = require("@faker-js/faker");

module.exports.generateRandomNumberService = (start, end) => Math.floor(Math.random() * (start - end + 1)) + end;

module.exports.generateAProfileService = (properties) => {
    const fakePerson = {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.helpers.rangeToNumber({ min: 20, max: 30 }),
        address: faker.location.streetAddress(),
        avatar: faker.internet.avatar(),
    }
    let person = {};
    properties.forEach((property) => {
        person[property] = fakePerson[property]
    });

    return person;
}