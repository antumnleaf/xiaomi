// banner效果
{
	let imgs=document.querySelectorAll(".banner_img img");
	let pagers=document.querySelectorAll(".lunbo_con");
	let bannner=document.querySelector("#banner");
	let next=document.querySelector(".banner_btn2");
	let prev=document.querySelector(".banner_btn1");

	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("banner_img1");
				pagers[i].classList.remove("lunbo_this");
			}
			this.classList.add("lunbo_this");
			imgs[index].classList.add("banner_img1");
			n=index;
		}
	});

	let n=0;
	function move(){
		n++;
		if(n==imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("banner_img1");
			pagers[i].classList.remove("lunbo_this");
		}
		imgs[n].classList.add("banner_img1");
		pagers[n].classList.add("lunbo_this");
	}

	let t=setInterval(move,3000);//自动执行代码

	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};

	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		});
	});
}
//明星单品效果
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const inner=document.querySelector(".star_item_right");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.add("disable");
		if(n===2){
			next.classList.remove("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.add("disable");
		if(n===0){
			prev.classList.remove("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
}
//搭配效果
{
	function content(parent){
		const types=parent.querySelectorAll(".dapei_right span");
		const cons=parent.querySelectorAll(".dapei_bottom_right");
		console.log(cons);
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("dapei_remen");
					cons[i].classList.remove("dapei_top");
				}
				this.classList.add("dapei_remen");
				cons[index].classList.add("dapei_top");
			}			
		})
	}
	const contentlist=document.querySelectorAll(".dapei");
	console.log(contentlist);
	content(contentlist[0]);
	content(contentlist[1]);
	content(contentlist[2]);
}