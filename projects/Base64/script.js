
$(document).ready (() => {
    window.history.replaceState({}, "", "");
    $("#b64").keyup( function() {
        try {
            $("#pt").text(atob($("#b64").text()));
        } catch(err){
            $("#pt").text("There was an error decoding your text!")
        } 
    });
    $("#pt").keyup( function() {
        try {
            $("#b64").text(btoa($("#pt").text()));
        } catch(err){
            $("#b64").text("There was an error encoding your text!")
        } 
    });
})


