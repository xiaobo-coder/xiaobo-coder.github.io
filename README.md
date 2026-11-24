# xiaobo-coder.github.io

Personal site of **Xiaobo Chen** (University of Massachusetts Amherst): papers, blog and projects on reliable and secure LLM agents and LLMs for software engineering.

**Site:** https://xiaobo-coder.github.io/ · **For AI agents:** [`llms.txt`](https://xiaobo-coder.github.io/llms.txt) · **RSS:** [`rss.xml`](https://xiaobo-coder.github.io/rss.xml)

## Write a post
1. Copy `src/posts/_example-post.md` to `src/posts/my-post-title.md` (the file name becomes the URL: `/blog/my-post-title/`).
2. Edit the front matter (`title`, `date`, `description`, `tags`) and delete `draft: true`.
3. Commit and push to `main`. The site rebuilds automatically.

## Add a paper
Edit `data/papers.json` (copy title, authors and date exactly from the arXiv page).

## Run locally
```sh
npm ci
npm run dev      # http://localhost:4321/
npm run build    # static site in dist/
```

Built with Astro and Tailwind CSS; deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## License
Code: MIT. Text of the blog posts © Xiaobo Chen unless stated otherwise.
