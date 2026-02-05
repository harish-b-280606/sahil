const eventDate = new Date("March 13, 2026 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}, 1000);

function switchDay(dayId, btn) {
  document.querySelectorAll('.timeline-container')
    .forEach(day => day.classList.remove('active'));

  document.querySelectorAll('.timeline-btn')
    .forEach(button => button.classList.remove('active'));

  document.getElementById(dayId).classList.add('active');
  btn.classList.add('active');
}


document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {

    const currentItem = question.parentElement;

    document.querySelectorAll('.faq-item').forEach(item => {
      if(item !== currentItem){
        item.classList.remove('active');
      }
    });

    currentItem.classList.toggle('active');
  });
});



harish

document.addEventListener("DOMContentLoaded", () => {
  fetch("../Shared/footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Footer file not found");
      }
      return response.text();
    })
    .then(data => {
      const footerContainer = document.getElementById("footer-container");
      if (footerContainer) {
        footerContainer.innerHTML = data;
      }
    })
    .catch(error => {
      console.error("Footer load error:", error);
    });
});

