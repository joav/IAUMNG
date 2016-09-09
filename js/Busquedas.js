function anchura(inicial, final, tam,pintarPuzzle)
{
	var pos=encontrarPosicion(inicial);
	//console.log(pos);
	//prompt();
	var cola=new Cola(new Nodo(inicial,null,0,0,0,pos));
	var fin=false;
	var accion;
	var nuevoestado;
	var i=0;
	var nodaux;
	while(!fin){
		if(cola.cabeza.Padre!=null){
			nuevoestado=armarEstado(cola.cabeza.Padre,cola.cabeza.Operacion,tam);
			//pintarPuzzle(3,nuevoestado.estado);
			cola.cabeza.State=nuevoestado.estado;
			cola.cabeza.Pos=nuevoestado.Pos;
		}
		if(isFinalState(cola.cabeza.State)){
			nodaux=cola.Desencolar();
			break;
		}
		accion=sucesor(tam,cola.cabeza.Pos,cola.cabeza.Operacion);
		for(i=0;i<accion.length;i++){
			cola.Insertar(new Nodo(null,cola.cabeza,accion[i],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null));
		}
		nodaux=cola.Desencolar();
	}

	var ordenSalida=new Pila(nodaux);
	var pasos=new Array();
	i=0;

	nodaux=nodaux.Padre;
	while(nodaux!=null){
		ordenSalida.Insertar(nodaux);
		
		nodaux=nodaux.Padre;
	}

	cola.Destruir();

	nodaux=ordenSalida.cabeza;
	while(nodaux!=null){
		pasos[i]=nodaux.Operacion;
		i++;

		pintarPuzzle(tam,nodaux.State);
		
		nodaux=nodaux.sig;
	}
	ordenSalida.Destruir();
	return pasos;
}