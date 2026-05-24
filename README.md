# Zuyan Zhao Personal Homepage

Static personal homepage for `https://zzy4566.github.io/`.

## Structure

- `index.html` contains the homepage content.
- `assets/styles.css` contains all styling.
- `assets/zuyan-zhao-cv.pdf` is the downloadable CV copied from the provided resume.

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

- Replace `assets/profile-placeholder.svg` with `assets/profile.jpg` in `index.html` if you want to use a personal portrait.
- Add a real `UniPercept` teaser image when available and replace the visual block in the publication card.
- Add project images for the world-model and diffusion-convergence projects if you want richer project cards.
