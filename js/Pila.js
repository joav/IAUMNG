function Pila(nodo){
	this.cabeza=nodo;
	this.fin=nodo;
	this.fin.sig=null;
	this.Insertar=function(nodo){
		nodo.sig=this.cabeza;
		this.cabeza=nodo;
	}
	this.Retirar=function(){
		var nodo=this.cabeza;
		this.cabeza=this.cabeza.sig;
		return nodo;
	}
	this.Destruir=function(){
		while(this.cabeza!=null){
			this.Retirar().Destruir();
		}
		this.fin=null;
	}
}