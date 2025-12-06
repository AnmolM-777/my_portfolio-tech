let drag = null;
let resize = null;

/* OPEN / CLOSE */
function openWindow(name) {
  const w = document.getElementById(name + "-window");
  w.style.display = "block";
  w.style.zIndex = Date.now();
  document.getElementById("start").style.display = "none";
}

function closeWindow(name) {
  document.getElementById(name + "-window").style.display = "none";
}

/* START MENU */
function toggleStart() {
  const s = document.getElementById("start");
  s.style.display = s.style.display === "block" ? "none" : "block";
}

/* DRAG */
function dragStart(e, w) {
  drag = { w, x: e.clientX, y: e.clientY, l: w.offsetLeft, t: w.offsetTop };
  document.onmousemove = dragMove;
  document.onmouseup = () => drag = null;
}

function dragMove(e) {
  if (!drag) return;
  drag.w.style.left = drag.l + e.clientX - drag.x + "px";
  drag.w.style.top = drag.t + e.clientY - drag.y + "px";
}

/* RESIZE */
function resizeStart(e, w) {
  resize = { w, x: e.clientX, y: e.clientY, h: w.offsetHeight, wd: w.offsetWidth };
  document.onmousemove = resizeMove;
  document.onmouseup = () => resize = null;
}

function resizeMove(e) {
  if (!resize) return;
  resize.w.style.width = resize.wd + (e.clientX - resize.x) + "px";
  resize.w.style.height = resize.h + (e.clientY - resize.y) + "px";
}

