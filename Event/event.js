function switchDay(dayId){
  document.querySelectorAll('.timeline-container')
    .forEach(d => d.classList.remove('active'));

  document.querySelectorAll('.timeline-btn')
    .forEach(b => b.classList.remove('active'));

  document.getElementById(dayId).classList.add('active');
  event.target.classList.add('active');
}
