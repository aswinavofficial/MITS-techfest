  function work_reg(name){
  var response = "";
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    response = this.responseText;
//    alert(response);
//    alert(response == 'Login to continue.');
    if(response == 'Login to continue.'){
      alert(response);
      document.getElementById('contact').style.display='block'; 
    }else{
      if(response =='Error occured while processing request'){
        alert(response);
      }
      else{
        if(response == 'You have already registered for this event.'){
          alert(response);
        }
        else{
//          alert(response);
          location.assign("../payment.php"+response);
        }
      }
    }
  }
  };
  xmlhttp.open("GET","../work_reg.php?workshop="+name,true);
  xmlhttp.send();
}

function toFull(idd){
    var open = document.getElementById(idd);
    open.style.width="100%";
    open.style.opacity='1';
}
   var z=1;         
function openMenu(idd1)
{
   var dis= document.getElementsByClassName('display');
   var i;
   for(i=0;i<dis.length;i++)
   {
       dis[i].style.width="0%";
       dis[i].style.opacity='0';
   }
    
   var open=document.getElementById(idd1);
   open.style.width="56.8%";
   open.style.opacity='0.6';
}
    
function closeAll(idd2)
{
    
    var dis= document.getElementsByClassName('display');
   var i;
   for(i=0;i<dis.length;i++)
   {
       dis[i].style.width="0%";
       dis[i].style.opacity='0';
   }
   var open = document.getElementById(idd2);
                  open.style.width="0%";
                  open.style.opacity='0';
}


function toFullDetails(idd){
    var open = document.getElementById(idd);
      open.style.width="100%";
      open.style.height="100%";
      open.style.opacity='1';
     open.style.zIndex='1100';
     var dis= document.getElementsByClassName('displayArea');
     var i;
     for(i=0;i<dis.length;i++)
     {
         dis[i].style.opacity="0.8";
        
     }
};

function DetailsClose(idd){
    var open = document.getElementById(idd);
      
    open.style.width="0%";
    open.style.height="0%";
    open.style.opacity='0';
    open.style.zIndex='-1000';
    var dis= document.getElementsByClassName('displayArea');
     var i;
     for(i=0;i<dis.length;i++)
     {
         dis[i].style.opacity="0";
        
     }
};