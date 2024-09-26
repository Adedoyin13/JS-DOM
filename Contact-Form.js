const form = document.getElementById('myForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const list = document.getElementById('myList')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // console.log(`New User Log in ${name}, (${email})`);

    // OR
    
    console.log(`New User Log in: ${name.value}, (${email.value})`);
})

list.addEventListener('click', function (el) {
    const targetVar = el.target;

    if (targetVar.tagName === 'LI') {
        console.log('Chapo, you are welcome', targetVar.textContent);
    }
}) 

const paragraph = document.querySelectorAll('.element');
paragraph.forEach(paragraph => {
    paragraph.style.backgroundColor = 'red'
})
// paragraph.textContent = 'New Content'

