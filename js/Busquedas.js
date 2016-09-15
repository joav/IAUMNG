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
		
		nodaux=nodaux.sig;
	}
	ordenSalida.Destruir();
	return pasos;
}
function profundidad(inicial, final, tam,pintarPuzzle){
	var pos=encontrarPosicion(inicial);
	//console.log(pos);
	//prompt();
	var cola=new Cola(new Nodo(inicial,null,0,0,0,pos));
	var fin=false;
	var accion;
	var nuevoestado;
	var i=0;
	var colaaux;
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
		if(cola.cabeza.Profundidad!=profMax)
		{
			accion=sucesor(tam,cola.cabeza.Pos,cola.cabeza.Operacion);
			colaaux=new Cola(new Nodo(null,cola.cabeza,accion[0],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null));
	
			for(i=1;i<accion.length;i++){
				colaaux.Insertar(new Nodo(null,cola.cabeza,accion[i],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null));
			}
			cola.insertarPrioridad(colaaux);
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
		nodaux=nodaux.sig;
	}
	ordenSalida.Destruir();
	return pasos;
	
}
function heuristicaErradas(estado,final){
	var contadorErradas=0;
	for(var i=0;i<estado.length;i++){
		for(var j=0;j<estado.length;j++){
			if(estado[i][j]!=0){
				if(estado[i][j]!=final[i][j]){
					contadorErradas++;
				}
			}
		}
	}
	return contadorErradas;
}

function casillasErradas(inicial, final, tam,pintarPuzzle){
	var pos=encontrarPosicion(inicial);
	//console.log(pos);
	//prompt();
	var cola=new Cola(new Nodo(inicial,null,0,0,0,pos));
	var fin=false;
	var accion;
	var nuevoestado;
	var i=0;
	var nodaux=cola.cabeza;
	var heuristica,menorHeuristica=10;
	var colaAux;
	var nodoCamino;
	while(!fin){
		if(cola.cabeza.Padre!=null){
			nodaux=cola.cabeza;
			while(nodaux!=null){
				nuevoestado=armarEstado(nodaux.Padre,nodaux.Operacion,tam);
				nodaux.Estate=nuevoestado.estado;
				nodaux.Pos=nuevoestado.Pos;
				heuristica=heuristicaErradas(nuevoestado.estado,final);
				console.log("heuristica= "+heuristica);
				if(heuristica<menorHeuristica){
					menorHeuristica=heuristica;
					nodoCamino=nodaux;
					console.log("heuristica menor= "+heuristica);
				}
				nodaux=nodaux.sig;
			}
			cola=new Cola(new Nodo(nodoCamino.Estate,nodoCamino.Padre,nodoCamino.Operacion,nodoCamino.Profundidad,nodoCamino.Costo,nodoCamino.Pos));
			menorHeuristica=10;
			//cola.cabeza.sig=null;
			//cola.fin=cola.cabeza;
		}
		if(isFinalState(cola.cabeza.State)){
			nodaux=cola.Desencolar();
			break;
		}
		accion=sucesor(tam,cola.cabeza.Pos,cola.cabeza.Operacion);
		//colaAux=new Cola(new Nodo(null,cola.cabeza,accion[0],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null))
		for(i=0;i<accion.length;i++){
			cola.Insertar(new Nodo(null,cola.cabeza,accion[i],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null));
		}
		nodaux=cola.Desencolar();
		//nodaux=colaAux.cabeza;
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
		
		nodaux=nodaux.sig;
	}
	ordenSalida.Destruir();
	//colaAux.Destruir();
	return pasos;
}

