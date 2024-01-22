$(document).ready(function () {
    $('#checkBtn').click(function() {
        checked = $("input[type=checkbox]:checked").length;

        if(!checked) {
            alert("You must check at least one checkbox.");
            return false;
        }
    });
})
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
