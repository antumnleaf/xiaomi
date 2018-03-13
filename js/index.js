//nav效果
{
	let dropbox=document.querySelectorAll(".nav_drop");
	let text=document.querySelectorAll(".nav_text span");
	let obj=dropbox[0];
	text.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			dropbox[index].style.display="block";
			obj=dropbox[index];
		}
		ele.onmouseleave=function(){
			dropbox[index].style.display="none";
		}
	});
}
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
//banner列表效果
{
	let labels=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".banner_nav_con");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
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
	content(contentlist[0]);
	content(contentlist[1]);
	content(contentlist[2]);
}
//内容效果
{
	function wheel(parent){
		let prev=parent.querySelector(".content_prev");
		let next=parent.querySelector(".content_next");
		let inner=parent.querySelector(".content_item1");
		let contents=parent.querySelectorAll(".content_con");
		let pagers=parent.querySelectorAll(".content_dian_item");
		console.log(inner);

		let n=0;
		let l=contents.length;
		let obj=pagers[0];
		next.onclick=function(){
			n++;
			if(n==l){
				n=l-1;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("content_active");
			pagers[n-1].classList.remove("content_active");
			obj=pagers[n];
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("content_active");
			pagers[n+1].classList.remove("content_active");
			obj=pagers[n];
		}
		
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("content_active");
				this.classList.add("content_active");
				obj=this;
				n=index;
				inner.style.marginLeft=-296*n+"px";
			}
		});
	}
	let items=document.querySelectorAll(".content_item");
	console.log(items);
	items.forEach(function(ele,index){
		wheel(ele);
	});
	
}