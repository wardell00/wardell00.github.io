

export class SupportText {
    constructor() {
        this.supportTitle = document.createElement('h1');
        this.supportTitle.textContent = 'We can help!';
        this.supportText = document.createElement('pre');
        this.supportText.id = 'supportText';
        this.supportText.textContent = 'Do you have any questions about our apps?\nYou found a bug or have a feature request?\nOr you want to give us feedback?\nDon\'t hesitate to contact us! Just fill out the form below. ';
    }

    init() {
        const supportPage = document.getElementById('Support');
        supportPage.appendChild(this.render());
    }
    render() {
        const container = document.createElement('div');
        container.id = 'supportTextContainer';
        container.appendChild(this.supportTitle);
        container.appendChild(this.supportText);
        return container;
    }
}