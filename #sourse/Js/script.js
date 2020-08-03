	let burgerMenu = document.querySelector(".header-burger");
	burgerMenu.addEventListener("click", function(){
		burgerMenu.classList.toggle('active');
		document.querySelector(".header-nav").classList.toggle('active');
		document.querySelector(".header-socials").classList.toggle('active');
	})
	const anchors = document.querySelectorAll('a[class*="ancor"]')
		for(let anchor of anchors) {
			anchor.addEventListener("click",function(event) {
				event.preventDefault();
				const blockID = anchor.getAttribute('href')
				document.querySelector('' +blockID).scrollIntoView({
					behavior:"smooth",
					block: "start"
				})
			})
		};
	let bodyWidth = document.querySelector("body").offsetWidth;
	if (bodyWidth >= 769 ) {
		let headerInnet = document.querySelector(".header-inner");
		let headerInnetOffset = headerInnet.offsetLeft
		let newsAgentyBody = document.querySelectorAll(".news-agency-body-inner");
		newsAgentyBody.forEach(function (item,i){
			let ind = i % 2
			if (ind == 0 ) {
				item.style.marginLeft = headerInnetOffset + "px";
			}else{
				item.style.marginRight = headerInnetOffset + "px";
			}
		});  
		let newsAgenty = document.querySelector(".news-agency").offsetHeight;
		let newsAgentyImg = document.querySelectorAll(".news-agency-img")
		newsAgentyImg.forEach(function(item){
			item.style.height = newsAgenty + "px";
		})
	}
	let header = document.querySelector("header");
	 window.onscroll = function (){
	 	let scrHeight = window.pageYOffset;
	 	if (scrHeight >= 20) {
	 		header.classList.add("scroll")
	 	}else{
	 		header.classList.remove("scroll")
	 	}
	};