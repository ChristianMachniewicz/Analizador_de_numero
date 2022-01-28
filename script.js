let lista = document.getElementById("list")
let res = document.getElementById("res")
let numeros = []
let soma = 0

function adicionar() {
  let num = Number(document.getElementById("numero").value)

  if (num != 0 && num <= 100) {
    let tabela = document.createElement("option")

    tabela.text = `Valor ${num} adicionado `
    lista.appendChild(tabela)
    numeros.push(num)
  } else {
    alert("valor fora permitido, tente novamente ")
  }
}

function finalizar() {
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
  }
  let media = soma / numeros.length
  res.innerHTML =  `<br>A media total e ${media}`
  res.innerHTML += `<br>A soma e ${soma}`
  res.innerHTML += `<br>No total, ${numeros.length} numeros foram listados `
  res.innerHTML += `<br>O maior numero foi ${Math.max(...numeros)} `
  res.innerHTML += `<br>O menor numero foi ${Math.min(...numeros)} `
}
