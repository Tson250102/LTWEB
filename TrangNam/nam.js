function myFunction(){
    var input, filter , tb , tr , td , i;
    input = document.getElementById("tk");
    filter = input.value.toUpperCase();
    tb = document.getElementById("div_right");
    tr = tb.getElementsByClassName("ten");
    for(i=0;i<tr.length;i++){
        td = tr[i].getElementsByTagName("h5")[0];
        if(td){
            if(td.innerHTML.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display = "block";
            }else{
                tr[i].style.display="none";
            }
        }
    }
}

function thapDenCao(){
    var arr = [];
    var i , vitri , gia;
    var anh = document.getElementById("div_right").getElementsByClassName("ten");
    for(i=0;i<anh.length;i++){
        gia = anh[i].getElementsByTagName("a")[0];
        vitri = gia.innerHTML.indexOf(" ");
        gia = gia.innerHTML.substring(0,vitri);
        gia = parseFloat(gia);
        arr.push(gia);
    }

    arr.sort(function(a,b){
        return a-b;
    });


}