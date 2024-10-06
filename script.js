var vg_1 = "map.json";
vegaEmbed("#map", vg_1).then(function(result) {
// Access the Vega view instance  (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_1 = "./js/UK_symbolmap_with_graticules.json";
vegaEmbed("#symbol_map", vg_1, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_2 = "./js/histogram.json";
vegaEmbed("#histo", vg_2, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);