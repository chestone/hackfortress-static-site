const TOGGLE_CLASS = "toggleNav"

export default {
  toggleNav: () => {
    const headerDiv = document.querySelector('#nav')
    headerDiv.classList.toggle(TOGGLE_CLASS)
  },
  hideNav: () => {
    const headerDiv = document.querySelector('#nav')
    if (headerDiv && headerDiv.classList.contains(TOGGLE_CLASS)) {
      headerDiv.classList.remove(TOGGLE_CLASS)
    }

  }
}