function valForm() {
    var nome=document.querySelectorAll('#nome')[0];
    var alerta=document.getElementsByClassName('alerta')[0];
    var alerta1=document.getElementsByClassName('alerta')[1];
    var alerta2=document.getElementsByClassName('alerta')[2];
    var email=document.querySelectorAll('#email')[0];
    var msg=document.querySelectorAll('#msg')[0];
    var p1=document.querySelectorAll('#p1')[0];
    var p2=document.querySelectorAll('#p2')[0];
    var p3=document.querySelectorAll('#p3')[0];
    
    
    if(nome.value==''){
        
        alerta.innerHTML='!Preencher ^';
        alerta.style.display='inline';
        nome.focus();
        return false;
    } else {
        p1.style.display='none';
    }
    
    if(email.value==''){
        
        alerta1.innerHTML='!Preencher ^';
        alerta1.style.display='inline';
        email.focus();
        return false;
    }else {
        p2.style.display='none';
    }
    if(msg.value==''){
        
        alerta2.innerHTML='!Preencher ^';
        alerta2.style.display='inline';
        msg.focus();
        return false;
    } else {
        p3.style.display='none';
    }
    if(nome.value!='' & email.value!='' & msg.value!=''){
        return true;
    }else{
    return false;
    }
}