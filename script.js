var warstwa=0;
var lock="unlock"
window.onload = function(){moveText(warstwa);}

	window.addEventListener('wheel', function(event)
	{
	 if (lock=="unlock" && event.deltaY < 0 )
	 {	warstwa--;
		changeS(warstwa);
		if(warstwa==-1)
		{warstwa=0;}
		else{
		lock="lock";
			setTimeout(function() {
			lock="unlock";
			}, 1.2 * 1000);}

	 }
	 else if (lock=="unlock" && event.deltaY > 0)
	 {
	  warstwa++;
	  changeS(warstwa);
		if(warstwa==4)
		{warstwa=3;}
		else{
		lock="lock";
		moveText(warstwa);
			setTimeout(function() {
			lock="unlock";
			}, 1.2 * 1000);
		}
		
	 }
	});
	

function changeS(a)
{
	var warstwa = a;
	if(warstwa==0){
	
	
	  document.getElementById('springDis').style.top= '0';
	  document.getElementById('summerDis').style.top= '100%';
	 
	 }
	 else if(warstwa==1)
	 {
	
	 document.getElementById('springDis').style.top= '-100%';
	 document.getElementById('summerDis').style.top= '0';
	 document.getElementById('autumnDis').style.top= '100%';}
	 
	 else if(warstwa==2)
	 {
	
	 document.getElementById('summerDis').style.top= '-100%';
	 document.getElementById('autumnDis').style.top= '0';
	 document.getElementById('winterDis').style.top= '100%';}
	 else if(warstwa==3)
	 {
	
	 document.getElementById('autumnDis').style.top= '-100%';
	 document.getElementById('winterDis').style.top= '0';}	
}

$(document).ready(function(){

		setTimeout(function() {
		 document.getElementById('loadPage').style.opacity= '0';
			}, 2 * 1000);
			
			
			
	var spb = document.getElementById('springback');
	var aub = document.getElementById('autumnback');
	var alltomove = document.querySelectorAll(".alltomove");
	
	
	listX = new Array(alltomove.length) 
	listY = new Array(alltomove.length)
	
	for (i = 0; i < alltomove.length; i++) {
		
		listX[i] = $(alltomove[i]).position().left;
		listY[i] = $(alltomove[i]).position().top;
	}	
	
	spb.style.transform = "translate(-50%,0)";
	aub.style.transform = "translate(-50%,0)";
	
	
	if (window.screen.width >= 1400) {
		for (i = 0; i < alltomove.length; i++) {
			$(alltomove[i]).width("+=20");
		}
	}
	
	if (window.screen.width >= 1800) {
		for (i = 0; i < alltomove.length; i++) {
			$(alltomove[i]).width("+=40");
		}
	}
	
	if (window.screen.width >= 2050) {
		var a = document.getElementById('dune');
			a.style.transform = "scale(1.6)";
			$('#sea').width("+=740");
			
			
	}
	
	
	$(document).mousemove(function(event){
	var kolejnosc = 0;
	for (i = 0; i < alltomove.length; i++) {
		
		if(kolejnosc>8) ///po 9 elementow na pore
		{kolejnosc=0;}
		var moveX = (listX[i] + (event.pageX * -1 /50)*(kolejnosc+1)/2) ;
		var moveY = (listY[i] + (event.pageY * -1 /20)*(kolejnosc+1)/2);
		$(alltomove[i]).css({top:  moveY , left: moveX});
		kolejnosc++;
	}
	});
});
	function moveText(x)
	{
		
		var warstwa=x;
		var texttomove = document.querySelectorAll(".text");
		texttomove[x].style.top="50%";
		
		texttomove[x].style.transform="translate(-50%,-56%)";
		texttomove[x].style.transition=".1";
		setTimeout(function() {
			
			texttomove[x].style.transition = "all 0.2s";
			texttomove[x].style.transform="translate(-50%,-55%)";
			
			}, 1 * 1000);
		
	}
	

	
	
	
	
