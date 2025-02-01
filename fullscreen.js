const fullscreenBtn = document.getElementById("fullscreen__button");

// Função para alternar entre Fullscreen e sair do Fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    // Entrar em Fullscreen
    document.documentElement.requestFullscreen();
  } else {
    // Sair do Fullscreen
    document.exitFullscreen();
  }
}

// Monitorar mudanças no estado de Fullscreen
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    fullscreenBtn.textContent = "Sair do Fullscreen";
  } else {
    fullscreenBtn.textContent = "Entrar em Fullscreen";
  }
});

// Adicionar o evento de clique ao botão
fullscreenBtn.addEventListener("click", toggleFullscreen);

/*____________________________________________________________*/

// Função para mostrar o modal com uma mensagem
function showModal(message) {
  const modal = document.getElementById("custom-modal");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message; // Define a mensagem
  modal.style.display = "block"; // Mostra o modal
}

// Função para esconder o modal
function hideModal() {
  const modal = document.getElementById("custom-modal");
  modal.style.display = "none"; // Esconde o modal
}

// Fechar o modal ao clicar fora dele
window.addEventListener("click", function (event) {
  const modal = document.getElementById("custom-modal");
  if (event.target === modal) {
    hideModal();
  }
});
