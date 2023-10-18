
/// Отлавливание закрятия сайта
/*window.onbeforeunload = function() {
    return "Данные не сохранены. Точно перейти?";
  };*/

const videoCard = document.getElementById('video-card');      //Для показа видеокарт
const blockNvidia = document.querySelector('.select-nvidia');
const blockAmd = document.querySelector('.select-amd');            
const blockIntel = document.querySelector('.select-intel');
videoCard.addEventListener('change', ()=>{
    if(videoCard.value === 'NVIDIA'){
        blockNvidia.classList.add('activeNvidia');
    }else{
        blockNvidia.classList.remove('activeNvidia');
    };
    if(videoCard.value === 'AMD'){
        blockAmd.classList.add('activeAmd');
    }else{
        blockAmd.classList.remove('activeAmd');
    };
    if(videoCard.value === 'INTEL'){
        blockIntel.classList.add('activeIntel');
    }else{
        blockIntel.classList.remove('activeIntel');
    };
});

//Для выбора чекбокса Синхронизация подсветки всех устройств
const checkboxEit = document.getElementById('checkboxEit');
const checkboxOne = document.getElementById('checkboxOne');
const checkboxTwo = document.getElementById('checkboxTwo');
const checkboxThree = document.getElementById('checkboxThree');

const oneLabel = document.querySelector('.checkboxOne-color');
const twoLabel = document.querySelector('.checkboxTwo-color');
const threeLabel = document.querySelector('.checkboxThree-color');
const eitLabel = document.querySelector('.checkboxEit-color');

const service = document.getElementById('service'); //форма 

const checkboxArr = [];
function checkboxClear() {

    checkboxOne.addEventListener('click',()=>{
        if(checkboxOne.checked == true){
            checkboxArr.push(oneLabel.textContent);
            let set = new Set(checkboxArr);
            let res = [...new Set(checkboxArr)]
            service.textContent = res;
        }else{ 
            checkboxEit.checked = false;        
            eitLabel.classList.remove('yellow');
        };
        
    }); 
    checkboxTwo.addEventListener('click',()=>{
        if(checkboxTwo.checked == true){
            checkboxArr.push(twoLabel.textContent);
            let set = new Set(checkboxArr);
            let res = [...new Set(checkboxArr)]
            service.textContent = res;
        }else{
            service.textContent = '' + oneLabel.textContent;
            checkboxEit.checked = false;
            eitLabel.classList.remove('yellow');
        };
        
    });
    checkboxThree.addEventListener('click',()=>{
        if(checkboxThree.checked == true){
            checkboxArr.push(threeLabel.textContent);
            let set = new Set(checkboxArr);
            let res = [...new Set(checkboxArr)]
            service.textContent = res;
        }else{ 
            checkboxEit.checked = false;
            eitLabel.classList.remove('yellow');
        };
    });
    checkboxEit.addEventListener('click', function clearckeched(){
        if(checkboxOne.checked && checkboxTwo.checked && checkboxThree.checked){
            eitLabel.classList.add('yellow');
            checkboxArr.push(eitLabel.textContent);
            let set = new Set(checkboxArr);
            let res = [...new Set(checkboxArr)]
            service.textContent = res;
        }else{
            alert('Выберите всю подсветку')
            checkboxEit.checked = false;
            eitLabel.classList.remove('yellow');
            service.textContent = 'Для выбора в подсветке 4 пункта, нужно выбрать все';
        };
        if(checkboxEit.checked == false){
            service.textContent = 'Для выбора в подсветке 4 пункта, нужно выбрать все';
        }
    });
    return checkboxClear;
};
checkboxClear();

//ДЛЯ ВЫБОРА В ФОРМУ КАСТОМИЗАЦИИ
const checkboxFour = document.getElementById('checkboxFour');
const checkboxFive = document.getElementById('checkboxFive');
const checkboxSix = document.getElementById('checkboxSix');
const checkboxSeven = document.getElementById('checkboxSeven');

const fourLabel = document.querySelector('.checkboxFour-color');
const fiveLabel = document.querySelector('.checkboxFive-color');
const sixLabel = document.querySelector('.checkboxSix-color');
const sevenLabel = document.querySelector('.checkboxSeven-color');

const castom = document.getElementById('castom'); //форма

const checkboxtwoArr = [];

function checkboxForm() {

    checkboxFour.addEventListener('click',()=>{
        if(checkboxFour.checked == true){
            checkboxtwoArr.push(fourLabel.textContent);
            let set = new Set(checkboxtwoArr);
            let res = [...new Set(checkboxtwoArr)]
            castom.textContent = res;
        }
    }); 
    checkboxFive.addEventListener('click',()=>{
        if(checkboxFive.checked == true){
            checkboxtwoArr.push(fiveLabel.textContent);
            let set = new Set(checkboxtwoArr);
            let res = [...new Set(checkboxtwoArr)]
            castom.textContent = res;
        }
    }); 
    checkboxSix.addEventListener('click',()=>{
        if(checkboxSix.checked == true){
            checkboxtwoArr.push(sixLabel.textContent);
            let set = new Set(checkboxtwoArr);
            let res = [...new Set(checkboxtwoArr)]
            castom.textContent = res;
        }
    }); 
    checkboxSeven.addEventListener('click',()=>{
        if(checkboxSeven.checked == true){
            checkboxtwoArr.push(sevenLabel.textContent);
            let set = new Set(checkboxtwoArr);
            let res = [...new Set(checkboxtwoArr)]
            castom.textContent = res;
        }
    }); 
    return checkboxForm;
};
checkboxForm();






