class MyHeader extends HTMLElement {
    constructor() {
        super();

        // CORREÇÃO 1: Adicionar o 'this.' antes de attachShadow
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                html body {
                    padding: 0px;
                    margin: 0px;
                    padding-top: 150px;
                    font-size: 18px;

                    color: white;
                    background-color: #111;

                }

                main {
                    padding: 40px;
                    padding-top: 20px;
                    margin: 0px;
                }

                a {
                    text-decoration: none;
                    color: white;
                }

                h1 h2 h3 {
                    margin: 0px;
                    padding: 0px;
                }

                /* HEADER */

                .titleMain {
                    color: white;
                    display: flex;
                    overflow: hidden;
                    border: solid white 1px;
                    border-radius: 10px;
                    padding: 5px;

                    font-size: 35px;
                    font-weight: bold;

                    width: 690px;
                    height: auto;

                    margin-bottom: 20px;
                }

                #headerMain {
                    width: 100%;
                    height: auto;
                    padding-bottom: 5px;
                    margin: 0px;

                    background-color: #04061a;

                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    border-bottom: solid 1px white;

                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 999;
                }

                #digitBar {
                    color: white;
                    font-size: 40px;
                    font-weight: bold;

                    animation-name: piscar;
                    animation-duration: 1s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                }

                @keyframes piscar {
                    0% {
                        opacity: 0;
                    }

                    50% {
                        opacity: 1;
                    }

                    100% {
                        opacity: 0;
                    }
                }

                /* PART. MENU */
                #menuBar {
                    margin-top: -10px;
                    padding: 10px;
                    height: auto;

                    display: flex;
                }

                .attributeMenuBar {
                    padding: 7px;
                    border-radius: 10px;
                    margin-right: 5px;

                    background-color: #1c1c1c;
                    border-top: solid white 1px;
                    border-left: solid white 1px;
                    border-right: solid white 4px;
                    border-bottom: solid white 4px;
                }

                .attributeMenuBar:hover {
                    text-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff;

                }

                .attributeMenuBar:active {
                    border-right: solid white 3px;
                    border-bottom: solid white 3px;

                    margin-right: 6px;
                }
            </style>
            
            <div id="headerMain">

            <div class="titleMain">
                <div> TRAINING_WEB <span id="digitBar">|</span> </div>
            </div>

                <nav id="menuBar">
                    <a href="../pages/Home.html">
                        <div>
                            <span class="attributeMenuBar">Home</span>
                        </div>
                    </a>
                    <a href="../pages/main/Outros_assuntos.html">
                        <div>
                            <span class="attributeMenuBar">Outros Assuntos</span>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <span class="attributeMenuBar">Links</span>
                        </div>
                    </a>
                </nav>
            </div>
        `;
    }
}

customElements.define('my-header', MyHeader);