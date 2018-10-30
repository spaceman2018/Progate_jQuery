$(function(){
  
  // 「.social-icon」にマウスが乗ったときに、そのfont-sizeを30pxに変更し、
  // 離れたときにはfont-sizeを24pxにしてください。
$('.social-icon').hover(
   function(){
     
     // マウスが乗った時の処理
     
     // マウスが乗った要素に対してメソッドを呼び出します
     $(this).animate({'font-size':'30px'}, 300);
     
   },
   function(){
     
     // マウスが離れた時の処理
     $(this).animate({'font-size':'24px'}, 300);
   }
 );
  
});