function fnLogin()
{
   var uidRef=document.querySelector('#uid');
    var passRef=document.querySelector('#pass');
    var resRef=document.getElementById('res');

    var uid=uidRef.value;
    var pass=passRef.value;
    var sUsers=localStorage.getItem('users');
	var aUsers=JSON.parse(sUsers);
    var isValidUser=aUsers.some(function(obj){
        return obj.uid== uid && obj.pass==pass
     });
	if(isValidUser){
	   location.href="Home.html"
	}else{
	resRef.innerHTML="please check u r entered uid or password";
    }
uidRef.value=' ';
passRef.value;
  }
