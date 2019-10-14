let messages = [
    '1','2','3'
];

let h3 = document.querySelector('header h3');
let counter = 0;
setInterval(function(){
    h3.textContent = messages[counter];
    counter++;
    if (counter > messages.length-1)
    {
        counter = 0;
    }
} , 1500);
