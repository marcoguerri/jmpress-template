/*
Copyright 2017, CERN

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of 
the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN 
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var direction;

$.jmpress("register", "right", function() {
    direction = "right";

    current_slide = $(this).jmpress('active');
    num_slides = $(".step").length;
    num_current = $(".step").index(current_slide);
    $(".progress").text(num_current + "/" + num_slides);
    
    console.log("Slide name", slide_name)
    if (current_slide.hasClass('chart_slide') && _.contains(_.keys(slides), slide_name)) {
        console.log("Class and slide");
        slide_info = slides[slide_name];
        console.log("Slide info", slide_info);
        if (slide_info.subslide_index == slide_info.subslides.length -1) {
            $(this).jmpress('next');
        } else {
            slide_info.subslide_index++;
            console.log('Title', slide_info.subslides[slide_info.subslide_index].slide_title)
            $('#' + slide_name + ' .slide_title').html(slide_info.subslides[slide_info.subslide_index].slide_title);
            updateChart(slide_name, slide_info.subslide_index);
        }
    } else {
       $(this).jmpress('next');
    }
});

$.jmpress("register", "left", function() {

    current_slide = $(this).jmpress('active');
    num_slides = $(".step").length;
    num_current = $(".step").index(current_slide);
    $(".progress").text(num_current + "/" + num_slides);
    direction = "left";
    current_slide = $(this).jmpress('active');
    slide_name = current_slide.attr('id');
    console.log("Current slide", current_slide);
    console.log("Slide name", slide_name)
    if (current_slide.hasClass('chart_slide') && _.contains(_.keys(slides), slide_name)) {
        console.log("Class and slide");
        slide_info = slides[slide_name];
        console.log("Slide info", slide_info);
        if (slide_info.subslide_index === 0) {
            $(this).jmpress('prev');
        } else {
            slide_info.subslide_index--;
            console.log('Title', slide_info.subslides[slide_info.subslide_index].slide_title)
            $('#' + slide_name + ' .slide_title').html(slide_info.subslides[slide_info.subslide_index].slide_title);
            updateChart(slide_name, slide_info.subslide_index);
        }
    } else {
       $(this).jmpress('prev');
    }
});

    $(function() {
        $.jmpress("template", "carousel", {
          children: function(idx) {
            return {
              r: 250,
              phi: idx*36,
              rotateY: idx*36,
              scale: 0.1,
              rotateX: 90
            };
          }
        });
    $.jmpress("template", "mytemplate", {
        children: function( idx, current_child, children ) {
            return {
                z: -3000 * (idx + 1),
                template: "mytemplate",
                scale: 0.3 * idx
            }
        }
    });
    $.jmpress("template", "grid", {
      scale: 1,
      z: 0
    });
    $.jmpress("template", "grid", {
      children: [
        {x: 3000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 6000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 9000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 12000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 15000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 18000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 21000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 24000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 27000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 30000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 33000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 36000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 39000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 42000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 45000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 48000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 51000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 54000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 57000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 63000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 66000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 69000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 72000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 75000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 78000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 81000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 84000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 87000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 90000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 93000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 96000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 99000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 102000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 105000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 108000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 111000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 114000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 117000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 120000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 123000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 126000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 129000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 131000, y: 0, z: 0, scale: 1, template: "grid"},
        {x: 136000, y: 0, z: 0, scale: 1, template: "grid"},
      ]
    });

    $('#presentation').jmpress({
        viewPort: {
            height: 800,
            width: 1280,
            maxScale: 2
        },
        keyboard: {
            keys: {
                37: "left",
                39: "right",
                33: "left",
                34: "right"
            }
        },
        beforeChange: function(element, eventData) {
            // jmpress.js callback called before changing each step
            slide_name = $(element).attr('id');
            console.log('We\'re changing to step: #' + slide_name + '!');
            if (element.hasClass('chart_slide') && _.contains(_.keys(slides), slide_name)) {
                slide_info = slides[slide_name];
                console.log(slide_info);
                if (slide_info.subslide_index == slide_info.subslides.length - 1 && direction == 'right') {
                    slide_info.subslide_index = 0;
                    console.log('Title', slide_info.subslides[slide_info.subslide_index].slide_title)
                    $('#' + slide_name + ' .slide_title').html(slide_info.subslides[slide_info.subslide_index].slide_title);
                    updateChart(slide_name, slide_info.subslide_index);
                }
                if (slide_info.subslide_index === 0 && direction == 'left') {
                    slide_info.subslide_index = slide_info.subslides.length - 1;
                    console.log('Title', slide_info.subslides[slide_info.subslide_index].slide_title)
                    $('#' + slide_name + ' .slide_title').html(slide_info.subslides[slide_info.subslide_index].slide_title);
                    updateChart(slide_name, slide_info.subslide_index);
                }
            }
        }
    });

});

