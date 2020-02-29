$(document).ready(function () {
    $(".newyork").click(function () {
        $("#large").toggle();
        $(".larges").toggle();

    });
    $(".neapolitan").click(function () {
        $(".mediums").toggle();
        $("#medium").toggle();

    });
    $(".stloise").click(function () {
        $("#small").toggle();
        $(".smalls").toggle();

    });
    $(".silican").click(function () {
        $("#extralarge").toggle();
        $(".extralarges").toggle();

    });
    $(".chicago").click(function () {
        $("#extramedium").toggle();
        $(".extramediums").toggle();

    });
    $(".detroit").click(function () {
        $("#extrasmall").toggle();
        $(".extrasmalls").toggle();

    });
    $(".california").click(function(){
        $("#largesmall").toggle();
        $(".largesmalls").toggle();


    });
    $(".greek").click(function(){
        $("#largemedium").toggle();
        $(".largemediums").toggle();




    });

});