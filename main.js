// main JS for 54x1
$(document).ready(function() {
  if ($(".items a").length > 0) {
    $("#flex-container>*>a").show();
  } else {
    $("#flex-container>*>a").hide();
  }
});

function funcBatch(){document.getElementById("funcBatch").href="https://jfofbz.deta.dev/index?url="+document.URL;return false;};
