/*
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */
CKEDITOR.plugins.add("embedImage", {
	lang 	: 	["en"],
	requires: 	"dialog",
	icons	:	"embedImage",
	hidpi	:	true,
    init	: 	function(editor){
					var pluginName = 'embedImageDialog';
					
					editor.ui.addButton("embedImage", {
						label: editor.lang.common.image,
						command: pluginName,
						toolbar: "insert"
					});
					CKEDITOR.dialog.add(pluginName, this.path + "dialogs/embedImage.js");
					
					var allowed = 'img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}',
						required = 'img[alt,src]';
					
					editor.addCommand( pluginName, new CKEDITOR.dialogCommand( pluginName, {
						allowedContent: allowed,
						requiredContent: required,
						contentTransformations: [
							[ 'img{width}: sizeToStyle', 'img[width]: sizeToAttribute' ],
							[ 'img{float}: alignmentToStyle', 'img[align]: alignmentToAttribute' ]
						]
					} ) );
					editor.on("doubleclick", function(evt){
						if(evt.data.element && !evt.data.element.isReadOnly() && evt.data.element.getName() === "img") {
							evt.data.dialog = pluginName;
							editor.getSelection().selectElement(evt.data.element);
						}
					});
					if(editor.addMenuItem) {
						editor.addMenuGroup("embedImageGroup");
						editor.addMenuItem("embedImageItem", {
							label: editor.lang.common.image,
							icon: this.path+"icons/embedImage.png",
							command: pluginName,
							group: "embedImageGroup"
						});
					}
					if(editor.contextMenu) {
						editor.contextMenu.addListener(function(element, selection) {
							if(element && element.getName() === "img") {
								editor.getSelection().selectElement(element);
								return { embedImageItem: CKEDITOR.TRISTATE_ON };
							}
							return null;
						});
					}
				}
});
