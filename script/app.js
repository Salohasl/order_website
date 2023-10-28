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
        };
        
    }); 
    checkboxTwo.addEventListener('click',()=>{
        if(checkboxTwo.checked == true){
            checkboxArr.push(twoLabel.textContent);
            let set = new Set(checkboxArr);
            let res = [...new Set(checkboxArr)]
            service.textContent = res;
        };
        
    });
    checkboxThree.addEventListener('click',()=>{
        if(checkboxThree.checked == true){
            checkboxArr.push(eitLabel.textContent);
            let set = new Set(checkboxArr);
            let res = [...new Set(checkboxArr)]
            service.textContent = res;
        };
    });
    checkboxEit.addEventListener('click', function clearckeched(){
        if(checkboxEit.checked == true){
            checkboxArr.push(eitLabel.textContent);
            let set = new Set(checkboxArr);
            let res = [...new Set(checkboxArr)]
            service.textContent = res;
        };
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

//ПОКАЗ ЗАКАЗА В ФОРМЕ ОТПРАВКИ;
const message = document.getElementById('message');

function textMessage(){
    document.addEventListener("DOMContentLoaded",function(){

        videoCard.addEventListener('change', function(){
            if(videoCard.value === 'AMD'){
                configButton.addEventListener('click',function(){
                        message.textContent ='Процессор' + ' - ' + cpu.options[cpu.selectedIndex].textContent + '\n' + 'Оперативная память' + ' - ' + ram.options[ram.selectedIndex].textContent
                        + '\n' +  'SSD' + ' - ' + ssd.options[ram.selectedIndex].textContent + '\n' +  'Видеокарта' + ' - ' + amd.options[amd.selectedIndex].textContent + '\n' + 'Дополнительные услуги';
                });
            };
            if(videoCard.value === 'NVIDIA'){
                configButton.addEventListener('click',function(){
                        message.textContent = 'Процессор' + ' - ' + cpu.options[cpu.selectedIndex].textContent + '\n' +  'Оперативная память' + ' - ' + ram.options[ram.selectedIndex].textContent
                        + '\n' + 'SSD' + ' - ' + ssd.options[ram.selectedIndex].textContent + '\n' +  'Видеокарта' + ' - ' + nvidia.options[nvidia.selectedIndex].textContent + '\n' + 'Дополнительные услуги';
                });
            };
        });
    return textMessage;
});
};textMessage();




//ПОДСЧЕТ ИТОГОВОЙ ЦЕНЫ
const cpu = document.getElementById('cpu');
const ram = document.getElementById('ram')
const ssd = document.getElementById('ssd');

const nvidia = document.getElementById('nvidia');
const amd = document.getElementById('amd');
const intel = document.getElementById('intel');
const result = document.getElementById('result');

    cpu.addEventListener('change', resultat);
    ram.addEventListener('change', resultat);
    ssd.addEventListener('change', resultat);
    nvidia.addEventListener('change', resultat);
    amd.addEventListener('change', resultat);
    intel.addEventListener('change', resultat);

function resultat(){
        if(cpu.value == 'Не выбрано' || ram.value == 'Не выбрано' || ssd.value == 'Не выбрано' || videoCard.value =='Не выбрано'){
            result.textContent = 'Выберите все компоненты'
        };
        cpu.addEventListener('change',()=>{
            if(cpu.value == 'Не выбрано'){
                result.textContent = 'Выберите все компоненты';
            }
        });
        ram.addEventListener('change',()=>{
            if(ram.value == 'Не выбрано'){
                result.textContent = 'Выберите все компоненты';
            }
        });
        ssd.addEventListener('change',()=>{
            if(ssd.value == 'Не выбрано'){
                result.textContent = 'Выберите все компоненты';
            }
        });
        videoCard.addEventListener('change', ()=>{
            if(videoCard.value == 'Не выбрано'){
                result.textContent = 'Выберите все компоненты';
            };
            if(videoCard.value == 'NVIDIA'){
                result.textContent = 'Выберите все компоненты';
            }
            if(videoCard.value == 'AMD'){
                result.textContent = 'Выберите все компоненты';
            }
            if(videoCard.value == 'INTEL'){
                result.textContent = 'Выберите все компоненты';
            }
        });
        if(videoCard.value === 'NVIDIA'){
            nvidia.addEventListener('change', ()=>{
            if(nvidia.value == 'Не выбрано'){
                    result.textContent = 'Выберите все компоненты';
                }else{
                    amd.value = 'Не выбрано';
                };
            });
        };
        if(videoCard.value === 'AMD'){
            result.textContent = 'Выберите все компоненты';
            amd.addEventListener('change', ()=>{
                if(amd.value == 'Не выбрано'){
                    result.textContent = 'Выберите все компоненты';
                }else{
                    nvidia.value = 'Не выбрано';
                };
            });
        };
        if(videoCard.value === 'INTEL'){
            intel.addEventListener('change', ()=>{
                if(intel.value == 'Не выбрано'){
                    result.textContent = 'Товар модели Intel временно отсутствует';
                };
            });
        };
        let sum = 0;
        if(videoCard.value === 'NVIDIA'){
            amd.value = 'Не выбрано';
            sum = Number(nvidia.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
            result.textContent = 'Примерная цена:'+ ' ' + sum;
            result.textContent = ( !isNaN(sum) && x && y ) ? sum : 'Выберите все компоненты';
        };
        if(videoCard.value === 'AMD'){
            nvidia.value = 'Не выбрано';
            sum = Number(amd.value) + Number(cpu.value) + Number(ram.value) + Number(ssd.value) + 16000;
            result.textContent = 'Примерная цена:'+ ' ' + sum;
            result.textContent = ( !isNaN(sum) && x && y ) ? sum : 'Выберите все компоненты';
        };
        if(videoCard.value === 'INTEL'){
            result.textContent = 'Товар модели Intel временно отсутствует';
            result.textContent = ( !isNaN(sum) && x && y ) ? sum : 'Выберите все компоненты';
        };
        return resultat; 
    };
   
///Всплытие ЗАКАЗА
const configButton = document.getElementById('configButton');
const container = document.querySelector('.container');
const containerConfig = document.querySelector('.container-config');

configButton.addEventListener('click', ()=>{
   if(cpu.value == 'Не выбрано' || ram.value == 'Не выбрано' || ssd.value == 'Не выбрано' || videoCard.value =='Не выбрано' || result.textContent == 'Выберите все...'){
        alert('Выберите все из выпадающего списка');     
        window.scrollTo(0, 0);
    }else{

        if (confirm('Вы уверены в своем выборе?')) {
            alert('Оформите заявку и с вами свяжутся в ближайшее время');
            container.classList.add('activeContainer');
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
});





