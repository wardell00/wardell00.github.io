export class SubmitButton {
    constructor() {
        this.submitButton = document.createElement('button');
    }

    init() {
        const button = this.render();
        document.getElementById('Support').appendChild(button);
    }

    render() {
        this.submitButton.textContent = 'Submit';
        this.submitButton.id = 'submitButton';
        return this.submitButton;
    }
}