//glidejs
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  focusAt: "center",
}).mount();

//tooltip
function show(elem) {
  elem.style.display = "block";
};

function hide(elem) {
  elem.style.display = "";
};


