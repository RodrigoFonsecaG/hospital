// Obtém o modal e o elemento de texto do modal
const modal = document.getElementById('modal')
const modalText = document.getElementById('modal-text')
const pistas = document.querySelectorAll('.pista')

pistas.forEach((pista, index) => {
  pista.addEventListener('click', () => {
    const textoPista = obterTextoPista(index)
    modalText.innerHTML = textoPista

    // Exibe o modal
    modal.style.display = 'block'

    modal.setAttribute('data-pista-index', index)
  })
})

// Adiciona o evento de clique ao botão de dica fora do loop forEach
const tipButton = document.querySelector('.tip')
tipButton.addEventListener('click', (e) => {
  e.preventDefault()

  // Obtém o índice da pista atual do atributo data-pista-index do modal
  const currentPistaIndex = parseInt(modal.getAttribute('data-pista-index'))

  // Exibe a dica apenas para a pista atual
  exibirDicaPista(currentPistaIndex)
})

// Fecha o modal quando o usuário clica fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})

// Função para obter o texto da pista com base no índice
function obterTextoPista(index) {
  switch (index) {
    case 0:
      return 'Um interno do Hospital foi morto com um bisturi por outro paciente que sofria de esquizofrenia, dentro da unidade psiquiátrica na terça-feira, duas mulheres foram vistas saindo da unidade, Aline e Liane. Uma mensagem foi deixada em um tablet<br><br>const silabas = ["li", "a", "ne"]<br><br>console.log("A assasina e:", silabas[1] + silabas[0] + silabas[2])<br><br>Quem matou o medico?'
    case 1:
      return 'No dia 15 de fevereiro de 2002, foi encontrada um corpo no porão do hospital. Era o corpo de uma mulher, de 48 anos, que trabalhava como faxineira. A suspeita era que o crime havia ocorrido ha muito tempo mas o dia exato nunca foi descoberto. Apenas um codigo foi deixado no computador <br><br> const dia = new Date(Date.now()); <br><br>dia.setDate("12"); <br><br>dia.setMonth("1");<br><br>dia.setYear("2002");<br><br>console.log(dia) <br><br> Qual foi o dia do crime? (Formato: XX/XX/XXXX)'
    case 2:
      return 'Um químico, Dr. Alexander Müller, foi encontrado morto em seu laboratório dentro do hospital. Aparentemente, seu conhecimento e descobertas na área da química medicinal chamaram a atenção de alguns pacientes perigosos.<br><br>Haviam 5 suspeitos: felice, joshua, nicolas, nathan e peter. A polícia encontrou uma nota escrita pelo químico.<br><br>A nota dizia: "26-3-58"<br><br>Quem foi o assasino?'
    case 3:
      return 'const numero1 = "30"<br><br>const numero2 = "77"<br><br>console.log("Resultado: ", numero1 + numero2)'
    case 4:
      return 'Ao desembarcar em uma ilha deserta, ao explorar a paisagem desolada, deparo-me com um antigo acampamento. Uma fogueira apagada repousa no centro, rodeada por destroços e sinais de atividade humana. Curioso, aproximo-me cautelosamente e me deparo com um bilhete empoeirado, cujas palavras mal se sustentam, mas ainda são legíveis: "Cansado e fadigado, descanse um instante e erga a lanterna." Meu coração acelera de antecipação ao lembrar da lanterna que sempre carrego comigo. Sigo as instruções enigmáticas e ergo-a para o alto. Para minha surpresa, as letras gravadas na rocha próxima ganham vida, revelando uma mensagem misteriosa. <br>"3M0D"<br> Depois de ler a mensagem, você tenta entender a palavra. Qual a palavra que está grafada na pedra?'
    case 5:
      return 'O corpo de uma mulher foi descoberto sem vida em uma das salas de cirurgia, com o rosto completamente deformado, deixando todos os funcionários do hospital em estado de choque. A arma do crime nunca foi encontrada mas um nota foi deixada ao lado do corpo <br><br><br> Ponha os dedos nos meus olhos que eu abrirei as minhas potentes mandíbulas. E vou devorar tudo o que vier pela frente: roupas, penas, papéis. <br><br><br> Qual foi a arma do crime?'
    case 6:
      return 'Eu nunca fui, mas sempre serei. Ninguém nunca me viu, e nunca verão. Ainda assim, sou a esperança de todos. Quem sou eu?'
    default:
      return ''
  }
}

function obterRespostaPista(index) {
  switch (index) {
    case 0:
      return 'aline'
    case 1:
      return '12/01/2002'
    case 2:
      return 'felice'
    case 3:
      return '3077'
    case 4:
      return 'medo'
    case 5:
      return 'tesoura'
    case 6:
      return 'amanha' || 'amanhã'
    default:
      return ''
  }
}

// Exibir dica
function exibirDicaPista(index) {
  let dica = ''

  switch (index) {
    case 0:
      dica =
        'silabas[1]: "posicao 1 de silabas"  silabas[0]: "posicao 0 de silabas"  silabas[2]: "posicao 2 de silabas"'
      break
    case 1:
      dica = 'setDate represena o dia.'
      break
    case 2:
      dica = 'Não há dica disponível para esta pista.'
      break
    case 3:
      dica = 'Observe o tipo da variavel.'
      break
    case 4:
      dica = 'Não há dica disponível para esta pista.'
      break
    case 5:
      dica = 'Talvez voce tenha uma perto de voce?.'
      break
    case 6:
      dica = 'Depois do hoje.'
      break
    default:
      dica = 'Pista inválida.'
  }

  alert(dica)
}

