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
  { id: "sisu", nome: "Sisu", filme: "Raya e o Último Dragão", estudio: "Disney", genero: "Feminino", cabelo: "Azul", lancamento: 2021, magia: "Sim", temPar: "Não", local: "Kumandra" },
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

// 1. SISTEMA DE AUTOCOMPLETE (COM FOTO)
input.addEventListener("input", function() {
    const valorDigitado = this.value.toLowerCase();
    autocompleteList.innerHTML = "";
    
    if (!valorDigitado) {
        autocompleteList.style.display = "none";
        return;
    }

    const resultados = personagensDb.filter(p => 
        p.nome.toLowerCase().includes(valorDigitado) && 
        !palpitesFeitos.includes(p.nome)
    );
    
    if (resultados.length > 0) {
        autocompleteList.style.display = "block";
        resultados.forEach(match => {
            const item = document.createElement("div");
            item.className = "autocomplete-item";
            item.innerHTML = `<img src="fotos/${match.id}.png" class="autocomplete-img"><span>${match.nome}</span>`;
            
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


// 3. LÓGICA DE ADIVINHAÇÃO 
function fazerPalpite() {
    const nomePalpite = input.value;
    
    if (palpitesFeitos.includes(nomePalpite)) {
        input.value = "";
        return; 
    }

    const palpiteObj = personagensDb.find(p => p.nome === nomePalpite);
    
    if (!palpiteObj) {
        alert("Personagem não encontrado na lista!");
        return;
    }

    palpitesFeitos.push(palpiteObj.nome);

    const tr = document.createElement("tr");
    tr.className = "new-row"; 

    // ID
    const imgTd = document.createElement("td");
    imgTd.innerHTML = `<img src="fotos/${palpiteObj.id}.png" class="killer-img">`;
    tr.appendChild(imgTd);

    tr.appendChild(criarCelula(palpiteObj.nome, palpiteObj.nome === personagemDoDia.nome));
    tr.appendChild(criarCelula(palpiteObj.genero, palpiteObj.genero === personagemDoDia.genero));
    tr.appendChild(criarCelula(palpiteObj.filme, palpiteObj.filme === personagemDoDia.filme));
    tr.appendChild(criarCelula(palpiteObj.estudio, palpiteObj.estudio === personagemDoDia.estudio));
    tr.appendChild(criarCelula(palpiteObj.cabelo, palpiteObj.cabelo === personagemDoDia.cabelo));
    
    // Lógica da Seta para o Ano
    const cellAno = document.createElement("td");
    if (palpiteObj.lancamento === personagemDoDia.lancamento) {
        cellAno.className = "match";
        cellAno.innerText = palpiteObj.lancamento;
    } else {
        cellAno.className = "arrow-cell";
        const isOlder = palpiteObj.lancamento < personagemDoDia.lancamento; 
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

    tabelaBody.insertBefore(tr, tabelaBody.firstChild);

    input.value = "";

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