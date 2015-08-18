/*
 * Copyright (c) 2015
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function() {

	/**
	 * @class OCA.Files.DetailTabView
	 * @classdesc
	 *
	 * Base class for tab views to display file information.
	 *
	 */
	var DetailTabView = OC.Backbone.View.extend({
		tag: 'div',

		className: 'tab',

		/**
		 * Tab label
		 */
		_label: null,

		_template: null,

		initialize: function() {
			if (!this.id) {
				this.id = 'detailTabView' + DetailTabView._TAB_COUNT;
				DetailTabView._TAB_COUNT++;
			}
		},

		/**
		 * Returns the tab label
		 *
		 * @return {String} label
		 */
		getLabel: function() {
			return 'Tab ' + this.id;
		},

		/**
		 * returns the jQuery object for HTML output
		 *
		 * @returns {jQuery}
		 */
		get$: function() {
			return this.$el;
		},

		/**
		 * Renders this details view
		 *
		 * @abstract
		 */
		render: function() {
			// to be implemented in subclass
			// FIXME: code is only for testing
			this.$el.html('<div>Hello ' + this.id + '</div>');
		},

		/**
		 * Sets the file info to be displayed in the view
		 *
		 * @param {OCA.Files.FileInfoModel} fileInfo file info to set
		 */
		setFileInfo: function(fileInfo) {
			if (this.model !== fileInfo) {
				this.model = fileInfo;
				this.render();
			}
		},

		/**
		 * Returns the file info.
		 *
		 * @return {OCA.Files.FileInfoModel} file info
		 */
		getFileInfo: function() {
			return this.model;
		}
	});
	DetailTabView._TAB_COUNT = 0;

	OCA.Files.DetailTabView = DetailTabView;
})();

