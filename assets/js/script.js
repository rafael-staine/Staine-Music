// Dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function() {
            const parent = this.closest('.dropdown-item');
            console.log('teste');
            parent.classList.toggle('active');
        })
    })
    
    // Fechar o dropdown ao clicar fora
    document.addEventListener('click', function (e) {
        dropdownToggle.forEach((toggle) => {
            const parent = toggle.closest('.dropdown-item');
            if (!parent.contains(e.target)) {
                parent.classList.remove('active');
            } 
        })
    })
})

// Barra de pesquisa
const searchToggle = document.getElementById('searchToggle');
const searcOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchToggle.addEventListener('click', () => {
    searcOverlay.style.display = 'flex';
    setTimeout(() => {
        searcOverlay.querySelector('.search-input').focus();
    }, 100);
})

// Fechar o botão
closeSearch.addEventListener('click', () => {
    searcOverlay.style.display = 'none';
})

// Fechar com o ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searcOverlay.style.display = 'none';
    }
})

// Galeria
const imagens = document.querySelectorAll('.galeria img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

imagens.forEach((img) => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
    })
})

// Esconder o Lightbox
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
})

// Abrir o login
const openLoginBtn = document.getElementById('openLogin')
const containerLogin = document.querySelector('.container-login')

openLoginBtn.addEventListener('click', () => {
    containerLogin.classList.add('active')
})

// Fechar ao clicar fora do formulário ao precionar ESC
containerLogin.addEventListener('click', (e) => {
    if(e.target === containerLogin) {
        containerLogin.classList.remove('active')
    }
})
    
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        containerLogin.classList.remove('active')
    }
})  