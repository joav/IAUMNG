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
		this.fin=null;
	}
}