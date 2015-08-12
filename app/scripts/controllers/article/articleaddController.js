'use strict';
define(['app'], function(app) {
    var controller = function($scope) {
        $scope.article = {
            title: "Video: Building a Single-Page App with Angular, TypeScript, Azure Active Directory and Office 365 APIs",
            content: "" +
                "<p>I had the opportunity to speak at the BUILD 2015 conference in San Francisco with my friend Andrew Connell and had a great time! We gave a talk on Angular, TypeScript, <a>Azure</a> AD and Office 365 APIs and I also gave two “Express” talks on TypeScript. It was super fun to meet new people and hang out with everyone at the </p>"
                +"<p>conference. I even had the opportunity to check out the upcoming HoloLens device which was super cool! I was heading up an elevator to a meeting and a member of the HoloLens team approached me and asked if I had some time to do some “HoloLens Testing”. Let’s just say that I was a bit late for my meeting – I wasn’t going to pass up the opportunity to check out HoloLens in person.</p>"
                +"<p>Thanks to everyone who came to the talk. We had a great turnout! If you weren’t able to make it (it was tough to get a ticket to BUILD this year) then you can catch the video below.</p>"
            ,
            time: "2015-09-08",
            introduction: "We had some microphone challenges for the first minute or so of the talk so it looks like they cut out the introduction but everything else is there if you’re interested in watching the talk. I have no idea why they chose the picture below for the video overlay. I’m apparently saluting Angular and TypeScript (with the wrong hand). ",
            labels: ['javascript', 'bootstrap'],
            comment: [
                {
                    id:'1',
                    userId: 'crowley',
                    portrait: '',
                    content: '<p>good job！</p>',
                    parentId: 0,
                    time: ''
                },
                {
                    id: '2',
                    userId: 'crowley1',
                    portrait: '',
                    content: '<p>thank you very much!</p>',
                    parentId: 1,
                    time: ''
                }
            ]
        }
    };

    app.register.controller("articleaddController", controller);
});