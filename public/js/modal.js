// Name Modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const nameModal = document.getElementById("nameModal")
  const nameModalBtn = document.getElementById("nameModalBtn")
  const closeNameModal = document.getElementById("closeNameModal")

  // Open name modal if button exists
  if (nameModalBtn) {
    nameModalBtn.addEventListener("click", () => {
      nameModal.style.display = "block"
      document.body.style.overflow = "hidden"
    })
  }

  // Close name modal
  if (closeNameModal) {
    closeNameModal.addEventListener("click", () => {
      nameModal.style.display = "none"
      document.body.style.overflow = "hidden"
    })
  }

  // Close name modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === nameModal) {
      nameModal.style.display = "none"
      document.body.style.overflow = "hidden"
    }
  })

  // Close name modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nameModal && nameModal.style.display === "block") {
      nameModal.style.display = "none"
      document.body.style.overflow = "hidden"
    }
  })

  // Modal functionality
  const modal = document.getElementById("modal")
  const modalTitle = document.getElementById("modal-title")
  const modalBody = document.getElementById("modal-body")
  const closeBtn = document.getElementById("closeModal")
  const navButtons = document.querySelectorAll(".nav-button")

  // Content for each section
  const sectionContent = {
    bio: {
      title: "Bio",
      content: `
        <div class="bio-content">
          <div class="bio-avatar">F</div>
          <h3>Franco Developer</h3>
          <p>Passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and sharing knowledge through my blog.</p>
          <p>Currently working on various projects involving React, Node.js, and cloud technologies. Always eager to learn new technologies and collaborate on exciting projects.</p>
        </div>
      `,
    },
    hobbies: {
      title: "Hobbies",
      content: `
        <h3>My Interests & Hobbies</h3>
        <div class="project-item">
          <div class="project-image">
            <div style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">🎮</div>
          </div>
          <div class="project-details">
            <h4 class="project-title">Gaming</h4>
            <p class="project-description">I enjoy playing various video games, from strategy games to indie titles. Gaming helps me relax and often inspires creative solutions for coding problems.</p>
          </div>
        </div>
        <div class="project-item">
          <div class="project-image">
            <div style="background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">📚</div>
          </div>
          <div class="project-details">
            <h4 class="project-title">Reading</h4>
            <p class="project-description">Love reading tech blogs, programming books, and science fiction novels. Always learning about new technologies and methodologies.</p>
          </div>
        </div>
      `,
    },
    pets: {
      title: "Pets",
      content: `
        <h3>My Furry Friends</h3>
        <div class="project-item">
          <div class="project-image">
            <div style="background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">🐕</div>
          </div>
          <div class="project-details">
            <h4 class="project-title">Max - Golden Retriever</h4>
            <p class="project-description">My loyal coding companion who sits by my desk during long programming sessions. Max loves walks in the park and playing fetch.</p>
          </div>
        </div>
        <div class="project-item">
          <div class="project-image">
            <div style="background: linear-gradient(45deg, #fa709a 0%, #fee140 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">🐱</div>
          </div>
          <div class="project-details">
            <h4 class="project-title">Luna - Persian Cat</h4>
            <p class="project-description">A graceful and independent cat who loves to sit on my keyboard while I'm trying to code. She's the perfect debugging partner!</p>
          </div>
        </div>
      `,
    },
    portfolio: {
      title: "Portfolio",
      content: `
        <h3>Project List</h3>
        <div class="project-item">
          <div class="project-image">
            <div style="background: #1a1a1a; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #00ff00; font-family: monospace; font-size: 0.8rem; padding: 10px;">
              <div>
                <div>$ npm start</div>
                <div>Server running...</div>
                <div>✓ Connected</div>
              </div>
            </div>
          </div>
          <div class="project-details">
            <h4 class="project-title">CodeNotes</h4>
            <p class="project-description">CodeNotes is platform for sharing and discovering snippets. Easily create, format, and organize your snippets for various purposes.</p>
            <div class="tech-tags">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Vite</span>
              <span class="tech-tag">shadCN</span>
              <span class="tech-tag">TanStack Query</span>
              <span class="tech-tag">React Router</span>
              <span class="tech-tag">TailwindCSS</span>
              <span class="tech-tag">Flask</span>
              <span class="tech-tag">SQLite</span>
              <span class="tech-tag">Waitress</span>
              <span class="tech-tag">Firebase Authentication</span>
              <span class="tech-tag">Nginx</span>
              <span class="tech-tag">Docker</span>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="project-image">
            <div style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">📚</div>
          </div>
          <div class="project-details">
            <h4 class="project-title">ExploreBooks</h4>
            <p class="project-description">A feature-rich app for book enthusiasts to add, edit, and view books with PDF attachments. Built to keep full stack skills sharp and explore new technologies.</p>
            <div class="tech-tags">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">Express</span>
            </div>
          </div>
        </div>
      `,
    },
    merchandise: {
      title: "Merchandise",
      content: `
        <h3>FranCoDev Merchandise</h3>
        <div class="project-item">
          <div class="project-image">
            <div style="background: linear-gradient(45deg, #8a5cf5 0%, #667eea 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">👕</div>
          </div>
          <div class="project-details">
            <h4 class="project-title">Developer T-Shirts</h4>
            <p class="project-description">Comfortable cotton t-shirts with coding-themed designs and the FranCoDev logo. Perfect for hackathons and casual coding sessions.</p>
            <div class="tech-tags">
              <span class="tech-tag">100% Cotton</span>
              <span class="tech-tag">Multiple Sizes</span>
              <span class="tech-tag">Various Colors</span>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="project-image">
            <div style="background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">☕</div>
          </div>
          <div class="project-details">
            <h4 class="project-title">Code & Coffee Mugs</h4>
            <p class="project-description">High-quality ceramic mugs perfect for your morning coffee while coding. Features witty programming quotes and the FranCoDev branding.</p>
            <div class="tech-tags">
              <span class="tech-tag">Ceramic</span>
              <span class="tech-tag">Dishwasher Safe</span>
              <span class="tech-tag">11oz Capacity</span>
            </div>
          </div>
        </div>
      `,
    },
    contact: {
      title: "Contact Us",
      content: `
        <h3>Get In Touch</h3>
        <div style="text-align: center; padding: 20px;">
          <p style="font-size: 1.2rem; margin-bottom: 30px;">I'd love to hear from you! Whether you have a project idea, want to collaborate, or just want to say hello.</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
            <div style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
              <h4 style="color: #8a5cf5; margin-bottom: 10px;">📧 Email</h4>
              <p>franco@francodev.com</p>
            </div>
            <div style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
              <h4 style="color: #8a5cf5; margin-bottom: 10px;">💼 LinkedIn</h4>
              <p>linkedin.com/in/francodev</p>
            </div>
            <div style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
              <h4 style="color: #8a5cf5; margin-bottom: 10px;">🐙 GitHub</h4>
              <p>github.com/francodev</p>
            </div>
            <div style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
              <h4 style="color: #8a5cf5; margin-bottom: 10px;">🐦 Twitter</h4>
              <p>@francodev</p>
            </div>
          </div>
        </div>
      `,
    },
  }

  // Open modal function
  function openModal(section) {
    const content = sectionContent[section]
    if (content) {
      modalTitle.textContent = content.title
      modalBody.innerHTML = content.content
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    }
  }

  // Close modal function
  function closeModal() {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }

  // Event listeners
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const section = this.getAttribute("data-section")
      openModal(section)
    })
  })

  closeBtn.addEventListener("click", closeModal)

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal()
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal()
    }
  })
})
