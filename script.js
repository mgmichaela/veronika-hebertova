//glidejs
new Glide(".glide", {
  type: "carousel",
  perView: 1
}).mount();

//tooltip
function show(elem) {
  elem.style.display = "block";
};

function hide(elem) {
  elem.style.display = "";
};

