# Biolink Premium 3

A beautiful and responsive biolink page template featuring image slider, social links, and action buttons.

![Preview Image](https://files.catbox.moe/53885e.jpg)

## Features

- 🖼️ Image slider with navigation controls
- 🔗 Customizable action buttons
- 📱 Fully responsive design
- 🌈 Modern UI with smooth animations
- ⚡ Fast loading performance
- 🔧 Easy to configure

## Installation

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/VynaaValerie/Biolink-Premium-3.git
cd Biolink-Premium-3
```

2. Open `index.html` in your browser or use a local server:
```bash
python3 -m http.server 8000
```

### Termux (Android)

1. Install required packages:
```bash
pkg install git python -y
```

2. Clone and run:
```bash
git clone https://github.com/VynaaValerie/Biolink-Premium-3.git
cd Biolink-Premium-3
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Configuration

All configuration is done in `vynaa.js`:

```javascript
const config = {
  profile: {
    name: "I'm Clara",
    bio: "jangan lupa makan biar ada eeknya:v"
  },
  
  slides: [
    "https://i.top4top.io/p_34681xvzu2.jpg",
    "https://h.top4top.io/p_34687ah5d1.jpg"
  ],
  
  buttons: [
    {
      icon: "https://img.icons8.com/color/48/000000/whatsapp--v1.png",
      text: "WhatsApp",
      actionText: "Order",
      link: "https://wa.me"
    },
    // ... more buttons
  ],
  
  socialLinks: [
    { icon: "fab fa-facebook-f", link: "#" },
    // ... more social links
  ]
};
```

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FVynaaValerie%2FBiolink-Premium-3)

1. Click the "Deploy" button above or:
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/VynaaValerie/Biolink-Premium-3)

## Customization

1. **Change images**: Replace the URLs in the `slides` array
2. **Edit profile**: Modify the `name` and `bio` in the config
3. **Update links**: Change the URLs in the `buttons` and `socialLinks` arrays
4. **Styling**: Edit `style
