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
        
    `;

    render() {
        return html`
        <header>
        <h1>${this.title}</h1>
        </header>
        
        <body>
        <a href="index.html">Home</a>
        <a href="aleague.html">A-League</a>
        <a href="prem.html">Premier League</a>
        <a href="serie-a.html">Serie A</a>
        </body>
        
        `

        
    }
}
customElements.define('page-header', PageHeader);

