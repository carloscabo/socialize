# socialize
Social media icons in font, and share functionallity in JS (WIP).

<img src="https://raw.githubusercontent.com/carloscabo/socialize/master/snapshot.png">

**Please, take a look to the `demo.html` included in this repo before integrating socialize in your project, its the best way to see how must be configured.**

# usage
1. Copy the socialize fonts in to your project.
2. Edit the path to them in `socialize.scss`
3. Add data-attribute `data-socialize` to the buttons container.
4. Include `socialize.js`.
5. For Facebook and Pinterest be sure to include the `OpenGraph` info in the header.

## sample HTML block
````html
<div data-socialize class="filled rounded colored">
  <a href="#" class="sz sz-share"></a>
  <a href="#" class="sz sz-facebook"></a>
  <a href="#" class="sz sz-google-plus"></a>
  <a href="#" class="sz sz-instagram"></a>
  <a href="#" class="sz sz-linkedin"></a>
  <a href="#" class="sz sz-pinterest"></a>
  <a href="#" class="sz sz-twitter"></a>
  <a href="#" class="sz sz-youtube"></a>
  <a href="#" class="sz sz-print"></a>
</div>
````

## data to be shared

By default `socialize` shares the data available in the `OpenGraph` tags in the document's header:

````html
<meta property="og:title" content="Socialize"/>
<meta property="og:site_name" content="Socialize widget @ gitHub"/>
<meta property="og:description" content="Social media sharing widget"/>
<meta property="og:image" content="https://raw.githubusercontent.com/carloscabo/socialize/master/snapshot.png"/>
````

But you can also define other data adding data-attributes to the share links, adding `data-url`, `data-image`, `data-desc`, `data-image`, this way:
````html
<div data-socialize class="filled rounded colored">
  <a href="#" class="sz sz-share"
    data-url="Custom url"
    data-title="Custom title"
    data-desc="Custom description"
    data-image="Absolute image url">
  </a>
  ...
````

When usign **data-attributes** urls be sure to include **absolute paths**, most of the services dont admit relative URLs.

## services workin right now

- facebook
- Twitter
- Pinterest
- LinkedIn
- Google Plus
- Print

## extending and adding new icons

In the `src` folder there is an `Adobe Illustrator CS5` file with icons inside, if you need to add a new icon, add it to this file, export an `svg` and use **IconMoon** service to regenerate the **socialize font**.

## known issues

- If you are in `localhost` the sharing functionallity can fail, as some of the services get the data from the url.

## TO-DO

- Intesive testing
- Add more services
  - Share by email
