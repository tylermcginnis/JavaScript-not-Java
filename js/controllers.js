angular.module('jvj.controllers', [])
  .controller('parentCtrl', ['$scope', function($scope){
    $scope.languageLogos = {
      languages: {
        c: {
          logo: 'images/logos/c-logo.jpg',
        },
        cpp: {
          logo: 'images/logos/cpp-logo.jpeg'
        },
        cSharp: {
          logo: 'images/logos/csharp-logo.png'
        },
        css3: {
          logo: 'images/logos/css3-logo.png'
        },
        dotNet: {
          logo: 'images/logos/dot-net.png'
        },
        git: {
          logo: 'images/logos/git-logo.png',
        },
        html5: {
          logo: 'images/logos/html5-logo.png'
        },
        java: {
          logo: 'images/logos/java-logo.png'
        },
        javascript: {
          logo: 'images/logos/js-logo.png',
        },
        objectiveC: {
          logo: 'images/logos/objective-c-logo.png'
        },
        perl: {
          logo: 'images/logos/perl-logo.JPG'
        },
        php: {
          logo: 'images/logos/php-logo.png'
        },
        python: {
          logo: 'images/logos/python-logo.jpg'
        },
        ruby: {
          logo: 'images/logos/ruby-logo.png'
        },
      },
    };
  }])
  .controller('homePageListings', ['$scope', '$routeParams', function($scope, $routeParams){

  }])
  .controller('languageSpecificListings', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.language = $routeParams.lang;
    
    if($scope.language === 'c'){
      $scope.langObj = {
        lang :'C',
        langSrc: $scope.languageLogos.languages.c.logo,
        description: 'The Description of C',
        resources: [
          {
            siteName: "C Programming on Wikibooks",
            url: "http://en.wikibooks.org/wiki/C_Programming",
            description: "a comprehensive, free e-book"
          },
          {
            siteName: "K&R: The C Programming Language",
            url: "http://www.amazon.com/C-Programming-Language-2nd-Edition/dp/0131103628",
            description: "THE book"
          },
        ] 
      };
    } else if($scope.language === 'cpp'){
        $scope.langObj = {
          lang:'C++',
          langSrc: $scope.languageLogos.languages.c.logo,
          description: 'The Description of C++',
          resources: [
            {
              siteName: "Stackoverflow: The Definitive C++ Book Guide and List",
              url: "http://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list",
              description: "as stated"
            }
          ] 
        };
    } else if ($scope.language === 'html5') {
        $scope.langObj = {
          lang:'HTML5',
          langSrc: $scope.languageLogos.languages.html5.logo,
          description: 'The Description of html5',
          resources: [
            {
            siteName: "HtmlDog",
            url: "http://htmldog.com/guides/html/beginner/",
            description: "A good beginner's guide."
            },
            {
              siteName: "Codecademy",
              url: "http://codecademy.com",
              description: "An interactive website where you can practice your coding skills."
            },
             {
              siteName: "Mozilla Dev Network: HTML",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              description: "A thorough reference guide."
            },
          ] 
        };
    } else if ($scope.language === 'css3') {
        $scope.langObj = {
          lang:'CSS3',
          langSrc: $scope.languageLogos.languages.css3.logo,
          description: 'The Description of CSS3',
          libraries: {
            bootstrap: 'images/logos/bootstrap-logo.png',
            foundation: 'images/logos/foundation-logo.png',
            less: 'images/logos/less-css-logo.png',
            sass: 'images/logos/sass-css-logo.png',
            stylus: 'images/logos/stylus-logo.png',
          },
          resources: [
            {
              siteName: "HtmlDog",
              url: "http://htmldog.com/guides/css/beginner/",
              description: "A good beginner's guide to styling."
            },
            {
              siteName: "Codecademy",
              url: "http://codecademy.com",
              description: "An interactive website where you can practice your coding skills."
            },
             {
              siteName: "Mozilla Dev Network: CSS",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
              description: "A thorough reference guide."
            },
            {
              siteName: "CSS Tricks",
              url: "http://css-tricks.com/",
              description: "Tutorials, Code Snippets, Videos, Demos, Forum"
            },
          ] 
        };

    } else if($scope.language === 'dotNet'){
        $scope.langObj = {
          lang:'.NET',
          langSrc: $scope.languageLogos.languages.dotNet.logo,
          description: 'The Description of .NET',
          resources: [
            {
              siteName: "Official Documentation",
              url: "http://msdn.microsoft.com/en-us/library/aa719441(v=vs.71).aspx",
              description: "From Microsoft"
            }
          ] 
        };

    } else if($scope.language === 'git'){
        $scope.langObj = {
          lang:'GIT',
          langSrc: $scope.languageLogos.languages.git.logo,
          description: 'The Description of GIT',
          resources: [
            {
              siteName: "Try Git",
              url: "https://www.codeschool.com/courses/try-git",
              description: "Code School interactive tutorial that introduces you to Git"
            },
            {
              siteName: "Git For Designers",
              url: "http://hoth.entp.com/output/git_for_designers.html",
              description: "Explanation of Git for a beginner"
            },
          ] 
        };

    }  else if ($scope.language === 'javascript') {
        $scope.langObj = {
          lang:'JavaScript',
          langSrc: $scope.languageLogos.languages.javascript.logo,
          description: 'The Description of JavaScript',
          libraries: {
            jquery: 'images/logos/jquery-logo.png',
            angular: 'images/logos/angular-logo.png',
            backbone: 'images/logos/backbone-logo.gif',
            ember: 'images/logos/emberjs-logo.png',
            node: 'images/logos/node-logo.png',
          },
          resources: [
            {
              siteName: "Javascript Is Sexy",
              url: "http://javascriptissexy.com/",
              description: "Articles, Tutorials, Links"
            },
            {
              siteName: "Eloquent Javascript",
              url: "http://eloquentjavascript.net/",
              description: "An ebook that introduces javascript to a beginner"
            },
             {
              siteName: "Mozilla Dev Network",
              url: "https://developer.mozilla.org/en-US/",
              description: "A comprehensive reference guide."
            },
            {
              siteName: "Codecademy",
              url: "http://www.codecademy.com/",
              description: "Interactive tutorials"
            },
          ] 
        };

    } else if ($scope.language === 'php') {
        $scope.langObj = {
          lang:'PHP',
          langSrc: $scope.languageLogos.languages.php.logo,
          description: 'The Description of PHP',
          libraries: {
            wordpress: 'images/logos/wordpress-logo.png',
            mySQL: 'images/logos/mysql-logo.png',
          },
          resources: [
            {
              siteName: "PHP 101: PHP For the Absolute Beginner",
              url: "http://devzone.zend.com/6/php-101-php-for-the-absolute-beginner/",
              description: "A series of posts for a beginner using PHP."
            },
            {
              siteName: "Codecademy",
              url: "http://codecademy.com",
              description: "An interactive website where you can practice your coding skills."
            },
            {
              siteName: "Web Monkey",
              url: "http://www.webmonkey.com/2010/02/php_tutorial_for_beginners/",
              description: "PHP Tutorial for Beginners"
            }
          ] 
        };

    } else if ($scope.language === 'ruby') {
        $scope.langObj = {
          lang:'ruby',
          langSrc: $scope.languageLogos.languages.ruby.logo,
          description: 'The Description of Ruby',
          resources: [
            {
            siteName: "Ruby in Twenty Minutes",
            url: "https://www.ruby-lang.org/en/documentation/quickstart/",
            description: "A quick first introduction to Ruby."
            },
            {
              siteName: "Codecademy",
              url: "http://codecademy.com",
              description: "An interactive website where you can practice your coding skills."
            },
            {
              siteName: "Try Ruby",
              url: "http://tryruby.org/levels/1/challenges/0",
              description: "A quick interactive introduction to Ruby"
            },
            {
              siteName: "Jump Start Lab",
              url: "http://tutorials.jumpstartlab.com/",
              description: "A guidepost with links to many Ruby tutorials."
            }
          ] 
        };

    } else if ($scope.language === 'python') {
        $scope.langObj = {
          lang:'Python',
          langSrc: $scope.languageLogos.languages.python.logo,
          description: 'The Description of Python',
          resources: [
            {
              siteName: "Learn Python the Hard Way",
              url: "http://learnpythonthehardway.org/",
              description: "A popular ebook on Python"
            },
            {
              siteName: "The Python Tutorial",
              url: "http://docs.python.org/2/tutorial/index.html",
              description: "A good beginner's guide"
            },
             {
              siteName: "A Byte of Python",
              url: "http://swaroopch.com/notes/Python/",
              description: "A free ebook aimed at a beginner programmer"
            },
            {
              siteName: "Python 3.3.3 documentation",
              url: "http://docs.python.org/3/",
              description: "The Official Python Documentation"
            }
          ] 
        };


    } else if ($scope.language === 'java') {
        $scope.langObj = {
          lang:'Java',
          langSrc: $scope.languageLogos.languages.java.logo,
          description: 'The Description of Java',
          resources: [
            {
              siteName: "Java Programming Wiki",
              url: "http://en.wikibooks.org/wiki/Java_Programming",
              description: "A free ebook, good introduction"
            },
            {
              siteName: "Java Resources for a Beginner",
              url: "http://www.squidoo.com/javaresources",
              description: "Links to books/tutorials/etc"
            },
             {
              siteName: "Introduction to Programming Using Java, Sixth Edition",
              url: "http://math.hws.edu/javanotes/",
              description: "A free ebook aimed at a beginner programmer"
            }
          ] 
        };

    } else if ($scope.language === 'cSharp') {
        $scope.langObj = {
          lang:'C#',
          langSrc: $scope.languageLogos.languages.cSharp.logo,
          description: 'The Description of CSharp',
          resources: [
            {
              siteName: "C# Station",
              url: "http://www.csharp-station.com/Tutorial.aspx",
              description: "A free ebook, good introduction"
            },
            {
              siteName: "C# Reference by Microsoft",
              url: "http://msdn.microsoft.com/en-us/library/618ayhy6.aspx",
              description: "Official Reference"
            }
          ] 
        };

    } else if ($scope.language === 'objectiveC') {
        $scope.langObj = {
          lang:'Objective-C',
          langSrc: $scope.languageLogos.languages.objectiveC.logo,
          description: 'The Description of Objective C',
          resources: [
            {
              siteName: "Paul Hegarty's CS193P Class",
              url: "https://itunes.apple.com/us/itunes-u/developing-apps-for-ios-sd/id395631522?mt=10",
              description: "Podcast from Paul Hegarty who teaches iPhone App Development at Stanford"
            },
            {
              siteName: "Objective C Programming Ranch Guide by Aaron Hillegass",
              url: "http://www.amazon.com/Objective-C-Programming-Ranch-Guide-Guides/dp/0321706285",
              description: "Short introduction to C and then Objective C"
            },
            {
              siteName: "Ry’s Objective-C Tutorial",
              url: "http://rypress.com/tutorials/objective-c/",
              description: "A quick reference and comprehensive intro to newcomers"
            }
          ] 
        };

    } else if ($scope.language === 'perl') {
        $scope.langObj = {
          lang:'Perl',
          langSrc: $scope.languageLogos.languages.perl.logo,
          description: 'The Description of Perl',
          resources: [
            {
              siteName: "Perl Intro",
              url: "http://perldoc.perl.org/perlintro.html",
              description: "An introduction to Perl from the official documentation."
            }
          ] 
        };
    }
  }])
  .controller('libSpecificListing',['$scope','$routeParams', function($scope, $routeParams){
    //If LOGIC to SEE IF Angular, Backbone, etc.
    var lib = $routeParams.lib;
    if(lib === 'angular'){
      $scope.library = 'Angular';
      $scope.languageSrc = 'images/logos/angular-logo.png';
      $scope.description = $scope.library + " is a Javascript front-end framework used to make single-page web-apps. It makes HTML more expressive and readable.  ";
      $scope.resources = [
        {
          siteName: "A Better Way to Learn Angular",
          url: "http://www.thinkster.io/pick/GtaQ0oMGIl/a-better-way-to-learn-angularjs",
          description: "A series if guideposts on Angular"
        },
        {
          siteName: "Egghead",
          url: "https://egghead.io/ ",
          description: "Short videos on all the core library of Angular"
        },
         {
          siteName: "How Do I Think In AngularJS if I have a Jquery Background",
          url: "http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background",
          description: "Great answer"
        },
        {
          siteName: "Angular Documentation",
          url: "http://docs.angularjs.org/",
          description: "Official Docs"
        },
      ];
    } else if (lib === 'backbone') {
        $scope.library = 'Backbone';
        $scope.languageSrc = 'images/logos/backbone-logo.gif';
        $scope.description = $scope.library + " is a front-end javascript framework used to make web-apps.  It gives you the freedom to organize your code, and structure data and user interfaces!";
        $scope.resources = [
          {
            siteName: "Javascript Is Sexy: Learn Backbone.js Completely",
            url: "http://javascriptissexy.com/learn-backbone-js-completely/",
            description: "A series if guideposts on Backbone"
          },
          {
            siteName: "Backbone.js",
            url: "http://backbonejs.org/",
            description: "Official Website with Documentation"
          },
           {
            siteName: "Links to a ton of tutorials, blog posts, and eample sites",
            url: "https://github.com/jashkenas/backbone/wiki/Tutorials,-blog-posts-and-example-sites",
            description: "from Jashkenas"
          }
        ];
    } else if (lib === 'jquery') {
        $scope.library = 'JQuery';
        $scope.languageSrc = 'images/logos/jquery-logo.png';
        $scope.description = $scope.library + " is a Javascript front-end framework used to make single-page web-apps. It makes HTML more expressive and readable.  ";
        $scope.resources = [
          {
            siteName: "CodeSchool - Try Jquery",
            url: "http://try.jquery.com/",
            description: "Interactive Lessons on how to use Jquery"
          },
          {
            siteName: "Codecademy",
            url: "http://codecademy.com",
            description: "An interactive website where you can practice your coding skills."
          },
           {
            siteName: "JQuery",
            url: "http://api.jquery.com/",
            description: "Official Jquery Documentation"
          }
        ];
    } else if (lib === 'ember') {
        $scope.library = 'Ember';
        $scope.languageSrc = 'images/logos/emberjs-logo.png';
        $scope.description = $scope.library + " is a front-tend javascript framework to make web-apps.";
        $scope.resources = [
          {
            siteName: "Official Ember Guide",
            url: "http://emberjs.com/guides/",
            description: "Great starting point"
          },
          {
            siteName: "An In-Depth Introduction To Ember.js",
            url: "http://coding.smashingmagazine.com/2013/11/07/an-in-depth-introduction-to-ember-js/",
            description: "A walkthrough the core Ember library."
          },
           {
            siteName: "EmberWatch",
            url: "http://emberwatch.com/",
            description: "A listing of talks, screencasts, tutorials, books, and more!"
          }
        ];
    } else if (lib === 'node') {
        $scope.library = 'Node';
        $scope.languageSrc = 'images/logos/node-logo.png';
        $scope.description = $scope.library + " A popular lightweight javascript platform used to create server-side web apps and web servers.";
        $scope.resources = [
          {
            siteName: "Node Beginner",
            url: "http://www.nodebeginner.org/",
            description: "An e-book for getting a handle on Node.js for the first time."
          },
          {
            siteName: "Code School - Node",
            url: "http://node.codeschool.com/levels/1",
            description: "Interactive tutorials on Node.js, a little Express.js, and redis"
          },
           {
            siteName: "Javascript Is Sexy: Learn Node.js Completely and With Confidence",
            url: "http://javascriptissexy.com/learn-node-js-completely-and-with-confidence/",
            description: "A Comprehensive guide to learning Node"
          },
          {
            siteName: "Talk by Ryan Dalh",
            url: "http://www.youtube.com/watch?v=jo_B4LTHi3I",
            description: "An Introduction to Node given by its creator"
          },
           {
            siteName: "How to Node",
            url: "http://howtonode.org/",
            description: "Website with lots of tutorials"
          }
        ];
    } else if (lib === 'wordpress') {
        $scope.library = 'Wordpress';
        $scope.languageSrc = 'images/logos/wordpress-logo.png';
        $scope.description = $scope.library + " is a popular open-source blogging tool with a huge library of plugins and templates.";
        $scope.resources = [
          {
            siteName: "WordPress Lessons",
            url: "http://codex.wordpress.org/WordPress_Lessons",
            description: "Official Tutorials from Wordpress"
          },
          {
            siteName: "Wordpress Tutorials",
            url: "http://teamtreehouse.com/library/topic:wordpress",
            description: "from Team Tree House"
          },
           {
            siteName: "50 Wordpress Tutorials",
            url: "http://www.creativebloq.com/web-design/wordpress-tutorials-designers-1012990",
            description: "Links to short Wordpress tutorials on various topics"
          }
        ];
    } else if (lib === 'bootstrap') {
        $scope.library = 'Bootstrap';
        $scope.languageSrc = 'images/logos/bootstrap-logo.png';
        $scope.description = $scope.library + " is a responsive design, front-end toolkit from Twitter.";
        $scope.resources = [
          {
            siteName: "Bootstrap",
            url: "http://getbootstrap.com/",
            description: "Official Bootstrap Site"
          },
        ];
    } else if (lib === 'foundation') {
        $scope.library = 'Foundation';
        $scope.languageSrc = 'images/logos/foundation-logo.png';
        $scope.description = $scope.library + " is a responsive design, front-end framework.";
        $scope.resources = [
          {
            siteName: "Foundation",
            url: "http://foundation.zurb.com/",
            description: "Official Foundation Site"
          },
        ];
    } else if (lib === 'mongodb') {
        $scope.library = 'MongoDB';
        $scope.languageSrc = 'images/logos/mongodb-logo.png';
        $scope.description = $scope.library + " is a popular database that uses javascript JSON objects to store data.";
        $scope.resources = [
          {
            siteName: "MongoDB",
            url: "http://www.mongodb.org/",
            description: "Official MongoDB Site"
          },
        ];
    } else if (lib === 'mysql') {
        $scope.library = 'mySQL';
        $scope.languageSrc = 'images/logos/mysql-logo.png';
        $scope.description = $scope.library + " is a popular relational database.";
        $scope.resources = [
          {
            siteName: "MySQL",
            url: "http://www.mysql.com/",
            description: "Official MySQL Site"
          },
        ];
    } else if (lib === 'less') {
        $scope.library = 'LESS';
        $scope.languageSrc = 'images/logos/less-css-logo.png';
        $scope.description = $scope.library + " extends CSS with dynamic behavior.";
        $scope.resources = [
          {
            siteName: "LESS",
            url: "http://lesscss.org/",
            description: "Official LESS Site"
          },
        ];
    } else if (lib === 'sass') {
        $scope.library = 'Sass';
        $scope.languageSrc = 'images/logos/sass-css-logo.png';
        $scope.description = $scope.library + " is a scripting language that is interpreted into CSS.";
        $scope.resources = [
          {
            siteName: "Sass",
            url: "http://sass-lang.com/",
            description: "Official Sass Site"
          },
        ];
    } else if (lib === 'stylus') {
        $scope.library = 'Stylus';
        $scope.languageSrc = 'images/logos/stylus-logo.png';
        $scope.description = $scope.library + " is a scripting language interprted into CSS.";
        $scope.resources = [
          {
            siteName: "Stylus",
            url: "http://learnboost.github.io/stylus/",
            description: "Official Stylus Site"
          },
        ];
    }
  }]);
