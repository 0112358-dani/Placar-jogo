function calcular() {
    let golba = Number(document.getElementById('gbaTxt').value)
    let golvi = Number(document.getElementById('gviTxt').value)
    let res = document.getElementById('res')
    
    if (golba < golvi) {
        var dif = golvi - golba
        res.innerHTML += `A diferença de gols no placar foi: ${dif} e o Vitoria ganhou.`
        

    } else {
        var dif = golba - golvi
        res.innerHTML += `A diferença de gols no placar foi: ${dif} e o Bahia ganhou.`
    }
    
    switch (dif) {
        case 0: res.innerHTML += `Houve empate.`;
            break;
        case 1: res.innerHTML += `Foi uma partida normal.`;
            break;
        case 2: res.innerHTML += `Foi uma partida normal.`;
            break;
        case 3: res.innerHTML += `Foi uma partida normal.`;
            break;
        case 4: res.innerHTML += `Tomou uma goleada.`;
            break;
        default: res.innerHTML += `Tomou uma goleada.`;
            break;









    }





}