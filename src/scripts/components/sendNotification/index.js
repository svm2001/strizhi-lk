export function sendNotification() {
  const sendNotificationBtnMain = document.querySelectorAll('.sendNotification__btn');
  const sendNotification = document.querySelector('.sendNotification');
  const sendNotification2 = document.querySelector('.sendNotification__step-2');
  const sendNotification2InputTel = document.querySelector('.sendNotification__step-2 input[type="tel"]');
  const sendNotificationCheckBtn = document.querySelector('.sendNotification .sendNotification__checkBtn');
  const sendNotificationReturnBack = document.querySelectorAll('.sendNotification__step-2 .link__orange');
  const sendNotificationSend = document.querySelector('.sendNotification__step-2 button.btn__orange');
  const sendNotificationClose = document.querySelector('.sendNotification__step-2 .sendNotification__close');
  const sendNotificationCloseMob = document.querySelectorAll('.sendNotification__top-close');
  const body = document.querySelector('body')

  if(sendNotificationBtnMain) {
    $(document).ready(function () {
      $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99",
        "oncomplete": function(e) {
          this.classList.add('validated');
          let inputmaskValue = this.inputmask.unmaskedvalue();
          sendNotificationCheckBtn.addEventListener('click', () => {
            if(inputmaskValue.length === 10) {
              sendNotification2InputTel.value = inputmaskValue;
              sendNotification.classList.remove('visible')
              sendNotification2.classList.add('visible');
              if(window.innerWidth <= 680) {
                body.classList.add('lock')
              }
            }
          })
        }
      });
    });

    function successValidate() {
      sendNotification2.querySelector('form').style.display = 'none';
      sendNotification2.querySelector('.sendNotification__title').style.display = 'none';
      sendNotification2.querySelector('.sendNotification__text').style.marginBottom = 0;
      sendNotification2.querySelector('.sendNotification__new-client').style.display = 'block';
      sendNotification2.querySelector('.sendNotification__close').style.display = 'block';
      sendNotification2.classList.add('sended');
    }

    function resetForm() {
      sendNotification2.classList.remove('visible');
      sendNotification.querySelector('input').value = '';
      sendNotification2.querySelector('form').style.display = 'block';
      sendNotification2.querySelector('.sendNotification__title').style.display = 'block';
      sendNotification2.querySelector('.sendNotification__text').style.marginBottom = 16 + "px";
      sendNotification2.querySelector('.sendNotification__new-client').style.display = 'none';
      sendNotification2.querySelector('.sendNotification__close').style.display = 'none';
      sendNotification2.querySelectorAll('input').forEach(item => {
        item.value = '';
      })
      sendNotification2.classList.remove('sended');
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sendNotification') && !e.target.closest('.sendNotification__step-2')) {
        sendNotification.classList.remove('visible');
        sendNotification2.classList.remove('visible');
        console.log(e.target)
        if(window.innerWidth <= 680) {
          body.classList.remove('lock')
        }
        if(e.target.classList.contains('sendNotification__btn')) {
          sendNotification.classList.add('visible');
          if(window.innerWidth <= 680) {
            body.classList.add('lock')
          }
        }
        sendNotification.querySelector('input').value = '';
        sendNotification2.querySelectorAll('input').forEach(item => {
          item.value = '';
        })
        sendNotification2.querySelector('textarea').value = '';
        if(sendNotification2.classList.contains('sended')) {
          resetForm();
        }
      }

      if(e.target === sendNotificationBtnMain) {
        sendNotification.classList.add('visible')
        console.log('1')
        if(window.innerWidth <= 680) {
          body.classList.add('lock')
        }
      }
    })

    sendNotificationBtnMain.forEach(item => {
      item.addEventListener('click', () => {
        sendNotification.classList.add('visible');
        console.log('3')
        if(window.innerWidth <= 680) {
          body.classList.add('lock')
        }
      })
    })

    sendNotificationReturnBack.forEach(item => {
      item.addEventListener('click', (e) => {
        sendNotification.classList.add('visible');
        sendNotification2.classList.remove('visible');
      })
    })


    function sendNotificationValidate() {
      let name = document.querySelector('.sendNotification__step-2 input[name="sendNotification_name"]')
      if (name.value.length >= 2) {
        successValidate();
      } else {
        name.classList.add('error')
      }
    }

    sendNotificationSend.addEventListener('click', (e) => {
      e.preventDefault();
      sendNotificationValidate();
    })

    if(sendNotificationClose) {
      sendNotificationClose.addEventListener('click', (e) => {
        resetForm();
        if(window.innerWidth <= 680) {
          body.classList.remove('lock')
        }
      })
    }

    if(sendNotificationCloseMob) {
      sendNotificationCloseMob.forEach(item => {
        item.addEventListener('click', (e) => {
          sendNotification.classList.remove('visible');
          resetForm();
          if(window.innerWidth <= 680) {
            body.classList.remove('lock')
          }
        })
      })
    }
  }
}
