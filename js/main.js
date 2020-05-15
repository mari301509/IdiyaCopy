var menuOpen = $('.btn-openMenu');
var menuClose = $('.btn-closeMenu');
var drinkOpen = $('.btn-infoOpen');
var drinkClose = $('.btn-infoClose');


menuOpen.click(function(e) {
    e.preventDefault(); /* anchor 이벤트 발생억제 */
    $(this).parent().removeClass('nav-none');
    $(this).parent().addClass('nav-act');
}
);

menuClose.click(function(e) {
    e.preventDefault(); /* 이벤트 발생억제 */
    $(this).parent().parent().removeClass('nav-act'); /* 해당 class name을 모두 지우고 */
    $(this).parent().parent().addClass('nav-none');
}
);

drinkOpen.click(function(e) {
    e.preventDefault();                        /*  이벤트 발생억제 */
    $(this).parent().addClass('drink-act');
    $(this).removeAttr('aria-pressed');        /* 버튼의 눌림상태 해제 */
    $(this).attr('aria-pressed','true');       /* 버튼의 눌림상태 추가 */
}
);

drinkClose.click(function(e) {
    e.preventDefault(); /* 이벤트 발생억제 */
    $(this).parent().parent().removeClass('drink-act');                  /* 해당 class name을 모두 지우고 */ 
    $(this).parent().prev(drinkOpen).removeAttr('aria-pressed');         /* 버튼의 눌림상태 해제 */
    $(this).parent().prev(drinkOpen).attr('aria-pressed','false');       /* 버튼의 눌림상태 추가 */
}
);
