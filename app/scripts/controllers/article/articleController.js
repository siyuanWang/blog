'use strict';
define(['app'], function(app) {
    var controller = function($scope) {
        $scope.htmlVariable = '<h2>xxx</h2>'
        $scope.article = {
            title: "Video: Building a Single-Page App with Angular, TypeScript, Azure Active Directory and Office 365 APIs",
            content: "" +
            "<p style='text-indent: 2em'>I had the opportunity to speak at the BUILD 2015 conference in San Francisco with my friend Andrew Connell and had a great time! We gave a talk on Angular, TypeScript, <a>Azure</a> AD and Office 365 APIs and I also gave two “Express” talks on TypeScript. It was super fun to meet new people and hang out with everyone at the </p>"
            +"<p>conference. I even had the opportunity to check out the upcoming HoloLens device which was super cool! I was heading up an elevator to a meeting and a member of the HoloLens team approached me and asked if I had some time to do some “HoloLens Testing”. Let’s just say that I was a bit late for my meeting – I wasn’t going to pass up the opportunity to check out HoloLens in person.</p>"
            +"<p>Thanks to everyone who came to the talk. We had a great turnout! If you weren’t able to make it (it was tough to get a ticket to BUILD this year) then you can catch the video below.</p>"
            +"<p>There’s not one framework, library or component that fits all scenarios perfectly. People always try to find that “one” solution but if you’ve been building software long enough then you know it doesn’t exist and probably never will. Some people prefer the minimal framework with more custom code. I say, “More power to them” if that’s appropriate for their target scenario. I like to build on top of frameworks that give me a lot of power at my fingertips whenever possible. Could the framework change? Could something better come out in the near future? I can reply with a confident “yes” to those types of questions. If you’re in the software business then you just accept that those things will happen and try to make the best decision based on the current app requirements, current environment, team skills, time-frame, and where you think things are heading in the future."
            +"AngularJS is absolutely valuable when used properly in my experience so don’t read a post like that and take it as the “truth”. Yes –AngularJS has a few flaws that I don’t like (dirty checking could be better – and will be with Object.observe, routing needs a lot of work – and they’re doing that now, debugging certain issues like {{ }} on a blank screen, plus more) but I love the vast majority of what it offers and feel it gives a big boost to my productivity and the productivity of our clients. I like the existing dependency injection (the future DI is going to get even better), the modularity, core framework functionality, two-way data binding, and the simplified maintenance. Overall – I’m a big fan. Tomorrow that may change, but welcome to the world of software where planning for change comes as part of the job. Change is what has kept software exciting for me over the years."
            +"At the risk of sounding “preachy” – make your own decisions. Don’t trust me, don’t trust the author of the post, or anyone else for that matter. The Web is crawling with supposed “experts” but every app is unique so build a prototype and prove out your framework/library of choice whether it’s AngularJS or any other framework."
            +"To wrap this up, what do I think is “right” with AngularJS? A lot of things. Support for building SPAs, MV* approach, two-way data binding, testability, modularity, separation of concerns, routing (native or 3rd party), animations, mobile-capable, good maintenance story, supported by a core team as well as tons of OSS contributors, and I could go on and on. But, if AngularJS goes away at some point and I have to pick up the “next best thing” I’m OK with that.</p>"
            ,
            time: "2015-09-08",
            introduction: "We had some microphone challenges for the first minute or so of the talk so it looks like they cut out the introduction but everything else is there if you’re interested in watching the talk. I have no idea why they chose the picture below for the video overlay. I’m apparently saluting Angular and TypeScript (with the wrong hand). ",
            labels: ['javascript', 'bootstrap'],
            comments: [
                {
                    id:'1',
                    userId: 'crowley',
                    portrait: 'images/home-logo.png',
                    content: '<p>Enjoyed this perspective Dan! As usual I am a little late to the game - Just watched the short video, now off to watch the longer one!</p>',
                    children: [{
                        id: '2',
                        userId: 'crowley1',
                        portrait: 'images/icon.jpg',
                        content: '<p>thank you very much!</p>',
                        children: [],
                        time: ''
                    }],
                    time: ''
                },
                {
                    id: '3',
                    userId: 'crowley3',
                    portrait: 'images/mine.jpg',
                    content: '<p>thank you very much!</p>',
                    children: [],
                    time: ''
                }
            ]
        }
    };

    app.register.controller("articleController", controller);
});