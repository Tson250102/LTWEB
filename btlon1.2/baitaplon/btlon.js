// $(document).ready(function() {
// $('#myId').on('keyup', function(event){
// event.preventDefault();
// // vong lap
// var tukhoa = $(this).val().toLowerCase();
// $('.card-body h5').filter(function(){
// $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa)>-1);
// });
// });
// });
alert("abc");
function myFunction(){
    var input, filter , tb , tr , td , i;
    input = document.getElementById("tk");
    filter = input.value.toUpperCase();
    tb = document.getElementById("div_right");
    tr = tb.getElementsByTagName("div");
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