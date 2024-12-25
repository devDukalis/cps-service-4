import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

let swipers = []

function isMobile() {
  return window.innerWidth < 768
}

function initSwipers() {
  // destroy all existing swiper instances
  swipers.forEach((swiper) => swiper.destroy())
  swipers = [] // clear array

  if (isMobile()) {
    // initialize all new swipers
    const swiperElements = document.querySelectorAll('.swiper')
    swiperElements.forEach((element) => {
      const swiper = new Swiper(element, {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: element.querySelector('.swiper-pagination'),
          clickable: true
        },
        navigation: {
          nextEl: element.querySelector('.swiper-button-next'),
          prevEl: element.querySelector('.swiper-button-prev')
        },
        scrollbar: {
          el: element.querySelector('.swiper-scrollbar')
        }
      })
      swipers.push(swiper) // add new swiper to array
    })
  }
}

// initialize swipers on page load
initSwipers()

// add event listener for window resize
window.addEventListener('resize', initSwipers)

/* TOGGLE SWIPER PAGINATION VISIBILITY */
function toggleSwiperPagination() {
  const paginations = document.querySelectorAll('.swiper-pagination')

  paginations.forEach((pagination) => {
    if (window.innerWidth >= 768) {
      pagination.style.display = 'none' // hide pagination
    } else {
      pagination.style.display = '' // display pagination
    }
  })
}

// initial check
toggleSwiperPagination()

// add event listener for window resize
window.addEventListener('resize', toggleSwiperPagination)

/* DISPLAY SWIPER SLIDES TOGGLE BUTTON */
function toggleSwiperSlidesBtn() {
  const toggleSwiperSlidesBtnBlock = document.getElementById(
    'toggle-slides-btn-block'
  )
  const toggleSwiperDeviceSlidesBtnBlock = document.getElementById(
    'toggle-device-slides-btn-block'
  )

  if (window.innerWidth >= 768) {
    toggleSwiperSlidesBtnBlock.classList.remove('visually-hidden')
    toggleSwiperDeviceSlidesBtnBlock.classList.remove('visually-hidden')
  } else {
    toggleSwiperSlidesBtnBlock.classList.add('visually-hidden')
    toggleSwiperDeviceSlidesBtnBlock.classList.add('visually-hidden')
  }
}

// initial check
toggleSwiperSlidesBtn()

// add event listener for window resize
window.addEventListener('resize', toggleSwiperSlidesBtn)

/* TOGGLE SWIPER SLIDES OF BRANDS */
document.addEventListener('DOMContentLoaded', () => {
  const slidesButton = document.getElementById('toggle-btn-slides')
  const slides = document.querySelectorAll('.brands-section__list-item')
  let areSlidesVisible = false

  const getSlidesToShow = (screenWidth) => {
    if (screenWidth < 768) return slides.length // show all slides
    if (screenWidth < 1120) return 6 // show 6 slides
    return 8 // show 8 slides
  }

  const updateSlidesVisibility = () => {
    const screenWidth = window.innerWidth
    const slidesToShow = getSlidesToShow(screenWidth)

    slides.forEach((slide, index) => {
      slide.style.display =
        screenWidth < 768 || index < slidesToShow || areSlidesVisible
          ? 'flex'
          : 'none'
    })

    slidesButton.textContent = areSlidesVisible ? 'Скрыть' : 'Показать все'
  }

  const toggleSlidesVisibility = () => {
    areSlidesVisible = !areSlidesVisible
    updateSlidesVisibility()
  }

  slidesButton.addEventListener('click', toggleSlidesVisibility)
  window.addEventListener('resize', updateSlidesVisibility)

  // initialize slides visibility on page load
  updateSlidesVisibility()
})

/* TOGGLE SWIPER SLIDES OF DEVICE TYPES */
document.addEventListener('DOMContentLoaded', function () {
  const deviceSlidesBtn = document.getElementById('toggle-btn-device-slides')
  const deviceSlides = document.querySelectorAll('.device-types__list-item')
  let slidesVisible = false

  function getSlidesToShow(screenWidth) {
    if (screenWidth < 768) return deviceSlides.length // Show all slides
    if (screenWidth >= 1665) return 5
    if (screenWidth >= 1400) return 4
    if (screenWidth >= 1120) return 3
    if (screenWidth >= 1000) return 4
    if (screenWidth >= 768) return 3
    return 0 // Fallback
  }

  function updateDeviceSlidesVisibility() {
    const screenWidth = window.innerWidth
    const slidesToShow = getSlidesToShow(screenWidth)

    deviceSlides.forEach((deviceSlide, index) => {
      deviceSlide.style.display =
        screenWidth < 768 || index < slidesToShow || slidesVisible
          ? 'flex'
          : 'none'
    })

    // Update button text based on visibility state
    deviceSlidesBtn.textContent = slidesVisible ? 'Скрыть' : 'Показать все'
  }

  function toggleDeviceSwiperSlides() {
    slidesVisible = !slidesVisible
    updateDeviceSlidesVisibility()
  }

  deviceSlidesBtn.addEventListener('click', toggleDeviceSwiperSlides)
  window.addEventListener('resize', updateDeviceSlidesVisibility)

  // Initialize slides visibility on page load
  updateDeviceSlidesVisibility()
})
