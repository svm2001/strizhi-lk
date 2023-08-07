export function itemsCounter() {
  let items = document.querySelectorAll('.deals__item');
  let itemsCounter = document.querySelector('.deals__num span')
  if(items && itemsCounter) {
    itemsCounter.textContent = items.length;
  }
}
