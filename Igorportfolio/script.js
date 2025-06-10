console.log("O que está procurando ein...");

const tituloI = document.getElementById('textoInicial');  
const pagina = document.getElementById('pagina');

function alternarIdioma(lang) {

  if (lang === 'pt') {
    pagina.textContent = "Escolha seu Idioma";
    tituloI.textContent = "Escolha seu idioma:";
  } else if (lang === 'en') {
    pagina.textContent = "Choose your language";
    tituloI.textContent = "Choose your language:";
  }
}

function escolheridioma(lang) {
  localStorage.setItem("idiomaEscolhido", lang);

  const languageButtons = document.getElementById('language-buttons');
  const conteudo = document.getElementById('conteudo');
  const titulo = document.getElementById('title');
  const subtitulo = document.getElementById('subtitle');

  languageButtons.style.display = 'none';
  tituloI.style.display = 'none';

  if (lang === 'pt') {
    pagina.textContent = "Bem-vindo!";
    titulo.textContent = 'Bem-vindo ao meu portfólio!';
    subtitulo.textContent = 'Espero que você aproveite sua visita.';
  } else if (lang === 'en') {
    pagina.textContent = "Welcome!";
    titulo.textContent = 'Welcome to my portfolio!';
    subtitulo.textContent = 'I hope you enjoy your visit.';
  }

  conteudo.style.display = 'flex';
  conteudo.classList.remove('fade-out');
  conteudo.classList.add('fade-in');

  setTimeout(() => {
    conteudo.classList.remove('fade-in');
    conteudo.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = 'inicio.html';
    }, 1500); 
  }, 2000); 
}

document.addEventListener("DOMContentLoaded", () => {
  const idioma = localStorage.getItem("idiomaEscolhido");
  const menuInicio = document.getElementById("menu-inicio");
  const menuProjetos = document.getElementById("menu-projetos");
  const menuExtra = document.getElementById("menu-extra");
  const carac = document.getElementById("Carac");
  const biografia = document.getElementById("biografia");
  const projetoTitulo = document.getElementById("projeto-titulo");
  const projetoDescricao = document.getElementById("projeto-descricao");

  if (menuInicio && menuProjetos && menuExtra) {
    if (idioma === "pt") {
      menuInicio.textContent = "Início.";
      menuProjetos.textContent = "Projetos.";
      menuExtra.textContent = "Extra.";
      if (carac) carac.textContent = "__Cientista da computação ____________________";
      if (biografia) biografia.textContent = "Igor Gabriel, nascido em 2007, é apaixonado por computadores, jogos e desenhar. Desde pequeno, explora o mundo digital com curiosidade e criatividade, unindo programação e arte em projetos pessoais. Seu interesse por tecnologia e design o motiva a aprender sempre mais, sonhando em transformar essas paixões em carreiras no futuro.";
      if (projetoTitulo && projetoDescricao) {
        projetoTitulo.textContent = "Radar Marítimo ";
        projetoDescricao.textContent = "Projeto desenvolvido com placas Arduino e programado inteiramente em C++, concebido como parte das atividades do primeiro período de Ciências da computação.";
      }
    } else if (idioma === "en") {
      menuInicio.textContent = "Home.";
      menuProjetos.textContent = "Projects.";
      menuExtra.textContent = "Extra.";
      if (carac) carac.textContent = "__Computer Scientist_________________________";
      if (biografia) biografia.textContent = "Igor Gabriel, born in 2007, is passionate about computers, games, and drawing. Since a young age, he’s explored the digital world with curiosity and creativity, combining coding and art in personal projects. His love for technology and design drives him to keep learning, with hopes of turning his passions into a future career.";
      if (projetoTitulo && projetoDescricao) {
        projetoTitulo.textContent = "Marine Radar";
        projetoDescricao.textContent = "Project developed with Arduino boards and programmed in C++, conceived as part of the activities of the first period of Computer Science.";
      }
    }
  }
});
