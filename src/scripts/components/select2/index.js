export function select2() {
  $(document).ready(function() {
    $('.js-select2').select2({
      minimumResultsForSearch: Infinity
    });
  });
}
