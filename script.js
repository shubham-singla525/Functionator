let block;
let myFunctionList;
let FunList=[];
const movementArray=["left","right","top","down"];
document.addEventListener("DOMContentLoaded",function(){
    console.log('ready');
   block= document.createElement("div");
   block.textContent="Hello World";

   block.style.height="100px";
   block.style.width="100px";
   block.style.backgroundColor="red";
   block.style.color="white";
   block.style.textAlign="center";
   block.style.position="absolute";
   block.style.top="100px";
   block.style.left="150px";
   block.style.lineHeight="100px";
   document.body.appendChild(block);
   myFunctionList=document.createElement('div');
   document.body.appendChild(myFunctionList);


})

document.addEventListener("keydown",function(e){
    e.preventDefault();
    let keyC=e.keyCode;
    if(keyC===37) Funval("left");
    else if(keyC===38) Funval("top");
    else if(keyC===39) Funval("right");
    else if(keyC===40) Funval("down");
    else if (keyC===67) {block.style.backgroundColor=randomNumber();}
    else if(keyC===69){
        let tempr=movementArray[Math.floor(Math.random()*movementArray.length)];
        Funval(tempr);
        }
    else if(keyC===13||keyC===32){mover();}
   
    //  console.log(e.keyCode);
    
})

function mover(){
    if(FunList.length>0)
    {
        let cur=block.getBoundingClientRect();
        let el=FunList.shift();
        let item=el.textContent.replace("+","");
        myFunctionList.removeChild(el);
        block.innerText="Move:"+item;
        console.log(item);
        if(item=="left"){
            block.style.left=cur.left-cur.width+"px";
        }
        if(item=="right"){
            block.style.left=cur.left+cur.width+"px";
        }
        if(item=="top"){
            block.style.top=cur.top-cur.height+"px";
        }
        if(item=="down"){
            block.style.top=cur.top+cur.height+"px";
        }
        
        setTimeout(mover,300);
    }
    else{
        block.innerHTML="Set Path";
        return;
    }
}


function Funval(val){

   console.log(FunList);
   let span=document.createElement("span");
   span.textContent="+"+val;
   span.style.padding="10px";
   span.style.border="1px solid #ddd";
  
   span.addEventListener("mouseover",function(){
       this.style.backgroundColor="red";
       this.style.color="white";
   })
   span.addEventListener("mouseout",function(){
    this.style.backgroundColor="white";
    this.style.color="black";
})
  span.addEventListener('click',function(){
      let curIndex=FunList.indexOf(this);
      console.log(curIndex);
      let removeEl=FunList.splice(curIndex,1);
      console.log(removeEl);
      myFunctionList.removeChild(this);
  })
myFunctionList.appendChild(span);
FunList.push(span); 
}

function randomNumber(){
    return '#'+Math.random().toString(16).substr(-6)}
function goLeft(){
    let goToLeft=block.offsetLeft;
    goToLeft+=50;
    block.style.left=goToLeft+'px';
}

function goRight(){
    let goToRight=block.offsetLeft;
    goToRight-=50;
    block.style.left=goToRight+'px';
}

function goTop(){
    let goToUp=block.offsetTop;
    goToUp-=50;
    block.style.top=goToUp+'px';
}

function goDown(){
    let goToDown=block.offsetTop;
    goToDown+=50;
    block.style.top=goToDown+'px';
}
