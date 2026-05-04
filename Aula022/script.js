const divListaFilme = document.querySelector("#lista_filmes")
const btnTerror = document.querySelector("#btn_Terror")

function filtrarFilmesTerror() {
    filmes.filter((filme)=>{
        console.log(filme.genero === "Terror")
    })
    console.log(filmesTerror)

}

btnTerror.addEventListener("click", filtrarFilmesTerror)

const filmes = [
  // TERROR (10)
  { titulo: "Invocação do Mal", sinopse: "Investigadores enfrentam forças malignas em uma casa assombrada.", genero: "terror" },
  { titulo: "Hereditário", sinopse: "Uma família descobre segredos sombrios após a morte da avó.", genero: "terror" },
  { titulo: "O Exorcista", sinopse: "Uma garota é possuída e passa por um exorcismo aterrorizante.", genero: "terror" },
  { titulo: "It: A Coisa", sinopse: "Um palhaço maligno assombra crianças em uma pequena cidade.", genero: "terror" },
  { titulo: "Corra!", sinopse: "Um jovem descobre segredos perturbadores ao visitar a família da namorada.", genero: "terror" },
  { titulo: "A Bruxa", sinopse: "Uma família enfrenta forças sobrenaturais em uma floresta isolada.", genero: "terror" },
  { titulo: "O Iluminado", sinopse: "Um homem enlouquece em um hotel isolado.", genero: "terror" },
  { titulo: "Atividade Paranormal", sinopse: "Eventos estranhos são registrados em uma casa.", genero: "terror" },
  { titulo: "Pânico", sinopse: "Um assassino mascarado aterroriza adolescentes.", genero: "terror" },
  { titulo: "Annabelle", sinopse: "Uma boneca possuída causa terror a um casal.", genero: "terror" },

  // AÇÃO (10)
  { titulo: "Velozes e Furiosos", sinopse: "Corridas ilegais e crimes em alta velocidade.", genero: "acao" },
  { titulo: "John Wick", sinopse: "Um assassino busca vingança após perder tudo.", genero: "acao" },
  { titulo: "Mad Max: Estrada da Fúria", sinopse: "Uma fuga frenética em um mundo pós-apocalíptico.", genero: "acao" },
  { titulo: "Gladiador", sinopse: "Um general busca vingança como gladiador.", genero: "acao" },
  { titulo: "Missão Impossível", sinopse: "Agente enfrenta missões perigosas ao redor do mundo.", genero: "acao" },
  { titulo: "Duro de Matar", sinopse: "Policial enfrenta terroristas sozinho.", genero: "acao" },
  { titulo: "Homem de Ferro", sinopse: "Bilionário constrói uma armadura para combater o crime.", genero: "acao" },
  { titulo: "Batman: O Cavaleiro das Trevas", sinopse: "Batman enfrenta o Coringa em Gotham.", genero: "acao" },
  { titulo: "Pantera Negra", sinopse: "Rei de Wakanda luta para proteger seu povo.", genero: "acao" },
  { titulo: "Capitão América", sinopse: "Herói enfrenta ameaças globais.", genero: "acao" },

  // COMÉDIA (10)
  { titulo: "As Branquelas", sinopse: "Agentes se disfarçam para resolver um caso.", genero: "comedia" },
  { titulo: "Se Beber, Não Case", sinopse: "Amigos tentam lembrar o que aconteceu após uma noite louca.", genero: "comedia" },
  { titulo: "Gente Grande", sinopse: "Amigos se reencontram após anos.", genero: "comedia" },
  { titulo: "Todo Mundo em Pânico", sinopse: "Paródia de filmes de terror.", genero: "comedia" },
  { titulo: "Debi & Lóide", sinopse: "Dois amigos vivem situações absurdas.", genero: "comedia" },
  { titulo: "Click", sinopse: "Homem controla sua vida com um controle remoto mágico.", genero: "comedia" },
  { titulo: "O Máskara", sinopse: "Homem ganha poderes com uma máscara mágica.", genero: "comedia" },
  { titulo: "Escola de Rock", sinopse: "Professor falso ensina rock para crianças.", genero: "comedia" },
  { titulo: "Superbad", sinopse: "Adolescentes vivem aventuras antes da formatura.", genero: "comedia" },
  { titulo: "Ace Ventura", sinopse: "Detetive excêntrico investiga desaparecimento de animais.", genero: "comedia" },

  // AVENTURA (10)
  { titulo: "Indiana Jones", sinopse: "Arqueólogo enfrenta perigos em busca de relíquias.", genero: "aventura" },
  { titulo: "Piratas do Caribe", sinopse: "Aventuras de piratas em alto-mar.", genero: "aventura" },
  { titulo: "O Senhor dos Anéis", sinopse: "Heróis tentam destruir um anel poderoso.", genero: "aventura" },
  { titulo: "Harry Potter", sinopse: "Jovem bruxo enfrenta forças do mal.", genero: "aventura" },
  { titulo: "Jurassic Park", sinopse: "Dinossauros clonados causam caos em um parque.", genero: "aventura" },
  { titulo: "Avatar", sinopse: "Humano explora um planeta alienígena.", genero: "aventura" },
  { titulo: "As Crônicas de Nárnia", sinopse: "Crianças descobrem um mundo mágico.", genero: "aventura" },
  { titulo: "Jumanji", sinopse: "Jogo misterioso traz perigos para o mundo real.", genero: "aventura" },
  { titulo: "Homem-Aranha", sinopse: "Jovem ganha poderes e enfrenta vilões.", genero: "aventura" },
  { titulo: "Star Wars", sinopse: "Conflito entre forças do bem e do mal no espaço.", genero: "aventura" }
];
function filtrarFilmesTerror() {
   const filmesTerror = filmes.filter((filme) => {
     return filme.genero === "terror"
   })
}

filmes.forEach((filmes) => {
    divListaFilme.innerHTML += `<li><b>${filmes.titulo}</b> <br> ${filmes.sinopse} 
    <br> Gênero: <i>${filmes.genero}</i></li>`
})