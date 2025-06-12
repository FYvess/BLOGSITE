// Continuous ripple effect for footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer")

  function createContinuousRipple() {
    // Remove old ripples
    const oldRipples = footer.querySelectorAll(".continuous-ripple")
    oldRipples.forEach((ripple) => {
      if (ripple.style.animationDelay && Number.parseFloat(ripple.style.animationDelay) < -2.5) {
        ripple.remove()
      }
    })

    const ripple = document.createElement("span")
    const rect = footer.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 0.5

    const x = (rect.width - size) / 2
    const y = (rect.height - size) / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("continuous-ripple")

    footer.appendChild(ripple)

    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.remove()
      }
    }, 3000)
  }

  // Create ripples continuously
  setInterval(createContinuousRipple, 800)

  // Create initial ripple
  createContinuousRipple()
})
