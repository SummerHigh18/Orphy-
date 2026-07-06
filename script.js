let theBtn = document.getElementById('button')

theBtn.addEventListener('click', function() {
    randomNumber()
    alert('Check the console!');
})

function randomNumber() {
    console.log(Math.floor(Math.random() * 100) + 1)
}