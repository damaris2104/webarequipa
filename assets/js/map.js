var map = L.map('map', {
    center: [-16.398864, -71.536964],
    zoom: 18,
    minZoom: 8,
    maxZoom: 30,
    maxBounds: [[-17.8089,-75.5797], [-13.9102,-70.2623]]
  });

L.control.scale({    // para la escala
   imperial: false
    }).addTo(map);

  var wmsUrl = 'https://www.idep.gob.pe/geoportal/services/IMAGENES/ORTOFOTO_AREQUIPA/MapServer/WMSServer';
  var ortoarequipa = L.tileLayer.wms(wmsUrl, {               // para asignar el enlace de la ortofoto
      layers: '0', // Ortomosaico de Arequipa
     format: 'image/png',
      transparent: true
    });
  ortoarequipa.addTo(map);
    
var basemapOSM = L.tileLayer ('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{		
    attribution: '&copy ; <ahref ="http://osm.org/copyright"> OpenStreetMap </a> contributor'
  });
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] }); 
googleTerrain.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var arequipa = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:arequipa", //gisweb:contorno_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
arequipa.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:provincias", //gisweb:provincias_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:distritos", //gisweb:distritos_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
distritos.addTo(map);

var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:bancos", //gisweb:bancos_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
bancos.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:colegios", //gisweb:colegios_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
colegios.addTo(map);

var comerciales = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:megacentros_comerciales", //gisweb:comerciales_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
comerciales.addTo(map);

var estaciones = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "	webarequipa:estaciones_de_servicio", //gisweb:grifos_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
estaciones.addTo(map);

var estacionamientos = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "	webarequipa:estacionamientos", //gisweb:cocheras_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
estacionamientos.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:farmacias", //gisweb:farmacias_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
farmacias.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:hoteles", //gisweb:hoteles_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
hoteles.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:mercados", //gisweb:mercados_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
mercados.addTo(map);

var museos = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:museos", //gisweb:museos_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
museos.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:restaurantes", //gisweb:colegios_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
restaurantes.addTo(map);

var templos = L.tileLayer.wms("http://localhost:8080/geoserver/webarequipa/wms?", {
    layers: "webarequipa:templos", //gisweb:templos_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
templos.addTo(map);

var baseMaps = {                       // para las bases
  "Ortofoto": ortoarequipa,
  "Satelite": googleSat,
  "Terrain": googleTerrain,
  "Hidrido": googleHybrid,
  "OSM": basemapOSM,
  };
var overlayMaps = {                             // agregar las capas y no olvidar la coma
 "Delimitación Arequipa": arequipa,
  "Provincias": provincias,
  "Distritos": distritos,
  "Centros Comerciales": comerciales,
  "Colegios": colegios,
  "Entidades bancarias": bancos,
  "Estacionamiento/Cochera": estacionamientos,
  "Estaciones de Servicio": estaciones,
  "Farmacias": farmacias,
  "Hoteles": hoteles,
  "Mercados": mercados,
  "Museos": museos,
  "Restaurantes": restaurantes,
  "Templos": templos
  };

L.control.layers(baseMaps, overlayMaps,{
  position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
  collapsed: false // true
  }).addTo(map);
