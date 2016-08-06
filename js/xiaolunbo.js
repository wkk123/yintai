function banner2(objbox,imgbox){

var as2=$("a",imgbox);
 var list=$(".list",objbox)[0];//点点
 var lis=$("li",list);

 var btnL=$(".four4",objbox)[0];//btn

 var btnR=$(".four3",objbox)[0];

 var num=0;
   as2[0].style.zIndex=10;
   lis[0].className="itme";

 function moreR(){ 
 	num++;
 	if (num==as2.length) {
 		num=0;
 	};
 	for (var i = 0; i < as2.length; i++) {
 	as2[i].style.zIndex=5;      
 	lis[i].className="";
    };
    lis[num].className="itme";
    as2[num].style.zIndex=10;
 }
 objbox.onmouseover=function(){
 	btnR.style.opacity=0.7;
 	btnL.style.opacity=0.7;  
 }
 objbox.onmouseout=function(){
 	btnR.style.opacity=0;
 	btnL.style.opacity=0;  
 }
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
		for (var j = 0; j < as2.length; j++) {
		as2[j].style.zIndex=5;//初始化，使所有图片在一个层级上
		lis[j].className="";//初始状态
	};
		lis[this.index].className="itme";
		as2[this.index].style.zIndex=10;
		num=this.index;
	}
};
//左右按钮
 function moreL(){ 
 	num--;
 	if (num<0) {
 		num=as2.length-1;
 	};
 	for (var i = 0; i < as2.length; i++) {
 	as2[i].style.zIndex=5;
 	lis[i].className="";
    };
    lis[num].className="itme";
    as2[num].style.zIndex=10;
 }
btnR.onclick=function(){
     moreR();
    }
btnL.onclick=function(){
     moreL();
    }




}