let a=document.querySelectorAll("a");
let logo1 = document.querySelector(".logo1");
let logo2 = document.querySelector(".logo2");
let basket = document.querySelector(".basket");
let modal1 = document.querySelector(".modal");
let modalclose1 = document.querySelector(".modalclose");

modalclose1.addEventListener("click",function(e){
    e.preventDefault();
    modal1.style.display = "none";
})

basket.addEventListener("click",function(e){
    e.preventDefault();
    modal1.style.display ="block";
})

$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
        a.forEach(x=>{
            x.style.color="black";
            logo1.style.display = "block";
            logo2.style.display = "none";
        })
    } else {
        $( "body" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
        a.forEach(x=>{
            x.style.color="white";
            logo1.style.display = "none";
            logo2.style.display = "block";

        })
    }
});