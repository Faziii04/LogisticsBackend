export default class User {
    constructor(firstName, lastName, phone, email, address, birth_date, emergency_contact, password, status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.birth_date = birth_date;
        this.emergency_contact = emergency_contact;
        this.password = password;
        this.status = status;
    }
}