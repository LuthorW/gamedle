const personagensDb = [
  // ============================
  // 👑 DISNEY 
  // ============================
  { id: "branca-de-neve", nome: "Branca de Neve", filme: "Branca de Neve", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 1937, magia: "Não", temPar: "Sim", local: "Alemanha" },
  { id: "rainha-ma", nome: "Rainha Má", filme: "Branca de Neve", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 1937, magia: "Sim", temPar: "Não", local: "Alemanha" },
  { id: "pinoquio", nome: "Pinóquio", filme: "Pinóquio", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 1940, magia: "Sim", temPar: "Não", local: "Itália" },
  { id: "cinderela", nome: "Cinderela", filme: "Cinderela", estudio: "Disney", genero: "Feminino", cabelo: "Loiro", lancamento: 1950, magia: "Não", temPar: "Sim", local: "França" },
  { id: "fada-madrinha", nome: "Fada Madrinha", filme: "Cinderela", estudio: "Disney", genero: "Feminino", cabelo: "Branco", lancamento: 1950, magia: "Sim", temPar: "Não", local: "França" },
  { id: "alice", nome: "Alice", filme: "Alice no País das Maravilhas", estudio: "Disney", genero: "Feminino", cabelo: "Loiro", lancamento: 1951, magia: "Não", temPar: "Não", local: "País das Maravilhas" },
  { id: "rainha-de-copas", nome: "Rainha de Copas", filme: "Alice no País das Maravilhas", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 1951, magia: "Não", temPar: "Sim", local: "País das Maravilhas" },
  { id: "peter-pan", nome: "Peter Pan", filme: "Peter Pan", estudio: "Disney", genero: "Masculino", cabelo: "Ruivo", lancamento: 1953, magia: "Sim", temPar: "Não", local: "Terra do Nunca" },
  { id: "capitao-gancho", nome: "Capitão Gancho", filme: "Peter Pan", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 1953, magia: "Não", temPar: "Não", local: "Terra do Nunca" },
  { id: "aurora", nome: "Aurora", filme: "A Bela Adormecida", estudio: "Disney", genero: "Feminino", cabelo: "Loiro", lancamento: 1959, magia: "Não", temPar: "Sim", local: "França" },
  { id: "malevola", nome: "Malévola", filme: "A Bela Adormecida", estudio: "Disney", genero: "Feminino", cabelo: "Nenhum", lancamento: 1959, magia: "Sim", temPar: "Não", local: "França" },
  { id: "cruella-de-vil", nome: "Cruella de Vil", filme: "101 Dálmatas", estudio: "Disney", genero: "Feminino", cabelo: "Preto e Branco", lancamento: 1961, magia: "Não", temPar: "Não", local: "Inglaterra" },
  { id: "mogli", nome: "Mogli", filme: "Mogli: O Menino Lobo", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 1967, magia: "Não", temPar: "Não", local: "Índia" },
  { id: "robin-hood", nome: "Robin Hood", filme: "Robin Hood", estudio: "Disney", genero: "Masculino", cabelo: "Laranja", lancamento: 1973, magia: "Não", temPar: "Sim", local: "Inglaterra" },
  { id: "ariel", nome: "Ariel", filme: "A Pequena Sereia", estudio: "Disney", genero: "Feminino", cabelo: "Ruivo", lancamento: 1989, magia: "Sim", temPar: "Sim", local: "Atlântica" },
  { id: "principe-eric", nome: "Príncipe Eric", filme: "A Pequena Sereia", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 1989, magia: "Não", temPar: "Sim", local: "Dinamarca" },
  { id: "ursula", nome: "Úrsula", filme: "A Pequena Sereia", estudio: "Disney", genero: "Feminino", cabelo: "Branco", lancamento: 1989, magia: "Sim", temPar: "Não", local: "Atlântica" },
  { id: "bela", nome: "Bela", filme: "A Bela e a Fera", estudio: "Disney", genero: "Feminino", cabelo: "Castanho", lancamento: 1991, magia: "Não", temPar: "Sim", local: "França" },
  { id: "fera", nome: "Fera", filme: "A Bela e a Fera", estudio: "Disney", genero: "Masculino", cabelo: "Castanho", lancamento: 1991, magia: "Sim", temPar: "Sim", local: "França" },
  { id: "gaston", nome: "Gaston", filme: "A Bela e a Fera", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 1991, magia: "Não", temPar: "Não", local: "França" },
  { id: "aladdin", nome: "Aladdin", filme: "Aladdin", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 1992, magia: "Não", temPar: "Sim", local: "Agrabah" },
  { id: "jasmine", nome: "Jasmine", filme: "Aladdin", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 1992, magia: "Não", temPar: "Sim", local: "Agrabah" },
  { id: "genio", nome: "Gênio", filme: "Aladdin", estudio: "Disney", genero: "Masculino", cabelo: "Nenhum", lancamento: 1992, magia: "Sim", temPar: "Não", local: "Agrabah" },
  { id: "simba", nome: "Simba", filme: "O Rei Leão", estudio: "Disney", genero: "Masculino", cabelo: "Ruivo", lancamento: 1994, magia: "Não", temPar: "Sim", local: "África" },
  { id: "scar", nome: "Scar", filme: "O Rei Leão", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 1994, magia: "Não", temPar: "Não", local: "África" },
  { id: "timao", nome: "Timão", filme: "O Rei Leão", estudio: "Disney", genero: "Masculino", cabelo: "Ruivo", lancamento: 1994, magia: "Não", temPar: "Não", local: "África" },
  { id: "pocahontas", nome: "Pocahontas", filme: "Pocahontas", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 1995, magia: "Sim", temPar: "Sim", local: "EUA" },
  { id: "quasimodo", nome: "Quasimodo", filme: "O Corcunda de Notre Dame", estudio: "Disney", genero: "Masculino", cabelo: "Ruivo", lancamento: 1996, magia: "Não", temPar: "Não", local: "França" },
  { id: "esmeralda", nome: "Esmeralda", filme: "O Corcunda de Notre Dame", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 1996, magia: "Não", temPar: "Sim", local: "França" },
  { id: "hercules", nome: "Hércules", filme: "Hércules", estudio: "Disney", genero: "Masculino", cabelo: "Ruivo", lancamento: 1997, magia: "Sim", temPar: "Sim", local: "Grécia" },
  { id: "hades", nome: "Hades", filme: "Hércules", estudio: "Disney", genero: "Masculino", cabelo: "Azul", lancamento: 1997, magia: "Sim", temPar: "Não", local: "Grécia" },
  { id: "mulan", nome: "Mulan", filme: "Mulan", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 1998, magia: "Não", temPar: "Sim", local: "China" },
  { id: "li-shang", nome: "Li Shang", filme: "Mulan", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 1998, magia: "Não", temPar: "Sim", local: "China" },
  { id: "tarzan", nome: "Tarzan", filme: "Tarzan", estudio: "Disney", genero: "Masculino", cabelo: "Castanho", lancamento: 1999, magia: "Não", temPar: "Sim", local: "África" },
  { id: "jane", nome: "Jane", filme: "Tarzan", estudio: "Disney", genero: "Feminino", cabelo: "Castanho", lancamento: 1999, magia: "Não", temPar: "Sim", local: "África" },
  { id: "kuzco", nome: "Kuzco", filme: "A Nova Onda do Imperador", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 2000, magia: "Não", temPar: "Não", local: "Peru" },
  { id: "kronk", nome: "Kronk", filme: "A Nova Onda do Imperador", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 2000, magia: "Não", temPar: "Não", local: "Peru" },
  { id: "milo-thatch", nome: "Milo Thatch", filme: "Atlantis: O Reino Perdido", estudio: "Disney", genero: "Masculino", cabelo: "Castanho", lancamento: 2001, magia: "Não", temPar: "Sim", local: "Atlantis" },
  { id: "lilo", nome: "Lilo", filme: "Lilo & Stitch", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 2002, magia: "Não", temPar: "Não", local: "Havaí" },
  { id: "stitch", nome: "Stitch", filme: "Lilo & Stitch", estudio: "Disney", genero: "Masculino", cabelo: "Azul", lancamento: 2002, magia: "Não", temPar: "Não", local: "Havaí" },
  { id: "jim-hawkins", nome: "Jim Hawkins", filme: "Planeta do Tesouro", estudio: "Disney", genero: "Masculino", cabelo: "Castanho", lancamento: 2002, magia: "Não", temPar: "Não", local: "Espaço" },
  { id: "kenai", nome: "Kenai", filme: "Irmão Urso", estudio: "Disney", genero: "Masculino", cabelo: "Castanho", lancamento: 2003, magia: "Sim", temPar: "Não", local: "Canadá" },
  { id: "tiana", nome: "Tiana", filme: "A Princesa e o Sapo", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 2009, magia: "Sim", temPar: "Sim", local: "EUA" },
  { id: "rapunzel", nome: "Rapunzel", filme: "Enrolados", estudio: "Disney", genero: "Feminino", cabelo: "Loiro", lancamento: 2010, magia: "Sim", temPar: "Sim", local: "Corona" },
  { id: "detona-ralph", nome: "Detona Ralph", filme: "Detona Ralph", estudio: "Disney", genero: "Masculino", cabelo: "Castanho", lancamento: 2012, magia: "Não", temPar: "Não", local: "Fliperama" },
  { id: "elsa", nome: "Elsa", filme: "Frozen", estudio: "Disney", genero: "Feminino", cabelo: "Loiro", lancamento: 2013, magia: "Sim", temPar: "Não", local: "Arendelle" },
  { id: "anna", nome: "Anna", filme: "Frozen", estudio: "Disney", genero: "Feminino", cabelo: "Ruivo", lancamento: 2013, magia: "Não", temPar: "Sim", local: "Arendelle" },
  { id: "hiro-hamada", nome: "Hiro Hamada", filme: "Operação Big Hero", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 2014, magia: "Não", temPar: "Não", local: "San Fransokyo" },
  { id: "baymax", nome: "Baymax", filme: "Operação Big Hero", estudio: "Disney", genero: "Masculino", cabelo: "Branco", lancamento: 2014, magia: "Não", temPar: "Não", local: "San Fransokyo" },
  { id: "judy-hopps", nome: "Judy Hopps", filme: "Zootopia", estudio: "Disney", genero: "Feminino", cabelo: "Cinza", lancamento: 2016, magia: "Não", temPar: "Não", local: "Zootopia" },
  { id: "nick-wilde", nome: "Nick Wilde", filme: "Zootopia", estudio: "Disney", genero: "Masculino", cabelo: "Laranja", lancamento: 2016, magia: "Não", temPar: "Não", local: "Zootopia" },
  { id: "moana", nome: "Moana", filme: "Moana", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 2016, magia: "Sim", temPar: "Não", local: "Polinésia" },
  { id: "mirabel", nome: "Mirabel", filme: "Encanto", estudio: "Disney", genero: "Feminino", cabelo: "Castanho", lancamento: 2021, magia: "Não", temPar: "Não", local: "Colômbia" },


  // ==========================================
  // 🚀 PIXAR
  // ==========================================
  { id: "woody", nome: "Woody", filme: "Toy Story", estudio: "Pixar", genero: "Masculino", cabelo: "Castanho", lancamento: 1995, magia: "Não", temPar: "Sim", local: "EUA" },
  { id: "buzz-lightyear", nome: "Buzz Lightyear", filme: "Toy Story", estudio: "Pixar", genero: "Masculino", cabelo: "Nenhum", lancamento: 1995, magia: "Não", temPar: "Sim", local: "EUA" },
  { id: "jessie", nome: "Jessie", filme: "Toy Story 2", estudio: "Pixar", genero: "Feminino", cabelo: "Ruivo", lancamento: 1999, magia: "Não", temPar: "Sim", local: "EUA" },
  { id: "rex", nome: "Rex", filme: "Toy Story", estudio: "Pixar", genero: "Masculino", cabelo: "Verde", lancamento: 1995, magia: "Não", temPar: "Não", local: "EUA" },
  { id: "sulley", nome: "Sulley", filme: "Monstros S.A.", estudio: "Pixar", genero: "Masculino", cabelo: "Azul", lancamento: 2001, magia: "Não", temPar: "Não", local: "Monstrópolis" },
  { id: "mike-wazowski", nome: "Mike Wazowski", filme: "Monstros S.A.", estudio: "Pixar", genero: "Masculino", cabelo: "Verde", lancamento: 2001, magia: "Não", temPar: "Sim", local: "Monstrópolis" },
  { id: "boo", nome: "Boo", filme: "Monstros S.A.", estudio: "Pixar", genero: "Feminino", cabelo: "Preto", lancamento: 2001, magia: "Não", temPar: "Não", local: "Monstrópolis" },
  { id: "nemo", nome: "Nemo", filme: "Procurando Nemo", estudio: "Pixar", genero: "Masculino", cabelo: "Laranja", lancamento: 2003, magia: "Não", temPar: "Não", local: "Austrália" },
  { id: "dory", nome: "Dory", filme: "Procurando Nemo", estudio: "Pixar", genero: "Feminino", cabelo: "Azul", lancamento: 2003, magia: "Não", temPar: "Não", local: "Austrália" },
  { id: "sr-incrivel", nome: "Sr. Incrível", filme: "Os Incríveis", estudio: "Pixar", genero: "Masculino", cabelo: "Loiro", lancamento: 2004, magia: "Sim", temPar: "Sim", local: "EUA" },
  { id: "gelado", nome: "Gelado", filme: "Os Incríveis", estudio: "Pixar", genero: "Masculino", cabelo: "Preto", lancamento: 2004, magia: "Sim", temPar: "Sim", local: "EUA" },
  { id: "sindrome", nome: "Síndrome", filme: "Os Incríveis", estudio: "Pixar", genero: "Masculino", cabelo: "Ruivo", lancamento: 2004, magia: "Não", temPar: "Não", local: "EUA" },
  { id: "relampago-mcqueen", nome: "Relâmpago McQueen", filme: "Carros", estudio: "Pixar", genero: "Masculino", cabelo: "Vermelho", lancamento: 2006, magia: "Não", temPar: "Sim", local: "EUA" },
  { id: "mate", nome: "Mate", filme: "Carros", estudio: "Pixar", genero: "Masculino", cabelo: "Marrom", lancamento: 2006, magia: "Não", temPar: "Não", local: "EUA" },
  { id: "remy", nome: "Remy", filme: "Ratatouille", estudio: "Pixar", genero: "Masculino", cabelo: "Cinza", lancamento: 2007, magia: "Não", temPar: "Não", local: "França" },
  { id: "wall-e", nome: "Wall-E", filme: "Wall-E", estudio: "Pixar", genero: "Masculino", cabelo: "Amarelo", lancamento: 2008, magia: "Não", temPar: "Sim", local: "Espaço" },
  { id: "eve", nome: "EVE", filme: "Wall-E", estudio: "Pixar", genero: "Feminino", cabelo: "Branco", lancamento: 2008, magia: "Não", temPar: "Sim", local: "Espaço" },
  { id: "carl-fredricksen", nome: "Carl Fredricksen", filme: "Up: Altas Aventuras", estudio: "Pixar", genero: "Masculino", cabelo: "Branco", lancamento: 2009, magia: "Não", temPar: "Sim", local: "América do Sul" },
  { id: "russell", nome: "Russell", filme: "Up: Altas Aventuras", estudio: "Pixar", genero: "Masculino", cabelo: "Preto", lancamento: 2009, magia: "Não", temPar: "Não", local: "América do Sul" },
  { id: "merida", nome: "Merida", filme: "Valente", estudio: "Pixar", genero: "Feminino", cabelo: "Ruivo", lancamento: 2012, magia: "Sim", temPar: "Não", local: "Escócia" },
  { id: "alegria", nome: "Alegria", filme: "Divertida Mente", estudio: "Pixar", genero: "Feminino", cabelo: "Azul", lancamento: 2015, magia: "Sim", temPar: "Não", local: "Mente da Riley" },
  { id: "bing-bong", nome: "Bing Bong", filme: "Divertida Mente", estudio: "Pixar", genero: "Masculino", cabelo: "Rosa", lancamento: 2015, magia: "Sim", temPar: "Não", local: "Mente da Riley" },
  { id: "miguel-viva", nome: "Miguel (Viva)", filme: "Viva: A Vida é uma Festa", estudio: "Pixar", genero: "Masculino", cabelo: "Preto", lancamento: 2017, magia: "Sim", temPar: "Não", local: "México" },
  { id: "hector", nome: "Hector", filme: "Viva: A Vida é uma Festa", estudio: "Pixar", genero: "Masculino", cabelo: "Preto", lancamento: 2017, magia: "Sim", temPar: "Sim", local: "México" },
  { id: "luca", nome: "Luca", filme: "Luca", estudio: "Pixar", genero: "Masculino", cabelo: "Castanho", lancamento: 2021, magia: "Sim", temPar: "Não", local: "Itália" },
  { id: "wade", nome: "Wade", filme: "Elementos", estudio: "Pixar", genero: "Masculino", cabelo: "Azul", lancamento: 2023, magia: "Sim", temPar: "Sim", local: "Cidade Elementos" },

  // ==========================================
  // 🌙 DREAMWORKS
  // ==========================================
  { id: "miguel-eldorado", nome: "Miguel (El Dorado)", filme: "O Caminho para El Dorado", estudio: "Dreamworks", genero: "Masculino", cabelo: "Loiro", lancamento: 2000, magia: "Não", temPar: "Não", local: "El Dorado" },
  { id: "tulio", nome: "Tulio", filme: "O Caminho para El Dorado", estudio: "Dreamworks", genero: "Masculino", cabelo: "Preto", lancamento: 2000, magia: "Não", temPar: "Sim", local: "El Dorado" },
  { id: "shrek", nome: "Shrek", filme: "Shrek", estudio: "Dreamworks", genero: "Masculino", cabelo: "Verde", lancamento: 2001, magia: "Não", temPar: "Sim", local: "Tão Tão Distante" },
  { id: "fiona", nome: "Fiona", filme: "Shrek", estudio: "Dreamworks", genero: "Feminino", cabelo: "Ruivo", lancamento: 2001, magia: "Sim", temPar: "Sim", local: "Tão Tão Distante" },
  { id: "burro", nome: "Burro", filme: "Shrek", estudio: "Dreamworks", genero: "Masculino", cabelo: "Cinza", lancamento: 2001, magia: "Não", temPar: "Sim", local: "Tão Tão Distante" },
  { id: "lorde-farquaad", nome: "Lorde Farquaad", filme: "Shrek", estudio: "Dreamworks", genero: "Masculino", cabelo: "Preto", lancamento: 2001, magia: "Não", temPar: "Não", local: "Duloc" },
  { id: "biscoito", nome: "Biscoito", filme: "Shrek", estudio: "Dreamworks", genero: "Masculino", cabelo: "Marrom", lancamento: 2001, magia: "Sim", temPar: "Não", local: "Tão Tão Distante" },
  { id: "dragao", nome: "Dragão", filme: "Shrek", estudio: "Dreamworks", genero: "Feminino", cabelo: "Vermelho", lancamento: 2001, magia: "Sim", temPar: "Sim", local: "Tão Tão Distante" },
  { id: "spirit", nome: "Spirit", filme: "Spirit", estudio: "Dreamworks", genero: "Masculino", cabelo: "Loiro", lancamento: 2002, magia: "Não", temPar: "Sim", local: "EUA" },
  { id: "gato-de-botas", nome: "Gato de Botas", filme: "Shrek 2", estudio: "Dreamworks", genero: "Masculino", cabelo: "Laranja", lancamento: 2004, magia: "Não", temPar: "Sim", local: "Tão Tão Distante" },
  { id: "alex", nome: "Alex", filme: "Madagascar", estudio: "Dreamworks", genero: "Masculino", cabelo: "Laranja", lancamento: 2005, magia: "Não", temPar: "Não", local: "Madagascar" },
  { id: "marty", nome: "Marty", filme: "Madagascar", estudio: "Dreamworks", genero: "Masculino", cabelo: "Preto e Branco", lancamento: 2005, magia: "Não", temPar: "Não", local: "Madagascar" },
  { id: "gloria", nome: "Gloria", filme: "Madagascar", estudio: "Dreamworks", genero: "Feminino", cabelo: "Cinza", lancamento: 2005, magia: "Não", temPar: "Sim", local: "Madagascar" },
  { id: "melman", nome: "Melman", filme: "Madagascar", estudio: "Dreamworks", genero: "Masculino", cabelo: "Laranja", lancamento: 2005, magia: "Não", temPar: "Sim", local: "Madagascar" },
  { id: "rei-julien", nome: "Rei Julien", filme: "Madagascar", estudio: "Dreamworks", genero: "Masculino", cabelo: "Cinza", lancamento: 2005, magia: "Não", temPar: "Não", local: "Madagascar" },
  { id: "barry-b-benson", nome: "Barry B. Benson", filme: "Bee Movie", estudio: "Dreamworks", genero: "Masculino", cabelo: "Preto", lancamento: 2007, magia: "Não", temPar: "Sim", local: "Nova York" },
  { id: "po", nome: "Po", filme: "Kung Fu Panda", estudio: "Dreamworks", genero: "Masculino", cabelo: "Preto", lancamento: 2008, magia: "Não", temPar: "Não", local: "China" },
  { id: "tigresa", nome: "Tigresa", filme: "Kung Fu Panda", estudio: "Dreamworks", genero: "Feminino", cabelo: "Laranja", lancamento: 2008, magia: "Não", temPar: "Não", local: "China" },
  { id: "soluco", nome: "Soluço", filme: "Como Treinar o Seu Dragão", estudio: "Dreamworks", genero: "Masculino", cabelo: "Castanho", lancamento: 2010, magia: "Não", temPar: "Sim", local: "Berk" },
  { id: "banguela", nome: "Banguela", filme: "Como Treinar o Seu Dragão", estudio: "Dreamworks", genero: "Masculino", cabelo: "Preto", lancamento: 2010, magia: "Sim", temPar: "Sim", local: "Berk" },
  { id: "megamente", nome: "Megamente", filme: "Megamente", estudio: "Dreamworks", genero: "Masculino", cabelo: "Azul", lancamento: 2010, magia: "Não", temPar: "Sim", local: "Metro City" },
  { id: "jack-frost", nome: "Jack Frost", filme: "A Origem dos Guardiões", estudio: "Dreamworks", genero: "Masculino", cabelo: "Branco", lancamento: 2012, magia: "Sim", temPar: "Não", local: "Terra" },
  { id: "poppy", nome: "Poppy", filme: "Trolls", estudio: "Dreamworks", genero: "Feminino", cabelo: "Rosa", lancamento: 2016, magia: "Não", temPar: "Sim", local: "Vila Troll" },

  // ==========================================
  // 🍎 Descendentes
  // ==========================================
  { id: "mal", nome: "Mal", filme: "Descendentes", estudio: "Disney", genero: "Feminino", cabelo: "Roxo", lancamento: 2015, magia: "Sim", temPar: "Sim", local: "Auradon" },
  { id: "evie", nome: "Evie", filme: "Descendentes", estudio: "Disney", genero: "Feminino", cabelo: "Azul", lancamento: 2015, magia: "Sim", temPar: "Sim", local: "Auradon" },
  { id: "carlos", nome: "Carlos", filme: "Descendentes", estudio: "Disney", genero: "Masculino", cabelo: "Branco", lancamento: 2015, magia: "Não", temPar: "Sim", local: "Auradon" },
  { id: "jay", nome: "Jay", filme: "Descendentes", estudio: "Disney", genero: "Masculino", cabelo: "Castanho", lancamento: 2015, magia: "Não", temPar: "Não", local: "Auradon" },
  { id: "rei-ben", nome: "Rei Ben", filme: "Descendentes", estudio: "Disney", genero: "Masculino", cabelo: "Castanho", lancamento: 2015, magia: "Não", temPar: "Sim", local: "Auradon" },
  { id: "audrey", nome: "Audrey", filme: "Descendentes", estudio: "Disney", genero: "Feminino", cabelo: "Castanho", lancamento: 2015, magia: "Sim", temPar: "Não", local: "Auradon" },
  { id: "chad-encantado", nome: "Chad Encantado", filme: "Descendentes", estudio: "Disney", genero: "Masculino", cabelo: "Loiro", lancamento: 2015, magia: "Não", temPar: "Não", local: "Auradon" },
  { id: "uma", nome: "Uma", filme: "Descendentes", estudio: "Disney", genero: "Feminino", cabelo: "Azul", lancamento: 2017, magia: "Sim", temPar: "Não", local: "Ilha dos Perdidos" },
  { id: "harry-hook", nome: "Harry Hook", filme: "Descendentes", estudio: "Disney", genero: "Masculino", cabelo: "Preto", lancamento: 2017, magia: "Não", temPar: "Não", local: "Ilha dos Perdidos" },
  { id: "gil", nome: "Gil", filme: "Descendentes", estudio: "Disney", genero: "Masculino", cabelo: "Loiro", lancamento: 2017, magia: "Não", temPar: "Não", local: "Ilha dos Perdidos" },
  { id: "dizzy", nome: "Dizzy", filme: "Descendentes", estudio: "Disney", genero: "Feminino", cabelo: "Castanho", lancamento: 2017, magia: "Não", temPar: "Não", local: "Ilha dos Perdidos" },
  { id: "celia", nome: "Celia", filme: "Descendentes", estudio: "Disney", genero: "Feminino", cabelo: "Preto", lancamento: 2019, magia: "Sim", temPar: "Não", local: "Ilha dos Perdidos" }
];


