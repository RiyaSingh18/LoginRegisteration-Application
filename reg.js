 function fnRegister()
{
    var uidRef=document.querySelector('#uid');
    var emailRef=document.querySelector('#email');
    var passRef=document.querySelector('#pass');
    var phoneRef=document.querySelector('#pno');
    var resRef=document.getElementById('res');
    var Uid=uidRef.value;
    var Email=emailRef.value;
    var Password=passRef.value;
    var PhoneNo=phoneRef.value;

    var oUser={
        'uid':Uid,
        'email':Email,
        'password':Password,
        'phoneNo':PhoneNo
    }
    var sUsers=localStorage.getItem('users');
    var aUsers=[];
    if(sUsers==null){
        aUsers.push(oUser);
        sUsers=JSON.stringify(aUsers);
        localStorage.setItem('users',sUsers);

    }
    else{
        aUsers=JSON.parse(sUsers);
        //check unique identity
       var isUserExist= aUsers.some(function(obj){
           return obj.uid == oUser.uid
        });
        if(isUserExist){
             resRef.innerHTML="U r entered uid is already registered";
        }else{
  
        aUsers.push(oUser);
        sUsers=JSON.stringify(aUsers);
        localStorage.setItem('users',sUsers);
        resRef.innerHTML="U R Registered Successfully";
        }
    }  
    uidRef.value=' ';
    emailRef.value=' ';
    passRef.value=' ';
    phoneRef.value=' ';
}