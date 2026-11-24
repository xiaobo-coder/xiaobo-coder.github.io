---
title: "AI4SE Atlas: an open, unranked map of AI for Software Engineering"
date: 2026-11-23
description: "Why I built a small, sourced directory of AI4SE researchers, topics, papers and tools, and how people and AI agents can use it."
tags: [ai4se, open-data, research]
draft: true
---

When I started reading across AI for Software Engineering, I kept rebuilding the same notes: who works on program repair, which benchmark a paper used, where the code lives. The information is public, but it is scattered across lab pages, arXiv and GitHub. Most "awesome" lists help, but they are flat lists of links, and many quietly rank people or papers.

[AI4SE Atlas](https://xiaobo-coder.github.io/AI4SE-Atlas/) is my attempt at something smaller and more careful.

## What it is

The atlas has four kinds of records: researchers, research topics, papers and open-source projects. They reference each other, so you can start from a topic and follow it to the papers and the tools that implement them. The [Explore](https://xiaobo-coder.github.io/AI4SE-Atlas/explore/) page shows every paper on a timeline, one row per topic.

Three rules shape it:

- **No rankings.** People are listed alphabetically by family name, papers by date, projects by name. There are no citation counts.
- **Every record cites a public source.** Paper metadata comes from the arXiv API; each researcher record links to a page that shows the affiliation.
- **Anyone can ask for a correction or removal.** Researchers can remove their own record.

## For people and for machines

The data lives in YAML files in the [repository](https://github.com/xiaobo-coder/AI4SE-Atlas), checked against JSON Schemas on every pull request. The site publishes the same data as JSON, CSV and BibTeX. For AI agents there is an [`llms.txt`](https://xiaobo-coder.github.io/AI4SE-Atlas/llms.txt) guide and a plain-text dump of every record, so an assistant can read the whole atlas without scraping pages.

## How to contribute

Open an issue with one of the templates, or a pull request that edits `data/*.yaml`. Papers can be added from their arXiv ID with one command:

```sh
python scripts/add_arxiv.py 2611.03523 --topics ai-agents
```

I review contributions every Saturday. The first version has 28 researchers, 81 papers, 19 projects and 10 topics. It is a start, and the gaps in the coverage map are the best place to help.
