//challenge 1: your age in days

function ageindays() {
    var birthyear = prompt('what year were you born... good friend?');
    var ageindayss = (2023 -birthyear) * 365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('Hello! You are' + ageindayss + 'days old, buddy.');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1)
}

function reset() {
    document.getElementById('ageindays').remove();
}

//challenge 2: cat generator
function generatecat() {
    var iamge = document.createElement('img');
    var div = document.getElementById('gen-cat');
    iamge.src = "https://media.istockphoto.com/id/519620410/photo/hand-with-remote-control-directed-on-the-conditioner.jpg?s=1024x1024&w=is&k=20&c=bcGLq4FL1VozvpRtQf7YjHp77r3X5oE0K-Sqw0q9pUM="
    iamge.height = (150);
    iamge.width = (150);
    div.appendChild(iamge);
}