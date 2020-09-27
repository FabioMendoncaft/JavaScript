function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var h = new Date()
    var hora = h.getHours()
    msg.innerHTML = `A hora atual:  ${hora} horas`
    if(hora < 12){
        img.src = 'manhã.png'
        document.body.style.background = 'red'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = 'blue'
    }else{
        img.src = 'noite.png'
        document.body.style.background = 'black'
    }
}