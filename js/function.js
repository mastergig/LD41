//redimensiona o frame
function resizeIframe(valor)
{
	frame.width  = valor;
	frame.height = valor;
	frame.style.MozTransform  = "scale("+(valor/64)+")";
	frame.style.OTransform  = "scale("+(valor/64)+")";
	frame.style.webkitTransform  = "scale("+(valor/64)+")";
	frame.style.msZoom = (valor/64);
	container.style.width  = valor+"px";
	container.style.height = valor+"px";
	//container.style.maxWidth  = valor+"px";
	//container.style.maxHeight = valor+"px";
}

function playMsc()
{
	var bass = document.getElementById('bass');
	var drum = document.getElementById('drum');
	var chord = document.getElementById('chord');
	var eff = document.getElementById('eff');
	var m1 = document.getElementById('m1');
	var m2 = document.getElementById('m2');
	var synth = document.getElementById('synth');

	//bass.volume = (Math.random()>0.5)? 1 : 0;
	//drum.volume = (Math.random()>0.5)? 1 : 0;
	chord.volume  = (Math.random()>0.5)? 1 : 0;
	eff.volume    = (Math.random()>0.5)? 1 : 0;
	m1.volume     = (Math.random()>0.5)? 1 : 0;
	m2.volume     = (Math.random()>0.5)? 1 : 0;
	synth.volume  = (Math.random()>0.5)? 1 : 0;

	setTimeout(function(){playMsc()},30000);
}

function fixScore()
{
    var JSONstr1 = localStorage.getItem('jogo'); 
    //console.log(JSONstr1);
    var gameParameters1 = JSON.parse(JSONstr1);
    var JSONstr2 = localStorage.getItem('jogo2'); 
    //console.log(JSONstr2);
    var gameParameters2 = JSON.parse(JSONstr2);

	var score = 0;
	score +=  gameParameters1.score.pontos;
	score +=  gameParameters2.score.pontos;

	document.getElementById('score').innerHTML = score;

	setTimeout(function(){fixScore();} , 10 )
}

function randomBool()
{
  min = Math.ceil(0);
  max = Math.floor(1);
  return Math.floor(Math.random() * (max - min)) + min;
}