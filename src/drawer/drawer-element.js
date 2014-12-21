Polymer('drawer-element', {
    ready: function () {
        var properties = {
            half: this.getAttribute('half') != null,
            right: this.getAttribute('right') != null,
            width: this.getAttribute('width'),
            height: this.getAttribute('height')
        };

        this.style.setProperty('position', 'absolute');
        this.style.setProperty('top', '0');
        properties.right ?
            this.style.setProperty('right', '0') : this.style.setProperty('left', '0');

        var htmlBounds = getBounds('html');
        var width = properties.half ? htmlBounds.width / 2 :
            properties.width != null ? properties.width : htmlBounds.width + 'px';
        this.style.setProperty('width', width);
        var height = properties.width != null ? properties.width : htmlBounds.height + 'px';
        this.style.setProperty('height', height);
        this.className = "animated hinge " + (properties.right ? "slideOutRight right" : "slideOutLeft left");
    }
});
