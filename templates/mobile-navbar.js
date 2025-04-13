/**
 * Classe MobileNavbar - Responsável pelo controle do menu de navegação mobile
 */
class MobileNavbar {
    /**
     * Construtor da classe - Inicializa os elementos e configurações
     * @param {string} mobileMenu - Seletor CSS do botão do menu mobile
     * @param {string} navList - Seletor CSS da lista de navegação
     * @param {string} navLinks - Seletor CSS dos itens do menu
     */
    constructor(mobileMenu, navList, navLinks) {
        // Elemento do botão do menu hamburguer
        this.mobileMenu = document.querySelector(mobileMenu);
        // Elemento da lista de navegação (ul/ol)
        this.navList = document.querySelector(navList);
        // NodeList com todos os itens do menu (li)
        this.navLinks = document.querySelectorAll(navLinks);
        // Classe CSS que será usada para ativar/desativar o menu
        this.activeClass = "active";

        // Faz o bind do this para manter o contexto da classe
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Método animateLinks - Controla a animação dos links do menu
     * Alterna entre aplicar e remover a animação dos links
     */
    animateLinks() {
        // Percorre cada link do menu
        this.navLinks.forEach((link, index) => {
            // Verifica se o link já tem animação aplicada
            if (link.style.animation) {
                // Se tiver, remove a animação (para quando o menu fecha)
                link.style.animation = "";
            } else {
                // Se não tiver, aplica a animação com um delay progressivo
                // Cada link tem um delay ligeiramente maior que o anterior
                // Isso cria o efeito de "cascata" quando o menu abre
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    /**
     * Método handleClick - Manipulador do evento de clique no menu mobile
     * Controla a abertura/fechamento do menu
     */
    handleClick() {
        // Alterna a classe active na lista de navegação (mostra/esconde o menu)
        this.navList.classList.toggle(this.activeClass);
        // Alterna a classe active no botão do menu (para mudar o ícone)
        this.mobileMenu.classList.toggle(this.activeClass);
        // Aciona a animação dos links
        this.animateLinks();
    }

    /**
     * Método addClickEvent - Adiciona o listener de clique ao botão do menu
     */
    addClickEvent() {
        // Adiciona o evento de clique que chamará handleClick
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    /**
     * Método init - Inicializa a funcionalidade do menu mobile
     * @returns {object} Retorna a instância para permitir method chaining
     */
    init() {
        // Verifica se o elemento do menu mobile existe
        if (this.mobileMenu) {
            // Se existir, adiciona o evento de clique
            this.addClickEvent();
        }
        // Retorna a instância para permitir encadeamento de métodos
        return this;
    }
}

// Cria uma instância do MobileNavbar com os seletores CSS necessários
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",  // Seletor do botão do menu hamburguer
    ".nav-list",     // Seletor da lista de navegação
    ".nav-list li",  // Seletor dos itens do menu
);

// Inicializa o menu mobile
mobileNavbar.init();