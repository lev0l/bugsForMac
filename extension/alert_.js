document.getElementById('searchInputPlayer').placeholder = "Bugs for Mac"
title = document.getElementsByClassName('title')[0].innerText;
setInterval(function(){
if(title != document.getElementsByClassName('title')[0].innerText ) 
    {
        title = document.getElementsByClassName('title')[0].innerText;
    //    album = document.getElementsByClassName('albumtitle')[0].innerText;
        artist = document.getElementsByClassName('artist')[0];
        artist = artist.getElementsByTagName('a')[0].innerText;

        abart = document.getElementsByClassName('radioPlayer')[0];
        abart = abart.getElementsByClassName('thumbnail')[0];
        abart = abart.getElementsByTagName('img')[0].src;

        var noti = new Notification(title,{ body: artist, icon: abart });

        setTimeout(function(){ noti.close(); }, 3000);
    }
}, 1000);