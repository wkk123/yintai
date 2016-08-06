$(function(){
    var list=$(".three");//获取每一个盒子
   var item=$(".item");//获取每下拉列表

   //给每一个初始化一个none
   for (var i = 0; i < list.length; i++) {
       item[i].style.display='none';
   };
   //先循环后，再给执行事件，当鼠标移入移出时执行事件
   for (var i = 0; i < item.length; i++) {
      (function(n){
             list[n].onmouseover=function(){
                item[n].style.display="block";
             }
             list[n].onmouseout=function(){
                item[n].style.display="none";
             }
        })(i)
  };  
})

/*
1给item一个相对于大banner对的相对定位
让其display：none；（css）

2[js]
  遍历每一个three，使其内的item初始化display：none；
3 然后遍历每一item，给three添加移入移出事件，
  让他操作他的下拉菜单item的display属性值：block或none

*/












