function tabuada(){
    let val = document.getElementById('v')
    let tab = document.getElementById('tabuada')

    if( val.value.length == 0){
        window.alert('[ERRO] Digite um número!')
    }else{
        var v = Number(val.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${v} x ${c} = ${v * c}`
            tab.appendChild(item)
        }
    }
}