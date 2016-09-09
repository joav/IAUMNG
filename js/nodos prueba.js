function pintarPuzzle(tam,mat){
	var body=document.getElementsByTagName("body")[0];
	var fila;
	var columna;
	var texto;
	
	var tabla=document.createElement("table");
	for(var i=0;i<tam;i++){
		fila=document.createElement("tr");
		for(var j=0;j<tam;j++){
			columna=document.createElement("td");
			texto=document.createTextNode(mat[i][j]);
			columna.appendChild(texto);
			fila.appendChild(columna);
		}
		tabla.appendChild(fila);
	}
	body.appendChild(tabla);
	body.appendChild(document.createElement("br"));
}

function encontrarPosicion(mat){
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			if(mat[i][j]==0)
				return {x:j,y:i};
		}
	}
}

function isFinalState(mat){
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			if(mat[i][j]!=final[i][j])
				return false;
		}
	}
	return true;
}

function moveUp(tam,pos){
	if(pos.y>0){
		return true;
	}
}//1
function moveRight(tam,pos){
	if(pos.x<(tam-1)){
		return true;
	}
}//2
function moveDown(tam,pos){
	if(pos.y<(tam-1)){
		return true;
	}
}//3
function moveLeft(tam,pos){
	if(pos.x>0){
		return true;
	}
}//4

function sucesor(tam,pos,acc){
	var accion=[];
	var i=0;
	if(moveUp(tam,pos)&&acc!=3){
		accion[i]=1;
		i++;
	}
	if(moveRight(tam,pos)&&acc!=4){
		accion[i]=2;
		i++;
	}
	if(moveDown(tam,pos)&&acc!=1){
		accion[i]=3;
		i++;
	}
	if(moveLeft(tam,pos)&&acc!=2){
		accion[i]=4;
		i++;
	}
	return accion;
}

function armarEstado(padre,mov,tam){
	var nuevoestado=new Array(tam);
	for(var i=0;i<tam;i++){
		nuevoestado[i]=new Array(tam);
	}
	var temp;
	var pos={x:0,y:0};
	pos.x=padre.Pos.x;
	pos.y=padre.Pos.y;
	for(var i=0;i<tam;i++)
	{	for(var j=0;j<tam;j++){
			nuevoestado[i][j]=padre.State[i][j];
		}
	}
	if(mov==1){
		temp=nuevoestado[pos.y-1][pos.x];
		nuevoestado[pos.y][pos.x]=temp;
		nuevoestado[pos.y-1][pos.x]=0;
		pos.y=pos.y-1;
		return {estado:nuevoestado,Pos:pos};
	}
	if(mov==2){
		temp=nuevoestado[pos.y][pos.x+1];
		nuevoestado[pos.y][pos.x]=temp;
		nuevoestado[pos.y][pos.x+1]=0;
		pos.x=pos.x+1;
		return {estado:nuevoestado,Pos:pos};
	}
	if(mov==3){
		temp=nuevoestado[pos.y+1][pos.x];
		nuevoestado[pos.y][pos.x]=temp;
		nuevoestado[pos.y+1][pos.x]=0;
		pos.y=pos.y+1;
		return {estado:nuevoestado,Pos:pos};
	}
	if(mov==4){
		temp=nuevoestado[pos.y][pos.x-1];
		nuevoestado[pos.y][pos.x]=temp;
		nuevoestado[pos.y][pos.x-1]=0;
		pos.x=pos.x-1;
		return {estado:nuevoestado,Pos:pos};
	}
}

function moveToString(mov){
	var pasos=new Array();
	for(var i=0;i<mov.length;i++){
		if(mov[i]==1){
			pasos[i]="Arriba";
		}
		if(mov[i]==0){
			pasos[i]="Quieto";
		}
		if(mov[i]==2){
			pasos[i]="Derecha";
		}
		if(mov[i]==3){
			pasos[i]="Abajo";
		}
		if(mov[i]==4){
			pasos[i]="Izquierda";
		}
	}
	return pasos;
}

var mat=[[4,1,2],[0,8,7],[6,3,5]];
var final=[[1,2,3],[4,5,6],[7,8,0]];
var pasos=anchura(mat,final,3,pintarPuzzle);
console.log(moveToString(pasos));