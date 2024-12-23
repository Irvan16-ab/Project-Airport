ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-2782412.209239, 5159332.382678, 2394606.893230, 8353410.682138]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ne_10m_airportsshp_1 = new ol.format.GeoJSON();
var features_ne_10m_airportsshp_1 = format_ne_10m_airportsshp_1.readFeatures(json_ne_10m_airportsshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airportsshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airportsshp_1.addFeatures(features_ne_10m_airportsshp_1);
var lyr_ne_10m_airportsshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_airportsshp_1, 
                style: style_ne_10m_airportsshp_1,
                popuplayertitle: 'ne_10m_airports.shp',
                interactive: true,
    title: 'ne_10m_airports.shp<br />\
    <img src="styles/legend/ne_10m_airportsshp_1_0.png" /> Major Airport<br />\
    <img src="styles/legend/ne_10m_airportsshp_1_1.png" /> Mid Airport<br />\
    <img src="styles/legend/ne_10m_airportsshp_1_2.png" /> Small Airport<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ne_10m_airportsshp_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ne_10m_airportsshp_1];
lyr_ne_10m_airportsshp_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'class': 'class', });
lyr_ne_10m_airportsshp_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'class': 'TextEdit', });
lyr_ne_10m_airportsshp_1.set('fieldLabels', {'name': 'inline label - always visible', 'iata_code': 'inline label - always visible', 'wikipedia': 'inline label - always visible', 'class': 'inline label - always visible', });
lyr_ne_10m_airportsshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});