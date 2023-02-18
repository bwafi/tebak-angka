// player number
const button = document.querySelector('#button-addon2');
const numberPlayer = document.querySelector('.input-number');

button.addEventListener('click', e => {
  // number Comp
  let numberComp = Math.floor(Math.random() * 10) + 1;
  let inputNumber = parseInt(numberPlayer.value);
  const alert = document.querySelector('.row-alert');
  if (inputNumber > 10) {
    alert.innerHTML = alertMaxLength();
  } else if (inputNumber == numberComp) {
    alert.innerHTML = alertSuccess(inputNumber, numberComp);
  } else if (inputNumber > numberComp) {
    alert.innerHTML = alertGreater(inputNumber, numberComp);
  } else if (inputNumber < numberComp) {
    alert.innerHTML = alertSmaller(inputNumber, numberComp);
  }
});

// alert
function alertMaxLength() {
  return `<div class="alert alert-danger mt-1 mx-auto alert-dismissible fade show" role="alert" id="actionAlert">
       Hanya masukan angka 1-10, Coba lagi..
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
}

function alertSuccess(inputNumber, numberComp) {
  return `<div class="alert alert-success mt-1 mx-auto alert-dismissible fade show" role="alert" id="actionAlert">
       Yeay kamu benar ${inputNumber}, angka computer adalah ${numberComp}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
}

function alertGreater(inputNumber, numberComp) {
  return `<div class="alert alert-warning mt-1 mx-auto alert-dismissible fade show" role="alert" id="actionAlert">
       angka ${inputNumber} terlalu besar, angka computer adalah ${numberComp}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
}

function alertSmaller(inputNumber, numberComp) {
  return `<div class="alert alert-warning mt-1 mx-auto alert-dismissible fade show" role="alert" id="actionAlert">
       angka ${inputNumber} terlalu kecil, angka computer adalah ${numberComp}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
}