// Exibir dica
function exibirRespostaCorreta(index) {
  let resposta = ''

  switch (index) {
    case 0:
      resposta = '1-E'
      break
    case 1:
      resposta = '7-?'
      break
    case 2:
      resposta = '6-E'
      break
    case 3:
      resposta = '5-P'
      break
    case 4:
      resposta = '2-S'
      break
    case 5:
      resposta = '8-?'
      break
    case 6:
      resposta = '3-C'
      break
    default:
      resposta = 'Resposta inválida.'
  }

  alert('Resposta correta: ' + resposta)
}

// Checando resposta das pistas
const answerForm = document.getElementById('answer_form')
answerForm.addEventListener('submit', handleSubmitForm)

const life = document.querySelector('.life')

function handleSubmitForm(e) {
  e.preventDefault()
  let userAnswer = document.querySelector('#answer').value

  const currentPistaIndex = parseInt(modal.getAttribute('data-pista-index'))

  // Obtém a resposta correta da pista atual
  const correctAnswer = obterRespostaPista(currentPistaIndex)

  // Compara a resposta do usuário com a resposta correta
  if (userAnswer.trim().toLowerCase() === correctAnswer.toString()) {
    exibirRespostaCorreta(currentPistaIndex)
  } else {
    alert('Resposta incorreta :(')

    changeLife()
  }
}

// CONTADOR
// Obtém o elemento <span> do tempo
const overlayTime = document.getElementById('overlay-top-right-text')

// Função para formatar o tempo no formato hh:mm
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const formattedTime = `${minutes
    .toString()
    .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  return formattedTime
}

// Função para atualizar o contador a cada segundo
function updateTimer() {
  let seconds = 0

  setInterval(() => {
    seconds++
    const formattedTime = formatTime(seconds)
    overlayTime.textContent = formattedTime
  }, 1000)
}

// Chama a função para iniciar o contador
updateTimer()

// Checando resposta final
const finalAnswerForm = document.getElementById('final_answer_form')
finalAnswerForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  let formValue = document.querySelector('#final_answer').value

  if (formValue !== 'escape??') {
    alert('Resposta incorreta :(')
    changeLife()
  } else {
    window.location.pathname = '/end.html'
  }
}

function changeLife() {
  // Obtém a largura do elemento em pixels
  let larguraPixels = life.offsetWidth

  // Calcula a largura em porcentagem
  let larguraPorcentagem = (larguraPixels / life.parentNode.offsetWidth) * 100

  if (larguraPorcentagem < 10) {
    window.location.pathname = '/dead.html'
  }

  life.style.width = larguraPorcentagem - 10 + '%'
}

// SETAS
const arrowRight = document.querySelector('.action-1')
const arrowLeft = document.querySelector('.action-2')
const image = document.querySelector('.image')

const letra = document.querySelector('.letter-a')
const pista1 = document.querySelector('.pista-1')
const pista2 = document.querySelector('.pista-2')
const pista3 = document.querySelector('.pista-3')
const pista4 = document.querySelector('.pista-4')
const pista5 = document.querySelector('.pista-5')
const pista6 = document.querySelector('.pista-6')
const pista7 = document.querySelector('.pista-7')

arrowRight.addEventListener('click', function () {
  if (image.src.includes('image-1.jpg')) {
    arrowRight.style.display = 'none'
    arrowLeft.style.display = 'block'
    image.src = 'images/image-2.jpg'
    letra.style.display = 'none'
    pista1.style.display = 'none'
    pista2.style.display = 'none'
    pista3.style.display = 'none'
    pista4.style.display = 'block'
    pista5.style.display = 'block'
  } else if (image.src.includes('image-3.jpg')) {
    arrowRight.style.display = 'block'
    arrowLeft.style.display = 'block'
    image.src = 'images/image-1.jpg'
    letra.style.display = 'block'
    pista1.style.display = 'block'
    pista2.style.display = 'block'
    pista3.style.display = 'block'
    pista6.style.display = 'none'
    pista7.style.display = 'none'
  }
})

arrowLeft.addEventListener('click', function () {
  if (image.src.includes('image-2.jpg')) {
    arrowRight.style.display = 'block'
    arrowLeft.style.display = 'block'
    image.src = 'images/image-1.jpg'
    letra.style.display = 'block'
    pista1.style.display = 'block'
    pista2.style.display = 'block'
    pista3.style.display = 'block'
    pista4.style.display = 'none'
    pista5.style.display = 'none'
  } else if (image.src.includes('image-1.jpg')) {
    arrowRight.style.display = 'block'
    arrowLeft.style.display = 'none'
    image.src = 'images/image-3.jpg'
    letra.style.display = 'none'
    pista1.style.display = 'none'
    pista2.style.display = 'none'
    pista3.style.display = 'none'
    pista6.style.display = 'block'
    pista7.style.display = 'block'
  }
})

// LANTERNA

function update(e) {
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)

const overlay = document.querySelector('#overlay')
const base = document.querySelector('#base')

base.addEventHandler('loadedmetadata', function (e) {
  overlay.style.width = `${base.offsetWidth}px`
  overlay.style.height = `${base.offsetHeight}px`
})
