var count = 0;
function greater() {
    // getting values from user
    var number1 = document.getElementById('num1').value;
    var color = document.getElementById('color').value;

    for (let i = 0; i < number1; i++){
        count++;
        var btn = document.createElement("button"); //creating a button
        btn.className = "btn1";
        btn.innerHTML = "new Button" + count;
        btn.style="background-color:"+color+";"
        document.body.appendChild(btn);

    }
    
}