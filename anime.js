amp = 0;
speed = 4;


function setPath(a,b,c){ 
  var str = "M0,50 L0,0 L200,0 L200,50 ";
  for (var i=0; i<50; i++){
    str+= 'l-4,'+ String( Math.sin(a*speed)*gsap.utils.wrapYoyo(15.9,5,i)*amp );
  }  
  gsap.set('.p', {attr:{d:str}});
}


$('.btn').on('mouseenter', function(){
  gsap.to(window, {duration:gsap.utils.random(0.7, 1), speed:3, amp:0.4, ease:'power4', yoyoEase:'sine.inOut', onStart:function(){ gsap.ticker.add(setPath); }, onComplete:endWave, yoyo:true, repeat:1, overwrite:true});
})

$('.btn').on('mouseleave', function(){
  gsap.to(window, {duration:0.6, amp:0, speed:4, onComplete:endWave, overwrite:true});
})

function endWave(){
  gsap.ticker.remove(setPath);
  gsap.set('.p', {attr:{d:'M0,50 L0,0 L200,0 L200,50z'}});
}
