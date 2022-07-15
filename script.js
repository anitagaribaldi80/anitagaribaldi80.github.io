var carta1 = {
  nome: "Togepi",
  imagem:"https://1.bp.blogspot.com/-yWTwM9kk2N0/XUN1j8Pa0xI/AAAAAAAADgw/Chdtl1ZIyfov15xKHB9xNq3vPr2woz3QACLcBGAs/s1600/togepi%2Banime.png",
  atributos: {
    ataque: 5,
    defesa: 7,
    magia: 6
  }
};

var carta2 = {
  nome: "Pikachu",
  imagem: "https://images-americanas.b2w.io/produtos/1511899337/imagens/bluelans-cute-cartoon-pokemon-pikachu-estilo-de-carro-motocicleta-laptop-decalques-decalques/1511899337_1_xlarge.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 8
  }
};

var carta3 = {
  nome: "Gyarados",
  imagem:"https://w7.pngwing.com/pngs/46/278/png-transparent-pokemon-go-pokemon-sun-and-moon-pokemon-heartgold-and-soulsilver-gyarados-magikarp-pokemon-red-dragon-fictional-character-tail.png",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 7
  }
};

var carta4 = {
  nome: "Blastoise",
  imagem: "http://pm1.narvii.com/7501/4bcfe47440a9b56bc8da9180f0dd582ba6b1835er1-735-825v2_00.jpg",
  atributos: {
    ataque: 8,
    defesa: 9,
    magia: 5
  }
};

var carta5 = {
  nome: "Chicorita",
  imagem:"https://static.wikia.nocookie.net/gamertopia/images/7/7e/Chikorita.jpg",
  atributos: {
    ataque: 5,
    defesa: 6,
    magia: 6
  }
};


var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3,carta4, carta5];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
