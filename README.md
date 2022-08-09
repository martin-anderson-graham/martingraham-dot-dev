# Welcome to martingraham.dev

This site is:
  - a [sveltekit](https://kit.svelte.dev/) app
  - running on an Ubuntu 20.04 [Linode](linode.com) VPS
  - using `nginx` and `pm2`
  - SSL certificate generated using [Let's Encrypt](letsencrypt.org)


## Notes:
  - after pulling from the repo run
    ```bash
    npm run build
    ```
  - nginx redirects port 443 to the running node app (`build/index.js`) running on port 3000


