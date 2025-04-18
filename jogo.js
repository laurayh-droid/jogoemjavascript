rodada = 1
while(rodada <= 3){
  console.log("rodada:" + rodada)
  
  
  escolhaJogador = prompt("Nível " + rodada + ".Escolha o vidro (1,2 ou 3):")
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;
  
  if(escolhaJogador == pisoQuebrado){
     alert("Você perdeu! o vidro quebrou")
     rodada = 100; //  o numero não importa, a intenção é deixar maior doq 3 para o programa parar de rodar nesta situação. ele ira juntar com a outra rodada e ficará 101, o que é maior que 3. Ou use a função break; e se for para voltar no início, use continue; 
  } else if(escolhaJogador > 3 || escolhaJogador < 1){
    alert("Número inválido!")
    continue;
  } else {
    alert("Parabéns!, você passou. O piso quebrado estava na ponte: " + pisoQuebrado)
  }
  rodada = rodada + 1
}
if(rodada == 4){
  alert("Parabéns!!! Você venceu as 3 rodadas!")
} else {
  alert("Você morreu, ta a sete palmos")
}