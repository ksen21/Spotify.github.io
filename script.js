





let songIndex=0;
let audioElement = new Audio('1.mp3');
let jahan = new Audio('Jahaan Tum Ho.mp3');
let btn_1=document.querySelector('.btn-1');
let masterPlay=document.getElementById('masterPlay');
let myprograssBar=document.getElementById('PrograssBar');
let gif=document.querySelector('.gif');
let songItem=Array(document.getElementsByClassName('songItem'));


let songs=[
    {songName: "Let me love you",songPath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: "Let me love 2",songPath:'songs/2.mp3',coverPath:'covers/2.jpg'},
    {songName: "Let me love 3",songPath:'songs/3.mp3',coverPath:'covers/3.jpg'},
    {songName: "Let me love 4",songPath:'songs/4.mp3',coverPath:'covers/4.jpg'},
    {songName: "Let me love 5",songPath:'songs/5.mp3',coverPath:'covers/5.jpg'},
    {songName: "Let me love 6",songPath:'songs/6.mp3',coverPath:'covers/6.jpg'},
]


// Handle play and pause

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime===0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.classList.remove('opacity-0')

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.classList.add('opacity-0')

    }
})
btn_1.addEventListener('click',()=>{
    if(jahan.paused || jahan.currentTime===0){
        jahan.play();
        btn_1.classList.remove("fa-circle-play");
        btn_1.classList.add("fa-circle-pause");
        gif.classList.remove('opacity-0')
        let inner=document.querySelector('.songInfo');
        inner.textContent='Jahaan Tum Ho';
        playFunction();
    }
    else{
        jahan.pause();
        btn_1.classList.remove("fa-circle-pause");
        btn_1.classList.add("fa-circle-play");
        gif.classList.add('opacity-0');
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");

    }
})


const playFunction=function(){
        // jahan.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.classList.remove('opacity-0')
        let inner=document.querySelector('.songInfo');
        inner.textContent='Jahaan Tum Ho';
    // else{
    //     // jahan.pause();
    //     masterPlay.classList.remove("fa-circle-pause");
    //     masterPlay.classList.add("fa-circle-play");
    //     gif.classList.add('opacity-0')

    // }
}
// listin to events

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seek bar
    let prograss=parseInt(audioElement.currentTime/audioElement.duration*100);
    myprograssBar.value=prograss;
})
jahan.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seek bar
    let prograss=parseInt(jahan.currentTime/jahan.duration*100);
    myprograssBar.value=prograss;
})

myprograssBar.addEventListener('change',()=>{
    audioElement.currentTime=myprograssBar.value*audioElement.duration/100;
})

// songItem.forEach((element,i)=>{
//     console.log(element,i);
//     // element.getElementByTagName("img")[0].src=songs[i].coverPath;
//     // element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

// })