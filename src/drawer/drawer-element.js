Polymer('drawer-element', {
    observe: {
        open: 'openDrawer',
        close: 'closeDrawer'
    },
    openDrawer: function (oldValue, newValue) {
        if (newValue) {
            var isRight = this.getAttribute('right') != null;
            this.className = "";
            this.className = "animated hinge " + (isRight ? "slideOutRight right" : "slideOutLeft left");
            this.removeAttribute('close');
            this.close = false;
        }

    },
    closeDrawer: function (oldValue, newValue) {
        if (newValue) {
            var isRight = this.getAttribute('right') != null;
            this.className = "";
            this.className = "animated " + (isRight ? "slideInRight right" : "slideInLeft left");
            this.open = false;
        }
    },
    ready: function () {
        var drawer = this;
        var properties = {
            half: drawer.getAttribute('half') != null,
            right: drawer.getAttribute('right') != null,
            width: drawer.getAttribute('width'),
            height: drawer.getAttribute('height'),
            delay: drawer.getAttribute('delay') || 0
        };

        this.addEventListener('open-drawer', function () {
            drawer.openDrawer(false, true);
        });

        this.addEventListener('close-drawer', function () {
            drawer.closeDrawer(false, true);
        });

        if (properties.openOnClick) {
            drawer.className = properties.right ? "slideOutRight right" : "slideOutLeft left";
        } else {
            setTimeout(function () {
                drawer.style.setProperty('position', 'absolute');
                drawer.style.setProperty('top', '0');
                properties.right ?
                    drawer.style.setProperty('right', '0') : drawer.style.setProperty('left', '0');

                var htmlBounds = getBounds('html');
                var width = properties.half ? (htmlBounds.width / 2 ) + 'px' :
                    properties.width != null ? properties.width : htmlBounds.width + 'px';
                drawer.style.setProperty('width', width);
                var height = properties.width != null ? properties.width : htmlBounds.height + 'px';
                drawer.style.setProperty('height', height);
                drawer.className = "animated hinge " + (properties.right ? "slideOutRight right" : "slideOutLeft left");
            }, properties.delay);
        }
    }
});
