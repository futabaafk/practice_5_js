const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('btn');


const users = [
  {
    login: "alex_dev",
    password: "password123",
    name: "Алексей"
  },
  {
    login: "elena_m",
    password: "password456",
    name: "Елена"
  },
  {
    login: "dmitry_k",
    password: "password789",
    name: "Дмитрий"
  },
  {
    login: "anna_s",
    password: "password321",
    name: "Анна"
  },
  {
    login: "max_p",
    password: "password654",
    name: "Максим"
  }
];

button.addEventListener('click', function () {
  const userLogin = email.value;
  const userPassword = password.value;
  const result = users.find((element) => {
    return element.login === userLogin && element.password === userPassword;
  });
  if (result) {
    alert(`Привет, ${result.name}`);
  } else {
    alert('Неверный логин или пароль');
  }
});




