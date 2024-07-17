var tl = gsap.timeline();

gsap.from('.section1 .page1_left',{
    x:-400,
    duration: 3,
    opacity:0,
    stagger:0.4,

})

gsap.from('.section1 .page1_right',{
    x:400,
    duration: 3,
    opacity:0,
    stagger:0.4

})




window.addEventListener('wheel',(dets)=>{
   if(dets.deltaY<0){
     gsap.to('#logo img',{
        transform:'translateX(-500%)',
        duration: 8,
        repeat:-1,
        ease:'none',
        stagger:0.5,
        opacity:0
     })
   }else{
    gsap.to('#logo img',{
        transform:'translateX(500%)',
        duration: 8,
        repeat:-1,
        ease:'none',
        
        opacity:0
     })
   }
})

gsap.to('.section2 .l1',{
    x:200,
    duration:2,
    scrollTrigger:{
        scroller:'body',
        trigger:'.section2 .l1',
        // markers:true,
        start:'top 40%',
        end:'top 0%',
        scurb:2
    }
    
})

