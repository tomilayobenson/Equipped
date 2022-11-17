$(function(){
    $("#rentalSwitch").click(function(){
        if($(this).is(":checked")) {
            $("#rentalPriceSection").removeClass("d-none");
            $("#rentalPriceSection").addClass("d-block");
        } else{
            $("#rentalPriceSection").removeClass("d-block");
            $("#rentalPriceSection").addClass("d-none");   
        }
    });
    $("#buySwitch").click(function(){
        if($(this).is(":checked")) {
            $("#buyPriceSection").removeClass("d-none");
            $("#buyPriceSection").addClass("d-block");
        } else{
            $("#buyPriceSection").removeClass("d-block");
            $("#buyPriceSection").addClass("d-none");   
        }
    });
});