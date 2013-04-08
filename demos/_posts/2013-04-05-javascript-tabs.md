---
layout: post-demos
title: jQuery Tabs
published: true
summary: My first attempt at creating a tabbed interface with jQuery.
category: demos
script:
- libs/jquery.min.js
- modules/tabs.js
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
/* Here's the tab JS code! */


$(document).ready(function() {
    (function(){
        var tabs = $("div#tabs"),
        tabContainers = tabs.find('div'),
        opts = {};

        // Here are the options. Not much so far!
        opts = {
            'selected': 0,
        };

        tabs.before('<nav id="nav" />');
        var nav = $("#nav"),
            count = 0;

        $(tabContainers).each(function() {
            var title = $(this).find("h2"),
                titleText = title.text(),
                $this = $(this);

            // add data-tab-content with number related to which tab it is
            $this.attr('data-tab-content', count);

            // add in the links with copy from the titles
            nav.append('<a href="#" data-tab="'+count+'">' + titleText + '</a>');

            // remove titles from regular content.
            title.remove("h2");

            // increment count by one
            count++;
        });

        // hide other tab content
        tabContainers.addClass('hidden');

        // except for 'selected' one
        tabContainers.eq(opts.selected).removeClass('hidden');

        var navItems = nav.find("a");
        navItems.eq(opts.selected).addClass('selected');

        navItems.on("click", function(e){
            e.preventDefault();
            var $this = $(this),
                linkCopy = $this.text(); // copy of link that has been clicked on


            $this.addClass("selected")
                .siblings().removeClass("selected");

            var dataTab = $this.data('tab');

            // show selected content
            tabContainers.eq(dataTab).removeClass('hidden').siblings().addClass('hidden');
        });



    })();
});
    </code>
</pre>