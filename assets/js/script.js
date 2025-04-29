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

// barra de pesquisa
const searchToggle = document.getElementById('searchToggle');
const searcOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchToggle.addEventListener('click', () => {
    searcOverlay.style.display = 'flex';
    setTimeout(() => {
        searcOverlay.querySelector('.search-input').focus();
    }, 100);
})

// fechar o botão
closeSearch.addEventListener('click', () => {
    searcOverlay.style.display = 'none';
})

// fechar com o ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searcOverlay.style.display = 'none';
    }
})