embedImage Plugin for CKEditor 4
=================================

* Inspired by base64Image (http://ckeditor.com/addon/base64image)

Adds images from local client as base64 string into the source without server
side processing. You can also add external image urls into the source.

## Version:
0.0.1

## Features:
* Upload an image from local computer
* Upload an image from an url
* Set max file size
* Set allowed file types
* Scan for restricted image content - coming soon

Exclusions:
No validation on url based inclusions

 
## Requirements
The Browser must support the JavaScript File API.

## Installation

 1. Download the plugin from https://github.com/RamuRChenchaiah/Image-Embed
 
 2. Extract (decompress) the downloaded file into the plugins folder of your
	CKEditor installation.
	Example: /ckeditor/plugins/embedImage
	
 3. Enable the plugin by using the extraPlugins configuration setting.
	Example: CKEDITOR.config.extraPlugins = "embedImage";

 4. Set the file size as: (in MBs) - Default size is: 5 MB
	 Example: CKEDITOR.config.embedImageFileSize = 5; 

 5. Set the allowed types as :
 	 Example: CKEDITOR.config.embedImageFileTypes = 'image/png,image/jpeg';	

 6. Set the restriction on images: (default value is yes)
 	 Example: CKEDITOR.config.embedImageScanForRestriction = 'yes';	

 7. Include the jquery gritter in your index file or wherever you have included CKEditor.
     Example: 
	 <script src="ckpath/plugins/embedImage/js/jquery.gritter.min.js"> </script>
	 <link rel="stylesheet" type="text/css" href="ckpath/plugins/embedImage/css/jquery.gritter.css"> 

	or 
	if you have jquery gritter js & css files, include them appropriately.

## Unit tests
To run unit tests, goto the tests folder and access testSuite.html