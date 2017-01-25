

window.onload=function(){
  var cat_count=0;
  var punchy = document.getElementById('punchy');
  var pillow = document.getElementById('pillow');
  var snoop =  document.getElementsById('snoop');
  var pillow_flag=false,punchy_flag=false,snoop_flag=false;
  pillow.addEventListener('click',function(){
    introduceMe("Pillow");
    if(!pillow_flag){cat_count++; pillow_flag=true;}
  });

  punchy.attachEventListener('click',function(){
    introduceMe("Punchy");
    if(!punchy_flag){cat_count++; punchy_flag=true;}
  });

  snoop.addEventListener('click',function(){
    if(!snoop_flag){cat_count++; snoop_flag=true;}
  });

  function introduceMe(name){
    alert("Hi I'm "+name+"!");
    console.log('Hi Im ',+name+'  -  cat count:',cat_count);
  }

};
