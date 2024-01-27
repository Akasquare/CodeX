var crsr =document.querySelector("#cursor")
var blur =document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y +"px"
  blur.style.left = dets.x- 160 +"px"
  blur.style.top = dets.y- 180 +"px"
})
 // scroll------
 const backTop =document.querySelector(".back-to-top")
 backTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 })