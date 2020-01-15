(function() {

  $(document).ready(init)

  function init() {

    $('.collapsible').collapsible();
    $('.fixed-action-btn').floatingActionButton();

    var title = $('title').text();

    console.log(title);

  }

})();
