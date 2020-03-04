let buttons = document.querySelectorAll('.js-buttons div');
let result = document.querySelector('.js-result');


buttons.forEach(element => {
    element.addEventListener('click', function (event) {
        let clone = element.cloneNode(true);
        // let clone = event.currentTarget.cloneNode(true);
        console.log(clone);
        result.appendChild(clone);

    })
});

// function (params) {

// }