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
