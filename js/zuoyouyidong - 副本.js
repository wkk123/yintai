$(function(){

	var uls=$(".one");//获取的是集合  ( 用类名获取)
	 var imgbox1=$(".one1");//获取被移动的对象   ( 用类名获取)
    
    for (var i = 0; i < uls.length; i++) { //遍历集合

        uls[i].index=i;         //给每一个集合保存一个下标
                           
    	uls[i].onmouseover=function(){  //添加移入事件
    		animate(imgbox1[this.index],{left:0},300)          
    	}

    	uls[i].onmouseout=function(){    //添加移出事件
    		animate(imgbox1[this.index],{left:18},300)            
    	}

    };

})
/*关于左右移动的总结

给图片父元素添加一个相对定位relative

给被移动的图片一个绝对定位absolute

*/

















