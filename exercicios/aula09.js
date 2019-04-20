const coeficienteVariacao = require('../CoeficienteVariacao');

(()=> {
    /*
    - exercício 1
    Um vendedor de camisetas, durante cinco dias, conseguiu vender, respectivamente, o seguinte número de peças: 10; 15; 28; 31; 44.
    Podemos concluir, portanto, que as vendas de camisetas variaram ao longo dos dias. Desse modo, calcule o coeficiente de variação
    associado a essa amostra de dados.
    */
   console.log("============== EXERCÍCIO 1 ==============");
   const dados1 = [10, 15, 28, 31, 44];
   const CVex1 = coeficienteVariacao.calcCoeficienteVariacao(dados1, true);
   console.log(`Resultado exercício 1.: ${CVex1}`);

    /*
    - exercício 2
    Um aluno de matemática quer comparar o coeficiente de variação de duas amostras de temperaturas de duas cidades distintas. Ambas as
    amostras são de tamanho 3. Os valores para a primeira amostra são 29, 30, 31; e para a segunda amostra são 20, 31, 40. Sabendo disso,
    assinale a opção correta.
    */
  console.log("============== EXERCÍCIO 2 ==============");
  const amostra1 = [29, 30, 31];
  const amostra2 = [20, 31, 40];
  const CVamostra1 = coeficienteVariacao.calcCoeficienteVariacao(amostra1, true);
  const CVamostra2 = coeficienteVariacao.calcCoeficienteVariacao(amostra2, true);
  console.log(`cv amostra 1.: ${CVamostra1}`);
  console.log(`cv amostra 2.: ${CVamostra2}`);

  /*
  - exercício 3
  As medidas de dispersão são utilizadas para mostrar qual é a variabilidade de um conjunto de dados. Uma importante medida de dispersão
  é o coeficiente de variação. Ela correlaciona os conceitos de média e desvio padrão, em uma associação de medidas de dispersão. Assim,
  assinale a opção que apresenta a correta definição de coeficiente de variação.

  R: O coeficiente de variação é um indicador de dispersão, ou seja, ele indica a relação entre o desvio padrão e a média, diferente de zero, de um conjunto de dados, permitindo a análise comparativa de duas ou mais variáveis (MILONE; ANGELINI, 1993). Por sua definição, ele demonstra a homogeneidade da distribuição de uma ou mais variáveis.
  A resposta correta é: É o desvio padrão dividido pela média, se esta for diferente de zero..
  */

  /*
  - exercício 5
  Uma família de quatro pessoas (pai, mãe e dois filhos adolescentes) calculou, após um jantar, a média e a dispersão dos dados em relação
  ao peso corporal de seus membros, dispostos no conjunto P = {45, 52, 54, 61}. Qual é o coeficiente de variação relacionado à variável
  peso dessa amostra?
  */
  console.log("============== EXERCÍCIO 5 ==============");
  const dados2 = [45, 52, 54, 61];
  const CVex5 = coeficienteVariacao.calcCoeficienteVariacao(dados2);
  console.log(`Resultado exercício 5.: ${CVex5}`);
})();