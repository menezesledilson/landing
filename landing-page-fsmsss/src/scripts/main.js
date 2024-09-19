// Controla a exibição do menu de navegação
document.getElementById('menu-hamburguer').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    var overlay = document.getElementById('overlay');
    
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        overlay.classList.remove('active');
        
        setTimeout(function() {
            navbar.style.display = "none";
        }, 300);
    } else {
        navbar.style.display = "block";
        setTimeout(function() {
            navbar.classList.add('active');
            overlay.classList.add('active');
        }, 10);
    }
});

document.getElementById('overlay').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    var overlay = document.getElementById('overlay');
    
    navbar.classList.remove('active');
    overlay.classList.remove('active');

    setTimeout(function() {
        navbar.style.display = "none";
    }, 300);
});

// Controla o dropdown de idiomas
document.querySelector('.lang-button').addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o clique no botão feche o dropdown
    var dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Fecha o dropdown se clicar fora dele
document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    if (!event.target.closest('.lang-button, .dropdown')) {
        dropdown.style.display = 'none';
    }
});
