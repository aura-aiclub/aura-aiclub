# AURA Insights — GitHub Pages Website

Official static website structure for AURA (Artificial Intelligence for Understanding, Research and Application), Saintgits College of Engineering.

## Intended deployment

- Hosting: GitHub Pages
- Institutional domain: `https://aura.saintgits.in`
- DNS: managed by the Saintgits IT team
- Custom domain file: `CNAME`

## Repository structure

```text
AURA-GitHub-Pages/
├── index.html
├── CNAME
├── .nojekyll
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── issue-01/
└── issues/
    └── issue-01/
        └── index.html
```

## GitHub Pages setup

1. Create a GitHub repository, preferably under an institutional/club-owned GitHub account.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. In **Custom domain**, enter `aura.saintgits.in`.
7. Keep the `CNAME` file in the repository root.
8. Ask the Saintgits IT team to create the DNS record required for the subdomain.

For a subdomain, the DNS target should be the GitHub Pages hostname for the GitHub account/site. Do not include the repository path in the DNS CNAME target.

## Adding future issues

Create a new folder such as:

`issues/issue-02/index.html`

and, if needed, an image folder:

`images/issue-02/`

Then add a link to the new issue from the root `index.html` archive.
