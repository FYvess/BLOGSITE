# FranCoDev Blog Website

A modern, full-stack blog website built with Node.js, Express, and EJS. Features a beautiful UI, modal navigation, animated footer, and interactive user experience.

## Features
- Responsive, clean design with Poppins typography
- Animated half-circle footer with continuous ripple effect
- Modal navigation for sections: Bio, Hobbies, Pets, Portfolio, Merchandise, Contact
- Dynamic modal content with section-specific details
- Name input modal for personalized greetings
- Background music support

## Project Structure
```
BLOGWEBSITE/
├── index.js                # Main Express server
├── package.json            # Project dependencies and scripts
├── public/                 # Static assets
│   ├── audio/              # Background music files
│   ├── image/              # Images and icons
│   ├── js/                 # Client-side JavaScript
│   │   ├── modal.js        # Modal logic and dynamic content
│   │   ├── music.js        # Music controls
│   │   └── ripple.js       # Footer ripple animation
│   └── styles/
│       └── layout.css      # Main stylesheet
├── views/                  # EJS templates
│   ├── index.ejs           # Main page
│   └── partials/
│       ├── header.ejs      # Header partial
│       └── footer.ejs      # Footer partial
└── README.md               # Project documentation
```

## How to Run
1. Install dependencies:
   ```bash
   npm i
   ```
2. Start the server:
   ```bash
   node index.js
   ```
3. Open your browser at [http://localhost:3000](http://localhost:3000)

## Customization
- Edit `views/partials/header.ejs` and `footer.ejs` for branding.
- Update modal content in `public/js/modal.js`.
- Adjust styles in `public/styles/layout.css`.

## License
MIT
