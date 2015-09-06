embedImage Plugin for CKEditor 4
=================================

* Inspired by base64Image (http://ckeditor.com/addon/base64image)

Adds images from local client as base64 string into the source without server
side processing. You can also add external image urls into the source.

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

 1. Download the plugin from http://github.com/rcramu/embedImage
 
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
