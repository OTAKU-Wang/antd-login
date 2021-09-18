export class Email {
    address: string;
    constructor(address: string) {
        this.address = address.toLowerCase();
    }

}

function isInvalidAddress(address: string) {
    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !validEmailRegex.test(address);
}