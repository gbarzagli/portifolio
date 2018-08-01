class Dropdown {
    constructor(element) {
        this.dd = element;
        const ul = element.getElementsByTagName('ul')[0];
        this.opts = ul.getElementsByTagName('li');
        this.val = [];
        this.initEvents();
    }

    initEvents() {
        this.dd.addEventListener('click', event => {
            this.dd.classList.toggle('active');
            event.stopPropagation();
        });

        for (let opt of this.opts) {
            let label = opt.getElementsByTagName('label')[0];
            label.addEventListener('click', event => {
                let checkbox = opt.getElementsByTagName('input')[0];
                this.val = checkbox.value;

            });
        }
    }

    getValue() {
        return this.val;
    }

    getIndex() {
        return this.index;
    }
}

const element = document.getElementById('dd');
const dropdown = new Dropdown(element);