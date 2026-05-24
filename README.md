# Zuyan Zhao Personal Homepage

Static personal homepage for `https://zzy4566.github.io/`.

## Structure

- `index.html` contains the homepage content.
- `assets/styles.css` contains all styling.
- `assets/i18n.js` powers the Chinese / English language switcher. The default language is Chinese.

## Publish

This repository is intended for GitHub Pages. After reviewing the content and assets:

```powershell
git init
git branch -M main
git add .
git commit -m "Create personal homepage"
git remote add origin https://github.com/zzy4566/zzy4566.github.io.git
git push -u origin main
```

If the remote already exists locally, use:

```powershell
git remote set-url origin https://github.com/zzy4566/zzy4566.github.io.git
git push -u origin main
```

## Assets To Replace Later

- `assets/picture.jpg` is used as the personal portrait.
- `assets/unipercept_teaser.png` is used as the UniPercept publication teaser.
- `assets/unipercept_framework.png` is kept for a future method/details section.
- Add project images for the world-model and diffusion-convergence projects if you want richer project cards.
