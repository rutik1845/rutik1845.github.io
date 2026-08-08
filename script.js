const header=document.getElementById("header"), progress=document.getElementById("progress"), nav=document.getElementById("nav"), hamb=document.getElementById("hamb"), cursor=document.getElementById("cursor");
window.addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+"%";});
hamb.addEventListener("click",()=>nav.classList.toggle("open"));[...nav.querySelectorAll("a")].forEach(a=>a.onclick=()=>nav.classList.remove("open"));
window.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"});
document.querySelectorAll("a,button,.skill-pill").forEach(el=>{el.addEventListener("mouseenter",()=>{cursor.style.width="38px";cursor.style.height="38px"});el.addEventListener("mouseleave",()=>{cursor.style.width="18px";cursor.style.height="18px"})});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll(".section,.job,.case-feature,.live-project,.skill-pill,.steps>div").forEach(e=>{e.classList.add("reveal");io.observe(e)});
document.getElementById("year").textContent=new Date().getFullYear();
