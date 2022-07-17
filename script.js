const emailLogin = document.getElementById('email-login');
const senhaLogin = document.getElementById('senha-login');
const btnLogin = document.getElementById('btn-login');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const commitLength = document.getElementById('textarea');
const commitCounter = document.getElementById('counter');

function confirmLogin() {
  if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkInput(event) {
  if (event.target.checked) {
    // console.log('Marcado');
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
    // console.log('Desmarcado');
  }
}

function calcCommitCounter() {
  const count = commitLength.maxLength - commitLength.value.length;
  commitCounter.innerText = count;
}

btnLogin.addEventListener('click', confirmLogin);
agreement.addEventListener('change', checkInput);

commitCounter.innerText = 500;
commitLength.addEventListener('keyup', calcCommitCounter);

const getName = () => {
  const answerName = document.getElementById('answer-name');
  const name = document.getElementById('input-name').value;
  const lastaName = document.getElementById('input-lastname').value;
  const resultName = `Nome: ${name} ${lastaName}`;
  answerName.innerHTML = resultName;
};

const getEmail = () => {
  const answerEmail = document.getElementById('answer-email');
  const email = document.getElementById('input-email').value;
  const resultEmail = `Email: ${email}`;
  answerEmail.innerHTML = resultEmail;
};

const getHouse = () => {
  const answerHouse = document.getElementById('answer-house');
  const house = document.getElementById('house').value;
  const resultHouse = `Casa: ${house}`;
  answerHouse.innerHTML = resultHouse;
};

const getFamily = () => {
  const answerFamily = document.getElementById('answer-family');
  const family = document.querySelector('input[name="family"]:checked').value;
  const resultFamily = `Família: ${family}`;
  answerFamily.innerHTML = resultFamily;
};

const getContent = () => {
  const answerContent = document.getElementById('answer-content');
  const contents = document.querySelectorAll('.subject');
  const contentSelected = [];

  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked) {
      contentSelected.push(contents[index].value);
    }
  }

  const stringContent = contentSelected.join(', ');

  const resultContent = `Matérias: ${stringContent}`;
  answerContent.innerHTML = resultContent;
};

const getRate = () => {
  const answerRate = document.getElementById('answer-rate');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const resultRate = `Avaliação: ${rate}`;
  answerRate.innerHTML = resultRate;
};

const getCommit = () => {
  const answerCommit = document.getElementById('answer-commit');
  const commit = document.getElementById('textarea').value;
  const resultCommit = `Observações: ${commit}`;
  answerCommit.innerHTML = resultCommit;
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getName();
  getEmail();
  getHouse();
  getFamily();
  getContent();
  getRate();
  getCommit();
  const fillForm = document.getElementById('evaluation-form');
  fillForm.style.display = 'none';

  const answerForm = document.getElementById('form-data');
  answerForm.style.display = 'flex';
});
