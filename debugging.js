function verificaTamanho(arr,num) {
    try{

    if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

    if(typeof num !== 'number') throw new TypeError('Array precisa ser do tipo number');

    if(arr.length !== num) throw new RangeError('Tamhno inválido!');

    return arr;

    }
    catch(e) {
//Se error for instanciado por reference error ...
        if (e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError');
            console.log(e.name);
        } else if (e instanceof TypeError){
            console.log('Este erro é um TypeError');
            console.log(e.name);
        }  else if (e instanceof RangeError){
            console.log('Este erro é um RangeError');
            console.log(e.name);
        } else
        console.log('Tipo de erro não esperado:' + e );
    }
}

console.log (verificaTamanho(5));