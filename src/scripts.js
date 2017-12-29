document.addEventListener('DOMContentLoaded', () => {
  const btnWrapperLabel = document.querySelector('.btn-wrapper-label');
  const btnWrapperLang = document.querySelector('.btn-wrapper-lang');
  const langChildren = Array.from(btnWrapperLang.children)
  const labelChildren = Array.from(btnWrapperLabel.children)

  function handleClickLang(e) {
    langChildren.forEach(item => item.classList.remove('active'));
    e.target.classList.toggle('active');
  }

  function handleClickLabel(e) {
    labelChildren.forEach(item => item.classList.remove('active'));
    e.target.classList.toggle('active');
  }

  btnWrapperLabel.addEventListener('click', handleClickLabel);
  btnWrapperLang.addEventListener('click', handleClickLang);

})
