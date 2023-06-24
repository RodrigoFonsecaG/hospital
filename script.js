// Obtém o modal e o elemento de texto do modal
const modal = document.getElementById('modal')
const modalText = document.getElementById('modal-text')
const pistas = document.querySelectorAll('.pista')

pistas.forEach((pista, index) => {
  pista.addEventListener('click', () => {
    const textoPista = obterTextoPista(index)
    modalText.textContent = textoPista

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
      return 'Quanto e 2+2'
    case 1:
      return ''
    case 2:
      return 'Quanto e 1+1?'
    default:
      return ''
  }
}

function obterRespostaPista(index) {
  switch (index) {
    case 0:
      return 4
    case 1:
      return ''
    case 2:
      return 2
    default:
      return ''
  }
}

// Exibir dica
function exibirDicaPista(index) {
  let dica = ''

  switch (index) {
    case 0:
      dica = 'A resposta é igual a 4.'
      break
    case 1:
      dica = 'Não há dica disponível para esta pista.'
      break
    case 2:
      dica = 'A resposta é igual a 2.'
      break
    default:
      dica = 'Pista inválida.'
  }

  alert(dica)
}

// Checando resposta final
const answerForm = document.getElementById('answer_form')
answerForm.addEventListener('submit', handleSubmitForm)

function handleSubmitForm(e) {
  e.preventDefault()
  let userAnswer = document.querySelector('#answer').value

  const currentPistaIndex = parseInt(modal.getAttribute('data-pista-index'))

  // Obtém a resposta correta da pista atual
  const correctAnswer = obterRespostaPista(currentPistaIndex)

  // Compara a resposta do usuário com a resposta correta
  if (userAnswer.trim() === correctAnswer.toString()) {
    alert('Resposta correta!')
  } else {
    alert('Resposta incorreta :(')
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

  if (formValue !== 'teste') {
    alert('Resposta incorreta :)')
  } else {
    window.location.pathname = '/end.html'
  }
}

// SETAS
const arrowRight = document.querySelector('.action-1')
const arrowLeft = document.querySelector('.action-2')
const image = document.querySelector('.image')

const pista1 = document.querySelector('.pista-1')
const pista2 = document.querySelector('.pista-2')
const pista3 = document.querySelector('.pista-3')
const pista4 = document.querySelector('.pista-4')
const pista5 = document.querySelector('.pista-5')
const pista6 = document.querySelector('.pista-6')

arrowRight.addEventListener('click', function () {
  if (image.src.includes('image-1.jpg')) {
    arrowRight.style.display = 'none'
    arrowLeft.style.display = 'block'
    image.src = 'images/image-2.jpg'
    pista1.style.display = 'none'
    pista2.style.display = 'none'
    pista3.style.display = 'none'
    pista4.style.display = 'block'
    pista5.style.display = 'block'
  } else if (image.src.includes('image-3.jpg')) {
    arrowRight.style.display = 'block'
    arrowLeft.style.display = 'block'
    image.src = 'images/image-1.jpg'
    pista1.style.display = 'block'
    pista2.style.display = 'block'
    pista3.style.display = 'block'
    pista6.style.display = 'none'
  }
})

arrowLeft.addEventListener('click', function () {
  if (image.src.includes('image-2.jpg')) {
    arrowRight.style.display = 'block'
    arrowLeft.style.display = 'block'
    image.src = 'images/image-1.jpg'
    pista1.style.display = 'block'
    pista2.style.display = 'block'
    pista3.style.display = 'block'
    pista4.style.display = 'none'
    pista5.style.display = 'none'
  } else if (image.src.includes('image-1.jpg')) {
    arrowRight.style.display = 'block'
    arrowLeft.style.display = 'none'
    image.src = 'images/image-3.jpg'
    pista1.style.display = 'none'
    pista2.style.display = 'none'
    pista3.style.display = 'none'
    pista6.style.display = 'block'
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
