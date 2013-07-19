/*
 * Another In Place Editor - a jQuery edit in place plugin
 *
 * Copyright (c) 2009 Dave Hauenstein
 *
 * License:
 * This source file is subject to the BSD license bundled with this package.
 * Available online: {@link http://www.opensource.org/licenses/bsd-license.php}
 * If you did not receive a copy of the license, and are unable to obtain it,
 * email davehauenstein@gmail.com,
 * and I will send you a copy.
 *
 * Project home:
 * http://code.google.com/p/jquery-in-place-editor/
 *
 */
(function ($) {

  Drupal.behaviors.sipe = {
    attach: function(context, settings) {
      settings.sipe = settings.sipe || {};
      if (typeof settings.sipe.inlineditelements != 'undefined') {

        $.each(settings.sipe.inlineditelements, function(i, v) {
          var content = $("#" + v).text();
          var params = {
            url: 'http://' + window.location.hostname +  settings.basePath + settings.pathPrefix + 'sipe/ajax',
            //show_buttons: true,
            bg_over: "#fff1a8",
            value_required: true,
            use_html: true,
            field_type: 'textarea',
            textarea_cols: '60',
            textarea_rows: '25',
          };

//          if (content.length > 150) {
//            params.field_type = 'textarea';
//            params.textarea_rows = '15';
//          }
          $("#" + v).editInPlace(params);
        });
      }
    }
  };

})(jQuery);

//$(document).ready(function(){
//
//	// All examples use the commit to function interface for ease of demonstration.
//	// If you want to try it against a server, just comment the callback: and
//	// uncomment the url: lines.
//
//	// The most basic form of using the inPlaceEditor
//	$("#editme1").editInPlace({
//		callback: function(unused, enteredText) { return enteredText; },
//		// url: './server.php',
//		show_buttons: true
//	});
//
//	// This example shows how to call the function and display a textarea
//	// instead of a regular text box. A few other options are set as well,
//	// including an image saving icon, rows and columns for the textarea,
//	// and a different rollover color.
//	$("#editme2").editInPlace({
//		callback: function(unused, enteredText) { return enteredText; },
//		// url: "./server.php",
//		bg_over: "#cff",
//		field_type: "textarea",
//		textarea_rows: "15",
//		textarea_cols: "35",
//		saving_image: "./images/ajax-loader.gif"
//	});
//
//	// A select input field so we can limit our options
//	$("#editme3").editInPlace({
//		callback: function(unused, enteredText) { return enteredText; },
//		// url: "./server.php",
//		field_type: "select",
//		select_options: "Change me to this, No way:no"
//	});
//
//	// Using a callback function to update 2 divs
//	$("#editme4").editInPlace({
//		callback: function(original_element, html, original){
//			$("#updateDiv1").html("The original html was: " + original);
//			$("#updateDiv2").html("The updated text is: " + html);
//			return(html);
//		}
//	});
//
//	$("#editme5").editInPlace({
//		saving_animation_color: "#ECF2F8",
//		callback: function(idOfEditor, enteredText, orinalHTMLContent, settingsParams, animationCallbacks) {
//			animationCallbacks.didStartSaving();
//			setTimeout(animationCallbacks.didEndSaving, 2000);
//			return enteredText;
//		}
//	});
//
//	// If you need to remove an already bound editor you can call
//
//	// > $(selectorForEditors).unbind('.editInPlace')
//
//	// Which will remove all events that this editor has bound. You need to make sure however that the editor is 'closed' when you call this.
//
//});
