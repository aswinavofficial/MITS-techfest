function hideloader(){
	document.getElementById("load_screen").style.display="none";
}

function popup() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}

function popupreg() {
	var popup = document.getElementById("myreg");
	popup.classList.toggle("show1");
}

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} 
	else {
		x.className = "topnav";
	}

	var y=document.getElementById("moblogo1")
	if(y.className=="why_us")   {
		y.className+=" opac";
	}
	else{
		y.className="why_us";
	} 

	var z=document.getElementById("moblogo2")
	if(z.className=="why_us")   {
		z.className+=" opac";
	}
	else{
		z.className="why_us";
	}     
}

function sign(){
	var type = "login";
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var response = "";
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		response = this.responseText;
		if(response == "Success"){
			location.reload();
		}
		else{
			document.getElementById("signerr").innerHTML = response;
		}
	}
	};
	var text = "type="+type+"&username="+username+"&password="+password;
	xmlhttp.open("POST","register.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");                
	xmlhttp.send(text);
}

function login(){
	var type = "login";
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var response = "";
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		response = this.responseText;
		if(response == "Success"){
			location.reload();
		}
		else{
			document.getElementById("signerr").innerHTML = response;
		}
	}
	};
	var text = "type="+type+"&username="+username+"&password="+password;
	xmlhttp.open("POST","../register.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");                
	xmlhttp.send(text);
}

function sign1(){
	var type = "signup";
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var email = document.getElementById('email').value;
	var ph_no = document.getElementById('ph_no').value;
	var clg = document.getElementById('clg').value;
	var year = document.getElementById('year').value;
	var branch = document.getElementById('branch').value;
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var cpassword = document.getElementById('cpassword').value;
	var g = document.getElementsByName('gender');
	for(var i=0;i<g.length;i++){
		if(g[i].checked == true){
			var gender = g[i].value;
		}
	}
	var response = "";
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		response = this.responseText;
		if(response == "Success"){
			document.getElementById("signerr").style.color = "green";
			document.getElementById("signerr").innerHTML = "A verification email has been sent to your mail. Wait upto 10 minutes for the mail. Check your spam box too in case you don't find our mail.";
			document.getElementById('signup').disabled = true;
		}
		else{
			document.getElementById("signerr").innerHTML = response;
		}
	}
	};
	var text = "type="+type+"&first_name="+first_name+"&last_name="+last_name+"&email="+email+"&ph_no="+ph_no+"&clg="+clg+"&year="+year+"&branch="+branch+"&username="+username+"&password="+password+"&cpassword="+cpassword+"&gender="+gender;
	xmlhttp.open("POST","register.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");                
	xmlhttp.send(text);
}

function klose(){
	document.getElementById('contact').style.display = "none";
	if(document.getElementById('menu') != null){
		document.getElementById('menu').style.display = "none";
	}
	var eve = document.getElementsByClassName('w3-modal');
	if(eve != null){
		for(var i=0;i<eve.length;i++){
			eve[i].style.display = 'none';
		}		
	}
}

document.addEventListener("keydown",function(event){
	if(event.keyCode == 27){
		klose();
	}
});

function drop(){
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
	var myDropdown = document.getElementById("myDropdown");
	if(myDropdown != null){
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}
};

var currtime = new Date();
currtime.setDate(currtime.getDate() + 80);

function logout(){
	document.cookie = "uid=-1; expires="+currtime+"; path=/;";
	location.reload();
}

function event_reg(name){
	var response = "";
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		response = this.responseText;
		alert(response);
		if(response == 'Login to continue.'){
			document.getElementById('contact').style.display='block';
		}
	}
	};
	var text = "event="+name;
	xmlhttp.open("POST","../event_online.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");                
	xmlhttp.send(text);
}

function reg_ca(){
	var response = "";
	var xmlhttp;
    var name = "ca";
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		response = this.responseText;
		alert(response);
		if(response == 'Login to continue.'){
			document.getElementById('contact').style.display='block';
		}
		if(response == 'Thank You for registering.'){
			location.reload();
		}
	}
	};
	xmlhttp.open("GET","../event_online.php?db="+name,true);
	xmlhttp.send();
}

