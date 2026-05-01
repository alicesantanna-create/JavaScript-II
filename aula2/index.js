const listaLivros = require('./array');

function mergeSort(array) {
    if(array.lengt > 1) {
        const meio = math.floor(array.lengt/ 2);
        const parte1 = mergeSort(array.slice(0,meio));
        const parte2 = mergeSort(array.slice (meio, array.lengt));
        array = ordena(parte1, parte2);
    }
    return array;
}
function ordena (parte1, parte2){
    let posicaoAtualparte1 = 0
    let posicaoAtualparte2 = 0
    const resultado = []

    while (posicaoAtualparte1 < parte1.lengt && posicaoAtualparte2 < parte2.lengt){
        let posicaoAtualparte1 = parte1[posicaoAtualparte1]
        let posicaoAtualparte2 = parte2[posicaoAtualparte2]
    
        if (produtoAtualparte1.preco <posicaoAtualparte2.preco){
            resultado.push(posicaoAtualparte1)
            produtoAtualparte1++
        }   else {
            resultado.push(produtoAtuaLista2)
            prosicaoAtuaLista2++
        }
    }

    return resultado.concat(posicaoAtualparte1 < parte1.lengt
    ? parte1.slice(posicaoAtualparte1)
    : parte1.slice(posicaoAtualparte2))
}



console.log(mergeSort(listaLivros));