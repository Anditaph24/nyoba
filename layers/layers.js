var wms_layers = [];


        var lyr_googlesatelitehybride_0 = new ol.layer.Tile({
            'title': 'google satelite hybride',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_kelurahancimahi_1 = new ol.format.GeoJSON();
var features_kelurahancimahi_1 = format_kelurahancimahi_1.readFeatures(json_kelurahancimahi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelurahancimahi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kelurahancimahi_1.addFeatures(features_kelurahancimahi_1);
var lyr_kelurahancimahi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kelurahancimahi_1, 
                style: style_kelurahancimahi_1,
                popuplayertitle: "kelurahan cimahi",
                interactive: true,
                title: '<img src="styles/legend/kelurahancimahi_1.png" /> kelurahan cimahi'
            });
var format_rw02dan03kelurahan_cimahi_aja_2 = new ol.format.GeoJSON();
var features_rw02dan03kelurahan_cimahi_aja_2 = format_rw02dan03kelurahan_cimahi_aja_2.readFeatures(json_rw02dan03kelurahan_cimahi_aja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rw02dan03kelurahan_cimahi_aja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rw02dan03kelurahan_cimahi_aja_2.addFeatures(features_rw02dan03kelurahan_cimahi_aja_2);
var lyr_rw02dan03kelurahan_cimahi_aja_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rw02dan03kelurahan_cimahi_aja_2, 
                style: style_rw02dan03kelurahan_cimahi_aja_2,
                popuplayertitle: "rw 02 dan 03 — kelurahan_cimahi_aja",
                interactive: true,
                title: '<img src="styles/legend/rw02dan03kelurahan_cimahi_aja_2.png" /> rw 02 dan 03 — kelurahan_cimahi_aja'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_WAYPOINTRUMAH_4 = new ol.format.GeoJSON();
var features_WAYPOINTRUMAH_4 = format_WAYPOINTRUMAH_4.readFeatures(json_WAYPOINTRUMAH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WAYPOINTRUMAH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WAYPOINTRUMAH_4.addFeatures(features_WAYPOINTRUMAH_4);
var lyr_WAYPOINTRUMAH_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WAYPOINTRUMAH_4, 
                style: style_WAYPOINTRUMAH_4,
                popuplayertitle: "WAYPOINT RUMAH",
                interactive: true,
                title: '<img src="styles/legend/WAYPOINTRUMAH_4.png" /> WAYPOINT RUMAH'
            });

lyr_googlesatelitehybride_0.setVisible(true);lyr_kelurahancimahi_1.setVisible(true);lyr_rw02dan03kelurahan_cimahi_aja_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_WAYPOINTRUMAH_4.setVisible(true);
var layersList = [lyr_googlesatelitehybride_0,lyr_kelurahancimahi_1,lyr_rw02dan03kelurahan_cimahi_aja_2,lyr_Buffered_3,lyr_WAYPOINTRUMAH_4];
lyr_kelurahancimahi_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_rw02dan03kelurahan_cimahi_aja_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WAYPOINTRUMAH_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_kelurahancimahi_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_rw02dan03kelurahan_cimahi_aja_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_WAYPOINTRUMAH_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_kelurahancimahi_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_rw02dan03kelurahan_cimahi_aja_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WAYPOINTRUMAH_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_WAYPOINTRUMAH_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});