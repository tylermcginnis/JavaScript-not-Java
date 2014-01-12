angular.module('jvj.controllers', [])
  .controller('homePageListings', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.imageArray = {
      c: 'images/logos/c-logo.jpg',
      cpp: 'images/logos/cpp-logo.jpeg',
      cSharp:'images/logos/csharp-logo.png',
      css3: 'images/logos/css3-logo.png',
      dotNet: 'images/logos/dot-net.png',
      git: 'images/logos/git-logo.png',
      html5: 'images/logos/html5-logo.png',
      java: 'images/logos/java-logo.png',
      javascript: 'images/logos/js-logo.png',
      objectiveC: 'images/logos/objective-c-logo.png',
      perl: 'images/logos/perl-logo.JPG',
      php: 'images/logos/php-logo.png',
      python: 'images/logos/python-logo.jpg',
      ruby: 'images/logos/ruby-logo.png',
    };
  }])
  .controller('languageSpecificListings', ['$scope', '$routeParams', function($scope, $routeParams){
    var lang = $routeParams.lang;

    if(lang === 'c'){
      $scope.specificLanguage = 'C';
      $scope.lang = 'c';
      $scope.description = $scope.specificLanguage + ' is a general purpose programming language that many languages, ( including C#, Java, Javascript, Objective-C, Perl, PHP, Python, and more!) have borrowed directly or indirectly from.';
      $scope.resources = [
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
      ];
    } else if(lang === 'cpp'){
      $scope.lang = 'cpp';
      $scope.specificLanguage = 'C++';
      $scope.description = $scope.specificLanguage + ' is a language used for operating systems, software, libraries, and making things fast.';
      $scope.resources = [
        {
          siteName: "Stackoverflow: The Definitive C++ Book Guide and List",
          url: "http://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list",
          description: "as stated"
        }
      ];
    } else if (lang === 'html5') {
      $scope.specificLanguage = 'HTML5';
      $scope.lang = 'html5';
      $scope.description = $scope.specificLanguage + ' is the language of the web.  Make your first website!' ;
      $scope.resources = [
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
      ];
    } else if (lang === 'css3') {
      $scope.specificLanguage = 'CSS3';
      $scope.imageArray = {
        bootstrap: 'images/logos/bootstrap-logo.png',
        foundation: 'images/logos/foundation-logo.png',
      }
      $scope.description = $scope.specificLanguage + ': Style your website!';
      $scope.lang = 'css3';
      $scope.resources = [
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
          siteName: "Mozilla Dev Network: HTML",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          description: "A thorough reference guide."
        },
        {
          siteName: "CSS Tricks",
          url: "http://css-tricks.com/",
          description: "Tutorials, Code Snippets, Videos, Demos, Forum"
        },
      ];
    } else if(lang === 'dotNet'){
      $scope.specificLanguage = '.Net';
      $scope.description = $scope.specificLanguage + ' is a software framework used by applications created for Windows.';
      $scope.lang = 'dotNet';
      $scope.resources = [
        {
          siteName: "Official Documentation",
          url: "http://msdn.microsoft.com/en-us/library/aa719441(v=vs.71).aspx",
          description: "From Microsoft"
        }
      ];
    } else if(lang === 'git'){
      $scope.specificLanguage = 'git';
      $scope.lang = 'git';
      $scope.description = $scope.specificLanguage + ' is a version control system that allows collaborators to work on the same code without overlapping.';
      $scope.resources = [
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
      ];
    } else if (lang === 'javascript') {
      $scope.specificLanguage = 'JavaScript';
      $scope.lang = 'javascript';

      $scope.imageArray = {
        jquery: 'images/logos/jquery-logo.png',
        angular: 'images/logos/angular-logo.png',
        backbone: 'images/logos/backbone-logo.gif',
        ember: 'images/logos/emberjs-logo.png',
        node: 'images/logos/node-logo.png',
      }
      $scope.description =  + 'Make your website interactive with' + $scope.specificLanguage + "!";
      $scope.resources = [
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
          siteName: "Mozilla Dev Network: HTML",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          description: "A thorough reference guide."
        },
        {
          siteName: "CSS Tricks",
          url: "http://css-tricks.com/",
          description: "Tutorials, Code Snippets, Videos, Demos, Forum"
        },
      ];
    } else if (lang === 'php') {
      $scope.specificLanguage = 'PHP';
      $scope.lang = 'php';
      $scope.imageArray = {
        wordpress: 'images/logos/wordpress-logo.png',
      }
      $scope.description = $scope.specificLanguage + " is a server-side scripting language that allows developers to create fully dynamic websites." ;
       $scope.resources = [
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
      ];
    } else if (lang === 'ruby') {
      $scope.specificLanguage = 'Ruby';
      $scope.lang = 'ruby';
      $scope.description = $scope.specificLanguage + " is a general-purpose programming language with a focus on simplicity and productivity.";
       $scope.resources = [
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
      ];
    } else if (lang === 'python') {
      $scope.specificLanguage = 'Python';
      $scope.lang = 'python';
      $scope.description = $scope.specificLanguage + " is an easy to learn programming language with a focus on easy readability.";
       $scope.resources = [
        {
          siteName: "Learn Python the Hard Way",
          url: "http://learnpythonthehardway.org/",
          description: "A popular ebook on Python"
        },
        {
          siteName: "The Python Tutorial¶",
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
      ];
    } else if (lang === 'java') {
      $scope.specificLanguage = 'Java';
      $scope.lang = 'java';
      $scope.description = $scope.specificLanguage + " is a programming language used in desktop apps, server-side web apps, and Android.";
       $scope.resources = [
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
      ];
    } else if (lang === 'cSharp') {
      $scope.specificLanguage = 'C#';
      $scope.lang = 'cSharp';
      $scope.description = $scope.specificLanguage + " is a programming language developd by Microsoft";
       $scope.resources = [
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
      ];
    } else if (lang === 'objectiveC') {
      $scope.lang = 'objectiveC';
      $scope.specificLanguage = 'Objective-C';
      $scope.description = $scope.specificLanguage + " is used for Mac OSX apps and iPhone iOS apps";
       $scope.resources = [
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
      ];
    } else if (lang === 'perl') {
      $scope.specificLanguage = 'Perl';
      $scope.lang = 'perl';
      $scope.description = $scope.specificLanguage + " is a programming language used for system administration, web development, and networks.";
       $scope.resources = [
        {
          siteName: "Perl Intro",
          url: "http://perldoc.perl.org/perlintro.html",
          description: "An introduction to Perl from the official documentation."
        }
      ];
    }
  }])
  .controller('libSpecificListing',['$scope','$routeParams', function($scope, $routeParams){
    //If LOGIC to SEE IF Angular, Backbone, etc.
    var lib = $routeParams.lib;
    if(lib === 'angular'){
      $scope.library = 'Angular';
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
    }
  }]);