function profundidadI(inicial, final, tam,pintarPuzzle,profundidad){
	var pos=encontrarPosicion(inicial);
	//console.log(pos);
	//prompt();
	var cola=new Cola(new Nodo(inicial,null,0,0,0,pos));
	var fin=false;
	var accion;
	var nuevoestado;
	var i=0;
	var colaaux;
	var nodaux;
	while(true){
		if(cola.cabeza!=null){
			
			if(cola.cabeza.Padre!=null){
				nuevoestado=armarEstado(cola.cabeza.Padre,cola.cabeza.Operacion,tam);
				//pintarPuzzle(3,nuevoestado.estado);
				cola.cabeza.State=nuevoestado.estado;
				cola.cabeza.Pos=nuevoestado.Pos;
			}
			
			if(isFinalState(cola.cabeza.State)){
				nodaux=cola.Desencolar();
				fin=true;
				break;
			}
		
			if(cola.cabeza.Profundidad!=profMax&&cola.cabeza.Profundidad<profundidad)
			{
					accion=sucesor(tam,cola.cabeza.Pos,cola.cabeza.Operacion);
					colaaux=new Cola(new Nodo(null,cola.cabeza,accion[0],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null));
			
					for(i=1;i<accion.length;i++){
						colaaux.Insertar(new Nodo(null,cola.cabeza,accion[i],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null));
					}
					
					cola.insertarPrioridad(colaaux);
			}
			
			else{
				if(cola.cabeza.Profundidad!=profMax&&cola.cabeza.Profundidad>=profundidad&&cola.N==1){
					profundidad++;
				}
				else{
					if(profMax==profundidad){
						fin=false;
						break;
					}
				}
			}
			nodaux=cola.Desencolar();
		}
	
		else{
			accion=sucesor(tam,nodaux.Pos,nodaux.Operacion);
			colaaux=new Cola(new Nodo(null,nodaux,accion[0],nodaux.Profundidad+1,nodaux.Profundidad+1,null));
		
			for(i=1;i<accion.length;i++){
				colaaux.Insertar(new Nodo(null,nodaux,accion[i],nodaux.Profundidad+1,nodaux.Profundidad+1,null));
			}
			cola=colaaux;
		}
	}
	if(fin){
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
			nodaux=nodaux.sig;
		}
		ordenSalida.Destruir();
		return pasos;
	}
	else{
		alert("No se encontro solución");
		return null;
	}
}

function heuristicaManhatam(estado,final){
	var sumaDistancias=0;
	var posEstadoFinal;
	for(var i=0;i<estado.length;i++){
		for(var j=0;j<estado.length;j++){
			if(estado[i][j]!=0){
				posEstadoFinal=encontrarFicha(estado[i][j],"estFinal");
				sumaDistancias+=Math.abs(j-posEstadoFinal.x)+Math.abs(i-posEstadoFinal.y);
			}
		}
	}
	return sumaDistancias;
}

function manhatam(inicial, final, tam,pintarPuzzle){
	var pos=encontrarPosicion(inicial);
	//console.log(pos);
	//prompt();
	var cola=new Cola(new Nodo(inicial,null,0,0,0,pos));
	var fin=false;
	var accion;
	var nuevoestado;
	var i=0;
	var nodaux=cola.cabeza;
	var heuristica,menorHeuristica=33;
	var colaAux;
	var nodoCamino;
	while(!fin){
		if(cola.cabeza.Padre!=null){
			nodaux=cola.cabeza;
			while(nodaux!=null){
				nuevoestado=armarEstado(nodaux.Padre,nodaux.Operacion,tam);
				nodaux.Estate=nuevoestado.estado;
				nodaux.Pos=nuevoestado.Pos;
				heuristica=heuristicaManhatam(nuevoestado.estado,final);
				console.log("heuristica= "+heuristica);
				if(heuristica<menorHeuristica){
					menorHeuristica=heuristica;
					nodoCamino=nodaux;
					console.log("heuristica menor= "+heuristica);
				}
				nodaux=nodaux.sig;
			}
			cola=new Cola(new Nodo(nodoCamino.Estate,nodoCamino.Padre,nodoCamino.Operacion,nodoCamino.Profundidad,nodoCamino.Costo,nodoCamino.Pos));
			menorHeuristica=32;
			//cola.cabeza.sig=null;
			//cola.fin=cola.cabeza;
		}
		if(isFinalState(cola.cabeza.State)){
			nodaux=cola.Desencolar();
			break;
		}
		accion=sucesor(tam,cola.cabeza.Pos,cola.cabeza.Operacion);
		//colaAux=new Cola(new Nodo(null,cola.cabeza,accion[0],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null))
		for(i=0;i<accion.length;i++){
			cola.Insertar(new Nodo(null,cola.cabeza,accion[i],cola.cabeza.Profundidad+1,cola.cabeza.Profundidad+1,null));
		}
		nodaux=cola.Desencolar();
		//nodaux=colaAux.cabeza;
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
		
		nodaux=nodaux.sig;
	}
	ordenSalida.Destruir();
	//colaAux.Destruir();
	return pasos;
}