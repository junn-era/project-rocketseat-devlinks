function toggleMode() {
    
    const html = document.documentElement;
    html.classList.toggle('light');

    // pegar a tag img
    const img = document.querySelector('#profile img');
    const text = document.querySelector('#profile img');

    // substituir a imagem
    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png');
        text.setAttribute('alt', 'Foto de Francisco Júnior de óculos escuro e fundo branco');

    } else {
        // se não tiver light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png');
        text.setAttribute('alt', 'Foto de Francisco Júnior sorrindo, usando óculos e camisa preta, barba e fundo branco');
    }
}