const serviceSelect = document.getElementById('service');
const priceDisplay = document.getElementById('price-display');

serviceSelect.addEventListener('change', () => {
  const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
  const price = selectedOption.getAttribute('data-price');
  if (price) {
    priceDisplay.textContent = `Price: ৳${Number(price).toLocaleString()} BDT`;
  } else {
    priceDisplay.textContent = '';
  }
});