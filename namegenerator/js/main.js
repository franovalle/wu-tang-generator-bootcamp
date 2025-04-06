/* 
pseudo code: give each question a value
total value of q 1 & 2 = firstname
total value of q3, 4, 5= lastname 

*/

function randomNames() {
    return Math.floor(Math.random() * 6)
}

/*let one = Number(document.querySelector('input[name="iceCream"]:checked').value)
let two = Number(document.querySelector('#two').value)
let three = Number(document.querySelector('#three').value)
let four = Number(document.querySelector('#four').value)
let five = Number(document.querySelector('#five').value)
console.log(one, two, three, four, five);*/


document.querySelector('button').addEventListener('click', firstName)
function firstName() {
    let one = Number(document.querySelector('input[name="favColor"]:checked').value)
    let two = Number(document.querySelector('input[name="iceCream"]:checked').value)
    let three = Number(document.querySelector('input[name="timeOfDay"]:checked').value)
    let four = Number(document.querySelector('input[name="socialMedia"]:checked').value)
    let five = Number(document.querySelector('input[name="travel"]:checked').value)
    console.log(one, two, three, four, five);
    //let one = randomNames()
    //let two = randomNames()
    if (one + two <= 3) {
        document.querySelector('h2').innerText = ('HipHop')
        lastName()
    }
    else if
        (one + two >= 7) {
        document.querySelector('h2').innerText = ('Rocker')
        lastName()
    }

    else {
        document.querySelector('h2').innerText = ('Country')
        lastName()
    }

}
function lastName() {
    let three = randomNames()
    let four = randomNames()
    let five = randomNames()
    if (three === four && three === five && four === five)
        document.querySelector('h3').innerText = ('CRNA')
    else if
        (three != four && three == '3' || four != five && four == '4') {
        document.querySelector('h3').innerText = ('NP')
    }

    else {
        document.querySelector('h3').innerText = ('RN')
    }

}
