const countB = document.getElementById('count');
const plusB = document.getElementById('plus');
const minusB = document.getElementById('minus');

let counter = 0;

plusB.addEventListener('click', () => {
  counter = counter + 1;
  countB.textContent = counter;

  if(counter >= 10){
    plusB.setAttribute('disabled',true);
  }

  else{
    plusB.removeAttribute('disabled',false);
  }

});

minusB.addEventListener('click', () => {
  counter = counter - 1;
  counter.textContent = counter;

  if(counter <= 0){
    minusB.setAttribute('disabled',true);
  }
  else{
    minusB.removeAttribute('disabled',false);
  }


});