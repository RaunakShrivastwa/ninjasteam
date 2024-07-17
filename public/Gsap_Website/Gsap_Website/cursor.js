const main = document.getElementById('main');
const curssor = document.getElementById('curssor');

main.addEventListener('mousemove',(e)=>{
    gsap.to(curssor,{
        x:e.x,
        y:e.y,
        duration:1
    })
})

gsap.to('#curssor img',{
    rotate:360,
    duration:3,
    repeat:-1,
    ease:'none'
})