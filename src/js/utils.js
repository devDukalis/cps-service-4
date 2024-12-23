/* TOGGLE COMPANY DESCRIPTION TEXT */
document.getElementById('read-next').addEventListener('click', function () {
  let hiddenText = document.getElementById('hidden-text')

  if (hiddenText.style.display === 'none') {
    hiddenText.style.display = 'block'
    this.textContent = 'Скрыть'
  } else {
    hiddenText.style.display = 'none'
    this.textContent = 'Читать далее'
  }
})

/* TOGGLE HEADER */
let header = document.getElementById('header')

function toggleHeaderVisibility() {
  if (window.innerWidth >= 1120) {
    header.classList.add('visually-hidden')
  } else {
    header.classList.remove('visually-hidden')
  }
}

toggleHeaderVisibility()

window.addEventListener('resize', toggleHeaderVisibility)

/* TOGGLE TITLE RIGHT CONTAINER */
let titleRightContainer = document.getElementById('title-right-container')

function showTitleRightContainer() {
  if (window.innerWidth >= 1120) {
    titleRightContainer.classList.remove('visually-hidden')
  } else {
    titleRightContainer.classList.add('visually-hidden')
  }
}

showTitleRightContainer()

window.addEventListener('resize', showTitleRightContainer)

/* SELECT / DESELECT SERVICES */
document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.nav-services__list-item')

  listItems.forEach((item) => {
    item.addEventListener('click', function () {
      listItems.forEach((li) => li.classList.remove('active'))
      this.classList.add('active')
    })
  })
})

/* TOGGLE BURGER MENU */
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burger')
  const burgerBtnOpen = document.getElementById('open-burger-menu-btn')
  const burgerBtnClose = document.getElementById('close-burger-menu-btn')
  const overlay = document.getElementById('overlay')

  function openMenu() {
    const width = window.innerWidth
    if (width >= 1120) {
      burgerMenu.style.transform = 'translateX(0)'
      overlay.classList.add('active')
    } else {
      burgerMenu.style.transform = 'translateX(-320px)'
      setTimeout(() => {
        burgerMenu.style.transform = 'translateX(0)'
      }, 10)
      overlay.classList.add('active')
    }
    burgerMenu.classList.add('active')
  }

  function closeMenu() {
    burgerMenu.style.transform = 'translateX(-320px)'
    burgerMenu.classList.remove('active')
    overlay.classList.remove('active')
  }

  burgerBtnOpen.addEventListener('click', openMenu)

  burgerBtnClose.addEventListener('click', closeMenu)

  overlay.addEventListener('click', closeMenu)

  window.addEventListener('resize', function () {
    const width = window.innerWidth

    if (width >= 1120) {
      if (burgerMenu.classList.contains('active')) {
        closeMenu()
      }
      burgerMenu.style.transform = 'translateX(0px)'
      overlay.classList.remove('active')
    } else {
      if (!burgerMenu.classList.contains('active')) {
        burgerMenu.style.transform = 'translateX(-320px)'
      }
    }
  })
})

/* TOGGLE IMAGE ROTATION */
function toggleImageRotation() {
  const image = document.getElementById('toggle-list-image')
  const img = document.getElementById('read-next-image')

  // Проверяем текущее состояние кнопки и меняем стиль изображения
  if (
    image.style.transform === 'rotate(180deg)' ||
    img.style.transform === 'rotate(180deg)'
  ) {
    image.style.transform = 'rotate(0deg)' // Возвращаем в исходное состояние
    img.style.transform = 'rotate(0deg)'
  } else {
    image.style.transform = 'rotate(180deg)' // Поворачиваем на 180 градусов
    img.style.transform = 'rotate(180deg)'
  }
}

document
  .getElementById('toggle-btn-slides')
  .addEventListener('click', toggleImageRotation)

document
  .getElementById('read-next')
  .addEventListener('click', toggleImageRotation)
