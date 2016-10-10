$('.carousel').carousel();
if(window.location.href.indexOf('/courses/')!=-1){
    if (location.hash) {
        $('#tab a[href=' + location.hash + ']').tab('show');
    }
    window.addEventListener('hashchange',function(){
        $('#tab a[href=' + location.hash + ']').tab('show');
    });
}
$('.order-block').click(function (e) {
    e.preventDefault();
    $('.cover').show();
	_czc.push(['_trackEvent', '预约试听', '预约试听', '预约试听','1','dafen']);
});
$('.cover-close,.cover').click(function () {
    $('.cover').hide();
});