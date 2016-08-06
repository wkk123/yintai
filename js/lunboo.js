$(function(){
 var imgbox1=$(".back")[0];//背景
 var as1=$("a",imgbox1);

 var box=$(".banner-box")[0];//banner盒子

 var imgbox2=$(".banner-center")[0];//轮播图
 var as2=$("a",imgbox2);

 var list=$(".list")[0];//点点
 var lis=$("li",list);

 var btnL=$(".left-btn")[0];//btn

 var btnR=$(".right-btn")[0];

 var num=0;
   as1[0].style.zIndex=10;
   as2[0].style.zIndex=10;

   lis[0].id="itme";
  
 var t=setInterval(moreR,2000);

 function moreR(){ 

 	num++;
 	if (num==as2.length) {
 		num=0;
 	};
 	for (var i = 0; i < as2.length; i++) {
 	as2[i].style.zIndex=5;
 	as1[i].style.zIndex=5;

 	lis[i].id="";

    };
    lis[num].id="itme";
    as2[num].style.zIndex=10;
    as1[num].style.zIndex=10;


 }
 box.onmouseover=function(){
 	clearInterval(t);
 	btnR.style.opacity=0.7;
 	btnL.style.opacity=0.7;  
 }
 box.onmouseout=function(){
 	t=setInterval(moreR,1000);
 	btnR.style.opacity=0;
 	btnL.style.opacity=0;
 }
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
		for (var j = 0; j < as2.length; j++) {
		as2[j].style.zIndex=5;//初始化，使所有图片在一个层级上
		as1[j].style.zIndex=5;
		lis[j].id="";//初始状态
	};
		lis[this.index].id="itme";
		as2[this.index].style.zIndex=10;
		as1[this.index].style.zIndex=10;


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
 	as1[i].style.zIndex=5;

 	lis[i].id="";

    };
    lis[num].id="itme";
    as2[num].style.zIndex=10;
    as1[num].style.zIndex=10;


 }

btnR.onclick=function(){
     moreR();
    }
btnL.onclick=function(){
     moreL();
    }




})