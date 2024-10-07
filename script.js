var vg_1 = "map.json";
vegaEmbed("#map", vg_1, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_2 = "line.json";
vegaEmbed("#line", vg_2, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_3 = "mean.json";
vegaEmbed("#mean", vg_3, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);
    // var spec2 = "js/scatter_plot_interactive.vg.json";
    // vegaEmbed('#scatter_plot', spec2).then(function(result) {
    //   // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    // }).catch(console.error);