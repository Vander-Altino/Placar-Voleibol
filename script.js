let totalPontosAzulAtual = 0;
let totalPontosVermelhoAtual = 0;

const tituloLadoEsquedo = document.querySelector(".titulo__time.esquerdo");
const imagemBola = document.querySelector(".bola__volei");
const tituloLadoDireito = document.querySelector(".titulo__time.direito");
const placarAzul = document.querySelector(".placar.time_azul");
const numeroPlacarAzul = document.querySelector(".numero_placar.azul");
const placarVermelho = document.querySelector(".placar.time_vermelho");
const numeroPlacarVermelho = document.querySelector(".numero_placar.vermelho");



function RemoverClasseNaBolaVolei() {
  // Remove todas as classes relacionadas ao estado da bola
  tituloLadoEsquedo.classList.remove(
    "esquerdo",
    "bola_esquerdo",
    "alinhar_esquerdo_para_direito"
  );
  imagemBola.classList.remove("bola__volei", "lado_esquerdo", "lado_direito");
  tituloLadoDireito.classList.remove(
    "direito",
    "bola_direito",
    "alinhar_direito_para_esquerdo"
  );
}

function AdicionarClasseNaBolaVoleiAesquerda() {
  RemoverClasseNaBolaVolei();

  // Adiciona a classe 'bola_esquerdo' ao título do lado esquerdo
  tituloLadoEsquedo.classList.add("bola_esquerdo");

  // Adiciona as classes 'bola__volei' e 'lado_esquerdo' à imagem da bola
  imagemBola.classList.add("bola__volei", "lado_esquerdo");

  // Adiciona a classe 'alinhar_direito_para_esquerdo' ao título do lado direito
  tituloLadoDireito.classList.add("alinhar_direito_para_esquerdo");
}

function AdicionarClasseNaBolaVoleiAdireita() {
  RemoverClasseNaBolaVolei();

  // Adiciona a classe 'bola_esquerdo' ao título do lado esquerdo
  tituloLadoEsquedo.classList.add("alinhar_esquerdo_para_direito");

  // Adiciona as classes 'bola__volei' e 'lado_esquerdo' à imagem da bola
  imagemBola.classList.add("bola__volei", "lado_direito");

  // Adiciona a classe 'alinhar_direito_para_esquerdo' ao título do lado direito
  tituloLadoDireito.classList.add("bola_direito");
}

function resetarPlacar() {
  totalPontosAzulAtual = 0;
  document.querySelector(".azul").textContent = 0;
  console.log(totalPontosAzulAtual);
  totalPontosVermelhoAtual = 0;
  document.querySelector(".vermelho").textContent = 0;
  console.log(totalPontosVermelhoAtual);
  AdicionarClasseNaBolaVoleiPadrao();
}

function AdicionarClasseNaBolaVoleiPadrao() {
  RemoverClasseNaBolaVolei();
  // Adiciona a classe 'bola_esquerdo' ao título do lado esquerdo
  tituloLadoEsquedo.classList.add("esquerdo");

  // Adiciona as classes 'bola__volei' e 'lado_esquerdo' à imagem da bola
  imagemBola.classList.add("bola__volei");

  // Adiciona a classe 'alinhar_direito_para_esquerdo' ao título do lado direito
  tituloLadoDireito.classList.add("direito");

  placarAzul.classList.remove("time_azul_branco"); // Adiciona a nova classe
  numeroPlacarAzul.classList.remove("azul_branco"); // Adiciona a nova classe
  tituloLadoEsquedo.classList.remove("esquerdo_branco");

  placarVermelho.classList.remove("time_vermelho_branco"); // Adiciona a nova classe
  numeroPlacarVermelho.classList.remove("vermelho_branco"); // Adiciona a nova classe
  tituloLadoDireito.classList.remove("direito_branco");


}

const botoes = document.querySelectorAll(".botoes__mais_e_menos");
document.querySelector(".azul").textContent = totalPontosAzulAtual;
document.querySelector(".vermelho").textContent = totalPontosVermelhoAtual;

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (botao.classList.contains("mais_azul")) {
      totalPontosAzulAtual += 1;
      document.querySelector(".azul").textContent = totalPontosAzulAtual;
      RemoverClasseNaBolaVolei();
      AdicionarClasseNaBolaVoleiAesquerda();
    } else if (
      botao.classList.contains("menos_azul") &&
      totalPontosAzulAtual > 0
    ) {
      totalPontosAzulAtual -= 1;
      document.querySelector(".azul").textContent = totalPontosAzulAtual;
      RemoverClasseNaBolaVolei();
      AdicionarClasseNaBolaVoleiAdireita();
    } else if (
      botao.classList.contains("menos_azul") &&
      totalPontosAzulAtual === 0
    ) {
      alert("Placar nao aceitar menos que 0 ");
    } else if (botao.classList.contains("mais_vermelho")) {
      totalPontosVermelhoAtual += 1;
      document.querySelector(".vermelho").textContent =
        totalPontosVermelhoAtual;
      RemoverClasseNaBolaVolei();
      AdicionarClasseNaBolaVoleiAdireita();
    } else if (
      botao.classList.contains("menos_vermelho") &&
      totalPontosVermelhoAtual > 0
    ) {
      totalPontosVermelhoAtual -= 1;
      document.querySelector(".vermelho").textContent =
        totalPontosVermelhoAtual;
      RemoverClasseNaBolaVolei();
      AdicionarClasseNaBolaVoleiAesquerda();
    } else alert("Placar nao aceitar menos que 0 ");
    {
    }

    if (totalPontosAzulAtual == 11 && totalPontosVermelhoAtual == 11) {
      alert("ZEROU MELHOR DE 3 PONTOS !");
      resetarPlacar();
    } else if (
      (totalPontosAzulAtual >= 12 && totalPontosVermelhoAtual <= 10) ||
      (totalPontosVermelhoAtual >= 12 && totalPontosAzulAtual <= 10)
    ) {
      alert("A partida Terminou");
    }
    verificarBolaBrancaTimeVermelho();
    verificarBolaBrancaTimeAzul();

   
  });


});

const reset = document.querySelector(".botao__resetar");
reset.addEventListener("click", () => {
  resetarPlacar();
});


function verificarBolaBrancaTimeAzul(){
  if (totalPontosAzulAtual == 11 && totalPontosVermelhoAtual <= 10) {
    placarAzul.classList.add("time_azul_branco"); // Adiciona a nova classe
    numeroPlacarAzul.classList.add("azul_branco"); // Adiciona a nova classe
    tituloLadoEsquedo.classList.add("esquerdo_branco"); // Adiciona a nova classe
  }
}

function verificarBolaBrancaTimeVermelho(){
  if (totalPontosVermelhoAtual == 11 && totalPontosAzulAtual <= 10) {
    placarVermelho.classList.add("time_vermelho_branco"); // Adiciona a nova classe
    numeroPlacarVermelho.classList.add("vermelho_branco"); // Adiciona a nova classe
    tituloLadoDireito.classList.add("direito_branco"); // Adiciona a nova classe
  }
}