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

   