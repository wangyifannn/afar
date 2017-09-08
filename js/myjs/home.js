var swiper_slide = document.querySelectorAll(".swiper-slide");
console.log(swiper_slide);
var j=0;
for(i=0;i<swiper_slide.length;i++){
	swiper_slide[i].index = i+1;
	swiper_slide[i].onclick= function(){
		console.log()
		window.location.href = "./html/slider"+this.index+"/slider"+this.index+".html";
	}
}

