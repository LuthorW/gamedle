const personagensDb = [
  // ==========================================
  // 👑 DISNEY CLÁSSICOS & ANIMAÇÕES
  // ==========================================
  { nome: "Branca de Neve", filme: "Branca de Neve", estudio: "Disney", cabelo: "Preto", lancamento: 1937, magia: "Não", temPar: "Sim", local: "Alemanha" },
  { nome: "Rainha Má", filme: "Branca de Neve", estudio: "Disney", cabelo: "Preto", lancamento: 1937, magia: "Sim", temPar: "Não", local: "Alemanha" },
  { nome: "Pinóquio", filme: "Pinóquio", estudio: "Disney", cabelo: "Preto", lancamento: 1940, magia: "Sim", temPar: "Não", local: "Itália" },
  { nome: "Cinderela", filme: "Cinderela", estudio: "Disney", cabelo: "Loiro", lancamento: 1950, magia: "Não", temPar: "Sim", local: "França" },
  { nome: "Fada Madrinha", filme: "Cinderela", estudio: "Disney", cabelo: "Branco", lancamento: 1950, magia: "Sim", temPar: "Não", local: "França" },
  { nome: "Alice", filme: "Alice no País das Maravilhas", estudio: "Disney", cabelo: "Loiro", lancamento: 1951, magia: "Não", temPar: "Não", local: "País das Maravilhas" },
  { nome: "Rainha de Copas", filme: "Alice no País das Maravilhas", estudio: "Disney", cabelo: "Preto", lancamento: 1951, magia: "Não", temPar: "Sim", local: "País das Maravilhas" },
  { nome: "Peter Pan", filme: "Peter Pan", estudio: "Disney", cabelo: "Ruivo", lancamento: 1953, magia: "Sim", temPar: "Não", local: "Terra do Nunca" },
  { nome: "Capitão Gancho", filme: "Peter Pan", estudio: "Disney", cabelo: "Preto", lancamento: 1953, magia: "Não", temPar: "Não", local: "Terra do Nunca" },
  { nome: "Aurora", filme: "A Bela Adormecida", estudio: "Disney", cabelo: "Loiro", lancamento: 1959, magia: "Não", temPar: "Sim", local: "França" },
  { nome: "Malévola", filme: "A Bela Adormecida", estudio: "Disney", cabelo: "Nenhum", lancamento: 1959, magia: "Sim", temPar: "Não", local: "França" },
  { nome: "Cruella de Vil", filme: "101 Dálmatas", estudio: "Disney", cabelo: "Preto e Branco", lancamento: 1961, magia: "Não", temPar: "Não", local: "Inglaterra" },
  { nome: "Mogli", filme: "Mogli: O Menino Lobo", estudio: "Disney", cabelo: "Preto", lancamento: 1967, magia: "Não", temPar: "Não", local: "Índia" },
  { nome: "Robin Hood", filme: "Robin Hood", estudio: "Disney", cabelo: "Laranja", lancamento: 1973, magia: "Não", temPar: "Sim", local: "Inglaterra" },
  { nome: "Ariel", filme: "A Pequena Sereia", estudio: "Disney", cabelo: "Ruivo", lancamento: 1989, magia: "Sim", temPar: "Sim", local: "Atlântica" },
  { nome: "Príncipe Eric", filme: "A Pequena Sereia", estudio: "Disney", cabelo: "Preto", lancamento: 1989, magia: "Não", temPar: "Sim", local: "Dinamarca" },
  { nome: "Úrsula", filme: "A Pequena Sereia", estudio: "Disney", cabelo: "Branco", lancamento: 1989, magia: "Sim", temPar: "Não", local: "Atlântica" },
  { nome: "Bela", filme: "A Bela e a Fera", estudio: "Disney", cabelo: "Castanho", lancamento: 1991, magia: "Não", temPar: "Sim", local: "França" },
  { nome: "Fera", filme: "A Bela e a Fera", estudio: "Disney", cabelo: "Castanho", lancamento: 1991, magia: "Sim", temPar: "Sim", local: "França" },
  { nome: "Gaston", filme: "A Bela e a Fera", estudio: "Disney", cabelo: "Preto", lancamento: 1991, magia: "Não", temPar: "Não", local: "França" },
  { nome: "Aladdin", filme: "Aladdin", estudio: "Disney", cabelo: "Preto", lancamento: 1992, magia: "Não", temPar: "Sim", local: "Agrabah" },
  { nome: "Jasmine", filme: "Aladdin", estudio: "Disney", cabelo: "Preto", lancamento: 1992, magia: "Não", temPar: "Sim", local: "Agrabah" },
  { nome: "Gênio", filme: "Aladdin", estudio: "Disney", cabelo: "Nenhum", lancamento: 1992, magia: "Sim", temPar: "Não", local: "Agrabah" },
  { nome: "Simba", filme: "O Rei Leão", estudio: "Disney", cabelo: "Ruivo", lancamento: 1994, magia: "Não", temPar: "Sim", local: "África" },
  { nome: "Scar", filme: "O Rei Leão", estudio: "Disney", cabelo: "Preto", lancamento: 1994, magia: "Não", temPar: "Não", local: "África" },
  { nome: "Timão", filme: "O Rei Leão", estudio: "Disney", cabelo: "Ruivo", lancamento: 1994, magia: "Não", temPar: "Não", local: "África" },
  { nome: "Pocahontas", filme: "Pocahontas", estudio: "Disney", cabelo: "Preto", lancamento: 1995, magia: "Sim", temPar: "Sim", local: "EUA" },
  { nome: "Quasimodo", filme: "O Corcunda de Notre Dame", estudio: "Disney", cabelo: "Ruivo", lancamento: 1996, magia: "Não", temPar: "Não", local: "França" },
  { nome: "Esmeralda", filme: "O Corcunda de Notre Dame", estudio: "Disney", cabelo: "Preto", lancamento: 1996, magia: "Não", temPar: "Sim", local: "França" },
  { nome: "Hércules", filme: "Hércules", estudio: "Disney", cabelo: "Ruivo", lancamento: 1997, magia: "Sim", temPar: "Sim", local: "Grécia" },
  { nome: "Hades", filme: "Hércules", estudio: "Disney", cabelo: "Azul", lancamento: 1997, magia: "Sim", temPar: "Não", local: "Grécia" },
  { nome: "Mulan", filme: "Mulan", estudio: "Disney", cabelo: "Preto", lancamento: 1998, magia: "Não", temPar: "Sim", local: "China" },
  { nome: "Li Shang", filme: "Mulan", estudio: "Disney", cabelo: "Preto", lancamento: 1998, magia: "Não", temPar: "Sim", local: "China" },
  { nome: "Tarzan", filme: "Tarzan", estudio: "Disney", cabelo: "Castanho", lancamento: 1999, magia: "Não", temPar: "Sim", local: "África" },
  { nome: "Jane", filme: "Tarzan", estudio: "Disney", cabelo: "Castanho", lancamento: 1999, magia: "Não", temPar: "Sim", local: "África" },
  { nome: "Kuzco", filme: "A Nova Onda do Imperador", estudio: "Disney", cabelo: "Preto", lancamento: 2000, magia: "Não", temPar: "Não", local: "Peru" },
  { nome: "Kronk", filme: "A Nova Onda do Imperador", estudio: "Disney", cabelo: "Preto", lancamento: 2000, magia: "Não", temPar: "Não", local: "Peru" },
  { nome: "Milo Thatch", filme: "Atlantis: O Reino Perdido", estudio: "Disney", cabelo: "Castanho", lancamento: 2001, magia: "Não", temPar: "Sim", local: "Atlantis" },
  { nome: "Lilo", filme: "Lilo & Stitch", estudio: "Disney", cabelo: "Preto", lancamento: 2002, magia: "Não", temPar: "Não", local: "Havaí" },
  { nome: "Stitch", filme: "Lilo & Stitch", estudio: "Disney", cabelo: "Azul", lancamento: 2002, magia: "Não", temPar: "Não", local: "Havaí" },
  { nome: "Jim Hawkins", filme: "Planeta do Tesouro", estudio: "Disney", cabelo: "Castanho", lancamento: 2002, magia: "Não", temPar: "Não", local: "Espaço" },
  { nome: "Kenai", filme: "Irmão Urso", estudio: "Disney", cabelo: "Castanho", lancamento: 2003, magia: "Sim", temPar: "Não", local: "Canadá" },
  { nome: "Tiana", filme: "A Princesa e o Sapo", estudio: "Disney", cabelo: "Preto", lancamento: 2009, magia: "Sim", temPar: "Sim", local: "EUA" },
  { nome: "Rapunzel", filme: "Enrolados", estudio: "Disney", cabelo: "Loiro", lancamento: 2010, magia: "Sim", temPar: "Sim", local: "Corona" },
  { nome: "Detona Ralph", filme: "Detona Ralph", estudio: "Disney", cabelo: "Castanho", lancamento: 2012, magia: "Não", temPar: "Não", local: "Fliperama" },
  { nome: "Elsa", filme: "Frozen", estudio: "Disney", cabelo: "Loiro", lancamento: 2013, magia: "Sim", temPar: "Não", local: "Arendelle" },
  { nome: "Anna", filme: "Frozen", estudio: "Disney", cabelo: "Ruivo", lancamento: 2013, magia: "Não", temPar: "Sim", local: "Arendelle" },
  { nome: "Hiro Hamada", filme: "Operação Big Hero", estudio: "Disney", cabelo: "Preto", lancamento: 2014, magia: "Não", temPar: "Não", local: "San Fransokyo" },
  { nome: "Baymax", filme: "Operação Big Hero", estudio: "Disney", cabelo: "Branco", lancamento: 2014, magia: "Não", temPar: "Não", local: "San Fransokyo" },
  { nome: "Judy Hopps", filme: "Zootopia", estudio: "Disney", cabelo: "Cinza", lancamento: 2016, magia: "Não", temPar: "Não", local: "Zootopia" },
  { nome: "Nick Wilde", filme: "Zootopia", estudio: "Disney", cabelo: "Laranja", lancamento: 2016, magia: "Não", temPar: "Não", local: "Zootopia" },
  { nome: "Moana", filme: "Moana", estudio: "Disney", cabelo: "Preto", lancamento: 2016, magia: "Sim", temPar: "Não", local: "Polinésia" },
  { nome: "Sisu", filme: "Raya e o Último Dragão", estudio: "Disney", cabelo: "Azul", lancamento: 2021, magia: "Sim", temPar: "Não", local: "Kumandra" },
  { nome: "Mirabel", filme: "Encanto", estudio: "Disney", cabelo: "Castanho", lancamento: 2021, magia: "Não", temPar: "Não", local: "Colômbia" },

  // ==========================================
  // 🚀 PIXAR
  // ==========================================
  { nome: "Woody", filme: "Toy Story", estudio: "Pixar", cabelo: "Castanho", lancamento: 1995, magia: "Não", temPar: "Sim", local: "EUA" },
  { nome: "Buzz Lightyear", filme: "Toy Story", estudio: "Pixar", cabelo: "Nenhum", lancamento: 1995, magia: "Não", temPar: "Sim", local: "EUA" },
  { nome: "Jessie", filme: "Toy Story 2", estudio: "Pixar", cabelo: "Ruivo", lancamento: 1999, magia: "Não", temPar: "Sim", local: "EUA" },
  { nome: "Rex", filme: "Toy Story", estudio: "Pixar", cabelo: "Verde", lancamento: 1995, magia: "Não", temPar: "Não", local: "EUA" },
  { nome: "Sulley", filme: "Monstros S.A.", estudio: "Pixar", cabelo: "Azul", lancamento: 2001, magia: "Não", temPar: "Não", local: "Monstrópolis" },
  { nome: "Mike Wazowski", filme: "Monstros S.A.", estudio: "Pixar", cabelo: "Verde", lancamento: 2001, magia: "Não", temPar: "Sim", local: "Monstrópolis" },
  { nome: "Boo", filme: "Monstros S.A.", estudio: "Pixar", cabelo: "Preto", lancamento: 2001, magia: "Não", temPar: "Não", local: "Monstrópolis" },
  { nome: "Nemo", filme: "Procurando Nemo", estudio: "Pixar", cabelo: "Laranja", lancamento: 2003, magia: "Não", temPar: "Não", local: "Austrália" },
  { nome: "Dory", filme: "Procurando Nemo", estudio: "Pixar", cabelo: "Azul", lancamento: 2003, magia: "Não", temPar: "Não", local: "Austrália" },
  { nome: "Sr. Incrível", filme: "Os Incríveis", estudio: "Pixar", cabelo: "Loiro", lancamento: 2004, magia: "Sim", temPar: "Sim", local: "EUA" },
  { nome: "Gelado", filme: "Os Incríveis", estudio: "Pixar", cabelo: "Preto", lancamento: 2004, magia: "Sim", temPar: "Sim", local: "EUA" },
  { nome: "Síndrome", filme: "Os Incríveis", estudio: "Pixar", cabelo: "Ruivo", lancamento: 2004, magia: "Não", temPar: "Não", local: "EUA" },
  { nome: "Relâmpago McQueen", filme: "Carros", estudio: "Pixar", cabelo: "Vermelho", lancamento: 2006, magia: "Não", temPar: "Sim", local: "EUA" },
  { nome: "Mate", filme: "Carros", estudio: "Pixar", cabelo: "Marrom", lancamento: 2006, magia: "Não", temPar: "Não", local: "EUA" },
  { nome: "Remy", filme: "Ratatouille", estudio: "Pixar", cabelo: "Cinza", lancamento: 2007, magia: "Não", temPar: "Não", local: "França" },
  { nome: "Wall-E", filme: "Wall-E", estudio: "Pixar", cabelo: "Amarelo", lancamento: 2008, magia: "Não", temPar: "Sim", local: "Espaço" },
  { nome: "EVE", filme: "Wall-E", estudio: "Pixar", cabelo: "Branco", lancamento: 2008, magia: "Não", temPar: "Sim", local: "Espaço" },
  { nome: "Carl Fredricksen", filme: "Up: Altas Aventuras", estudio: "Pixar", cabelo: "Branco", lancamento: 2009, magia: "Não", temPar: "Sim", local: "América do Sul" },
  { nome: "Russell", filme: "Up: Altas Aventuras", estudio: "Pixar", cabelo: "Preto", lancamento: 2009, magia: "Não", temPar: "Não", local: "América do Sul" },
  { nome: "Merida", filme: "Valente", estudio: "Pixar", cabelo: "Ruivo", lancamento: 2012, magia: "Sim", temPar: "Não", local: "Escócia" },
  { nome: "Alegria", filme: "Divertida Mente", estudio: "Pixar", cabelo: "Azul", lancamento: 2015, magia: "Sim", temPar: "Não", local: "Mente da Riley" },
  { nome: "Bing Bong", filme: "Divertida Mente", estudio: "Pixar", cabelo: "Rosa", lancamento: 2015, magia: "Sim", temPar: "Não", local: "Mente da Riley" },
  { nome: "Miguel", filme: "Viva: A Vida é uma Festa", estudio: "Pixar", cabelo: "Preto", lancamento: 2017, magia: "Sim", temPar: "Não", local: "México" },
  { nome: "Hector", filme: "Viva: A Vida é uma Festa", estudio: "Pixar", cabelo: "Preto", lancamento: 2017, magia: "Sim", temPar: "Sim", local: "México" },
  { nome: "Luca", filme: "Luca", estudio: "Pixar", cabelo: "Castanho", lancamento: 2021, magia: "Sim", temPar: "Não", local: "Itália" },
  { nome: "Wade", filme: "Elementos", estudio: "Pixar", cabelo: "Azul", lancamento: 2023, magia: "Sim", temPar: "Sim", local: "Cidade Elementos" },

  // ==========================================
  // 🌙 DREAMWORKS
  // ==========================================
  { nome: "Moisés", filme: "O Príncipe do Egito", estudio: "Dreamworks", cabelo: "Preto", lancamento: 1998, magia: "Sim", temPar: "Sim", local: "Egito" },
  { nome: "Ramsés", filme: "O Príncipe do Egito", estudio: "Dreamworks", cabelo: "Preto", lancamento: 1998, magia: "Não", temPar: "Sim", local: "Egito" },
  { nome: "Miguel", filme: "O Caminho para El Dorado", estudio: "Dreamworks", cabelo: "Loiro", lancamento: 2000, magia: "Não", temPar: "Não", local: "El Dorado" },
  { nome: "Tulio", filme: "O Caminho para El Dorado", estudio: "Dreamworks", cabelo: "Preto", lancamento: 2000, magia: "Não", temPar: "Sim", local: "El Dorado" },
  { nome: "Shrek", filme: "Shrek", estudio: "Dreamworks", cabelo: "Verde", lancamento: 2001, magia: "Não", temPar: "Sim", local: "Tão Tão Distante" },
  { nome: "Fiona", filme: "Shrek", estudio: "Dreamworks", cabelo: "Ruivo", lancamento: 2001, magia: "Sim", temPar: "Sim", local: "Tão Tão Distante" },
  { nome: "Burro", filme: "Shrek", estudio: "Dreamworks", cabelo: "Cinza", lancamento: 2001, magia: "Não", temPar: "Sim", local: "Tão Tão Distante" },
  { nome: "Lorde Farquaad", filme: "Shrek", estudio: "Dreamworks", cabelo: "Preto", lancamento: 2001, magia: "Não", temPar: "Não", local: "Duloc" },
  { nome: "Biscoito", filme: "Shrek", estudio: "Dreamworks", cabelo: "Marrom", lancamento: 2001, magia: "Sim", temPar: "Não", local: "Tão Tão Distante" },
  { nome: "Dragão", filme: "Shrek", estudio: "Dreamworks", cabelo: "Vermelho", lancamento: 2001, magia: "Sim", temPar: "Sim", local: "Tão Tão Distante" },
  { nome: "Spirit", filme: "Spirit", estudio: "Dreamworks", cabelo: "Loiro", lancamento: 2002, magia: "Não", temPar: "Sim", local: "EUA" },
  { nome: "Gato de Botas", filme: "Shrek 2", estudio: "Dreamworks", cabelo: "Laranja", lancamento: 2004, magia: "Não", temPar: "Sim", local: "Tão Tão Distante" },
  { nome: "Alex", filme: "Madagascar", estudio: "Dreamworks", cabelo: "Laranja", lancamento: 2005, magia: "Não", temPar: "Não", local: "Madagascar" },
  { nome: "Marty", filme: "Madagascar", estudio: "Dreamworks", cabelo: "Preto e Branco", lancamento: 2005, magia: "Não", temPar: "Não", local: "Madagascar" },
  { nome: "Gloria", filme: "Madagascar", estudio: "Dreamworks", cabelo: "Cinza", lancamento: 2005, magia: "Não", temPar: "Sim", local: "Madagascar" },
  { nome: "Melman", filme: "Madagascar", estudio: "Dreamworks", cabelo: "Laranja", lancamento: 2005, magia: "Não", temPar: "Sim", local: "Madagascar" },
  { nome: "Rei Julien", filme: "Madagascar", estudio: "Dreamworks", cabelo: "Cinza", lancamento: 2005, magia: "Não", temPar: "Não", local: "Madagascar" },
  { nome: "Barry B. Benson", filme: "Bee Movie", estudio: "Dreamworks", cabelo: "Preto", lancamento: 2007, magia: "Não", temPar: "Sim", local: "Nova York" },
  { nome: "Po", filme: "Kung Fu Panda", estudio: "Dreamworks", cabelo: "Preto", lancamento: 2008, magia: "Não", temPar: "Não", local: "China" },
  { nome: "Tigresa", filme: "Kung Fu Panda", estudio: "Dreamworks", cabelo: "Laranja", lancamento: 2008, magia: "Não", temPar: "Não", local: "China" },
  { nome: "Soluço", filme: "Como Treinar o Seu Dragão", estudio: "Dreamworks", cabelo: "Castanho", lancamento: 2010, magia: "Não", temPar: "Sim", local: "Berk" },
  { nome: "Banguela", filme: "Como Treinar o Seu Dragão", estudio: "Dreamworks", cabelo: "Preto", lancamento: 2010, magia: "Sim", temPar: "Sim", local: "Berk" },
  { nome: "Megamente", filme: "Megamente", estudio: "Dreamworks", cabelo: "Azul", lancamento: 2010, magia: "Não", temPar: "Sim", local: "Metro City" },
  { nome: "Jack Frost", filme: "A Origem dos Guardiões", estudio: "Dreamworks", cabelo: "Branco", lancamento: 2012, magia: "Sim", temPar: "Não", local: "Terra" },
  { nome: "Poppy", filme: "Trolls", estudio: "Dreamworks", cabelo: "Rosa", lancamento: 2016, magia: "Não", temPar: "Sim", local: "Vila Troll" },

  // ==========================================
  // 🍎 DISNEY CHANNEL (Apenas Descendentes!)
  // ==========================================
  { nome: "Mal", filme: "Descendentes", estudio: "Disney", cabelo: "Roxo", lancamento: 2015, magia: "Sim", temPar: "Sim", local: "Auradon" },
  { nome: "Evie", filme: "Descendentes", estudio: "Disney", cabelo: "Azul", lancamento: 2015, magia: "Sim", temPar: "Sim", local: "Auradon" },
  { nome: "Carlos", filme: "Descendentes", estudio: "Disney", cabelo: "Branco", lancamento: 2015, magia: "Não", temPar: "Sim", local: "Auradon" },
  { nome: "Jay", filme: "Descendentes", estudio: "Disney", cabelo: "Castanho", lancamento: 2015, magia: "Não", temPar: "Não", local: "Auradon" },
  { nome: "Rei Ben", filme: "Descendentes", estudio: "Disney", cabelo: "Castanho", lancamento: 2015, magia: "Não", temPar: "Sim", local: "Auradon" },
  { nome: "Audrey", filme: "Descendentes", estudio: "Disney", cabelo: "Castanho", lancamento: 2015, magia: "Sim", temPar: "Não", local: "Auradon" },
  { nome: "Chad Encantado", filme: "Descendentes", estudio: "Disney", cabelo: "Loiro", lancamento: 2015, magia: "Não", temPar: "Não", local: "Auradon" },
  { nome: "Uma", filme: "Descendentes", estudio: "Disney", cabelo: "Azul", lancamento: 2017, magia: "Sim", temPar: "Não", local: "Ilha dos Perdidos" },
  { nome: "Harry Hook", filme: "Descendentes", estudio: "Disney", cabelo: "Preto", lancamento: 2017, magia: "Não", temPar: "Não", local: "Ilha dos Perdidos" },
  { nome: "Gil", filme: "Descendentes", estudio: "Disney", cabelo: "Loiro", lancamento: 2017, magia: "Não", temPar: "Não", local: "Ilha dos Perdidos" },
  { nome: "Dizzy", filme: "Descendentes", estudio: "Disney", cabelo: "Castanho", lancamento: 2017, magia: "Não", temPar: "Não", local: "Ilha dos Perdidos" },
  { nome: "Celia", filme: "Descendentes", estudio: "Disney", cabelo: "Preto", lancamento: 2019, magia: "Sim", temPar: "Não", local: "Ilha dos Perdidos" }
];