const hpDb = [
// ==========================================
  // 🦁 GRIFINÓRIA
  // ==========================================
  { id: "harry-potter", nome: "Harry Potter", genero: "Masculino", casa: "Grifinória", sangue: "Mestiço", especie: "Humano", cabelo: "Preto", ano: 2001 },
  { id: "rony-weasley", nome: "Rony Weasley", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2001 },
  { id: "hermione-granger", nome: "Hermione Granger", genero: "Feminino", casa: "Grifinória", sangue: "Nascido-trouxa", especie: "Humano", cabelo: "Castanho", ano: 2001 },
  { id: "alvo-dumbledore", nome: "Alvo Dumbledore", genero: "Masculino", casa: "Grifinória", sangue: "Mestiço", especie: "Humano", cabelo: "Branco", ano: 2001 },
  { id: "minerva-mcgonagall", nome: "Minerva McGonagall", genero: "Feminino", casa: "Grifinória", sangue: "Mestiço", especie: "Humano", cabelo: "Preto", ano: 2001 },
  { id: "neville-longbottom", nome: "Neville Longbottom", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2001 },
  { id: "gina-weasley", nome: "Gina Weasley", genero: "Feminino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2001 },
  { id: "sirius-black", nome: "Sirius Black", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2004 },
  { id: "remo-lupin", nome: "Remo Lupin", genero: "Masculino", casa: "Grifinória", sangue: "Mestiço", especie: "Lobisomem", cabelo: "Castanho", ano: 2004 },
  { id: "hagrid", nome: "Rúbeo Hagrid", genero: "Masculino", casa: "Grifinória", sangue: "Mestiço", especie: "Meio-Gigante", cabelo: "Preto", ano: 2001 },
  { id: "fred-weasley", nome: "Fred Weasley", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2001 },
  { id: "jorge-weasley", nome: "Jorge Weasley", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2001 },
  { id: "arthur-weasley", nome: "Arthur Weasley", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2002 },
  { id: "molly-weasley", nome: "Molly Weasley", genero: "Feminino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2001 },
  { id: "percy-weasley", nome: "Percy Weasley", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2001 },
  { id: "gui-weasley", nome: "Gui Weasley", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2010 },
  { id: "simas-finnigan", nome: "Simas Finnigan", genero: "Masculino", casa: "Grifinória", sangue: "Mestiço", especie: "Humano", cabelo: "Castanho", ano: 2001 },
  { id: "dino-thomas", nome: "Dino Thomas", genero: "Masculino", casa: "Grifinória", sangue: "Mestiço", especie: "Humano", cabelo: "Preto", ano: 2001 },
  { id: "lila-brown", nome: "Lilá Brown", genero: "Feminino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Loiro", ano: 2004 },
  { id: "parvati-patil", nome: "Parvati Patil", genero: "Feminino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2004 },
  { id: "olivio-wood", nome: "Olívio Wood", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2001 },
  { id: "katie-bell", nome: "Katie Bell", genero: "Feminino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2001 },
  { id: "tiago-potter", nome: "Tiago Potter", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2001 },
  { id: "lilian-potter", nome: "Lílian Potter", genero: "Feminino", casa: "Grifinória", sangue: "Nascido-trouxa", especie: "Humano", cabelo: "Ruivo", ano: 2001 },
  { id: "pedro-pettigrew", nome: "Pedro Pettigrew", genero: "Masculino", casa: "Grifinória", sangue: "Puro-sangue", especie: "Humano", cabelo: "Loiro", ano: 2004 },
  { id: "colin-creevey", nome: "Colin Creevey", genero: "Masculino", casa: "Grifinória", sangue: "Nascido-trouxa", especie: "Humano", cabelo: "Loiro", ano: 2002 },

  // ==========================================
  // 🐍 SONSERINA
  // ==========================================
  { id: "draco-malfoy", nome: "Draco Malfoy", genero: "Masculino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Loiro", ano: 2001 },
  { id: "severo-snape", nome: "Severo Snape", genero: "Masculino", casa: "Sonserina", sangue: "Mestiço", especie: "Humano", cabelo: "Preto", ano: 2001 },
  { id: "voldemort", nome: "Lord Voldemort", genero: "Masculino", casa: "Sonserina", sangue: "Mestiço", especie: "Humano", cabelo: "Nenhum", ano: 2001 },
  { id: "bellatrix-lestrange", nome: "Bellatrix Lestrange", genero: "Feminino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2007 },
  { id: "lucio-malfoy", nome: "Lúcio Malfoy", genero: "Masculino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Loiro", ano: 2002 },
  { id: "narcisa-malfoy", nome: "Narcisa Malfoy", genero: "Feminino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Loiro e Preto", ano: 2009 },
  { id: "horacio-slughorn", nome: "Horácio Slughorn", genero: "Masculino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Grisalho", ano: 2009 },
  { id: "dolores-umbridge", nome: "Dolores Umbridge", genero: "Feminino", casa: "Sonserina", sangue: "Mestiço", especie: "Humano", cabelo: "Castanho", ano: 2007 },
  { id: "vicente-crabbe", nome: "Vicente Crabbe", genero: "Masculino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2001 },
  { id: "gregorio-goyle", nome: "Gregório Goyle", genero: "Masculino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2001 },
  { id: "pansy-parkinson", nome: "Pansy Parkinson", genero: "Feminino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2004 },
  { id: "blasio-zabini", nome: "Blásio Zabini", genero: "Masculino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2009 },
  { id: "barto-crouch-jr", nome: "Bartô Crouch Jr.", genero: "Masculino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2005 },
  { id: "regulo-black", nome: "Régulo Black", genero: "Masculino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2009 },
  { id: "leta-lestrange", nome: "Leta Lestrange", genero: "Feminino", casa: "Sonserina", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2018 },

  // ==========================================
  // 🦅 CORVINAL
  // ==========================================
  { id: "luna-lovegood", nome: "Luna Lovegood", genero: "Feminino", casa: "Corvinal", sangue: "Puro-sangue", especie: "Humano", cabelo: "Loiro", ano: 2007 },
  { id: "cho-chang", nome: "Cho Chang", genero: "Feminino", casa: "Corvinal", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2005 },
  { id: "filius-flitwick", nome: "Fílio Flitwick", genero: "Masculino", casa: "Corvinal", sangue: "Mestiço", especie: "Duende", cabelo: "Preto", ano: 2001 },
  { id: "murta-que-geme", nome: "Murta que Geme", genero: "Feminino", casa: "Corvinal", sangue: "Nascido-trouxa", especie: "Fantasma", cabelo: "Castanho", ano: 2002 },
  { id: "sibila-trelawney", nome: "Sibila Trelawney", genero: "Feminino", casa: "Corvinal", sangue: "Mestiço", especie: "Humano", cabelo: "Castanho", ano: 2004 },
  { id: "gilderoy-lockhart", nome: "Gilderoy Lockhart", genero: "Masculino", casa: "Corvinal", sangue: "Mestiço", especie: "Humano", cabelo: "Loiro", ano: 2002 },
  { id: "padma-patil", nome: "Padma Patil", genero: "Feminino", casa: "Corvinal", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2005 },
  { id: "helena-corvinal", nome: "Helena Corvinal", genero: "Feminino", casa: "Corvinal", sangue: "Puro-sangue", especie: "Fantasma", cabelo: "Preto", ano: 2011 },
  { id: "garrick-olivaras", nome: "Garrick Olivaras", genero: "Masculino", casa: "Corvinal", sangue: "Mestiço", especie: "Humano", cabelo: "Branco", ano: 2001 },
  { id: "quirino-quirrell", nome: "Quirino Quirrell", genero: "Masculino", casa: "Corvinal", sangue: "Mestiço", especie: "Humano", cabelo: "Nenhum", ano: 2001 },
  { id: "rita-skeeter", nome: "Rita Skeeter", genero: "Feminino", casa: "Corvinal", sangue: "Desconhecido", especie: "Humano", cabelo: "Loiro", ano: 2005 },

  // ==========================================
  // 🦡 LUFA-LUFA
  // ==========================================
  { id: "cedrico-diggory", nome: "Cedrico Diggory", genero: "Masculino", casa: "Lufa-Lufa", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2005 },
  { id: "newt-scamander", nome: "Newt Scamander", genero: "Masculino", casa: "Lufa-Lufa", sangue: "Puro-sangue", especie: "Humano", cabelo: "Ruivo", ano: 2016 },
  { id: "ninfadora-tonks", nome: "Ninfadora Tonks", genero: "Feminino", casa: "Lufa-Lufa", sangue: "Mestiço", especie: "Humano", cabelo: "Roxo", ano: 2007 },
  { id: "pomona-sprout", nome: "Pomona Sprout", genero: "Feminino", casa: "Lufa-Lufa", sangue: "Mestiço", especie: "Humano", cabelo: "Grisalho", ano: 2002 },
  { id: "teseu-scamander", nome: "Teseu Scamander", genero: "Masculino", casa: "Lufa-Lufa", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2018 },
  { id: "frei-gorducho", nome: "Frei Gorducho", genero: "Masculino", casa: "Lufa-Lufa", sangue: "Desconhecido", especie: "Fantasma", cabelo: "Castanho", ano: 2001 },
  { id: "justino-finch", nome: "Justino Finch-Fletchley", genero: "Masculino", casa: "Lufa-Lufa", sangue: "Nascido-trouxa", especie: "Humano", cabelo: "Castanho", ano: 2002 },
  { id: "susana-bones", nome: "Susana Bones", genero: "Feminino", casa: "Lufa-Lufa", sangue: "Mestiço", especie: "Humano", cabelo: "Ruivo", ano: 2001 },

  // ==========================================
  // ⚡ OUTRAS CASAS / SEM CASA / CRIATURAS
  // ==========================================
  { id: "dobby", nome: "Dobby", genero: "Masculino", casa: "Nenhuma", sangue: "Desconhecido", especie: "Elfo Doméstico", cabelo: "Nenhum", ano: 2002 },
  { id: "fleur-delacour", nome: "Fleur Delacour", genero: "Feminino", casa: "Beauxbatons", sangue: "Mestiço", especie: "Meio-Veela", cabelo: "Loiro", ano: 2005 },
  { id: "vitor-krum", nome: "Vítor Krum", genero: "Masculino", casa: "Durmstrang", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2005 },
  { id: "valter-dursley", nome: "Válter Dursley", genero: "Masculino", casa: "Nenhuma", sangue: "Trouxa", especie: "Humano", cabelo: "Castanho", ano: 2001 },
  { id: "petunia-dursley", nome: "Petúnia Dursley", genero: "Feminino", casa: "Nenhuma", sangue: "Trouxa", especie: "Humano", cabelo: "Castanho", ano: 2001 },
  { id: "duda-dursley", nome: "Duda Dursley", genero: "Masculino", casa: "Nenhuma", sangue: "Trouxa", especie: "Humano", cabelo: "Loiro", ano: 2001 },
  { id: "argus-filch", nome: "Argo Filch", genero: "Masculino", casa: "Nenhuma", sangue: "Aborto", especie: "Humano", cabelo: "Grisalho", ano: 2001 },
  { id: "alastor-moody", nome: "Alastor Moody", genero: "Masculino", casa: "Nenhuma", sangue: "Puro-sangue", especie: "Humano", cabelo: "Castanho", ano: 2005 },
  { id: "cornelio-fudge", nome: "Cornélio Fudge", genero: "Masculino", casa: "Nenhuma", sangue: "Puro-sangue", especie: "Humano", cabelo: "Grisalho", ano: 2002 },
  { id: "kingsley-shacklebolt", nome: "Kingsley Shacklebolt", genero: "Masculino", casa: "Nenhuma", sangue: "Puro-sangue", especie: "Humano", cabelo: "Nenhum", ano: 2007 },
  { id: "olimpia-maxime", nome: "Olímpia Maxime", genero: "Feminino", casa: "Beauxbatons", sangue: "Mestiço", especie: "Meio-Gigante", cabelo: "Castanho", ano: 2005 },
  { id: "igor-karkaroff", nome: "Igor Karkaroff", genero: "Masculino", casa: "Durmstrang", sangue: "Puro-sangue", especie: "Humano", cabelo: "Preto", ano: 2005 },
  { id: "fenrir-greyback", nome: "Fenrir Greyback", genero: "Masculino", casa: "Nenhuma", sangue: "Desconhecido", especie: "Lobisomem", cabelo: "Grisalho", ano: 2009 },
  { id: "gellert-grindelwald", nome: "Gellert Grindelwald", genero: "Masculino", casa: "Durmstrang", sangue: "Puro-sangue", especie: "Humano", cabelo: "Branco", ano: 2010 },
  { id: "porpentina-goldstein", nome: "Porpentina Goldstein", genero: "Feminino", casa: "Ilvermorny", sangue: "Mestiço", especie: "Humano", cabelo: "Preto", ano: 2016 },
  { id: "queenie-goldstein", nome: "Queenie Goldstein", genero: "Feminino", casa: "Ilvermorny", sangue: "Mestiço", especie: "Humano", cabelo: "Loiro", ano: 2016 },
  { id: "jacob-kowalski", nome: "Jacob Kowalski", genero: "Masculino", casa: "Nenhuma", sangue: "Trouxa", especie: "Humano", cabelo: "Castanho", ano: 2016 },
  { id: "credence-barebone", nome: "Credence Barebone", genero: "Masculino", casa: "Nenhuma", sangue: "Mestiço", especie: "Humano", cabelo: "Preto", ano: 2016 },
  { id: "grampo", nome: "Grampo", genero: "Masculino", casa: "Nenhuma", sangue: "Desconhecido", especie: "Duende", cabelo: "Branco", ano: 2001 },
  { id: "monstro", nome: "Monstro", genero: "Masculino", casa: "Nenhuma", sangue: "Desconhecido", especie: "Elfo Doméstico", cabelo: "Nenhum", ano: 2007 },
  { id: "firenze", nome: "Firenze", genero: "Masculino", casa: "Nenhuma", sangue: "Desconhecido", especie: "Centauro", cabelo: "Loiro", ano: 2001 },
  { id: "grope", nome: "Grope", genero: "Masculino", casa: "Nenhuma", sangue: "Desconhecido", especie: "Gigante", cabelo: "Castanho", ano: 2007 }
];

// VARIÁVEIS INICIAIS
let personagemDoDia = personagensDb[Math.floor(Math.random() * personagensDb.length)];
let hpDoDia = hpDb[Math.floor(Math.random() * hpDb.length)];

console.log("🤫 Disney:", personagemDoDia.nome, "| HP:", hpDoDia.nome);

let palpitesFeitos = [];
let palpitesFeitosHp = [];

// FUNÇÃO PARA REMOVER ACENTOS
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// SISTEMA DE AUTOCOMPLETE INTELIGENTE
function configurarAutocomplete(inputId, listId, database, arrayMemoria, funcaoPalpite, pastaFotos) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    // Quando digitar algo...
    input.addEventListener("input", function() {
        // Limpa e tira acento do que o usuário digitou
        const valorDigitado = removerAcentos(this.value.toLowerCase());
        list.innerHTML = "";
        
        if (!valorDigitado) {
            list.style.display = "none";
            return;
        }

        // 1. Filtra os resultados ignorando os acentos
        let resultados = database.filter(p => {
            const nomeSemAcento = removerAcentos(p.nome.toLowerCase());
            return nomeSemAcento.includes(valorDigitado) && !arrayMemoria.includes(p.nome);
        });
        
        // 2. Ordena os resultados: quem COMEÇA com a letra vem primeiro
        resultados.sort((a, b) => {
            const nomeA = removerAcentos(a.nome.toLowerCase());
            const nomeB = removerAcentos(b.nome.toLowerCase());
            
            const comecaComA = nomeA.startsWith(valorDigitado);
            const comecaComB = nomeB.startsWith(valorDigitado);
            
            if (comecaComA && !comecaComB) return -1; // A sobe na lista
            if (!comecaComA && comecaComB) return 1;  // B sobe na lista
            
            // Se ambos começam (ou não começam) com a letra, desempata por ordem alfabética normal
            return a.nome.localeCompare(b.nome);
        });

        if (resultados.length > 0) {
            list.style.display = "block";
            resultados.forEach(match => {
                const item = document.createElement("div");
                item.className = "autocomplete-item";
                const ext = match.ext || "png";
                item.innerHTML = `<img src="${pastaFotos}/${match.id}.${ext}" class="autocomplete-img"><span>${match.nome}</span>`;
                
                item.addEventListener("mousedown", function(e) {
                    e.preventDefault();
                    input.value = match.nome;
                    list.style.display = "none";
                    funcaoPalpite(); 
                });
                list.appendChild(item);
            });
        } else {
            list.style.display = "none";
        }
    });

    // Quando apertar Enter...
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault(); 
            const valorDigitado = removerAcentos(this.value.toLowerCase().trim());
            if (valorDigitado === "") return;

            let resultados = database.filter(p => {
                const nomeSemAcento = removerAcentos(p.nome.toLowerCase());
                return nomeSemAcento.includes(valorDigitado) && !arrayMemoria.includes(p.nome);
            });

            if (resultados.length === 0) return; 

            const exato = resultados.find(p => removerAcentos(p.nome.toLowerCase()) === valorDigitado);

            if (!exato) {
                resultados.sort((a, b) => {
                    const nomeA = removerAcentos(a.nome.toLowerCase());
                    const nomeB = removerAcentos(b.nome.toLowerCase());
                    
                    const comecaComA = nomeA.startsWith(valorDigitado);
                    const comecaComB = nomeB.startsWith(valorDigitado);
                    
                    if (comecaComA && !comecaComB) return -1;
                    if (!comecaComA && comecaComB) return 1;
                    
                    return a.nome.localeCompare(b.nome);
                });
            }

            const personagemEscolhido = exato || resultados[0];

            if (personagemEscolhido) {
                input.value = personagemEscolhido.nome; 
                list.style.display = "none"; 
                funcaoPalpite(); 
            }
        }
    });
}

// Ativando os autocompletes para as duas abas
configurarAutocomplete("guessInput", "custom-autocomplete", personagensDb, palpitesFeitos, fazerPalpite, "fotos");
configurarAutocomplete("guessHpInput", "auto-hp", hpDb, palpitesFeitosHp, fazerPalpiteHp, "fotos_hp");

// Fechar lista se clicar fora
document.addEventListener("mousedown", function(e) {
    const list1 = document.getElementById("custom-autocomplete");
    const in1 = document.getElementById("guessInput");
    if (e.target !== in1 && !list1.contains(e.target)) list1.style.display = "none";

    const list2 = document.getElementById("auto-hp");
    const in2 = document.getElementById("guessHpInput");
    if (e.target !== in2 && !list2.contains(e.target)) list2.style.display = "none";
});


// ==========================================
// 4. LÓGICA DE PALPITE - DISNEY
// ==========================================
function fazerPalpite() {
    const inputDisney = document.getElementById("guessInput");
    const nomePalpite = inputDisney.value;
    
    if (palpitesFeitos.includes(nomePalpite)) {
        inputDisney.value = ""; return; 
    }

    const palpiteObj = personagensDb.find(p => p.nome === nomePalpite);
    if (!palpiteObj) return;

    palpitesFeitos.push(palpiteObj.nome);
    const tabelaBody = document.getElementById("guessesBody");
    const tr = document.createElement("tr");
    tr.className = "new-row"; 

    const ext = palpiteObj.ext || "png";
    const imgTd = document.createElement("td");
    imgTd.innerHTML = `<img src="fotos/${palpiteObj.id}.${ext}" class="killer-img">`;
    tr.appendChild(imgTd);

    tr.appendChild(criarCelula(palpiteObj.nome, palpiteObj.nome === personagemDoDia.nome));
    tr.appendChild(criarCelula(palpiteObj.genero, palpiteObj.genero === personagemDoDia.genero));
    tr.appendChild(criarCelula(palpiteObj.filme, palpiteObj.filme === personagemDoDia.filme));
    tr.appendChild(criarCelula(palpiteObj.estudio, palpiteObj.estudio === personagemDoDia.estudio));
    tr.appendChild(criarCelula(palpiteObj.cabelo, palpiteObj.cabelo === personagemDoDia.cabelo));
    
    const cellAno = document.createElement("td");
    if (palpiteObj.lancamento === personagemDoDia.lancamento) {
        cellAno.className = "match"; cellAno.innerText = palpiteObj.lancamento;
    } else {
        cellAno.className = "arrow-cell";
        const isOlder = palpiteObj.lancamento < personagemDoDia.lancamento; 
        cellAno.innerHTML = `<div class="graphic-arrow-container"><div class="graphic-arrow ${isOlder ? 'arrow-up' : 'arrow-down'}"></div><span class="arrow-year">${palpiteObj.lancamento}</span></div>`;
    }
    tr.appendChild(cellAno);

    tr.appendChild(criarCelula(palpiteObj.magia, palpiteObj.magia === personagemDoDia.magia));
    tr.appendChild(criarCelula(palpiteObj.temPar, palpiteObj.temPar === personagemDoDia.temPar));
    tr.appendChild(criarCelula(palpiteObj.local, palpiteObj.local === personagemDoDia.local));

    tabelaBody.insertBefore(tr, tabelaBody.firstChild);
    inputDisney.value = "";

    if (palpiteObj.nome === personagemDoDia.nome) {
        document.getElementById("message").style.display = "flex";
        document.getElementById("winName").innerText = palpiteObj.nome;
        document.getElementById("winImage").src = `fotos/${palpiteObj.id}.${ext}`;
        
        document.getElementById("winAttempts").innerText = `Você acertou em ${palpitesFeitos.length} tentativa(s)!`;
        document.querySelector("#classic-mode .game-controls").style.display = "none";
        
        tocarAudiosVitoria();
        dispararConfetes(); // Chama os confetes
        inputDisney.disabled = true; 
    }
}

// ==========================================
// 5. LÓGICA DE PALPITE - HARRY POTTER
// ==========================================
function fazerPalpiteHp() {
    const inputHp = document.getElementById("guessHpInput");
    const nomePalpite = inputHp.value;
    
    if (palpitesFeitosHp.includes(nomePalpite)) {
        inputHp.value = ""; return; 
    }

    const palpiteObj = hpDb.find(p => p.nome === nomePalpite);
    if (!palpiteObj) return;

    palpitesFeitosHp.push(palpiteObj.nome);
    const tbodyHp = document.getElementById("guessesBodyHp");
    const tr = document.createElement("tr");
    tr.className = "new-row"; 

    const ext = palpiteObj.ext || "png";
    const imgTd = document.createElement("td");
    imgTd.innerHTML = `<img src="fotos_hp/${palpiteObj.id}.${ext}" class="killer-img">`;
    tr.appendChild(imgTd);

    tr.appendChild(criarCelula(palpiteObj.nome, palpiteObj.nome === hpDoDia.nome));
    tr.appendChild(criarCelula(palpiteObj.genero, palpiteObj.genero === hpDoDia.genero));
    tr.appendChild(criarCelula(palpiteObj.casa, palpiteObj.casa === hpDoDia.casa));
    tr.appendChild(criarCelula(palpiteObj.sangue, palpiteObj.sangue === hpDoDia.sangue));
    tr.appendChild(criarCelula(palpiteObj.especie, palpiteObj.especie === hpDoDia.especie));
    tr.appendChild(criarCelula(palpiteObj.cabelo, palpiteObj.cabelo === hpDoDia.cabelo));
    
    const cellAno = document.createElement("td");
    if (palpiteObj.ano === hpDoDia.ano) {
        cellAno.className = "match"; cellAno.innerText = palpiteObj.ano;
    } else {
        cellAno.className = "arrow-cell";
        const isOlder = palpiteObj.ano < hpDoDia.ano; 
        cellAno.innerHTML = `<div class="graphic-arrow-container"><div class="graphic-arrow ${isOlder ? 'arrow-up' : 'arrow-down'}"></div><span class="arrow-year">${palpiteObj.ano}</span></div>`;
    }
    tr.appendChild(cellAno);

    tbodyHp.insertBefore(tr, tbodyHp.firstChild);
    inputHp.value = "";

    if (palpiteObj.nome === hpDoDia.nome) {
        document.getElementById("message-hp").style.display = "flex";
        document.getElementById("winNameHp").innerText = palpiteObj.nome;
        document.getElementById("winImageHp").src = `fotos_hp/${palpiteObj.id}.${ext}`;
        
        document.getElementById("winAttemptsHp").innerText = `Você acertou em ${palpitesFeitosHp.length} tentativa(s)!`;
        document.querySelector("#hp-mode .game-controls").style.display = "none";

        tocarAudiosVitoria();
        dispararConfetes(); // Chama os confetes
        inputHp.disabled = true; 
    }
}

// ==========================================
// 6. FUNÇÕES AUXILIARES (Design, Áudio e Abas)
// ==========================================
function criarCelula(texto, isMatch) {
    const td = document.createElement("td");
    td.innerText = texto;
    td.className = isMatch ? "match" : "no-match";
    return td;
}

function tocarAudiosVitoria() {
    const a1 = document.getElementById('winAudio');
    const a2 = document.getElementById('winAudio2');
    const a3 = document.getElementById('winAudio3');

    if(a1) { a1.currentTime = 0; a1.play(); }
    if(a2) { a2.volume = 0.2; a2.currentTime = 0; a2.play(); }
    if(a3) { a3.volume = 0.3; a3.currentTime = 0; a3.play(); }
}

function tocarEasterEgg() {
    const audio = document.getElementById('easterEggAudio');
    if(audio) { audio.currentTime = 0; audio.play(); }
}

function trocarModo(idModo, btnElement) {
    document.querySelectorAll('.mode-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(idModo).classList.add('active');
    btnElement.classList.add('active');
}

// ==========================================
// 7. ANIMAÇÃO DE CONFETES 🎉
// ==========================================
function dispararConfetes() {
    if (typeof confetti === "function") {
        var duration = 3 * 1000; // Dura 3 segundos
        var end = Date.now() + duration;

        (function frame() {
            // Confetes saindo da esquerda
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#8a2be2', '#2e7d32', '#ffffff'] // Roxo, verde e branco
            });
            // Confetes saindo da direita
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#8a2be2', '#2e7d32', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}

// FUNÇÕES PARA JOGAR NOVAMENTE 
function reiniciarJogo() {
    personagemDoDia = personagensDb[Math.floor(Math.random() * personagensDb.length)];
    console.log("🔄 Novo sorteio Disney:", personagemDoDia.nome);

    palpitesFeitos = [];

    document.getElementById("guessesBody").innerHTML = "";

    document.getElementById("message").style.display = "none";
    document.querySelector("#classic-mode .game-controls").style.display = "flex";

    const inputDisney = document.getElementById("guessInput");
    inputDisney.disabled = false;
    inputDisney.value = "";
    inputDisney.focus(); // Já coloca o cursor lá piscando pra pessoa digitar
}

function reiniciarJogoHp() {
    hpDoDia = hpDb[Math.floor(Math.random() * hpDb.length)];
    console.log("🔄 Novo sorteio HP:", hpDoDia.nome);

    palpitesFeitosHp = [];

    document.getElementById("guessesBodyHp").innerHTML = "";

    document.getElementById("message-hp").style.display = "none";
    document.querySelector("#hp-mode .game-controls").style.display = "flex";

    const inputHp = document.getElementById("guessHpInput");
    inputHp.disabled = false;
    inputHp.value = "";
    inputHp.focus();
}