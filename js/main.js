$(function () {
  var date_input = $('input[name="date"]');
  var options = {
    format: "dd/mm/yyyy",
    autoclose: true,
  };
  date_input.datepicker(options);
});
