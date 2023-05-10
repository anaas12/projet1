

// Sélectionnez tous les boutons "Ajouter au panier"
const addCartButtons = document.querySelectorAll('.add-cart');

// Parcourez tous les boutons et ajoutez un gestionnaire d'événements
addCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Fonction pour ajouter le produit au panier
function addToCart(event) {
  const button = event.target; // Le bouton qui a été cliqué
  const product = button.closest('.products-box'); // Le produit correspondant

  const productTitle = product.querySelector('.product-title').textContent;
  const productPrice = product.querySelector('.price').textContent;

  // Créer une nouvelle ligne de produit dans le panier
  const cartRow = document.createElement('div');
  cartRow.classList.add('cart-box');

  const cartItems = document.querySelector('.cart-content');
  const cartItemNames = cartItems.querySelectorAll('.cart-product-title');
  // Vérifier si le produit est déjà dans le panier
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].textContent == productTitle) {
      alert('Ce produit est déjà ajouté au panier');
      return;
    }
  }

  // Contenu HTML de la nouvelle ligne de produit dans le panier
  const cartRowContents = `
    <img src="${product.querySelector('.product-img').src}" alt="" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title">${productTitle}</div>
      <div class="cart-price">${productPrice}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>`;

  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);

  updateCartTotal();
}

// Fonction pour mettre à jour le total du panier
function updateCartTotal() {
  const cartItemContainer = document.querySelector('.cart-content');
  const cartRows = cartItemContainer.querySelectorAll('.cart-box');

  let total = 0;
  // Parcourir toutes les lignes de produit du panier
  cartRows.forEach(cartRow => {
    const priceElement = cartRow.querySelector('.cart-price');
    const quantityElement = cartRow.querySelector('.cart-quantity');
    const price = parseFloat(priceElement.textContent.replace('$', ''));
    const quantity = quantityElement.value;
    total = total + (price * quantity);
  });

  // Mettre à jour l'affichage du total du panier
  document.querySelector('.total-price').textContent = '$' + total.toFixed(2);
}


