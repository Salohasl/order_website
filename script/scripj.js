//Кнопка всплытия
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то  кнопка видна, иначе скрыть
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();

    /* Для всплывающего окна */ 
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.media-flex');
menuBtn.addEventListener('click', () =>{
  menuBtn.classList.toggle('active');
  menu.classList.toggle('popUp');
});

// ДЛЯ ПОКАЗА ТЕКСТА В ТАБЛИЦЕ
const pOne = document.querySelector('.table_p-one');
const pTwo = document.querySelector('.table_p-two');
const pThree = document.querySelector('.table_p-three');

const clickOne = document.querySelector('#clickOne').addEventListener('click', ()=>{
  pOne.classList.toggle('activeOne');
  pTwo.classList.remove('activeTwo');
  pThree.classList.remove('activeThree');
})
const clickTwo = document.querySelector('#clickTwo').addEventListener('click', ()=>{
  pTwo.classList.toggle('activeTwo');
  pOne.classList.remove('activeOne');
  pThree.classList.remove('activeThree');
})
const clickThree = document.querySelector('#clickThree').addEventListener('click', ()=>{
  pThree.classList.toggle('activeThree');
  pTwo.classList.remove('activeTwo');
  pOne.classList.remove('activeOne');
})







