//initialize

let index=0; //song index in array
let next=document.getElementById('next');  //next play button
let prev=document.getElementById('prev');  //prev play button
let play=document.getElementById('play');  //play pause button
let ply=document.getElementById('ply');  //play pause by song banner
let songtrace=document.getElementById('trace');  //trace bar

/*
let songs =[
    {songName: "Songbird" , filepath: "songbird.mp3"},
    {songName: "husn" , filepath: "husn.mp3"},
    {songName: "the nights" , filepath: "the nights.mp3"},
    {songName: "let her go" , filepath: "let her go.mp3"},
    {songName: "kabhi kabhi aditi zindagi" , filepath: "kabhi kabhi aditi zindagi.mp3"},
    {songName: "summertime sadness" , filepath: "summertime sadness.mp3"},
    {songName: "danza kuduro" , filepath: "danza kuduro.mp3"},
    {songName: "chand ne kaho" , filepath: "chand ne kaho.mp3"},
    {songName: "cheri cheri lady" , filepath: "cheri cheri lady.mp3"},
    {songName: "never ending stories" , filepath: "never ending stories.mp3"},
    {songName: "snow man" , filepath: "snow man.mp3"},
    {songName: "alexander rybak" , filepath: "alexander rybak.mp3"},
    {songName: "dhun lagi" , filepath: "dhun lagi.mp3"},
    {songName: "see you again" , filepath: "see you again.mp3"},
    {songName: "i aint worried" , filepath: "i aint worried.mp3"}
]*/

let songs =[
    "songbird.mp3" ,"husn.mp3","the nights.mp3","let her go.mp3","kabhi kabhi aditi zindagi.mp3","summertime sadness.mp3","jaane tu.mp3","danza kuduro.mp3","chand ne kaho.mp3","cheri cheri lady.mp3","never ending stories.mp3","snow man.mp3","alexander rybak.mp3","dhun lagi.mp3","see you again.mp3","i aint worried.mp3"
]
let audioelement=new Audio(songs[index]); //audio element basically a current sony from array

//play pause event handler
play.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0)  //play if pause or initial play
    {
        audioelement.play();
    }
    else{                                                   //pause
        audioelement.pause();
    }
})

ply.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0)  //play if pause or initial play
    {
        audioelement.play();
    }
    else{                                                   //pause
        audioelement.pause();
    }
})

//next event handler
next.addEventListener('click', ()=>{
    if(index<15)
    {
        audioelement.pause()
        index=index+1;
        audioelement=new Audio(songs[index]);
        audioelement.play();
        
    }
    else
    {
        audioelement.pause()
        index=0;
        audioelement=new Audio(songs[index]);
        audioelement.play();
    }
})
 
//previous event handler
prev.addEventListener('click', ()=>{
    if(index>0)
    {
        audioelement.pause()
        index=index-1;
        audioelement=new Audio(songs[index]);
        audioelement.play();
    }
    else
    {
        audioelement.pause()
        index=15;
        audioelement=new Audio(songs[index]);
        audioelement.play();
    }
})

audioelement.addEventListener('change' , ()=>{
    if(audioelement.currentTime==audioelement.duration)
    {
        if(index<15)
        {
            audioelement.pause()
            index=index+1;
            audioelement=new Audio(songs[index]);
            audioelement.play();
                
        }
        else
        {
            audioelement.pause()
            index=0;
            audioelement=new Audio(songs[index]);
            audioelement.play();
        }
    }
})

//trace bar update event  !!! currently not working some sh*t happening  !!!
audioelement.addEventListener('timeupdate' , ()=>
{
    console.log('timeupdate');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);  //time of song played
    trace.value=progress;                                                     //trace bar update
})

trace.addEventListener('change', ()=>{
    audioelement.currentTime=trace.value *audioelement.duration /100;
})