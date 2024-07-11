window.onload = function(){
    // 상단의 마이페이지리스트 기능
    const iconArrow = document.querySelector(".icon-arrow");
    const listShow =  document.querySelector(".mypage-list");
    iconArrow.onclick = function(){
        listShow.classList.toggle("showMypageList");

    }

}