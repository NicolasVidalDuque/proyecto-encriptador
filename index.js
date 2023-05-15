function encrypt(){

    var text = document.querySelector(".text-input").value;

    if(text == "") return;

    var dict = {"e":"enter",
                "i":"imes",
                "a":"ai",
                "o":"ober",
                "u":"ufat"};
    
    text = text.replace(/[aoeui]/g, function(match){
        return dict[match];
    })

    document.querySelector(".encrypted-text").innerHTML = text;
}

function decrypt(){
    var str = document.querySelector(".text-input").value;
    
    if(str == "") return;

    var dict = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    
    var re = new RegExp(Object.keys(dict).join("|"), "gi");
    str = str.replace(re, function(matched) {
        return dict[matched.toLowerCase()];
    });
    document.querySelector(".encrypted-text").innerHTML = str;

}

function copyText() {
    const p = document.querySelector(".encrypted-text");
    var textToCopy = p.innerText;
  
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
    
    p.innerText = "";
}
  
function render(){
    const p = document.querySelector(".encrypted-text").innerText;
    const noText = document.querySelector(".no-text");
    const yesText = document.querySelector(".yes-text")
    if(p != ""){
        yesText.classList.remove("no-render");
        noText.classList.add("no-render");
    } else {
        noText.classList.remove("no-render");
        yesText.classList.add("no-render");
    }
}

function buttonEncrypt(){
    encrypt();
    render();
}

function buttonDecrypt(){
    decrypt();
    render();
}

function buttonCopy(){
    copyText();
    render();
}

document.querySelector(".boton-desencriptar").addEventListener("click", buttonDecrypt);
document.querySelector(".boton-encriptar").addEventListener("click", buttonEncrypt);
document.querySelector(".button-copy").addEventListener("click", buttonCopy);