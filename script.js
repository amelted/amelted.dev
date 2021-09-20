const discord = "shobie#1577"

$(document).ready(() => {
    $(".navbar").load("NavBar.html")
})
$(function () { 
    $("#disc").popover({
        title: '',
        content: discord,
        trigger: 'hover',
        delay: {show: 0, hide: 0}
    });
    $('#disc').click(() =>{
        navigator.clipboard.writeText(discord);
    })
});