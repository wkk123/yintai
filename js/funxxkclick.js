function xxkclick(lista,listb,itemA,itemB,lista1,listb2){

             lista.onclick=function(){
                itemA.style.display="block";
                lista1.style.color="#414141";
                lista1.style.fontWeight=600;
                itemB.style.display="none";
                listb2.style.color="#666";
                listb2.style.fontWeight=100;


             }
             listb.onclick=function(){
                itemA.style.display="none";
                lista1.style.color="#666";
                lista1.style.fontWeight=100;
                listb2.style.fontWeight=600;
                listb2.style.color="#414141";
                itemB.style.display="block";
             }

}













