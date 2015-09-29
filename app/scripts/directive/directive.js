'use strict';
define([], function() {
    var directive = {};
    directive.blogLabelDirective = function() {
        return {
            restrict: 'AE',
            replace: true,
            template: '<span ng-repeat="blog_label in labels"><a href="/category/tag/{{blog_label.label_name}}" style="padding:2px;font-size: 18px;word-wrap:break-word;color: #007fff;font-size: {{blog_label.articles.length/4+14+\'px\'}}" ng-bind="blog_label.label_name"></a></span>'
        }
    };

    directive.classifyDirective = function() {
        return {
            restrict: 'AE',
            replace: true,
            link: function (scope, el, attrs) {
                require(['bootstrap-treeview'], function() {
                    var tree = [
                        {
                            text: "前端",
                            state: {
                                checked: true,
                                expanded: true
                            },
                            nodes: [
                                {text: "AngularJS", state: {selected: true}},
                                {text: "Bootstrap"},
                                {text: "Css"}
                            ]
                        },
                        {
                            text: "服务端",
                            state: {
                                expanded: false
                            },
                            nodes: [
                                {text: "Java"},
                                {text: "Node"},
                                {text: "Python"}
                            ]
                        },
                        {
                            text: "数据库",
                            state: {
                                expanded: false
                            },
                            nodes:[
                                {text: "NoSQL"},
                                {text: "传统数据库"}
                            ]
                        }
                    ];
                    $('#tree').treeview({
                        data: tree,         // data is not optional
                        levels: 99
                    });
                });
            }
        }
    };

    return directive;
});