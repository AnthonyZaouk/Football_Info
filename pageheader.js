import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageHeader extends LitElement {

    static properties = {
        title: {type: String}
    };

    static styles = css`
        :host { font-family: monospace; }
        header { background-color: yellow; 
            font-family: trebuchet MS;
            color: green;
        }
        img { border: 1px solid black; width: 100px; height: 100px; }
        
    `;

    render() {
        return html`
        <header>
        <h1>${this.title}</h1>
        </header>`
    }
}
customElements.define('page-header', PageHeader);

