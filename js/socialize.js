/**
  * Socialize. Simple social media sharing widget
  * Carlos Cabo 2015. v1.18
  * https://github.com/carloscabo/socialize
  */

(function($){

  $.fn.socialize = function() {

    return this.each(function() {
      new Socialize(this);
    });

    function Socialize(el) {
      $(el).find('a.sz').on('click', function(e) {

        e.preventDefault();
        var
          $doc = $(document)
          data = {},
          p = {}, // Params
          u = ''; // Final url

        // Data to be shared
        data.target = $(this).attr('class').match(/sz-[\w-]*\b/)[0].replace('sz-',''); // Get service name
        data.url    = $(this).attr('data-url') || window.location.href || '';
        data.title  = $(this).attr('data-title') || $doc.find('title').text() || '';
        data.desc   = $(this).attr('data-desc') || $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || '';
        data.image  = $(this).attr('data-image') || $('meta[property="og:image"]').attr('content') || '';

        switch (data.target) {
          case 'twitter':
            p = { // Params
              url: data.url,
              text: data.title,
              count: 'none/'
            };
            u = 'http://twitter.com/share?'+$.param(p);
            window.open(
              u,
              'tweet',
              'height=300,width=550' // ,resizable=1
            );
          break;
          case 'facebook':
            /*
              WARNING: Facebook no longer admits a sharing URL with parameters, openGraph tags are mandatory! :(
            */
            p = { // Params
              u: data.url
            };
            u = 'http://www.facebook.com/sharer.php?'+$.param(p);
            window.open(
              u,
              'facebook',
              'height=300,width=550'
            );
          break;
          case 'pinterest':
            p = {
              url: data.url,
              // media: media,
              description: data.desc
            };
            if (data.image !== '') p.media = data.image;
            u = 'http://pinterest.com/pin/create/button/?'+$.param(p);
            window.open(
              u,
              'pinterest',
              'width=640,height=400'
            );
          break;
          case 'google-plus':
            p = { // Params
              url: data.url

              // Mobile version
              // v: 'compose',
              // content: data.url
            };
            // Mobile version
            // u = 'https://m.google.com/app/plus/x/?'+$.param(p);
            u = 'https://plus.google.com/share?'+$.param(p);
            window.open(
              u,
              'Google Plus',
              'height=300,width=550'
            );
          break;
          case 'linkedin':
            p = { // Params
              mini: 'true',
              url: data.url,
              title: data.title,
              summary: data.desc,
              source: ''
            };
            u = 'https://www.linkedin.com/shareArticle?'+$.param(p);
            window.open(
              u,
              'Google Plus',
              'height=300,width=550'
            );
          break;
          case 'print':
            window.print();
          break;
          case 'vk':
            p = {
              url: data.url
            };
            u = 'http://vkontakte.ru/share.php?'+$.param(p);
            window.open(
              u,
              'vk',
              'width=500,height=400'
            );
          break;
          case 'sinaweibo':
            p = {
              url: data.url, // replace(".com", ".cn"),
              description: data.desc
            };
            u = 'http://v.t.sina.com.cn/share/share.php?'+$.param(p);
            window.open(
              u,
              'sinaweibo',
              'width=500,height=400'
            );
          break;
          case 'mail':
            // This one combines the params by hand as $.param encondes spaces
            // By default shares description + url, and title as subject
            u = 'mailto:?subject='+encodeURIComponent(data.title)+'&body='+encodeURIComponent(data.desc)+'%0D%0A%0D%0A'+encodeURIComponent(data.url);
            var $a = $('<a style="display:none!important;">').attr('href', u).appendTo( $('body') );
            $a[0].click();
            $a.remove();
          break;
          default:
            // Default?
          break;
        }


      });
    }

  };

})(jQuery);

// Usage
// $('[data-socialize]').socialize();
