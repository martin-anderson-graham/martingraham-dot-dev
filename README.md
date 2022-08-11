# Welcome to martingraham.dev

This site is:
  - a [sveltekit](https://kit.svelte.dev/) app
  - running on an Ubuntu 20.04 [Linode](linode.com) VPS
  - using `nginx` and `pm2`
  - SSL certificate generated using [Let's Encrypt](letsencrypt.org)
  - Automatic deployment to the VPS using Github Actions (pushing to main triggers an ssh session which runs `npm run deploy`)


## Notes:
  - `npm run deploy` will:
    ```bash
    git pull
    npm run build
    pm2 restart all
    ```
  - nginx redirects port 443 to the running node app (`build/index.js`) running on port 3000


