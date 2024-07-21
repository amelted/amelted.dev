const discord = "@amelted"


$(function () { 
    $(".n").load("NavBar.html");
    $("#disc").popover({
        title: '',
        content: discord,
        trigger: 'hover',
        delay: {show: 0, hide: 0}
    });
    
    $('#disc').click(() =>{
        navigator.clipboard.writeText(discord);
    })
    $("#header").click(() => {
        $("#header").addClass("active");
    })
    $("#abtmep").hover(() => {
        if($(".arrow").hasClass("hover") && !$(".arrow").hasClass("active")){
            $(".arrow").removeClass("hover")
            
        }else{
            $(".arrow").addClass("hover")

            
        }
    })
    $("#abtmep").click(() => {
        let elem = $(".arrow")
        let inactive = $(".inactive").toArray();
        let active = $(".active").toArray();

        if(elem.hasClass("active")){
            elem.removeClass("active");
            $("#abtme").removeClass("active")
            $(".abtCont").removeClass("active")
            active.forEach(i => {
                i.classList.remove("active");
                i.classList.add("inactive");
            });
            inactive.forEach(i => {
                i.classList.add("active");
                i.classList.remove("inactive");
            });
        }else{
            elem.addClass("active").removeClass("inactive");
            $("#abtme").addClass("active").removeClass("inactive")
            console.log(inactive)
            active.forEach(i => {
                i.classList.add("active");
            });
            inactive.forEach(i => {
                i.classList.add("active");
                i.classList.remove("inactive");
            });
            
            console.log(inactive)
        }
        
    })

});