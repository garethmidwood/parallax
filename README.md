# parallax frontend code challenge

## Setup
Gulp is the task runner in use here, installation instructions - https://gulpjs.com/docs/en/getting-started/quick-start/

Once installed, to compile, just run in the project root: 

```
gulp
```

## Viewing the page
Once you've run the compilation, just open `index.html` in your browser

## Notes
I looked into tailwind (as mentioned on our call), but decided against using it here in order to make the most of the time I was spending on it. 

I'm using sass mq for defining breakpoints, creating media rules etc. https://github.com/sass-mq/sass-mq

I've commented some of the css, though most I think is fairly self explanatory.

I've used sass & postcss - I included postcss to use autoprefixer, though I don't think I got around to doing anything that actually needs it.. I could have removed this before submission but I've left it in as a nod to what I would have done next

My approach was top down, starting with the notification, nav, hero etc.

I've made assumptions about the hover colours (just lighten/darken them) on links/buttons

I've done _some_ responsive elements of the page to give a flavour of how I might do things on a full build, you'll notice obvious sections that haven't been done (e.g. the menu)

If I were building a mobile menu I'd have used something like mmenu - https://mmenujs.com/ - of course this might not be suitable depending on the design (if one were done)

I haven't tested this in IE or Safari (I'm on a linux machine) but have tested firefox and chromium.

I added this to a repository at the end of the build, so you'll see everything in a single commit. This isn't how I would ordinarily work :)

## Time spent
2 hours 40 mins
