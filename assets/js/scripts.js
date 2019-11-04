let messages = [
    "Willkommen",
    "خوش آمدید",
    "Bixêrhatin",
    "So dhawaaw",
    "أهلاً بكم",
    "HOŞGELDİNİZ",
    "Bienvenue",
    "እንቋዕ ብድሓን መጻእኩም",
    "خوش کلیبسیز",
    "Ashamaa",
    "བཀྲ་ཤིས་བདེ་ལེགས།",
    "Bem-vindo",
    "မင်္ဂလာပါ",
    "ΚΑΛΩΣ ΗΡΘΑΤΕ",
    "Bienvenidos",
    "khush kelibsiz"
];

let h3 = document.getElementById('welcome_message');
let counter = 0;
setInterval(function(){
    h3.textContent = messages[counter];
    counter++;
    if (counter > messages.length-1)
    {
        counter = 0;
    }
} , 1500);

class Person
{
    constructor(){
        // finaly match
    }
}