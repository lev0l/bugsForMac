title = '';
setInterval(function(){
if(title != document.getElementsByClassName('tracktitle')[0].innerText ) 
    {
        title = document.getElementsByClassName('tracktitle')[0].innerText;
        artist = document.getElementsByClassName('artistname')[0].innerText;
        abart = document.getElementsByClassName('thumbnail')[0].getElementsByTagName('img')[0].src;
        var noti = new Notification(title, { body: artist, icon:  abart });
        setTimeout(function(){ noti.close(); }, 3000);
    }
}, 1000);