export function popupValidate() {
  const profileSuccessMessage = document.querySelector('.profile__success-message')
  const changeAgencyBtn = document.querySelector('.js-change-agency');
  const changeAgencyInput = document.querySelector('.profile__change-agency-textarea');

  const supportSuccessMessage = document.querySelector('.support__success-message')
  const supportSendBtn = document.querySelector('.js-support-btn-send');
  const supportInput = document.querySelector('.support__textarea');

  if(changeAgencyBtn) {
    changeAgencyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if(changeAgencyInput.value.length>= 2) {
        changeAgencyBtn.closest('form').style.display = 'none';
        profileSuccessMessage.style.display = 'block';
        console.log('1')
      }
    })
  }

  if(supportSendBtn) {
    supportSendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if(supportInput.value.length>= 5) {
        supportSendBtn.closest('form').style.display = 'none';
        supportSuccessMessage.style.display = 'block';
        console.log('2')
      }
    })
  }
}
