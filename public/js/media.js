/*
    Copyright (C) 2015  PencilBlue, LLC

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

$(document).ready(function()
{
    sizeMediaEmbeds();
    $(window).resize(sizeMediaEmbeds);
});

/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!function(a){"use strict";a("a.page-scroll").bind("click",function(e){var l=a(this);a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);


function sizeMediaEmbeds()
{
    $('.media_embed').each(function()
    {
        var mediaEmbed = $(this);
        var caption = mediaEmbed.find('.media_caption').first();
        var media = mediaEmbed.find('img').first();

        var captionPadding = Math.ceil(caption.css('padding-left').split('px').join('')) + Math.ceil(caption.css('padding-right').split('px').join(''));

        if(!media)
        {
            media = $(this).find('iframe').first();
        }

        if(media.width() > 0)
        {
            caption.width(media.width() - captionPadding);
        }
        else
        {
            media.load(function()
            {
                caption.width(media.width() - captionPadding);
            });
        }
    });
}
