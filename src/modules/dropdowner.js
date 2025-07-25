// @ts-check

class Dropdowner {
  #parentElement;
  #childMenu
  #menuHeader;

  /**
   * @constructor
   * @param {HTMLElement} parentElement 
   * */
  constructor(parentElement) {
    this.#parentElement = parentElement;
    this.#childMenu = this.#parentElement.children[0].children[0].nextElementSibling;
    this.#menuHeader = this.#parentElement.children[0].children[0];
    this.init();
    this.setupListeners();
  }

  init() {
    console.log(this.#parentElement.children[0])
    if (this.#childMenu instanceof HTMLElement && this.#menuHeader instanceof HTMLElement) {
      this.#childMenu.style.visibility = 'hidden';
      this.#childMenu.style.opacity = '0';
      this.#menuHeader.style.cursor = 'pointer';
    }
  }

  setupListeners() {
    this.#menuHeader.addEventListener('mouseenter', () => {
      if (this.#childMenu instanceof HTMLElement) {
        this.#childMenu.style.visibility = 'visible';
        this.#childMenu.style.opacity = '1';
      }
    });
      this.#menuHeader.addEventListener('mouseleave', () => {
        if (this.#childMenu instanceof HTMLElement) {
          this.#childMenu.style.visibility = 'hidden';
          this.#childMenu.style.opacity = '0';
        }
      });
  }

}

export default Dropdowner;
