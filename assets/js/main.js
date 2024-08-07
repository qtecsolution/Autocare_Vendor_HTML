// nice select-2
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

// live support team js
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/6051a040f7ce18270930e55a/1f3d4os21";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

// richTextEditor
var editor1 = new RichTextEditor("#div_editor1");
