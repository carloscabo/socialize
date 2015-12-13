/**
  * Socialize. Simple social media sharing widget
  * Carlos Cabo 2015. V 1.0
  * https://github.com/carloscabo/socialize
  */

  $(document).ready(function() {
    // La magia aquí

    var
      $doc = $(document),
      da   = 'data-socialize', // Data attribute: data-socialize
      $els = $('['+da+']');

    if ($els.length) {

      $doc.on('click', '['+da+'] a.sz', function(e) {
        e.preventDefault();
        var
          data = {},
          u = ''; // Final url

        // Data to be shared
        data.target = $(this).attr('class').match(/sz-[\w-]*\b/)[0].replace('sz-',''); // Get service name
        data.url    = $(this).attr('data-url') || window.location.href || '';
        data.title  = $(this).attr('data-title') || $doc.find('title').text() || '';
        data.desc   = $(this).attr('data-desc') || $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || '';
        data.image  = $(this).attr('data-image') || $('meta[property="og:image"]').attr('content') || '';

        switch (data.target) {
          case 'twitter':
            var p = { // Params
              url: data.url,
              text: data.desc,
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
            var p = { // Params
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
            var p = {
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
            var p = { // Params
              v: 'compose',
              content: data.url
            };
            u = 'https://m.google.com/app/plus/x/?'+$.param(p);
            window.open(
              u,
              'Google Plus',
              'height=300,width=550'
            );
          break;
          case 'linkedin':
            var p = { // Params
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
            var p = {
              url: data.url
            };
            u = 'http://vkontakte.ru/share.php?'+$.param(p);
            window.open(
              u,
              'vk',
              'width=500,height=400'
            );
          break;
          case "sinaweibo":
            var p = {
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
          default:
            // Default?
          break;
        }

      });
    }
  });
