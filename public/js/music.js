document.addEventListener("DOMContentLoaded", () => {
  const musicToggle = document.getElementById("musicToggle")
  const backgroundMusic = document.getElementById("backgroundMusic")
  let isPlaying = false

  // Set initial volume
  backgroundMusic.volume = 0.3

  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      backgroundMusic.pause()
      musicToggle.classList.remove("playing")
      musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>'
      musicToggle.title = "Play Music"
    } else {
      backgroundMusic.play().catch((error) => {
        console.log("Audio play failed:", error)
        console.log("Make sure to add your music file at: /public/audio/background-music.mp3")
      })
      musicToggle.classList.add("playing")
      musicToggle.innerHTML = '<i class="fas fa-music"></i>'
      musicToggle.title = "Pause Music"
    }
    isPlaying = !isPlaying
  })

  // Handle audio events
  backgroundMusic.addEventListener("ended", () => {
    musicToggle.classList.remove("playing")
    musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>'
    musicToggle.title = "Play Music"
    isPlaying = false
  })

  backgroundMusic.addEventListener("error", () => {
    console.log("Audio loading error - Make sure to add your music file at: /public/audio/background-music.mp3")
    musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>'
    musicToggle.title = "No Music File Found"
  })
})
