Simple inplace editor integration
=================================

A very simple module to make variables editable by end user.

It can be very useful if user (or client) want to have some custom text editable.

INSTALATION

1. install and enable
1. download the library http://code.google.com/p/jquery-in-place-editor (used version 2.2.1)
2. place the library in to location sites/all/libraries/jquery-editinplace/lib/jquery.editinplace.js
3. Enjoy!

USAGE

To make text (HTML) variable editable just call:
<?php
$name = 'hohoho';
$default_value = 'ahahahahaha';
sipe_variable_get($name, $default_value);
?>

This will give end user possibility to edit $default_value text inline just by click on it.
To edit text on other language just switch site language.

See sipe_variable_get() for details.


