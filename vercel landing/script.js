let theme = document.querySelector("#theme")

theme.addEventListener("change",(e)=> {
	if(e.target.value == "dark") {
		document.getElementById("body").className = "dark-theme";
		document.documentElement.style.colorScheme = "dark"
	}else {
		document.getElementById("body").className = "light-theme";
		document.documentElement.style.colorScheme = "light"
	}
	
})

let footerHeadings = document.querySelectorAll(".f-content-header")

for(let header of Array.from(footerHeadings)) {
	header.addEventListener("click",(e)=>{
	
		let t = e.target;
		let tt;
		let ind;
	
		if(t.className ==="f-content-header"){
			tt = t.parentNode.childNodes[3];
			ind = t.childNodes[3]
		}else {
			tt = t.parentNode.parentNode.childNodes[3]
			ind = t.parentNode.childNodes[3]
		}
		
		if(tt.style.display !=="none") {
			tt.style.display = "none"
			ind.innerText = "+"
		}else {
			tt.style.display = "block"
			ind.innerText = "-"
		}
	})
}

console.log("here")