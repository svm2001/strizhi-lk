export function notification() {

  const unreadItems = document.querySelectorAll('.notification__item.unread');
  let length = unreadItems.length
  let label = document.querySelector('.auth__label-item-2 .notification__counter')
  if(label) {
    label.textContent = length;
  }

  if(unreadItems) {
    unreadItems.forEach(unreadItem => {
      const triggerBtn = unreadItem.querySelector('.btn__openRead');
      const readBtn = unreadItem.querySelector('.btn__read');
      const container = unreadItem.querySelector('.notification__item-content-wrp')

      if(triggerBtn) {
        triggerBtn.addEventListener('click', () => {
          triggerBtn.classList.add('hidden');
          readBtn.classList.add('visible');
          container.classList.add('scrollable');
        })
      }

      if(container) {
        container.addEventListener('click', (e) => {
          if(container.classList.contains('scrollable')) {
            triggerBtn.classList.remove('hidden');
            readBtn.classList.remove('visible');
            container.classList.remove('scrollable');
          }
        })
      }

      if(readBtn) {
        readBtn.addEventListener('click', () => {
          triggerBtn.remove();
          readBtn.remove();
          container.classList.remove('scrollable');
          unreadItem.classList.remove('unread');
          length--;
          label.textContent = length;
          if(length === 0) {
            label.style.display = 'none';
          }
        })
      }
    })
  }
}
