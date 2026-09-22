# Portfolio

A recruiter-first personal site. One page to scan, a printable resume, and a referral blurb people can forward.

## Make it yours

Edit **`src/content/site.ts`**. That file is the whole site: name, role, projects, jobs, skills, about, and the text a teammate can paste into Slack.

Do not publish sample work. Replace every `sample: true` project and job with something you actually did. Smaller true stories beat polished fiction.

Then:

1. Put your real email, LinkedIn, GitHub, city, and work authorization in `site`.
2. Change `website` to the URL you will deploy (needed for SEO and the referral kit).
3. Optionally drop a PDF at `public/resume.pdf` and set `resumeHref: "/resume.pdf"`.

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Resume: [http://localhost:3000/resume](http://localhost:3000/resume).

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com). After deploy, put that URL in `site.website` and in the referral blurb fields.

## What this is built to do

Recruiters bounce from generic “passionate developer” pages. This layout leads with the role you want, facts they need (location, authorization, dates), proof with outcomes, and one-click email / resume / forward.
