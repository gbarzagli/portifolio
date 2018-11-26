const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: grid;
            place-content: center;
            border: 0;
            border-radius: 50%;
            background: #263238;
            min-width: 50px;
            min-height: 50px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.45);
            background-position: center;
            font-weight: 700;
            z-index: 9999;
        }
    </style>
    <slot name="innerHTML"></slot>
`;
class FloatingActionButton extends HTMLElement {
    constructor() {
        super();

        this.pos1 = 0, this.pos2 = 0, this.pos3 = 0, this.pos4 = 0;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        console.log('connected!');
        
        this.id = Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
        this.innerHTML = `<span slot="innerHTML">${this.innerHTML}</span>`;
        
        this.addEventListener('dragstart', e => {
            // get the mouse cursor position at startup:
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;
            document.ondragover = (e) => {
                e.preventDefault();
            };
            document.ondrop = (e) => {
                e.preventDefault();
                
                // calculate the new cursor position:
                this.pos1 = this.pos3 - e.clientX;
                this.pos2 = this.pos4 - e.clientY;
                this.pos3 = e.clientX;
                this.pos4 = e.clientY;

                // set the element's new position:
                this.style.position = ''
                this.style.top = (this.offsetTop - this.pos2) + 'px';
                this.style.left = (this.offsetLeft - this.pos1) + 'px';
            };
        });
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`changed: ${name} from ${oldVal} to ${newVal}`);
    }
}
 
customElements.define('fa-button', FloatingActionButton);