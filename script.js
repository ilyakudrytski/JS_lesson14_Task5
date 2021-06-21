var myForm = document.getElementById('form1')


function validateForm() {

    for (let i = 0; i < myForm.length; i++) {
        let currentValue1 = myForm[i]

        currentValue1.onblur = function() {
            if (currentValue1.value.length != currentValue1.dataset.length) {
                currentValue1.style.border = '2px solid red'
                console.log(`input corect length ${currentValue1.dataset.length}`)

            } else {
                currentValue1.style.border = '2px solid green'
            }
        }
    }
}
validateForm()





var list = [{
        name: 'Link1222222222222222',
        ref: '#link1'
    },
    {
        name: 'Link2123123123',
        ref: '#link2'
    },
    {
        name: 'Link3',
        ref: '#link3',
        subMenu: [{
                name: 'Link3.1',
                ref: 'link31'
            },
            {
                name: 'Link3.2',
                ref: 'link32'
            },
        ]
    },
    {
        name: 'Link4',
        ref: '#link4'
    },
    {
        name: 'Link5',
        ref: '#link5',
        subMenu: [{
                name: 'Link5.1',
                ref: 'link51'
            },
            {
                name: 'Link5.2',
                ref: 'link52'
            },
        ]
    },

]

function generateMenu() {
    var menu = document.querySelector('.menu');
    menu.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var newLi = document.createElement('li');
        var newLink = document.createElement('a');
        newLink.href = list[i].ref;
        newLink.innerText = list[i].name;

        newLi.appendChild(newLink);

        if (list[i].subMenu) {
            var newUl = document.createElement('ul');
            newUl.classList.add('sub-menu');

            for (var j = 0; j < list[i].subMenu.length; j++) {
                var newSubLi = document.createElement('li');
                var newSubLink = document.createElement('a');
                newSubLink.href = list[i].subMenu[j].ref;
                newSubLink.innerText = list[i].subMenu[j].name;

                newSubLi.appendChild(newSubLink);
                newUl.appendChild(newSubLi);
            }
            newLi.appendChild(newUl);
        }


        menu.appendChild(newLi);

    }
}

//generateMenu();


function generateMenuUpd() {
    var menu = document.querySelector('.menu');
    menu.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var currentLi = generateLi(list[i]);
        if (list[i].subMenu) {
            var newUl = document.createElement('ul');
            newUl.classList.add('sub-menu');

            for (var j = 0; j < list[i].subMenu.length; j++) {
                var currentSubLi = generateLi(list[i].subMenu[j]);
                newUl.appendChild(currentSubLi);
            }
            currentLi.appendChild(newUl);
        }
        menu.appendChild(currentLi);
    }
}

function generateLi(currentChild) {
    var newLi = document.createElement('li');
    var newLink = document.createElement('a');
    newLink.href = currentChild.ref;
    newLink.innerText = currentChild.name;
    newLi.appendChild(newLink);

    return newLi;
}


generateMenuUpd();

// TASK 3  Дано поле ввода(input). Когда пользователь вводит текст, и нажимает клавишу Enter (код Enter 13), 
// нужно сделать чтобы введенный текст выводился в новый тег "p" под input, а содержимое input очищалось.

var newInput = document.getElementsByName('input-info')[0];
var newDiv = document.getElementById('new-input');

newInput.addEventListener('keydown', function(event) {
    var currentValue = event.target.value;
    if (event.which === 13) {
        var newP = document.createElement('p');
        newP.innerText = currentValue;
        newDiv.appendChild(newP);
        event.target.value = "";
    }

})



/*Task 4*/

var userForm = document.querySelector('#user');
var usersTable = document.querySelector('#users');

userForm.addEventListener('submit', function(event) {
    var inputName = userForm.elements.fName;
    var inputLastname = userForm.elements.lName;

    usersTable.innerHTML += `
                    <tr> 
                        <td>${inputName.value}</td>
                        <td>${inputLastname.value}</td>
                    </tr>`.trim();

    inputName.value = '';
    inputLastname.value = '';
    event.preventDefault(); // отменяем перезагрузку
})

usersTable.addEventListener('click', function(event) {
    var currentValue = event.target;
    if (currentValue.tagName === 'TD') {
        currentValue.innerHTML = prompt("Изменение знчения", currentValue.innerText);
    }
})

// Task 5
var list = document.getElementById('menuList');
var button = document.getElementById('btnAdd');
var counter = 3
button.addEventListener('click', function() {
    var newLi = document.createElement('li');
    counter++
    newLi.innerText = 'пункт ' + counter;
    list.appendChild(newLi);
})

list.addEventListener('click', function(event) {
    var currentLI = event.target;

    if (currentLI.tagName === 'LI') {

        currentLI.innerText += '!'

    }
}, )