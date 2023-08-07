export function auth() {
  let formLabelBuyer = document.querySelector('.auth__form-label--buyer');
  let formLabelAgent = document.querySelector('.auth__form-label--agent');

  let btnStep2 = document.querySelector('.js-btn-step2');
  let btnStep1 = document.querySelector('.js-btn-step1');

  let authLabel1 = document.querySelector('.auth__label-item-1');
  let authLabel2 = document.querySelector('.auth__label-item-2');

  let inputChecked = false;
  $('.auth__form-wrapper').slick({
    slideToShow: 1,
    dots: false,
    arrows: false,
    slideToScroll: 1,
    draggable: false,
    swipe: false,
    fade: false,
  });

  if(formLabelBuyer) {
    formLabelBuyer.addEventListener('click', () => {
      formLabelBuyer.classList.add('active');
      inputChecked = true;
      if(inputChecked) {
        btnStep2.classList.remove('disabled')
      }
      if(formLabelAgent.classList.contains('active')) {
        formLabelAgent.classList.remove('active')
      }
    })
  }

  if(formLabelAgent) {
    formLabelAgent.addEventListener('click', () => {
      formLabelAgent.classList.add('active')
      inputChecked = true;
      if(inputChecked) {
        btnStep2.classList.remove('disabled')
      }
      if(formLabelBuyer.classList.contains('active')) {
        formLabelBuyer.classList.remove('active')
      }
    })
  }

  if(btnStep2) {
    btnStep2.addEventListener('click', (e) => {
      e.preventDefault();
      // if(inputChecked) {
        authLabel1.classList.remove('active')
        authLabel2.classList.add('active')
        $('.auth__form-wrapper').slick('slickGoTo', 1);
      // }
    })
  }

  if(btnStep1) {
    btnStep1.addEventListener('click', (e) => {
      e.preventDefault();
      authLabel1.classList.add('active')
      authLabel2.classList.remove('active')
      $('.auth__form-wrapper').slick('slickGoTo', 0);
    })
  }

  // form Validation

  let inputNames = document.querySelectorAll('.auth__form-input-row input[name="name"]')
  let inputSurname = document.querySelectorAll('.auth__form-input-row input[name="surname"]')
  let inputThirdName = document.querySelectorAll('.auth__form-input-row input[name="thirdName"]')
  let inputEmail = document.querySelectorAll('.auth__form-input-row input[name="email"]')
  let inputPhone = document.querySelectorAll('.auth__form-input-row input[name="phone"]')
  let inputAgency = document.querySelectorAll('.auth__form-input-row input[name="agency"]')

  if(inputNames) {
    inputNames.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value
        if (value.length >= 2) {
          input.classList.add('validated');
        } else {
          input.classList.remove('validated');
        }
      })
    })
  }

  if(inputSurname) {
    inputSurname.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value
        if (value.length >= 2) {
          input.classList.add('validated');
        } else {
          input.classList.remove('validated');
        }
      })
    })
  }

  if(inputThirdName) {
    inputThirdName.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value
        if (value.length >= 5) {
          input.classList.add('validated');
        } else {
          input.classList.remove('validated');
        }
      })
    })
  }

  if(inputEmail) {
    inputEmail.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value
        if (value.length >= 5) {
          input.classList.add('validated');
        } else {
          input.classList.remove('validated');
        }
      })
    })
  }

  if(inputPhone) {
    inputPhone.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value
        console.log(e.target.value)
        if (value.length >= 5) {
          input.classList.add('validated');
        } else {
          input.classList.remove('validated');
        }
      })

      input.addEventListener('change', (e) => {
        let value = e.target.value
        console.log(e.target.value)
        if (value.length >= 5) {
          input.classList.add('validated');
        } else {
          input.classList.remove('validated');
        }
      })
    })
  }

  if(inputAgency) {
    inputAgency.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value
        if (value.length >= 2) {
          input.classList.add('validated');
        } else {
          input.classList.remove('validated');
        }
      })
    })
  }

  document.addEventListener('keydown', (e) => {
    let inputWrappers = document.querySelectorAll('.auth__form-inputs-wrapper')
    if(inputWrappers) {
      inputWrappers.forEach(item => {
        let sum = item.querySelectorAll('input.validated');
        let length = sum.length
        if(length === 6) {
          item.closest('.auth__form').querySelector('.btn__send').classList.remove('disabled')
        } else {
          item.closest('.auth__form').querySelector('.btn__send').classList.add('disabled')
        }
      })
    }
  })

  $(document).ready(function () {
    $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99",
      "oncomplete": function(e) {
        this.classList.add('validated');
        var inputmaskValue = this.inputmask.unmaskedvalue();
        // console.log(inputmaskValue.length);
      },

      "onincomplete": function (e) {
        this.classList.remove('validated');
      },

      "onclear": function (e) {
        this.classList.remove('validated');
      },
    });
  });




}
