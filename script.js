document.addEventListener('DOMContentLoaded', () => {

    const artistasData = [
        {name: 'Henrique e Juliano', Image:'./img/artista-henrique-juliano.jpg'},
        {name: 'Jorge & Metheus', Image:'./img/artista-jorge-mateus.jpg'},
        {name: 'Zé Neto & Cristiano', Image:'./img/artista-ze-neto.jpg'},
        {name: 'Gusttavo Lima', Image:'./img/artista-gustavo-limma.jpg'},
        {name: 'Luan Santana', Image:'./img/artista-luan-santana.jpg'},
        {name: 'Matheus & Kauan', Image:'./img/artista-mateus-kauan.jpg'}
    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg'},
        { name: 'O Céu Explica Tudo (ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg'},
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg'},
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg'},
        { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg'},
        { name: 'Escândalo Íntimo', artist: 'Luisa Sonza', image: './img/album-escandalo.jpg'}
    ]; 

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistasData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artists-card')

        artistCard.innerHTML = `
        <img src="${artist.Image}" alt="imagem do ${artist.name}">
        <div>
            <h3>${artist.name}</h3>
            <p>artista</p>
        </div>
        `

        artistGrid.appendChild(artistCard)
    })
    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
        <img src="${album.image}" alt="imagem do ${album.name}">
        <div>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        </div>
        `

        albumsGrid.appendChild(albumCard)
    })

})




