document.addEventListener("DOMContentLoaded", function (e) {
  // default
  var els = document.querySelectorAll(".selectize");
  els.forEach(function (select) {
    NiceSelect.bind(select);
  });

  // seachable
  var options = { searchable: true };
  NiceSelect.bind(document.getElementById("seachable-select"), options);

  //translated-select
  var options = {
    searchable: true,
    placeholder: "select",
    searchtext: "zoek",
    selectedtext: "geselecteerd",
  };
  document.getElementById("translated-select")._niceSelect = NiceSelect.bind(
    document.getElementById("translated-select"),
    options
  );
});
