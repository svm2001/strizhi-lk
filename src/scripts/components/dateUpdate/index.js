export function dateUpdate() {
  let dateupdateBtns = document.querySelectorAll('.date-update');
  if(dateupdateBtns) {
    dateupdateBtns.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('updated')
      })
    })
  }
}
