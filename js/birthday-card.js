//typewriter effect

const intro = "Dearest Gentle Reader,";
const introElement = document.getElementById("intro");

let i = 0;
function typer(){
    if(i < intro.length){
        introElement.textContent += intro.charAt(i);
        i++;
        setTimeout(typer, 40);
    }
}

typer();//call typewriter effect

const message = "On this magnificent day, I extend to you the most heartfelt of wishes. A birthday resplendent with joy, a life blessed with boundless grace and infinite years...oya let me stop being weird. It feels like we've known each other for quite a while, even though it's just been a few months. But of course, Time flies when you're hanging around someone as fun and energetic (very energetic!) as you. You are a really cool person, and I'm really glad we crossed paths. Also, I am incredibly proud of you. Graduating from ILD is no small feat! You've worked really hard, 4 years no be beans...abi nau? Whatever comes next, I know you'll do amazing no matter what. Eunice, do not ever let anyone put you down, you have the potential to do great things, whether it's writing, tech, business, or anything you set your mind to. Go for it, don't hold back and do not compare yourself to others! Happy Birthday once again, keep smiling, keep being CREATIVE. Grahhhhh!" ;
const messageElement = document.getElementById("message");

let index = 0;
function typewriter(){
    if(index < message.length){
        messageElement.textContent += message.charAt(index);
        index++;
        setTimeout(typewriter, 40);
    }
}

typewriter();//call typewriter effect