//ПОДСЧЕТ ИТОГОВОЙ ЦЕНЫ
const cpu = document.getElementById('cpu');
const ram = document.getElementById('ram')
const ssd = document.getElementById('ssd');

const nvidia = document.getElementById('nvidia');
const amd = document.getElementById('amd');
const result = document.getElementById('result');

function calculatorSelect(){

    result.addEventListener('click', resultat);

    function resultat(){
        result.style.textDecoration ='none';
        if(cpu.value == 'Не выбрано' && ram.value == 'Не выбрано' && ssd.value == 'Не выбрано' && videoCard.value =='Не выбрано'){
            alert('Выберите все компоненты');
        };
        cpu.addEventListener('change',()=>{
            result.textContent = Number(nvidia.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
            if(cpu.value == 'Не выбрано'){
                result.textContent = 'Выберите все...';
                result.removeEventListener('click', resultat);
            }
        });
        ram.addEventListener('change',()=>{
            result.textContent = Number(nvidia.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
            if(ram.value == 'Не выбрано'){
                result.textContent = 'Выберите все...';
                result.removeEventListener('click', resultat);
            }
        });
        ssd.addEventListener('change',()=>{
            result.textContent = Number(nvidia.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
            if(ssd.value == 'Не выбрано'){
                result.textContent = 'Выберите все...';
                result.removeEventListener('click', resultat);
            }
        });
        videoCard.addEventListener('change', ()=>{
            if(videoCard.value === 'Не выбрано'){
                result.textContent = 'Выберите все...';
                result.removeEventListener('click', resultat);
            };
            if(videoCard.value === 'NVIDIA'){
                nvidia.addEventListener('change', ()=>{
                    result.textContent = Number(nvidia.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
                    if(nvidia.value == 'Не выбрано'){
                        result.textContent = 'Выберите все...';
                        result.removeEventListener('click', resultat);
                    }
                })
            };
            if(videoCard.value === 'AMD'){
                amd.addEventListener('change', ()=>{
                    result.textContent = Number(amd.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
                    if(amd.value == 'Не выбрано'){
                        result.textContent = 'Выберите все...';
                        result.removeEventListener('click', resultat);
                    };
                });
            };
        });
        if(videoCard.value == 'NVIDIA'){
            result.textContent = Number(nvidia.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
        };
        if(videoCard.value == 'AMD'){
            result.textContent = Number(amd.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
        };
        return resultat;
    };
}calculatorSelect();


///Всплытие ЗАКАЗА
const configButton = document.getElementById('configButton');
const container = document.querySelector('.container');
const containerConfig = document.querySelector('.container-config');

configButton.addEventListener('click', ()=>{
   if(cpu.value == 'Не выбрано' || ram.value == 'Не выбрано' || ssd.value == 'Не выбрано' || videoCard.value =='Не выбрано' || result.textContent == 'Выберите все...'){
        alert('Выберите все из выпадающего списка');
    }else{

        if (confirm('Вы уверены в своем выборе?')) {
            alert('Оформите заявку и с вами свяжутся в ближайшее время');
            container.classList.add('activeContainer');
            containerConfig.style.display = 'none';
            configButton.style.display ='none';
        } else {
            alert('Если есть вопросы, напишите или позвоните.' );
            container.classList.remove('activeContainer');
        }
    };
});
//Закрытие заказа
const closeForm = document.querySelector('.close-form');
closeForm.addEventListener('click',()=>{
    container.classList.toggle('activeContainer');
    configButton.style.display ='block';
    containerConfig.style.display = 'block';
})
//ПОКАЗ ЗАКАЗА В ФОРМЕ ОТПРАВКИ;
const message = document.getElementById('message');

function textMessage(){
    document.addEventListener("DOMContentLoaded",function(){

        videoCard.addEventListener('change', function(){
            if(videoCard.value === 'AMD'){
                configButton.addEventListener('click',function(){
                    message.textContent = cpu.options[cpu.selectedIndex].text + ' , ' + ram.options[ram.selectedIndex].text
                    + ' , ' + ssd.options[ram.selectedIndex].text + ' , ' + amd.options[amd.selectedIndex].text;
                });
            };
            if(videoCard.value === 'NVIDIA'){
                configButton.addEventListener('click',function(){
                    message.textContent = cpu.options[cpu.selectedIndex].text + ' , ' + ram.options[ram.selectedIndex].text
                    + ' , ' + ssd.options[ram.selectedIndex].text + ' , ' + nvidia.options[nvidia.selectedIndex].text;
                });
            };
        });
    return textMessage;
});
};textMessage();








