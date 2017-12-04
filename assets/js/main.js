function openNav() {
    document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
    $(".btnAreas").click(function(event) {
        var valor = $(this).attr("data-filter");

        if (valor == "all") {
            $(".filter").show("1000");
        } else {
            $(".filter").not("." + valor).hide("1000");
            $(".filter").filter("." + valor).show("1000");
        }
        $(".areasInteres .btnAreas").click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        $("#web").click(function(event) {
            ' <div class="row">' +
            '<div class="col-12">' +
            '<section id="web">' +
            '<h2>Weather Challenge</h2>' +
            ' <p>Proyecto consistió en utilizar api para pedir datos de clima y así poder decir el clima del lugar y el pronostico de la semana</p>' +
            '<a href="https://nanynn.github.io/weather-challenge/"><i class="fa fa-eye" aria-hidden="true"></i> demo</a>' +
            '</section>' +
            '</div>' +
            '</div>'
        });
    });
});