export class TextArea {
    constructor() {
        this.textArea = document.createElement('textArea');
    }

    init() {    
        const textArea = this.render();
        document.getElementById('Support').appendChild(textArea);
    }

    render() {
        this.textArea.placeholder = 'Your message';
        this.textArea.id = 'textArea';
        return this.textArea;
    }
}