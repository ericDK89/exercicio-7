const resultParagraph = document.getElementById("result-paragraph");

const numberVerify = (numberA, numberB) => {
  if (numberA < numberB) {
    resultParagraph.innerText = `Sucesso! 
    O número ${numberA} é menor que o número ${numberB}`;

    resultParagraph.classList.add("success");
    resultParagraph.classList.remove("error");
  } else {
    resultParagraph.innerText = `Erro! 
    O número ${numberA} é maior que o número ${numberB}`;

    resultParagraph.classList.add("error");
    resultParagraph.classList.remove("success");
  }
};

const form = document.getElementById("form-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numberA = Number(document.getElementById("input-a").value);
  const numberB = Number(document.getElementById("input-b").value);

  numberVerify(numberA, numberB);
});
