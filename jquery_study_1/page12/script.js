$(function() {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $('#language-wrapper').hover(
  function() {
    $('.language-text').fadeIn();// カーソルをのせた時の処理
  },
  function() {
    $('.language-text').fadeOut();// カーソルをはずした時の処理
  }
);
  
});