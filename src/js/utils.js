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
