<style>
.alert.tip {
  position: relative;
  margin: 0 auto;
  padding: 15px;
  font-size: 12px;
  color: #264c72;
  border: 1px solid #97c1da;
  border-radius: 3px;
  background-color: #d8ebf8;
  background: -moz-linear-gradient(#d8ebf8,#d0e3ef);
  background: -webkit-linear-gradient(#d8ebf8,#d0e3ef);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#d8ebf8', endColorstr='#d0e3ef')";
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  text-shadow: 0 1px 0 rgba(255,255,255,.8);
}
</style>

# socialize
Social media icons in font, and share functionallity in JS (WIP).

<div class="alert tip">
Please, take a look to the [demo.html](https://rawgit.com/carloscabo/socialize/master/demo.html) included in this repo before integrating socialize in your project, it's the best way to see how must be configured.
</div>

<img src="https://raw.githubusercontent.com/carloscabo/socialize/master/snapshot.png">

# usage

1. Copy the socialize fonts in to your project.
2. Edit the path to them in `socialize.scss`
3. Add data-attribute `data-socialize` to the buttons container.
4. Include `socialize.js`.
5. For Facebook and Pinterest be sure to include the `OpenGraph` info in the header.
6. Initialize the `js` functionallity in your `ready.js`.

## sample HTML block

````html
<div data-socialize>
  <a href="#" class="sz sz-share"></a>
  <a href="#" class="sz sz-facebook"></a>
  <a href="#" class="sz sz-google-plus"></a>
  <a href="#" class="sz sz-instagram"></a>
  <a href="#" class="sz sz-linkedin"></a>
  <a href="#" class="sz sz-pinterest"></a>
  <a href="#" class="sz sz-pinterest-alt"></a>
  <a href="#" class="sz sz-twitter"></a>
  <a href="#" class="sz sz-youtube"></a>
  <a href="#" class="sz sz-flickr"></a>
  <a href="#" class="sz sz-vimeo"></a>
  <a href="#" class="sz sz-print"></a>
  <a href="#" class="sz sz-mail"></a>
</div>

<!-- Also... -->
<div data-socialize class="filled rounded colored">
  <i class="sz sz-facebook"></i>
  <i class="sz sz-instagram"></i>
  <i class="sz sz-twitter"></i>
</div>
````

## initialize the share functionallity

Initiallize the sharing functionallity over the `data-socialize` container (normally a '<div>') you want this way:

```javascript
$(document).ready(function() {
  // Initialize al the data-socialize containers in the page!
  $('[data-socialize]').socialize();
});
```

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
  <a href="#" class="sz sz-SOCIAL-NETWORK"
    data-url="Custom url"
    data-title="Custom title"
    data-desc="Custom description"
    data-image="Absolute image url">
  </a>
  ...
````

When using **data-attributes** urls be sure to include **absolute paths**, most of the services don't admit relative URLs.

## services working right now

- facebook
- Twitter
- Pinterest
- LinkedIn
- Google Plus
- Flickr
- Vimeo
- Email
- Print

## extending and adding new icons

In the `src` folder there is an `Adobe Illustrator CS5` file with icons inside, if you need to add a new icon, add it to this file, export an `svg`. There is a `gulp build-font` task. <mark>**Yo'll need to revise the _socialize.scss to be sure to add the new icons**</mark>

## known issues

<div class="alert tip">
If you are in `localhost` the sharing functionallity can fail, as some of the services ( as Facebook ) get the data from the url.
</div>

## TO-DO
- ¿Generate _socialize.scss automatically? Worth the effort?
- Add more services
  - Share by email

## updates
- 2016 / 02 / 19 V 1.12 Changed initilization function to be manual
- 2016 / 02 / 19 V 1.02 Added share by email functionallity and Vimeo icon
- 2016 / 02 / 02 Added Pinterest alternate
- 2016 / 01 / 19 Added Flickr icon
