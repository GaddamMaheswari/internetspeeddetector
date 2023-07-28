let starttime,endtime;
let imgsize="";
let img=new Image();
let bitoutput=document.getElementById("bits");
let kboutput=document.getElementById("kbs");
let mboutput=document.getElementById("mbs");
let gboutput=document.getElementById("gbs");
let imglink="https://source.unsplash.com/random?topics=nature";
//when image loads....
img.onload=async function(){
    endtime=new Date().getTime();
    //know the size of an image...
    await fetch(imglink).then((response)=>{
        imgsize= response.headers.get("content-length");
        calculatespeed();
    });
};
function calculatespeed(){
    //compute time taken in seconds
    let timeduration=(endtime-starttime)/1000;
    //totalno.of bots
    let loadedbits=imgsize*8;
    let speedinbps=(loadedbits/timeduration).toFixed(2);
    let speedinkbps=(speedinbps/1024).toFixed(2);
    let speedinmbps=(speedinkbps/1024).toFixed(2);
    let speedingbps=(speedinmbps/1024).toFixed(2);
    bitoutput.innerHTML+=`${speedinbps}`;
    kboutput.innerHTML+=`${speedinkbps}`;
    mboutput.innerHTML+=`${speedinmbps}`;
    gboutput.innerHTML+=`${speedingbps}`;
}
//initial config
const init=async()=>{
    starttime=new Date().getTime();
    img.src=imglink;
};
window.onload=()=>init();