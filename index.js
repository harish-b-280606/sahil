/* ================= EVENT SCHEDULE SWITCH ================= */

function switchDay(dayId, btn) {
  // Hide all timeline containers
  document.querySelectorAll('.timeline-container')
    .forEach(day => day.classList.remove('active'));

  // Remove active state from all buttons
  document.querySelectorAll('.timeline-btn')
    .forEach(button => button.classList.remove('active'));

  // Show selected day
  const selectedDay = document.getElementById(dayId);
  if (selectedDay) {
    selectedDay.classList.add('active');
  }

  // Activate clicked button
  btn.classList.add('active');
}


/* ================= FAQ ACCORDION ================= */

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {

      const currentItem = question.parentElement;

      // Close other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('active');
        }
      });

      // Toggle current item
      currentItem.classList.toggle('active');
    });
  });

});
