const discord = "shobie#1577"


$(function () { 
    $("#disc").popover({
        title: '',
        content: discord,
        trigger: 'hover',
        delay: {show: 0, hide: 0}
    });
    $(".n").load("NavBar.html");
    $('#disc').click(() =>{
        navigator.clipboard.writeText(discord);
    })
});