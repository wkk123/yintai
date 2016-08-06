$(function(){
	var xianbox=$(".xianbox");
	for (var i = 0; i < xianbox.length; i++) {
		  lis(xianbox[i]);
	};
  
    function lis(obj){
       var wx=obj.offsetWidth;
       var wh=obj.offsetHeight; 
 
        var tops=$(".xianbox-top",obj)[0];
    	var rights=$(".xianbox-right",obj)[0];
    	var buttoms=$(".xianbox-buttom",obj)[0];
    	var lefts=$(".xianbox-left",obj)[0];
        
        obj.onmouseover=function(){
    	animate(tops,{width:wx});
    	animate(rights,{height:wh});
    	animate(buttoms,{width:wx});
    	animate(lefts,{height:wh});
        }
        obj.onmouseout=function(){
    	animate(tops,{width:0});
    	animate(rights,{height:0});
    	animate(buttoms,{width:0});
    	animate(lefts,{height:0});
        
        }

    }
})       


    


    




