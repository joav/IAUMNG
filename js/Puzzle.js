function Nodo(estate,padre,operacion,profundidad,costo,pos){
	this.State=estate;
	this.Padre=padre;
	this.Operacion=operacion;
	this.Profundidad=profundidad;
	this.Costo=costo;
	this.Pos=pos;
	this.sig=null;
	this.Destruir=function(){
		this.State=null;
		this.Padre=null;
		this.Operacion=null;
		this.Profundidad=null;
		this.Costo=null;
		this.Pos=null;
		this.sig=null;
	}
}
function Cola(nodo){
	this.cabeza=nodo;
	this.fin=nodo;
	this.Insertar=function(nodo){
		this.fin.sig=nodo;
		this.fin=nodo;
	}
	this.Desencolar=function(){
		var nodo=this.cabeza;
		this.cabeza=this.cabeza.sig;
		return nodo;
	}
	this.Destruir=function(){
		while(this.cabeza!=null){
			this.Desencolar().Destruir();
		}
	}
}
function Pila(nodo){
	this.cabeza=nodo;
	this.fin=nodo;
	this.fin.sig=null;
	this.Insertar=function(nodo){
		nodo.sig=this.cabeza;
		this.cabeza=nodo;
	}
	this.Desenpilar=function(){
		var nodo=this.cabeza;
		this.cabeza=this.cabeza.sig;
		return nodo;
	}
}

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

var mat=[[8,1,3],[4,0,2],[7,6,5]];
var final=[[1,2,3],[4,5,6],[7,8,0]];

var pos={x:0,y:0};
var cola=new Cola(new Nodo(mat,null,0,0,0,pos));

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
		for(var j=0;j<tam;j++)
			nuevoestado[i][j]=padre.State[i][j];
	if(mov==1){
		temp=nuevoestado[pos.x][pos.y-1];
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



var fin=false;
var accion;
var nuevoestado;
var i=0;
var nodaux;
while(!fin){
	if(cola.cabeza.Padre!=null){
		nuevoestado=armarEstado(cola.cabeza.Padre,cola.cabeza.Operacion,3);
		cola.cabeza.State=nuevoestado.estado;
		cola.cabeza.Pos=nuevoestado.Pos;
	}
	if(isFinalState(cola.cabeza.State)){
		nodaux=cola.Desencolar();
		break;
	}
	accion=sucesor(3,cola.cabeza.Pos,cola.cabeza.Operacion);
	for(i=0;i<accion.length;i++){
		cola.Insertar(new Nodo(null,cola.cabeza,accion[i],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null));
	}
	nodaux=cola.Desencolar();
}

var ordenSalida=new Pila(nodaux);


nodaux=nodaux.Padre;
while(nodaux!=null){
	ordenSalida.Insertar(nodaux);
	
	nodaux=nodaux.Padre;
}

cola.Destruir();

console.log(cola);

nodaux=ordenSalida.cabeza;
while(nodaux!=null){
	
	setTimeout(pintarPuzzle(3,nodaux.State),10000000);
	
	nodaux=nodaux.sig;
}