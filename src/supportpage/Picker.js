export class Picker {
    constructor(options, title) {
        this.options = options;
        this.title = title;
    }
    init() {
        const picker = this.render();
        document.getElementById('Support').appendChild(picker);
    }

    render() {
        const container = document.createElement('div');
        container.id = 'pickerContainer';
        const title = document.createElement('h2');
        title.textContent = this.title;
        const subjectPicker = document.createElement('select');
        subjectPicker.id = 'subjectPicker';
        this.options.forEach(option => {
            const subject = document.createElement('option');
            subject.value = option;
            subject.textContent = option;
            subjectPicker.appendChild(subject);
        });
        container.appendChild(title);
        container.appendChild(subjectPicker);
        return container;
    }
}

export function SupportPicker() {
    const appPicker = new Picker(['MealVault'], 'App');
    const subjectPicker = new Picker(['Question', 'Bug', 'Feature Request', 'Feedback'], 'Subject');
    const pickerDiv = document.createElement('div');
    pickerDiv.id = 'pickerDiv';
    pickerDiv.appendChild(appPicker.render());
    pickerDiv.appendChild(subjectPicker.render());
    return pickerDiv;
}