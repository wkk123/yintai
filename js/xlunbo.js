function banner(obj,Left,Right){
//获取元素

var widths=parseInt(getStyle(obj[0],"width"))
/*双下表定义*/
var num=0;
var next=0;
var flag=true;
/*/初始化/*/
for (var i = 0; i < obj.length; i++) {
    if (i==0) {
        continue;
    };
   obj[i].style.left=widths+"px";
};

/*********************/
  function moveL(){
    next++;
    /*判断最后一张后，将第一张给了next*/
    if (next>obj.length-1) {
        next=0;
    };
    /*动画前下一张就位*/
    obj[next].style.left=widths+"px";

    /*动画*/
    /*动画当前第一张*/
    animate(obj[num],{left:-widths});
    /*动画下一张*/
    animate(obj[next],{left:0},function() {
        flag=true;
    });
    /*更新*/
    num=next;
     
  }
  function moveR(){
    next--;
    /*判断最后一张后，将第一张给了next*/
    if (next<0) {
        next=obj.length-1;
    };
    /*动画前下一张就位*/
    obj[next].style.left=-widths+"px";
    /*动画*/
    /*动画当前第一张*/
    animate(obj[num],{left:widths});
    /*动画下一张*/
    animate(obj[next],{left:0},function(){
        flag=true;
    });
    /*更新*/
    num=next;     
  }
Left.onclick=function(){
    if (flag) {
        flag=false;
        moveR();
       };
   }
Right.onclick=function(){
    if (flag) {
        flag=false;
        moveL();
       };
    }

}