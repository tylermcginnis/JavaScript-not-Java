angular.module('jvj.controllers', [])
  .controller('mainCtrl', ['$scope', '$routeParams', function($scope){
    $scope.test = 'testtest';
  }])
  .controller('homePageListings', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.imageArray = {
      c: 'images/logos/c-logo.jpg',
      cpp: 'images/logos/cpp-logo.jpeg',
      cSharp:'images/logos/csharp-logo.png',
      css3: 'images/logos/css3-logo.png',
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
    $scope.imageArray = {
      c: 'images/logos/c-logo.jpg',
      cpp: 'images/logos/cpp-logo.jpeg',
      cSharp:'images/logos/csharp-logo.png',
      css3: 'images/logos/css3-logo.png',
      html5: 'images/logos/html5-logo.png',
      java: 'images/logos/java-logo.png',
      javascript: 'images/logos/js-logo.png',
      objectiveC: 'images/logos/objective-c-logo.png',
      perl: 'images/logos/perl-logo.JPG',
      php: 'images/logos/php-logo.png',
      python: 'images/logos/python-logo.jpg',
      ruby: 'images/logos/ruby-logo.png',
    };

    var lang = $routeParams.lang;

    if(lang === 'c'){
      $scope.specificLanguage = 'C';
      $scope.description = 'THE NEW DESCRIPTION FOR ' + $scope.specificLanguage;
      $scope.resources = [
        {
          siteName: "Google",
          url: "http://google.com",
          description: " is the greatest search engine in the world"
        },
        {
          siteName: "Yahoo",
          url: "http://yahoo.com",
          description: " is better"
        },
      ];
    } else if(lang === 'cpp'){
      $scope.specificLanguage = 'C++';
      $scope.description = 'THE NEW DESCRIPTION FOR ' + $scope.specificLanguage;
    } else if (lang === 'html5') {
      $scope.specificLanguage = 'HTML5';
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
      $scope.description = $scope.specificLanguage + ': Style your website!';
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
    } else if (lang === 'javascript') {
      $scope.specificLanguage = 'JavaScript';
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
      $scope.description = $scope.specificLanguage + " is a programming language used in desktop apps, server-side web apps, and Android.";
    } else if (lang === 'cSharp') {
      $scope.specificLanguage = 'C#';
      $scope.description = $scope.specificLanguage + " IS DESCRIPTION";
    } else if (lang === 'objectiveC') {
      $scope.specificLanguage = 'Objective-C';
      $scope.description = $scope.specificLanguage + " IS DESCRIPTION";
    } else if (lang === 'perl') {
      $scope.specificLanguage = 'Perl';
      $scope.description = $scope.specificLanguage + " IS DESCRIPTION";
    }

    // jquery
    // angular
    // backbone
    // ember
    // node.js
    // express
    // d3.js
    // mvc
    // github
    // worpress



  }])
