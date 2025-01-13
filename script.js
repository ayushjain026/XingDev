const accordian = document.querySelector('.qna-accordian');
const accordianAnswer = document.querySelector('.qna-accordian-answer');

accordian.addEventListener('click', () => {
  console.log('pressed');
  accordianAnswer.classList.toggle('toggle');
});
