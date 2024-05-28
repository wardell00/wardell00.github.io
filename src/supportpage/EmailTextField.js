export class EmailTextField {
    constructor() {
        this.emailField = document.createElement('input');
    }

    init() {
        const emailField = this.render();
        document.getElementById('Support').appendChild(emailField);
    }

    render() {
        this.emailField.type = 'email';
        this.emailField.id = 'emailField';
        this.emailField.placeholder = 'Your Email';
        return this.emailField;
    }
}