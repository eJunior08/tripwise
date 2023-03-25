const usuario = {
  email: "elson@email.com",
  senha: "123",
};

function onSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("input-email").value;
  const senha = document.getElementById("input-senha").value;

  if (email === usuario.email && senha === usuario.senha) {
    alert("Logado");
  } else {
    alert("Não autorizado");
  }
}
