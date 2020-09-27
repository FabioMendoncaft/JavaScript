function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var nome = document.getElementById('nome')
    var n1 = document.getElementById('n1')
    var n = (nome.value)
    n1.innerHTML = (n)

    if(fAno.value.length == 0 || fAno.value > ano || fAno.value < 1920){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade <=10){
               //Criança
               img.setAttribute('src', 'foto-bebe-m.png')
           }else if(idade < 21){
              //Jovem
              img.setAttribute('src', 'foto-jovem-m.png')
           }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'foto-adulto-m.png')
           }else{
               //Idoso
               img.setAttribute('src', 'foto-idoso-m.png')
           }
       }else if(fsex[1].checked){
           genero = 'Mulher'
           if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','foto-bebe-f.png')
           }else if(idade < 21){
           //Jovem
           img.setAttribute('src','foto-jovem-f.png')
           }else if(idade < 50){
           //Adulto
           img.setAttribute('src','foto-adulto-f.png')
           }else{
           //Idoso
           img.setAttribute('src','foto-idoso-f.png')    
           }
       } 
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

}