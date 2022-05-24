const discord = "girlboss#1577"


$(function () { 
    $(".n").load("/NavBar.html");
    $("#disc").popover({
        title: '',
        content: discord,
        trigger: 'hover',
        delay: {show: 0, hide: 0}
    });
    
    $('#disc').click(() =>{
        navigator.clipboard.writeText(discord);
    })
    $("#connect").click(() =>{
        let url = $("#urlj");
        url = `ws://${url[0].value}`;
        
        ConnectToServer({url: url})
    })
})

function ConnectToServer(options){
    let Socket = new WebSocket(options.url, options.protocols||undefined);
    Socket.onopen = () => {
        console.log("Connected to socket.")
    }
    Socket.onmessage =  (evt) => { 
        var received_msg = evt.data;
        alert("Message is received...");
        console.log(received_msg);
     };
}