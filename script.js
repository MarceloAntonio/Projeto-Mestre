function mostrarGato() {
  // Chamar a API para obter uma imagem de gato aleatória
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      const urlImagem = data[0].url
      exibirImagem(urlImagem)
    })
}

function exibirImagem(url) {
  // Criar elemento de imagem e definir a URL
  const imagem = document.createElement("img")
  imagem.src = url

  // Limpar o conteúdo anterior e adicionar a nova imagem
  const divImagem = document.getElementById("imagemGato")
  divImagem.innerHTML = ""
  divImagem.appendChild(imagem)
}

function darblur() {
  const imagem = document.getElementById("imagemGato")

  const blurAtual = imagem.style.filter || getComputedStyle(imagem).filter

  if (blurAtual.includes("blur")) {
    imagem.style.filter = "none"
  } else {
    imagem.style.filter = "blur(8px)"
  }
}
