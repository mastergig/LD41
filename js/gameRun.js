var timing = 1000;

function getRandomPos() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min)) + min;
}

function runTimer()
{
    var JSONstr = localStorage.getItem('jogo2'); 
    //console.log(JSONstr);
    var gameParameters = JSON.parse(JSONstr);

    gameParameters.timer -= 1;

    document.getElementById('time').innerHTML = gameParameters.timer;

    localStorage.jogo2 = JSON.stringify( gameParameters );
    setTimeout(function(){runTimer()},timing);
}

function callPlay(idDiv)
{
    playSound('DOWN_clique.ogg');
    var JSONstr = localStorage.getItem('jogo2'); 
    //console.log(JSONstr);
    var gameParameters = JSON.parse(JSONstr);
    
    var vazio = gameParameters.vazio;

    for(var i = 0; i < gameParameters.mapa.length; i++)
    {
        var obj = gameParameters.mapa[i];
        if(idDiv == obj.id)
        {
            if(((((vazio.linha-1)==obj.linha)||((vazio.linha+1)==obj.linha))&&((vazio.coluna)==obj.coluna))
            ||((((vazio.coluna-1)==obj.coluna)||((vazio.coluna+1)==obj.coluna))&&((vazio.linha)==obj.linha)))
            {
                var l = obj.linha;
                var c = obj.coluna;
                gameParameters.mapa[i].linha = vazio.linha;
                gameParameters.mapa[i].coluna = vazio.coluna;
                gameParameters.vazio.linha = l;
                gameParameters.vazio.coluna = c;
                for (var j = 0; j < gameParameters.mapa.length; j++)
                {
                    if(j != i)
                    {
                        var obj2 = gameParameters.mapa[j];
                        if(((((obj.linha-1)==obj2.linha)||((obj.linha+1)==obj2.linha))&&((obj.coluna)==obj2.coluna))
                        ||((((obj.coluna-1)==obj2.coluna)||((obj.coluna+1)==obj2.coluna))&&((obj.linha)==obj2.linha)))
                        {
                            if(obj.tipo == obj2.tipo)
                            for (var k = 0; k < gameParameters.mapa.length; k++)
                            {
                                if(k != i && k != j)
                                {
                                    var obj3 = gameParameters.mapa[k];
                                    if(obj.tipo == obj3.tipo)
                                    if((obj.linha == obj2.linha && obj.linha == obj3.linha)||(obj.coluna == obj2.coluna && obj.coluna == obj3.coluna))
                                    {
                                        if(gameParameters.current == obj.tipo)
                                        {
                                            gameParameters.current = 't'+getRandomPos();
                                            gameParameters.score.pontos += 2000;
                                            gameParameters.timer += 47;
                                        }
                                        gameParameters.mapa[i].tipo = 't'+getRandomPos();
                                        gameParameters.mapa[j].tipo = 't'+getRandomPos();
                                        gameParameters.mapa[k].tipo = 't'+getRandomPos();

                                        playSound('DOWN_jogada.ogg');

                                        gameParameters.score.pontos += 200;
                                        gameParameters.timer += 3;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            break;
        }
    }
    
    localStorage.jogo2 = JSON.stringify( gameParameters );
    redraw();
}

function redraw()
{
    var JSONstr = localStorage.getItem('jogo2'); 
    //console.log(JSONstr);
    var gameParameters = JSON.parse(JSONstr);
    
    document.getElementById('ativo').className = 'caixaJogo '+gameParameters.current;

    for(var i = 0; i < gameParameters.mapa.length; i++)
    {        
        var id = gameParameters.mapa[i].id;
        var linha = gameParameters.mapa[i].linha;
        var coluna = gameParameters.mapa[i].coluna;
        var tipo = gameParameters.mapa[i].tipo;

        document.getElementById(id).className = 'caixaJogo linha'+linha+' coluna'+coluna+' '+tipo;
    }
}