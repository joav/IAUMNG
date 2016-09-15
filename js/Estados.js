// JavaScript Document

var Estados=[
	{ 
	Nombre: "Leticia", 
	center:{lat:-3.6150525,lng:-70.3169899},
	Cercanos:[]},
	{ 
	Nombre: "Medellín", 
	center:{lat:6.268844,lng:-75.6664319},
  	Cercanos:[{sitio:6,dist:195,tiempo:"4:20:00"},{sitio:10,dist:748,tiempo:"11:25:00"},{sitio:11,dist:230,tiempo:"6:51:00"},
	{sitio:12,dist:406,tiempo:"7:31:00"},{sitio:13,dist:420,tiempo:"6:52:00"},{sitio:18,dist:838,tiempo:"12:43:00"},
	{sitio:24,dist:217,tiempo:"4:48:00"},{sitio:26,dist:393,tiempo:"7:05:00"},{sitio:27,dist:472,tiempo:"8:45:00"},
	{sitio:28,dist:413,tiempo:"6:43:00"}]},
	{ 
	Nombre: "Arauca", 
	center:{lat:7.064570, lng:-70.732843},
	Cercanos:[{sitio:8,dist:363,tiempo:"5:46:00"},{sitio:21,dist:383,tiempo:"11:15:00"},{sitio:26,dist:439,tiempo:"12:42:00"}]},
	{ 
	Nombre: "Barranquilla", 
	center:{lat:10.9838943, lng:-74.853037},
	Cercanos:[{sitio:4,dist:120,tiempo:"2:12:00"},{sitio:5,dist:868,tiempo:"14:52:00"},{sitio:8,dist:1003,tiempo:"16:03:00"},
	{sitio:10,dist:302,tiempo:"5:00:00"},{sitio:13,dist:1009,tiempo:"15:41:00"},{sitio:12,dist:106,tiempo:"2:18:00"},
	{sitio:21,dist:672,tiempo:"12:18:00"},{sitio:26,dist:591,tiempo:"9:46:00"},{sitio:27,dist:249,tiempo:"4:35:00"},
	{sitio:28,dist:1002,tiempo:"15:05:00"}]},
	{ 
	Nombre: "Cartagena", 
	center:{lat:10.4002632, lng:-75.5434445},
	Cercanos:[{sitio:3,dist:120,tiempo:"2:12:00"},{sitio:5,dist:935,tiempo:"15:39:00"},{sitio:8,dist:1121,tiempo:"21:36:00"},{sitio:10,dist:368,tiempo:"5:58:00"},
	{sitio:12,dist:273,tiempo:"4:49:00"},{sitio:13,dist:1075,tiempo:"16:26:00"},{sitio:21,dist:739,tiempo:"13:11:00"},
	{sitio:26,dist:658,tiempo:"10:39:00"},{sitio:27,dist:170,tiempo:"3:01:00"},{sitio:28,dist:1225,tiempo:"19:44:00"},
	{sitio:31,dist:565,tiempo:"8:36:00"}]},
	{ 
	Nombre: "Tunja", 
	center:{lat:5.5393784, lng:-73.3912605},
	Cercanos:[{sitio:3,dist:868,tiempo:"14:52:00"},{sitio:4,dist:935,tiempo:"15:39:00"},{sitio:8,dist:199,tiempo:"6:11:00"},
	{sitio:10,dist:725,tiempo:"12:08:00"},{sitio:12,dist:719,tiempo:"15:01:00"},{sitio:13,dist:143,tiempo:"2:08:00"},
	{sitio:17,dist:871,tiempo:"14:26:00"},{sitio:18,dist:815,tiempo:"13:31:00"},{sitio:21,dist:421,tiempo:"9:51:00"},
	{sitio:22,dist:417,tiempo:"9:49:00"},{sitio:26,dist:282,tiempo:"5:30:00"},{sitio:27,dist:878,tiempo:"14:52:00"}]},
	{ 
	Nombre: "Manizales", 
	center:{lat:5.0742678, lng:-75.5729164},
	Cercanos:[{sitio:1,dist:195,tiempo:"4:20:00"},{sitio:3,dist:1003,tiempo:"16:03:00"}]},
	{ 
	Nombre: "Florencia", 
	center:{lat:1.7287283, lng:-75.8957618},
	Cercanos:[{sitio:2,dist:30,tiempo:10}]},
	{ 
	Nombre: "Yopal", 
	center:{lat:5.332838, lng:-72.4085107},
	Cercanos:[{sitio:2,dist:363,tiempo:"5:46:00"},{sitio:4,dist:1121,tiempo:"21:36:00"},{sitio:5,dist:199,tiempo:"6:11:00"},{sitio:10,dist:199,tiempo:"6:11:00"}]},
	{
	Nombre: "Popayán", 
	center:{lat:2.4428648, lng:-76.6484463},
	Cercanos:[{sitio:2,dist:30,tiempo:10}]},
	{
	Nombre: "Valledupar", 
	center:{lat:10.4648123, lng:-73.2766566},
	Cercanos:[{sitio:1,dist:748,tiempo:"11:25:00"},{sitio:3,dist:302,tiempo:"5:00:00"},{sitio:4,dist:1121,tiempo:"5:58:00"},{sitio:5,dist:725,tiempo:"12:08:00"}]},
	{
	Nombre: "Quibdó", 
	center:{lat:5.983899, lng:-76.9248797},
	Cercanos:[{sitio:1,dist:230,tiempo:"6:51:00"}]},
	{
	Nombre: "Montería", 
	center:{lat:8.5959403, lng:-76.2490842},
	Cercanos:[{sitio:1,dist:406,tiempo:"7:31:00"},{sitio:4,dist:273,tiempo:"4:49:00"},{sitio:5,dist:719,tiempo:"15:01:00"}]},
	{
	Nombre: "Bogotá", 
	center:{lat:4.6486259, lng:-74.2478908},
	Cercanos:[{sitio:1,dist:420,tiempo:"6:52:00"},{sitio:3,dist:1009,tiempo:"15:41:00"},{sitio:4,dist:1075,tiempo:"16:26:00"},{sitio:5,dist:143,tiempo:"2:08:00"}]},
	{
	Nombre: "Puerto Inírida", 
	center:{lat:3.8683189, lng:-67.9326714},
	Cercanos:[{sitio:2,dist:30,tiempo:10}]},
	{
	Nombre: "San José Del Guaviare", 
	center:{lat:2.569371, lng:-72.6476268},
	Cercanos:[{sitio:2,dist:30,tiempo:10}]},
	{
	Nombre:"Neiva",
	center:{lat:3.0363524, lng:-75.4369235 }, 
	Cercanos:[{  }]},
	{
	Nombre:"Rioacha",
	center:{lat:11.5344826, lng:-72.932166 }, 
	Cercanos:[{sitio:5,dist:871,tiempo:"14:26:00"}]},
	{
	Nombre:"Santa Marta",
	center:{lat:11.0865488, lng:-74.0440963 }, 
	Cercanos:[{sitio:18,dist:838,tiempo:"12:43:00"},{sitio:3,dist:106,tiempo:"2:18:00"},{sitio:5,dist:815,tiempo:"13:31:00"}]},
	{
	Nombre:"Villavicencio",
	center:{lat:4.1113172, lng:-73.6085559 }, 
	Cercanos:[{  }]},
	{
	Nombre:"Pasto",
	center:{lat:1.2135683, lng:-77.2947321 }, 
	Cercanos:[{  }]},
	{
	Nombre:"Cucuta",
	center:{lat:8.0781471, lng:-72.617279 }, 
	Cercanos:[{sitio:2,dist:383,tiempo:"11:15:00"},{sitio:3,dist:672,tiempo:"12:18:00"},{sitio:4,dist:739,tiempo:"13:11:00"},
	{sitio:5,dist:421,tiempo:"9:51:00"}]},
	{
	Nombre:"Mocoa",
	center:{lat:1.1523513, lng:-76.6554324 }, 
	Cercanos:[{sitio:5,dist:417,tiempo:"9:49:00"}]},
	{
	Nombre:"Armenia",
	center:{lat:4.4915063, lng:-75.7848234 }, 
	Cercanos:[{  }]},
	{
	Nombre:"Pereira",
	center:{lat:4.785349,lng:-75.795147 }, 
	Cercanos:[{sitio:1,dist:217,tiempo:"4:48:00"}]},
	{
	Nombre:"San andres",
	center:{lat:12.5717162,lng:-81.7148846 }, 
	Cercanos:[{  }]},
	{
	Nombre:"Bucaramanga",
	center:{lat:7.165188,lng:-73.1782848 }, 
	Cercanos:[{sitio:1,dist:393,tiempo:"7:05:00"},{sitio:2,dist:439,tiempo:"12:42:00"},{sitio:3,dist:591,tiempo:"9:46:00"},{sitio:4,dist:658,tiempo:"10:39:00"},
	{sitio:5,dist:282,tiempo:"5:30:00"}]},
	{
	Nombre:"Sincelejo",
	center:{lat:9.2922334,lng:-75.412339}, 
	Cercanos:[{sitio:27,dist:472,tiempo:"8:45:00"},{sitio:3,dist:249,tiempo:"4:35:00"},{sitio:4,dist:170,tiempo:"3:01:00"},
	{sitio:5,dist:878,tiempo:"14:52:00"}]},
	{
	Nombre:"Ibague",
	center:{lat:4.4123744,lng:-75.2217969}, 
	Cercanos:[{sitio:28,dist:413,tiempo:"6:43:00"},{sitio:4,dist:1225,tiempo:"19:44:00"}]},
	{
	Nombre:"Cali",
	center:{lat:3.4107634,lng:-76.6531619}, 
	Cercanos:[{  }]},
	{
	Nombre:"Mitu",
	center:{lat:1.2427239,lng:-70.2401577}, 
	Cercanos:[{  }]},
	{
	Nombre:"Puerto Carreño",
	center:{lat:5.8113372,lng:-68.394708}, 
	Cercanos:[{sitio:4,dist:565,tiempo:"8:36:00"}]}
];