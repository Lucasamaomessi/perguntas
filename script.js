const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sempre gostou de cozinhar. Um programa de TV abre uma competição para jovens chefs. Qual sua reação?",
        alternativas: [
            {
                texto: "Se inscreve na hora!",
                afirmacao: "Você decidiu seguir sua paixão e começou sua jornada como aspirante a chef. "
            },
            {
                texto: "Fica com medo de se expor.",
                afirmacao: "Preferiu praticar mais em casa antes de se arriscar em público. "
            }
        ]
    },
    {
        enunciado: "Na sua primeira aula de culinária profissional, o chef pede um prato com ovo. Como você reage?",
        alternativas: [
            {
                texto: "Faz uma omelete clássica, mas capricha nos temperos.",
                afirmacao: "Você apostou no simples, mas com sabor. "
            },
            {
                texto: "Arrisca um ovo poché com molho hollandaise.",
                afirmacao: "Mostrou ousadia e vontade de surpreender logo de início. "
            }
        ]
    },
    {
        enunciado: "Você tem que trabalhar em equipe para preparar um jantar completo. Um colega erra o ponto do risoto. O que faz?",
        alternativas: [
            {
                texto: "Conversa e tenta ajustar o prato juntos.",
                afirmacao: "Sua habilidade de trabalhar em equipe salvou o jantar. "
            },
            {
                texto: "Refaz o risoto sozinho para garantir o resultado.",
                afirmacao: "Preferiu garantir a qualidade, mesmo com mais trabalho. "
            }
        ]
    },
    {
        enunciado: "Chega o dia da prova final: criar um prato autoral. Qual caminho escolhe?",
        alternativas: [
            {
                texto: "Inova com ingredientes brasileiros e apresentação moderna.",
                afirmacao: "Valorizou suas raízes com um toque contemporâneo. "
            },
            {
                texto: "Faz um prato clássico da cozinha francesa, mas impecável.",
                afirmacao: "Mostrou técnica e respeito à tradição. "
            }
        ]
    },
    {
        enunciado: "Você recebe uma proposta para abrir um food truck. E agora?",
        alternativas: [
            {
                texto: "Aceita na hora, é sua chance de empreender!",
                afirmacao: "Agora você lidera seu próprio negócio e encanta paladares nas ruas da cidade. "
            },
            {
                texto: "Recusa para estudar mais e ganhar experiência.",
                afirmacao: "Decidiu esperar o momento certo para empreender com segurança. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final de sua jornada culinária...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