// Sorteando o personagem do dia
let personagemDoDia = personagensDb[Math.floor(Math.random() * personagensDb.length)];
console.log("🤫 Spoiler! A resposta de hoje é:", personagemDoDia.nome);

let palpitesFeitos = [];

// Referências aos elementos HTML
const input = document.getElementById("guessInput");
const autocompleteList = document.getElementById("custom-autocomplete");
const tabelaBody = document.getElementById("guessesBody");
const winMessage = document.getElementById("message");
const winName = document.getElementById("winName");

// 1. SISTEMA DE AUTOCOMPLETE
input.addEventListener("input", function() {
    const valorDigitado = this.value.toLowerCase();
    autocompleteList.innerHTML = "";
    
    if (!valorDigitado) {
        autocompleteList.style.display = "none";
        return;
    }

    // ATUALIZE ESTA LINHA: Filtra os personagens que combinam E que ainda não foram jogados
    const resultados = personagensDb.filter(p => 
        p.nome.toLowerCase().includes(valorDigitado) && 
        !palpitesFeitos.includes(p.nome)
    );
    
    if (resultados.length > 0) {
        autocompleteList.style.display = "block";
        resultados.forEach(match => {
            const item = document.createElement("div");
            item.className = "autocomplete-item";
            item.innerText = match.nome;
            
            item.addEventListener("click", function() {
                input.value = match.nome;
                autocompleteList.style.display = "none";
                fazerPalpite(); 
            });
            
            autocompleteList.appendChild(item);
        });
    } else {
        autocompleteList.style.display = "none";
    }
});

