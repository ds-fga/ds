import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, VScroll } from '../ui';
import exampleImg from './teste.jpg';
//colocar imagem. exampleImg nome <img src={exampleImg}></img>

let data = {
    lucro: [
        {
            title: "Test sdse ",
            //img: exampleImg,
            description: "dsjfoisdjfo si jfosij afsohfsauhifasuhosafhuohuoafshoasfhoifosi jfoisdj foisj dfois jdofisodjf osi jfos",
            preco: "1",
            attrs: [
                { name: "attr1", color: 'color: red', points: 1 },
                { name: "attr2", color: 'color: green', points: -1 },
            ]
        },
        {
            title: "Test sdse ",
            //img: exampleImg,
            description: "dsjfoisdjfo si jfosij fosi jfoisdj foisj dfois jdofisodjf osi jfos",
            attrs: [
                { name: "attr1", color: 'color: red', points: 1 },
                { name: "attr2", color: 'color: green', points: -1 },
            ]
        }
    ],
    prejuizo: [
        {
            title: "Test sdse ",
            //img: exampleImg,
            description: "dsjfoisdjfo si jfosij fosi  foisj dfois jdofisodjf osi jfos",
            attrs: [
                { name: "attr1", color: 'color: red', points: 1 },
                { name: "attr2", color: 'color: green', points: -1 },
            ]
        }
    ],
};


function createCard({ title, description, attrs, preco }) {
    function viewAttr({ name, color, points }) {
        return <tr style={color}><td>{name}</td> <td>{points}</td></tr>
    }

    var teste = true;
    var claseSei = "Economy-botao-direita";

    if (!teste) {
        claseSei += "Economy-botao-escondido";
    }
    //var pontos = 2;

    return <ExpandirCard title={title}>
        <p>{description}</p>
        <table>
            <thead>
                <tr><h3><th>Nome</th> <th>Pontos</th></h3></tr>
            </thead>
            <tbody>
                {attrs.map(viewAttr)}
                <tr><h3><th>Preço</th></h3></tr>
                <tr><td>{preco}</td></tr>
            </tbody>
        </table>
        <div class={claseSei}>
            <button class="nes-btn" onclick={() => { teste = !teste }}>
                <span>Comprar</span>
            </button>
        </div>
    </ExpandirCard>
}

export class Economy {
    view() {
        return <div>
            <Window>
                <Sidebar title="Economia" points="4" src={exampleImg} />
                <Tabs>
                    <Tab title="Ações">
                        <div class="flex-container">
                            <div style="flex-grow: 1">
                                <h1>Lucro</h1>
                                {data.lucro.map(createCard)}
                            </div>

                            <div style="flex-grow: 1">
                                <h1>Prejuizo</h1>
                                {data.prejuizo.map(createCard)}
                            </div>
                        </div>
                    </Tab>

                    <Tab title="Mercado">
                        <div>
                            <testeBotao />
                        </div>
                    </Tab>

                    <Tab title="Inventário">
                    </Tab>

                    <Tab title="?">
                    </Tab>
                </Tabs>
            </Window>
        </div>
    }
}

export class testeBotao {
    constructor(vnode) {
        this.pontos = 0;
    }

    view() {
        return <div>
            <p>Teste {pontos}</p>
            <button type="button" onclick={() => { this.pontos += 1 }}>
                <span>teste</span>
            </button>
        </div>
    }
}

export class ExpandirCard {
    expand: boolean;

    constructor(vnode) {
        this.expand = false;
    }

    view(vnode) {
        var buttonOn = "nes-btn scroll-btn Economy-button";
        var content;

        if (this.expand) {
            content = vnode.children;
            buttonOn += " Economy-button-on"
        }
        else {
            content = "";
        }

        return <VScroll class="EconomyCard">
            <div class="nes-container with-title is-rounded">
                <div class="EconomyCard-title">
                    {vnode.attrs.title}
                    <button type="button" class={buttonOn} onclick={() => { this.expand = !this.expand }}>
                        <span>&lt;</span>
                    </button>
                    <hr></hr>
                </div>

                <div class="EconomyCard-content">
                    {content}
                </div>
            </div>
        </VScroll>
    }
}

//criar um div na window pq só le um filho
//vscroll rolamento
//vnode.attrs pegar algum atributo passado
//hr é a linha -----------
//constructor uma variável é criada localmente


// <div class="Economy-botao-direita">
//             <button class="nes-btn">Comprar</button>
//         </div>