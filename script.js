// Constantes
const PONTOS_PARA_VENCER = Number(prompt("A partida sera de quantos Pontos?"));
const PONTOS_DIFERENCA_VITORIA = 2;

// Estado do placar
let pontosAzul = 0;
let pontosVermelho = 0;

// Elementos do DOM
const tituloEsquerdo = document.querySelector(".titulo__time.esquerdo");
const tituloDireito = document.querySelector(".titulo__time.direito");
const imagemBola = document.querySelector(".bola__volei");
const placarAzul = document.querySelector(".placar.time_azul");
const numeroPlacarAzul = document.querySelector(".numero_placar.azul");
const placarVermelho = document.querySelector(".placar.time_vermelho");
const numeroPlacarVermelho = document.querySelector(".numero_placar.vermelho");
const botoes = document.querySelectorAll(".botoes__mais_e_menos");
const botaoReset = document.querySelector(".botao__resetar");

// Função para remover classes da bola e títulos
function resetarClassesBola() {
  tituloEsquerdo.classList.remove("esquerdo", "bola_esquerdo", "alinhar_esquerdo_para_direito");
  tituloDireito.classList.remove("direito", "bola_direito", "alinhar_direito_para_esquerdo");
  imagemBola.classList.remove("bola__volei", "lado_esquerdo", "lado_direito");
}

// Função para centralizar a bola e resetar seu tamanho
function centralizarBola() {
  resetarClassesBola();
  tituloEsquerdo.classList.add("esquerdo");
  tituloDireito.classList.add("direito");
  imagemBola.classList.add("bola__volei"); // Classe padrão para o tamanho normal da bola
}

// Função para mover a bola para o lado esquerdo
function moverBolaParaEsquerda() {
  resetarClassesBola();
  tituloEsquerdo.classList.add("bola_esquerdo");
  imagemBola.classList.add("bola__volei", "lado_esquerdo");
  tituloDireito.classList.add("alinhar_direito_para_esquerdo");
}

// Função para mover a bola para o lado direito
function moverBolaParaDireita() {
  resetarClassesBola();
  tituloEsquerdo.classList.add("alinhar_esquerdo_para_direito");
  imagemBola.classList.add("bola__volei", "lado_direito");
  tituloDireito.classList.add("bola_direito");
}

// Função para resetar o placar
function resetarPlacar() {
  pontosAzul = 0;
  pontosVermelho = 0;
  atualizarPlacar();
  centralizarBola();
  resetarCoresTimes();
}

// Função para atualizar o placar na tela
function atualizarPlacar() {
  numeroPlacarAzul.textContent = pontosAzul;
  numeroPlacarVermelho.textContent = pontosVermelho;
}

// Função para resetar as cores dos times
function resetarCoresTimes() {
  placarAzul.classList.remove("time_azul_branco");
  numeroPlacarAzul.classList.remove("azul_branco");
  tituloEsquerdo.classList.remove("esquerdo_branco");
  placarVermelho.classList.remove("time_vermelho_branco");
  numeroPlacarVermelho.classList.remove("vermelho_branco");
  tituloDireito.classList.remove("direito_branco");
}

// Função para verificar se um time está a 1 ponto de vencer
function verificarProximidadeVitoria() {
  if (pontosAzul === PONTOS_PARA_VENCER - 1 && pontosVermelho <= PONTOS_PARA_VENCER - 1) {
    placarAzul.classList.add("time_azul_branco");
    numeroPlacarAzul.classList.add("azul_branco");
    tituloEsquerdo.classList.add("esquerdo_branco");
  } else if (pontosVermelho === PONTOS_PARA_VENCER - 1 && pontosAzul <= PONTOS_PARA_VENCER - 1) {
    placarVermelho.classList.add("time_vermelho_branco");
    numeroPlacarVermelho.classList.add("vermelho_branco");
    tituloDireito.classList.add("direito_branco");
  }
}

// Função para verificar se a partida terminou
function verificarFimDaPartida() {
  if (pontosAzul >= PONTOS_PARA_VENCER && pontosAzul - pontosVermelho >= PONTOS_DIFERENCA_VITORIA) {
    alert("Time Azul venceu!");
  } else if (pontosVermelho >= PONTOS_PARA_VENCER && pontosVermelho - pontosAzul >= PONTOS_DIFERENCA_VITORIA) {
    alert("Time Vermelho venceu!");
  } else if (pontosAzul === PONTOS_PARA_VENCER -1 && pontosVermelho === PONTOS_PARA_VENCER - 1) {
    alert("Empate! Melhor de 3 pontos!");
    resetarPlacar();
  }
}

// Event listeners para os botões
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (botao.classList.contains("mais_azul")) {
      pontosAzul += 1;
      moverBolaParaEsquerda();
    } else if (botao.classList.contains("menos_azul") && pontosAzul > 0) {
      pontosAzul -= 1;
      moverBolaParaDireita();
    } else if (botao.classList.contains("mais_vermelho")) {
      pontosVermelho += 1;
      moverBolaParaDireita();
    } else if (botao.classList.contains("menos_vermelho") && pontosVermelho > 0) {
      pontosVermelho -= 1;
      moverBolaParaEsquerda();
    } else {
      alert("Placar não pode ser menor que 0!");
    }

    atualizarPlacar();
    verificarProximidadeVitoria();
    verificarFimDaPartida();
  });
});

// Event listener para o botão de reset
botaoReset.addEventListener("click", resetarPlacar);

// Inicialização do placar
atualizarPlacar();
centralizarBola();