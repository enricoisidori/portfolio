document.documentElement.style.cursor =
  'url("http://sstatic.net/stackoverflow/img/favicon.ico"), auto';
var caseList = ["progetto.html", "progetto-1.html", "progetto-2.html"];

current = $(location)
  .attr("pathname")
  .substr($(location).attr("pathname").lastIndexOf("/") + 1); // get current page: just last part - page name and extension
if ($.inArray(current, caseList) !== -1) {
  //check if it is in array
  index = $.inArray(current, caseList);
}

function next() {
  console.log("next");
  if (index < caseList.length - 1) {
    next = caseList[index + 1];
    window.location.href = next;
    console.log("+");
  }
}

function prev() {
  console.log("prev");
  if (index >= 0 + 1) {
    prev = caseList[index - 1];
    window.location.href = prev;
    console.log("-");
  }
}
