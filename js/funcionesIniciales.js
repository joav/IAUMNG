var tam=3;

var pasos=null;
var matInicial=[[1,2,3],[4,5,6],[7,8,0]], matFinal=[[1,2,3],[4,5,6],[7,8,0]];
var pos0i={x:2,y:2},pos0f={x:2,y:2};
function encontrarFicha(ficha,tablero){
    for(var i=0;i<tam;i++){
		for(var j=0;j<tam;j++){
			if(tablero==="estInicial"){
				if(matInicial[i][j]==ficha)
					return {x:j,y:i};
			}
			
			if(tablero==="estFinal"){
				if(matFinal[i][j]==ficha)
					return {x:j,y:i};
			}
		}
	}
}
function arriba(div,inicio){
    var movin=inicio+2.12;
	var mov=div.style.bottom.indexOf("px");
	var text=div.style.bottom.substring(0,mov);
	mov=parseFloat(text);
	mov=mov+2.12;
	if(movin<108.12){
		div.style.bottom=""+mov+"px";
		setTimeout(arriba,10,div,movin);
	}
}
function abajo(div,inicio){
    var movin=inicio+2.12;
	var mov=div.style.bottom.indexOf("px");
	var text=div.style.bottom.substring(0,mov);
	mov=parseFloat(text);
	mov=mov-2.12;
	if(movin<108.12){
		div.style.bottom=""+mov+"px";
		setTimeout(abajo,10,div,movin);
	}
}
function izquierda(div,inicio){
    var movin=inicio+2.12;
	var mov=div.style.left.indexOf("px");
	var text=div.style.left.substring(0,mov);
	mov=parseFloat(text);
	mov=mov-2.12;
	if(movin<108.12){
		div.style.left=""+mov+"px";
		setTimeout(izquierda,10,div,movin);
	}
}
function derecha(div,inicio){
    var movin=inicio+2.12;
	var mov=div.style.left.indexOf("px");
	var text=div.style.left.substring(0,mov);
	mov=parseFloat(text);
	mov=mov+2.12;
	if(movin<108.12){
		div.style.left=""+mov+"px";
		setTimeout(derecha,10,div,movin);
	}
}
function moverFicha(){
    var pos=encontrarFicha(this.id,this.parentNode.id);
	if(this.parentNode.id==="estInicial"){
		if(pos.x+1==pos0i.x&&pos.y==pos0i.y){
			matInicial[pos0i.y][pos0i.x]=parseInt(this.id);
			matInicial[pos.y][pos.x]=0;
			pos0i.x=pos.x;
			derecha(this,0);
		}
		else{
			if(pos.y+1==pos0i.y&&pos.x==pos0i.x){
				matInicial[pos0i.y][pos0i.x]=parseInt(this.id);
				matInicial[pos.y][pos.x]=0;
				pos0i.y=pos.y;
				abajo(this,0);
			}
			else{
				if(pos.x-1==pos0i.x&&pos.y==pos0i.y){
					matInicial[pos0i.y][pos0i.x]=parseInt(this.id);
					matInicial[pos.y][pos.x]=0;
					pos0i.x=pos.x;
					izquierda(this,0);
				}
				else{
					if(pos.y-1==pos0i.y&&pos.x==pos0i.x){
						matInicial[pos0i.y][pos0i.x]=parseInt(this.id);
						matInicial[pos.y][pos.x]=0;
						pos0i.y=pos.y;
						arriba(this,0);
					}
				}
			}
		}
	}
	if(this.parentNode.id==="estFinal"){
		if(pos.x+1==pos0f.x&&pos.y==pos0f.y){
			matFinal[pos0f.y][pos0f.x]=parseInt(this.id);
			matFinal[pos.y][pos.x]=0;
			pos0f.x=pos.x;
			derecha(this,0);
		}
		else{
			if(pos.y+1==pos0f.y&&pos.x==pos0f.x){
				matFinal[pos0f.y][pos0f.x]=parseInt(this.id);
				matFinal[pos.y][pos.x]=0;
				pos0f.y=pos.y;
				abajo(this,0);
			}
			else{
				if(pos.x-1==pos0f.x&&pos.y==pos0f.y){
					matFinal[pos0f.y][pos0f.x]=parseInt(this.id);
					matFinal[pos.y][pos.x]=0;
					pos0f.x=pos.x;
					izquierda(this,0);
				}
				else{
					if(pos.y-1==pos0f.y&&pos.x==pos0f.x){
						matFinal[pos0f.y][pos0f.x]=parseInt(this.id);
						matFinal[pos.y][pos.x]=0;
						pos0f.y=pos.y;
						arriba(this,0);
					}
				}
			}
		}
	}
}
function crearFichas(){
    var tab=document.getElementsByClassName("tablero");
	var div,divl,iterador=1;
	matInicial=new Array(tam);
	matFinal=new Array(tam);
	for(var i=0;i<tam;i++){
		matInicial[i]=new Array(tam);
		matFinal[i]=new Array(tam);
	}
	
	for(var i=0;i<tam;i++){
		for(var j=0;j<tam;j++){
			matInicial[i][j]=iterador;
			matFinal[i][j]=iterador;
			iterador++;
		}
	}
	matInicial[tam-1][tam-1]=0;
	matFinal[tam-1][tam-1]=0;
	pos0i={x:tam-1,y:tam-1};
	pos0f={x:tam-1,y:tam-1};
	if(tab[0].hasChildNodes()){
		divl=tab[0].getElementsByTagName("div").length;
		if(divl){
			for(var i=0;i<divl;i++){
				tab[0].removeChild(tab[0].childNodes[0]);
				tab[1].removeChild(tab[1].childNodes[0]);
			}
			divl=tab[0].getElementsByTagName("div").length;
			if(divl){
				tab[0].removeChild(tab[0].childNodes[0]);
				tab[1].removeChild(tab[1].childNodes[0]);
			}
		}
	}
	var pix=tam*100+tam*6;
	tab[0].style.width=""+pix+"px";
	tab[1].style.width=""+pix+"px";
	for(var j=0;j<2;j++){
		for(var i=0;i<(tam*tam)-1;i++){
			div=document.createElement("div");
			div.className="ficha";
			div.id=i+1;
			tab[j].appendChild(div);
			div.innerHTML=i+1;
			div.onclick=moverFicha;
			div.style.position="relative";
			div.style.bottom="0px";
			div.style.left="0px";
		}
	}
}

