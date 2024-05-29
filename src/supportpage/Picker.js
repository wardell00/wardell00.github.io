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
        const dropwdown = document.createElement('div');
        dropwdown.className = 'dropdown';
        const select = document.createElement('div');
        select.className = 'select';
        const selectText = document.createElement('span');
        selectText.className = 'selected';
        selectText.textContent = this.title;
        const caret = document.createElement('div');
        caret.className = 'caret';
        select.appendChild(selectText);
        select.appendChild(caret);
        const menu = document.createElement('ul');
        menu.className = 'menu';
        this.options.forEach(option => {
            const menuItem = document.createElement('li');
            menuItem.textContent = option;
            menu.appendChild(menuItem);
        });
        dropwdown.appendChild(select);
        dropwdown.appendChild(menu);
        return dropwdown;

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

export function pickerLogic() {
    const dropwdowns = document.querySelectorAll('.dropdown');

    dropwdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');

        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.textContent = option.innerHTML;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');

                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });
}