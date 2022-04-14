## Resumo Semana 3:

#### Funções:

>Pode-se dividir o código em partes reutilizáveis, as chamadas funções. Elas "são ações executadas assim que são chamadas ou em decorrência de algum evento".

###### Exemplo:

~~~javascript
function functionName() {
  console.log("Hello World");
}
~~~

- Pode-se chamar esta função usando o seu nome seguido por parênteses:

~~~javascript
functionName();
~~~

- Todo o código entre chaves irá ser executado quando a função for chamada;

- Então, cada vez que essa função é chamada ela imprime a mensagem "Hello World" no console;

- As funções normalmente possuem **parâmetros**, que são variáveis que atuam como espaços reservados para valores que devem ser inseridos em uma função quando ela é chamada;

- Vejamos uma função com dois parâmetros:

~~~javascript
function testFun(param1, param2) {
  console.log(param1, param2);
}
~~~

- Ao nomear funções, deve-se sempre preferir utilizar verbos que descrevam o que aquela função irá realizar.

##### Retornar o valor de uma função:

- A palavra reservada _return_ envia um valor de volta de uma função.

- Uma função pode não incluir a return statement. Nesse caso, ao chamar a função, há o processamento do código interno, mas o valor retornado é indefinido.

- Quando uma return statement é alcançada, a execução da função é interrompida.

#### Escopo:

>O escopo se refere à visibilidade das variáveis, ao lugar do algoritmo ou função. 

- Escopo Global: 
* Variáveis que são definidas fora de um bloco de função têm **escopo global**, ou seja, podem ser vistas em todos os lugares do código.

- Escopo Léxico:
* Quando uma variável recebe um identificador único (nome), o trecho de código que retorna quando ela é
recuperada é o **escopo léxico**.

- Escopo Local:
* As variáveis que são definidas dentro de uma função têm **escopo local**.

###### Exemplo:

~~~javascript
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
~~~

No exemplo, a chamada myTest() irá mostrar a string "foo" no console, enquanto a chamada console.log(loc) irá mostrar um *erro*, pois loc não está definida fora da função.

#### Condicional (If / If Else):

>If statements são usadas para tomar decisões no código, executando-o sob certas condições booleanas (verdadeiras ou falsas). Quando uma instrução é verdadeira, ela executa a instrução.

###### Exemplo:

~~~javascript
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
~~~

No exemplo, quando um test é chamado com um valor, o if analisa o parâmetro myCondition para ver se é true ou false. Assim, o test(true) irá retornar a string "It was true", enquanto o test(false) irá retornar a string "It was false".

##### If else:

>If else é utilizado quando se quer executar um bloco de código somente se a condição ou verificação for verdadeira. Ou outro bloco de código, somente se a condiçõa for falsa. Com a instruçõa else, um bloco alternativo de código pode ser executado.

- Se existirem várias condições que precisam ser tratadas, pode-se encadear instruções **if** junto com **else if**.

###### Exemplo:

~~~javascript
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
~~~

- É importante seguir uma ordem lógica de qual instrução designar primeiro, visto que o código é lido de cima para baixo.

#### Condicional (Switch):

>Quando se tem muitas condições, é recomendável utilizar a intrução switch. Ela testa um valor e pode possuir vários cases que definem vários valores possíveis.

###### Exemplo:

~~~javascript
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
~~~

- Os statementes são executados a partir do primeiro case value até que seja encontrada uma quebra (**break**). A quebra serve para indicar ao JavaScript para parar de executar os statements. Quando o **break** é omitido de um switch, as seguintes instruções serão executadas até que uma quebra seja encontrada.

- Os valores de um case são testados com igualdade estrita (===).

- As vezes não é possível especificar todos os valores possíveis com case statements. Então, utiliza-se o **default** statement que será utilizada caso nenhuma case for satisfeita. Como se fosse uma else statement no final de uma cadeia if/else. *Default* deve ser sempre o último caso.

###### Exemplo:

~~~javascript
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
~~~

- Podem existir várias entradas (cases) com as mesmas saídas (return).

###### Exemplo:

~~~javascript
let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";  -->  cases 1, 2 e 3 produzem o mesmo resultado
    break;
  case 4:
    result = "4 alone";
}
~~~