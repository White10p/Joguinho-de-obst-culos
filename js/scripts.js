const personagem = document.querySelector("#personagem");
const quadrado = document.querySelector("#quadrado");

function pular() {
  if (personagem.classList != "animar") {
    personagem.classList.add("animar");
  }

  setTimeout(function () {
    personagem.classList.remove("animar");
  }, 500);
}

let testarColisao = setInterval(function () {
  const topoPersonagem = parseInt(
    window.getComputedStyle(personagem).getPropertyValue("top")
  );
  const Esquerdaquadrado = parseInt(
    window.getComputedStyle(quadrado).getPropertyValue("left")
  );
  if (Esquerdaquadrado < 20 && Esquerdaquadrado > 0 && topoPersonagem >= 130) {
    quadrado.style.animation = "none";
    quadrado.style.display = "none";
    alert("Você perdeu!");
  }
}, 10);
