// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-icon").classList.toggle("toggle")

    navLinks.forEach((link,index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-icon").classList.toggle("toggle");
        
        navLinks.forEach((link,index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            }
        })    
    })
})

$(window).scroll(function(){
    var top = $("#elem").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
      $("#elem").addClass("act");
    }else{
      // それ以外の動き
    }
})