function moverPaso(paso){
    var div=document.getElementById("estInicial").getElementsByTagName("div");
    if(paso==1){
        abajo(div[matInicial[pos0i.y-1][pos0i.x]-1],0);
        matInicial[pos0i.y][pos0i.x]=matInicial[pos0i.y-1][pos0i.x];
        matInicial[pos0i.y-1][pos0i.x]=0;
        pos0i.y=pos0i.y-1;
    }
    if(paso==2){
        izquierda(div[matInicial[pos0i.y][pos0i.x+1]-1],0);
        matInicial[pos0i.y][pos0i.x]=matInicial[pos0i.y][pos0i.x+1];
        matInicial[pos0i.y][pos0i.x+1]=0;
        pos0i.x=pos0i.x+1;
    }
    if(paso==3){
        arriba(div[matInicial[pos0i.y+1][pos0i.x]-1],0);
        matInicial[pos0i.y][pos0i.x]=matInicial[pos0i.y+1][pos0i.x];
        matInicial[pos0i.y+1][pos0i.x]=0;
        pos0i.y=pos0i.y+1;
    }
    if(paso==4){
        derecha(div[matInicial[pos0i.y][pos0i.x-1]-1],0);
        matInicial[pos0i.y][pos0i.x]=matInicial[pos0i.y][pos0i.x-1];
        matInicial[pos0i.y][pos0i.x-1]=0;
        pos0i.x=pos0i.x-1;
    }
}

function recorrerPasos(i){
    if(i<pasos.length){
        moverPaso(pasos[i]);
        i++;
        setTimeout(recorrerPasos,600,i);
    }
}
var iPasos=1;
function play(){
    if(pasos!=null){
        recorrerPasos(iPasos);
        iPasos=pasos.length;
    }
}

function anterior(){
    if(pasos!=null){
        iPasos--;
        if(iPasos>0)
        {
            if(pasos[iPasos]+2>4)
            {
                moverPaso((pasos[iPasos]+2)%4);
            }
            else
            {
                moverPaso((pasos[iPasos]+2));
            }
        }
        else
            iPasos=1;
    }
}

function siguiente(){
    if(pasos!=null){
        if(iPasos<pasos.length)
            moverPaso(pasos[iPasos])
        else
            iPasos=pasos.length;
        iPasos++;
    }
}

crearFichas();