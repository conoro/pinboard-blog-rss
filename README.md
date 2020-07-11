# Pinboard Blog RSS
Get latest Pinboard blogposts because Maciej's RSS is broken. But actually the whole site nav is so broken that this doesn't really work, as even the headline link to self on the most recent post is wrong. 

```
  ¯\_(ツ)_/¯
```

## Installing and using
* Configure your AWS account
* Install Node.js 12+

```bash
git clone git@github.com:conoro/pinboard-blog-rss.git
cd pinboard-blog-rss
npm install -g serverless
npm install
serverless deploy
```
Then you access each RSS feed like so:

* https://url.of.serverless.function/dev/rss

LICENSE Apache-2.0

Copyright Conor O'Neill 2018, conor@conoroneill.com
