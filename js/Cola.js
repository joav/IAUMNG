function Cola(nodo){
	this.cabeza=nodo;
	this.fin=nodo;
	this.N=1;
	
	this.insertarPrioridad=function(cola){
		cola.fin.sig=this.cabeza.sig;
		if(this.cabeza.sig==null){
			this.fin=cola.fin;
		}
		this.cabeza.sig=cola.cabeza;
		this.N=this.N+cola.N;
		}
	this.Insertar=function(nodo){
		this.fin.sig=nodo;
		this.fin=nodo;
		this.N=this.N+1;
	}
	this.Desencolar=function(){
		var nodo=this.cabeza;
		this.cabeza=this.cabeza.sig;
		this.N=this.N-1;
		return nodo;
	}
	this.Destruir=function(){
		while(this.cabeza!=null){
			this.Desencolar().Destruir();
		}
		this.N=0;
		this.fin=null;
	}
}