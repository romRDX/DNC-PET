const PET_CARDS = [
  {
    img: "./assets/item-1.png",
    paragraph: "Ração Tchei para cachorro belga grande porte - 600 g",
    price: "R$ 20,90",
  },
  {
    img: "./assets/item-2.png",
    paragraph: "Ração Tchei para cachorro belga grande porte - 300 g",
    price: "R$ 30,90",
  },
  {
    img: "./assets/item-1.png",
    paragraph: "Ração Tchei para cachorro belga grande porte - 600 g",
    price: "R$ 40,90",
  },
  {
    img: "./assets/item-2.png",
    paragraph: "Ração Tchei para cachorro belga grande porte - 300 g",
    price: "R$ 50,90",
  },
];

let carousel_li = document.querySelectorAll('.itens-carousel li');
let first_card = document.querySelector('#first-card');
let index = 0;

function slide(value){

  if((value == 1) && (index == carousel_li.length -1)){
    return;
  }

  if((value == -1) && (index == 0)){
    return;
  }

  index = index + value;
  first_card.style.marginLeft = `-${index * 284}px`;
}

let variation = 1;

setInterval(() => {

  if(index == carousel_li.length -1){
    variation = -1;
  }

  if(index == 0){
    variation = 1;
  }

  slide(variation);
}, 6000);

let modal = document.querySelector('#modal');

function showModal() {

  modal.innerHTML = `
    <div class="modal-card">
      <button onclick="closeModal()">
        <img src="./assets/close-btn.png" alt="close-button" />
      </button>

      <img src="${PET_CARDS[index].img}" />

      <p>
        ${PET_CARDS[index].paragraph}
      </p>

      <span>
        ${PET_CARDS[index].price}
      </span>

      <button>Quero Comprar!</button>
    </div>
  `

  modal.style.visibility = 'visible';
}

function closeModal() {
  modal.style.visibility = 'hidden';
  modal.innerHTML = '';
}