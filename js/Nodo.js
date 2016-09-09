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