// 2. SISTEMA DE "ENTER" PARA AUTO-COMPLETAR E ENVIAR
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); 
        const valorDigitado = this.value.toLowerCase().trim();
        
        if (valorDigitado === "") return;

        // ATUALIZE ESTAS LINHAS: Filtra apenas os personagens disponíveis
        const disponiveis = personagensDb.filter(p => !palpitesFeitos.includes(p.nome));
        const exato = disponiveis.find(p => p.nome.toLowerCase() === valorDigitado);
        const parcial = disponiveis.find(p => p.nome.toLowerCase().includes(valorDigitado));

        const personagemEscolhido = exato || parcial;

        if (personagemEscolhido) {
            input.value = personagemEscolhido.nome; 
            autocompleteList.style.display = "none"; 
            fazerPalpite(); 
        }
    }
});

// Esconde o autocomplete se clicar fora
document.addEventListener("click", function(e) {
    if (e.target !== input && e.target !== autocompleteList) {
        autocompleteList.style.display = "none";
    }
});

// 3. LÓGICA DE ADIVINHAÇÃO (O Palpite)
function fazerPalpite() {
    const nomePalpite = input.value;
    const palpiteObj = personagensDb.find(p => p.nome === nomePalpite);
    
    if (!palpiteObj) {
        alert("Personagem não encontrado na lista!");
        return;
    }

    palpitesFeitos.push(palpiteObj.nome);

    const tr = document.createElement("tr");
    tr.className = "new-row"; // Para a animação de flip

    // Cria as células da tabela (Nome, Filme, Estúdio, Cabelo, Lançamento, Magia, Tem Par, Local)
    tr.appendChild(criarCelula(palpiteObj.nome, palpiteObj.nome === personagemDoDia.nome));
    tr.appendChild(criarCelula(palpiteObj.filme, palpiteObj.filme === personagemDoDia.filme));
    tr.appendChild(criarCelula(palpiteObj.estudio, palpiteObj.estudio === personagemDoDia.estudio));
    tr.appendChild(criarCelula(palpiteObj.cabelo, palpiteObj.cabelo === personagemDoDia.cabelo));
    
    // Lógica especial da Seta para o Ano de Lançamento
    const cellAno = document.createElement("td");
    if (palpiteObj.lancamento === personagemDoDia.lancamento) {
        cellAno.className = "match";
        cellAno.innerText = palpiteObj.lancamento;
    } else {
        cellAno.className = "arrow-cell";
        const isOlder = palpiteObj.lancamento < personagemDoDia.lancamento; // Se for menor, seta pra cima ⬆️
        cellAno.innerHTML = `
            <div class="graphic-arrow-container">
                <div class="graphic-arrow ${isOlder ? 'arrow-up' : 'arrow-down'}"></div>
                <span class="arrow-year">${palpiteObj.lancamento}</span>
            </div>
        `;
    }
    tr.appendChild(cellAno);

    tr.appendChild(criarCelula(palpiteObj.magia, palpiteObj.magia === personagemDoDia.magia));
    tr.appendChild(criarCelula(palpiteObj.temPar, palpiteObj.temPar === personagemDoDia.temPar));
    tr.appendChild(criarCelula(palpiteObj.local, palpiteObj.local === personagemDoDia.local));

    tabelaBody.insertBefore(tr, tabelaBody.firstChild); // Adiciona a nova linha no topo

    // Limpa o input
    input.value = "";

    // Verifica Vitória
    if (palpiteObj.nome === personagemDoDia.nome) {
        winMessage.style.display = "flex";
        winName.innerText = palpiteObj.nome;
        tocarAudiosVitoria();
        input.disabled = true; 
    }
}

function tocarAudiosVitoria() {
    const a1 = document.getElementById('winAudio');
    const a2 = document.getElementById('winAudio2');
    const a3 = document.getElementById('winAudio3');

    if(a1) { a1.currentTime = 0; a1.play(); }
    if(a2) { 
        a2.volume = 0.2; 
        a2.currentTime = 0; a2.play(); 
    }
    if(a3) { a3.volume = 0.3; a3.currentTime = 0; a3.play(); }
}

function tocarEasterEgg() {
    const audio = document.getElementById('easterEggAudio');
    if(audio) { audio.currentTime = 0; audio.play(); }
}

// Função auxiliar para criar as células coloridas
function criarCelula(texto, isMatch) {
    const td = document.createElement("td");
    td.innerText = texto;
    td.className = isMatch ? "match" : "no-match";
    return td;
}

// Trocar Modos (Abas)
function trocarModo(idModo, btnElement) {
    document.querySelectorAll('.mode-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(idModo).classList.add('active');
    btnElement.classList.add('active');
}