'use strict';
define([], function() {
    var directive = {};
    directive.blogLabelDirective = function() {
        return {
            restrict: 'AE',
            replace: true,
            template: '<span ng-repeat="blog_label in labels"><a href="#" style="padding:2px;font-size: 18px;word-wrap:break-word;color: #007fff;font-size: {{blog_label.articles.length/4+14+\'px\'}}" ng-bind="blog_label.label_name"></a></span>'
        }
    };

    return directive;
});