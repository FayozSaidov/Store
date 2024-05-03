const headerIns = `
<ul>
                <li>
                    <img src="./img/Frame 9.png" alt="">
                    <div>
                        <ul>
                            <li class="choose_phone">
                                <img src="./img/Vector.png" alt="">
                                <p>Выбрать модель телефона <img src="./img/Vector3.png" alt="" class="arrow"></p>
                            </li>
                            <span class="phones">
                                <li>
                                    <p>iPhone</p>
                                    <img src="./img/Vector3.png" alt="">
                                    
                                </li>
                                <li>
                                    <p>Samsung</p>
                                    <img src="./img/Vector3.png" alt="">
                                </li>
                                <li>
                                    <p>Samsung</p>
                                    <img src="./img/Vector3.png" alt="">
                                </li>
                                <li>
                                    <p>Samsung</p>
                                    <img src="./img/Vector3.png" alt="">
                                </li>
                            </span>
                        </ul>
                    </div>
                </li>
                <li>
                    <img src="./img/Vector1.png" alt="">
                    <img src="./img/Vector2.png"  alt="">
                    <img class="burger" src="./img/burger.png" alt="">      
                </li>
            </ul>
`
const headerUI = document.querySelector('header')
headerUI.innerHTML = headerIns

const btnChoose = document.querySelector('.choose_phone')
const phones = document.querySelector('.phones')
const arrow = document.querySelector('.arrow')

function SHOW_PHONES(phones, arrow){
    btnChoose.onclick = () =>{
        phones.classList.toggle('active')
        arrow.classList.toggle('arrow_click')
    }
}
SHOW_PHONES(phones, arrow)

