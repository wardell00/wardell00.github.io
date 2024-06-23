export class PrivacySection {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    titleDiv() {
        const h2 = document.createElement('h2');
        h2.textContent = this.title;
        h2.id = "privacy-section-title";
        return h2;
    }

    contentDiv() {
        const text = document.createElement('p');
        text.textContent = this.content;
        text.id = "privacy-section-content";
        return text;
    }
    render() {
        const section = document.createElement('div');
        section.id = "privacy-section";
        section.appendChild(this.titleDiv());
        section.appendChild(this.contentDiv());
        return section;
    }
}