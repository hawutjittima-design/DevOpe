
// เอฟเฟกต์พิมพ์ดีด
const titleText = "ประวัติส่วนตัว";
let index = 0;

function typeWriter() {
  if (index < titleText.length) {
    document.getElementById("typing-title").textContent +=
      titleText.charAt(index);

    index++;
    setTimeout(typeWriter, 120);
  }
}

window.onload = typeWriter;

// สลับธีมสี
function setTheme(themeName) {
  document.body.className = themeName;
}

// นับจำนวนกดถูกใจ
let likes = 0;

function addLike() {
  likes++;

  document.getElementById("like-count").textContent = likes;
}
