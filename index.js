const Nightmare = require('nightmare');

(async function init(){
    
    const nightmare = Nightmare({ maxHeight:2500, minWidth:1600, show: true, webPreferences: {partition: 'mil-anunciosg'}});
    await nightmare.useragent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
    await nightmare.goto('https://www.milanuncios.com/anuncios-en-valencia/coche.htm');
    await nightmare.wait(2000);

    /*
        Realizamos un loop de 20 peticiones para comprobar si nos responde mil anuncios o nos bloquea.
    */

    (async function loop(count = 0){
        console.log('count', count);
        await nightmare.goto('http://www.google.es');
        await nightmare.goto('https://www.milanuncios.com/anuncios-en-valencia/coche.htm');
        await nightmare.wait(2000);
            
        if(count > 20){
            await nightmare.end();
            return true;
        }else{
            loop(count+1)
        }

    })();
})();