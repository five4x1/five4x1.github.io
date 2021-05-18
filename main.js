// main JS for 54x1
$(document).ready(function() {
  if ($(".items>div>a").length > 0) {
    $("#flex-container>#funcBatch").show();
  } else {
    $("#flex-container>#funcBatch").hide();
  }
});

function funcBatch(){document.getElementById("funcBatch").href="https://jfofbz.deta.dev/index?url="+document.URL;return false;};
