export function profile() {

  const form = document.querySelector('.profile__form')
  if(form) {
    const pwChangeBtn = form.querySelector('.profile__password-change');
    const oldPw = form.querySelector('.profile__password-old');
    const newPw = form.querySelector('.profile__password-new');
    const newPwRepeat = form.querySelector('.profile__password-new-repeat');

    const olPwError = form.querySelector('.old__pw-error')
    const newPwError = form.querySelector('.new__password-error')

    const requiredPw = 'Поле обязательно для заполнения'
    const notEnoughSymbols = 'Минимальная длина пароля 6 символов'
    const notEqualsPwLength = 'Длина пароля не совпадает'
    const notEqualsPw = 'Значения паролей не совпадают'

    if (pwChangeBtn) {
      pwChangeBtn.addEventListener('click', (e) => {
        let validateCounter = 0;
        e.preventDefault();

        const olPwErrorWrp = olPwError.closest('.profile__password-input').querySelector('input')
        const newPwErrorWrp = newPwError.closest('.profile__password-input').querySelector('input')
        if (oldPw.value.length < 6 && oldPw.value.length !== 0) {
          olPwErrorWrp.classList.add('error')
          olPwError.textContent = notEnoughSymbols;
          validateCounter++;
        } else if (oldPw.value.length === 0) {
          olPwErrorWrp.classList.add('error')
          olPwError.textContent = requiredPw;
          validateCounter++;
        }
        else {
          olPwError.closest('.profile__password-input').querySelector('input').classList.remove('error')
          olPwError.textContent = '';
        }

        if (newPw.value.length < 6 && newPw.value.length > 0 || newPwRepeat.value.length < 6 && newPwRepeat.value.length > 0) {
          newPwErrorWrp.classList.add('error')
          newPwError.textContent = notEnoughSymbols;
          validateCounter++;
        } else if (newPw.value.length === 0 && newPwRepeat.value.length === 0) {
          newPwErrorWrp.classList.add('error')
          newPwError.textContent = requiredPw;
          validateCounter++;
        } else if (newPw.value.length === newPwRepeat.value.length && newPw.value !== newPwRepeat.value) {
          newPwErrorWrp.classList.add('error')
          newPwError.textContent = notEqualsPw;
          validateCounter++;
        } else if (newPw.value.length !== newPwRepeat.value.length) {
          newPwErrorWrp.classList.add('error')
          newPwError.textContent = notEqualsPwLength;
          validateCounter++;
        }
        else {
          newPwError.textContent = '';
          newPwError.closest('.profile__password-input').querySelector('input').classList.remove('error')
        }

        if (validateCounter === 0) {
          pwChangeBtn.classList.add('success-changed');
          pwChangeBtn.textContent = 'Пароль успешно изменен!'
          var data = $(form).serialize();
          $.ajax({
            url: '#',
            type: 'POST',
            data: data,
            success: function(response) {
              console.log(response)
            },
            error: function(xhr, status, error) {
              console.log(status)
            }
          });
        }
      })
    }


    const passwordViewBtns = form.querySelectorAll('.password-view');
    if (passwordViewBtns) {
      passwordViewBtns.forEach(passwordViewBtn => {
        passwordViewBtn.addEventListener('click', () => {
          let input = passwordViewBtn.previousSibling;
          if (passwordViewBtn.previousSibling.getAttribute('type') == 'password') {
            passwordViewBtn.classList.add('view');
            input.setAttribute('type', 'text');
          } else {
            passwordViewBtn.classList.remove('view');
            input.setAttribute('type', 'password');
          }
        })
      })
    }
  }
}
