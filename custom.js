$(function () {
     var $win = $(window);

     $win.scroll(function () {
         if ($win.scrollTop() == 0)
             alert('Scrolled to Page Top');
         else if ($win.height() + $win.scrollTop()
                        == $(document).height()) {
             alert('Scrolled to Page Bottom');
         }
     });
 });
