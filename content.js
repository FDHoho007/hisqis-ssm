(function() {
	let ul = document.querySelector(".mikronavi_list ul");
	if(ul == null)
		return;
	let params = {}, x;
	ul.getElementsByTagName("a")[0].search.split("&").forEach(arg => params[(x = arg.split("="))[0]] = x[1]);
	let li = document.createElement("li");
	li.style.listStyleType = "none";
	let a = document.createElement("a");
	a.innerText = "Super Secret Menu";
	a.href = "https://qisserver.uni-passau.de/qisserver/rds?state=notenspiegelStudent&next=tree.vm&nextdir=qispos/notenspiegel/student&menuid=notenspiegelStudent&asi=" + params["asi"];
	li.appendChild(a);
	ul.appendChild(li);
})()
