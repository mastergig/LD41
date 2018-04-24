var timing = 100;
if(heroWidth == undefined) var heroWidth = 10;
if(heroHeight == undefined) var heroHeight = 10;

function start()
{
    var chosenHero = getParameterByName("hero");
    //console.log(chosenHero);
    //hero.style.backgroundImage = "url('../img/"+chosenHero+".gif')";

    var JSONstr = localStorage.getItem('jogo2'); 
    //console.log(JSONstr);
    var gameParameters = JSON.parse(JSONstr);
    
    for(var i = 0; i < gameParameters.mapa.length; i++)
    {
        gameParameters.mapa[i].tipo = 't'+getRandomPos();
    }

    localStorage.jogo2 = JSON.stringify( gameParameters );
    redraw();
    setTimeout(function(){runTimer()},timing);
}

localStorage.jogo2 = JSON.stringify({
    paused: false,
    score:{
        pontos:0,
        gems:0
    },
    current:'t1',
    timer: 1000,
    vazio:{
        linha:4,
        coluna:4
    },
    mapa:[
        {
            id:'A1',
            tipo:null,
            linha:1,
            coluna:1
        },
        {
            id:'A2',
            tipo:null,
            linha:1,
            coluna:2
        },
        {
            id:'A3',
            tipo:null,
            linha:1,
            coluna:3
        },
        {
            id:'A4',
            tipo:null,
            linha:1,
            coluna:4
        },
        {
            id:'B1',
            tipo:null,
            linha:2,
            coluna:1
        },
        {
            id:'B2',
            tipo:null,
            linha:2,
            coluna:2
        },
        {
            id:'B3',
            tipo:null,
            linha:2,
            coluna:3
        },
        {
            id:'B4',
            tipo:null,
            linha:2,
            coluna:4
        },
        {
            id:'C1',
            tipo:null,
            linha:3,
            coluna:1
        },
        {
            id:'C2',
            tipo:null,
            linha:3,
            coluna:2
        },
        {
            id:'C3',
            tipo:null,
            linha:3,
            coluna:3
        },
        {
            id:'C4',
            tipo:null,
            linha:3,
            coluna:4
        },
        {
            id:'D1',
            tipo:null,
            linha:4,
            coluna:1
        },
        {
            id:'D2',
            tipo:null,
            linha:4,
            coluna:2
        },
        {
            id:'D3',
            tipo:null,
            linha:4,
            coluna:3
        }
    ]
});

if(localStorage.overall == undefined)
localStorage.overall = JSON.stringify({
    timesPlayed:0,
    highscore:{
        distance:0,
        score:0,
        enemies:0,
        bosses:0,
        time:0,
        bestPlayer:null
    },
    total:{
        distance:0,
        score:0,
        enemies:0,
        bosses:0,
        players:[]
    },
    gems:25
});