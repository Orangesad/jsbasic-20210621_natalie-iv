export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.card = '';
  }

  get elem() {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.card.innerHTML = `
      <div class="card__top">
        <img src="./../../assets/images/products/${this.product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
          <img src="./../../assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;
    let button = this.card.getElementsByClassName('card__button')[0];
    button.addEventListener('click', () => {
      let event = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      });
      document.body.dispatchEvent(event);
    });
    return this.card;
  }
}
