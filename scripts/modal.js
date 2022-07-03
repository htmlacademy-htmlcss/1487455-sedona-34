document.addEventListener('DOMContentLoaded', function() {
  var modalButtons = document.querySelectorAll('.js-modal-open'),
      overlay      = document.querySelector('.modal-overlay'),
      closeButtons = document.querySelectorAll('.js-modal-close');

  /* открытие окон. */
  modalButtons.forEach(function(item){

     item.addEventListener('click', function(e) {

        e.preventDefault();

        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

        modalElem.classList.add('modal-active');
        overlay.classList.add('modal-active');

     }); // end click
  }); // end foreach

  /* закрытие окон */
  closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('modal-active');
      overlay.classList.remove('modal-active');
    });

  }); // end foreach

  /* закрытие по ESC */
  document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {
        document.querySelector('.modal.modal-active').classList.remove('modal-active');
        document.querySelector('.modal-overlay.modal-active').classList.remove('modal-active');
    };
  }, false);

  /* скрытие окна при клике на подложку */
  overlay.addEventListener('click', function() {
    document.querySelector('.modal.modal-active').classList.remove('modal-active');
    this.classList.remove('modal-active');
  });

}); // end ready
