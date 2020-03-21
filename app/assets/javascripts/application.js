//= require rails-ujs 
//= require jquery 
//= require materialize-sprockets 
//= require_tree .
$(document).ready(function () {

$('select').material_select();
$('.datepicker').datepicker({
   format: 'mmmm dd, yyyy',
    formatSubmit: 'mmmm dd, yyyy',
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date, 
    }); 
$('.dropdown-button').dropdown();
});
