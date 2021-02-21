/* global Module */

/* Magic Mirror
 * Module: QRCode
 *
 * By Evghenii Marinescu https://github.com/MarinescuEvghenii/
 * MIT Licensed.
 */

'use strict';

Module.register("MMM-QRCode", {

	defaults: {
		text       : 'https://github.com/sham00o/MMM-QRCode',
		title			 : 'QR Code',
		colorDark  : "#fff",
		colorLight : "#000",
		imageSize  : 150,
		showTitle  : true
	},

	getStyles: function() {
		return ["MMM-QRCode.css"];
	},

	getScripts: function() {
		return ["qrcode.min.js"];
	},


	start: function() {
		this.config = Object.assign({}, this.defaults, this.config);
		Log.log("Starting module: " + this.name);
	},

	getDom: function() {
		const wrapperEl = document.createElement("div");
		wrapperEl.classList.add('qrcode');

		const qrcodeEl  = document.createElement("div");
		new QRCode(qrcodeEl, {
			text: this.config.text,
			width: this.config.imageSize,
			height: this.config.imageSize,
			colorDark : this.config.colorDark,
			colorLight : this.config.colorLight,
			correctLevel : QRCode.CorrectLevel.H
		});

		const imageEl  = document.createElement("div");
		imageEl.classList.add('qrcode__image');
		imageEl.appendChild(qrcodeEl);

		wrapperEl.appendChild(imageEl);

		if(this.config.showTitle) {
			const textEl = document.createElement("div");
			textEl.classList.add('qrcode__text');
			textEl.innerHTML = this.config.title;
			wrapperEl.appendChild(textEl);
		}

		return wrapperEl;
	}
});
