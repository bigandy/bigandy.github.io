---
layout: post-demos
title: jQuery Tabs v2
published: true
summary: My second attempt at creating a tabbed interface with jQuery.
category: demos
script:
- libs/jquery.min.js
- modules/tabs2.js

post-class: tabs2
---

<div id="tabs" class="tabs-container">
    <div class="tab">
        <h2>Tab 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestias obcaecati sed at accusantium odio quam doloremque tenetur? Vitae, nam sequi consequatur voluptates odit eum temporibus incidunt veritatis aliquid repellendus!</p>
    </div>
    <div class="tab">
        <h2>Tab 2</h2>
        <p>Voluptatum, voluptate, cupiditate, nisi, quo pariatur eum quidem asperiores expedita dolorem magnam illum eligendi adipisci labore. Molestias, ipsa, officiis, totam, officia quas consequuntur ut sunt repellat reiciendis error quisquam minima!</p>
    </div>
    <div class="tab">
        <h2>Tab 3</h2>
        <p>Saepe, cum, eligendi, placeat minus at sit optio soluta vitae blanditiis inventore sint adipisci atque illum cumque rem repellat necessitatibus ducimus quibusdam culpa temporibus. Perspiciatis, aliquam molestias dicta a ab?</p>
    </div>
    <div class="tab">
        <h2>Tab 4</h2>
        <p>Ipsam, non, reprehenderit aperiam aliquam distinctio quia sequi fugit cupiditate in eaque alias eius quisquam autem. Atque, voluptatem dignissimos rerum impedit soluta corporis vero aspernatur dolorem quas autem enim suscipit.</p>
    </div>
    <div class="tab">
        <h2>Tab 5</h2>
        <p>Maxime, amet, quasi, cupiditate assumenda nihil similique corporis explicabo cumque blanditiis quaerat ab optio nulla fuga ea laudantium unde sunt recusandae ducimus eos molestias ad molestiae dignissimos numquam dolor magni.</p>
    </div>
</div>

<pre>
    <code>
/* Tabs v2 */

$(document).ready(function() {

    function tabs(opts) {

        // define default settings
        var defaults = {
            'selected': 4,
            'time': 300
        }

        var settings = $.extend({}, defaults, opts), // extend defaults with the opts that are inputted into the function
            tabContainer = $("#tabs"),
            tabs = tabContainer.find("div"),
            headings = tabs.find("h2"), // get all the h2s
            headingsText = headings.text(),
            headingsLength = headings.length, // count the number of headings
            nav = "",
            navLinks = "",
            currentLink = settings.selected, // integer
            currentTime = settings.time; // integer

            // add the nav before the tabs
            tabContainer.before('<nav id="nav" />');
            nav = $("#nav");

            // output each title wrapped in an <a> tag
            headings.each(function(i){
                nav.append('<a href="#" data-tab="'+i+'">' + $(this).text() + '</a>');
                i++;
            });

            // put data-content onto each div
            tabs.each(function(j){
                $(this).attr("data-content", j+1);
            });

            navLinks = nav.find("a");

            // add class of selected to initially selected a
            navLinks.eq(currentLink).addClass('selected');

            // hide all tab content
            tabs.hide();
            tabs.eq(currentLink).show();

            navLinks.on("click", function(e){
                e.preventDefault();
                var $this = $(this),
                    thisData = $this.data('tab');

                $this.addClass('selected').siblings().removeClass('selected');
                // show desired tab, hide others
                tabs.eq(thisData).show(currentTime).siblings().hide(currentTime);

            });
    }

    var myOpts = {
        'time': 100,
        'selected': 0
    };

    // Call the function with options
    tabs(myOpts);

});
    </code>
</pre>