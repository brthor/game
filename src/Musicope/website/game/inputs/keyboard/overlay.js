var Musicope;
(function (Musicope) {
    (function (Game) {
        (function (Inputs) {
            (function (KeyboardFns) {
                (function (Overlay) {
                    var displayDescription;
                    var displayValue;
                    var oldTimeOut;

                    function createDomIfNeeded() {
                        if (!displayDescription || !displayValue) {
                            var container = $("<div style='position:absolute; top:0px; left:0; color:white; font-size:xx-large; text-align:left;' />").appendTo("body");
                            displayDescription = $("<span />").appendTo(container);
                            displayValue = $("<span style='color:red;' />").appendTo(container);
                        }
                    }

                    function display(description, value) {
                        var str;
                        if (typeof value == "number") {
                            str = Math.round(1000 * value) / 1000;
                        } else {
                            str = value;
                        }

                        createDomIfNeeded();
                        displayDescription.text(description + ": ");
                        displayValue.text(str);
                        clearTimeout(oldTimeOut);
                        oldTimeOut = setTimeout(function () {
                            displayDescription.text("");
                            displayValue.text("");
                        }, 5000);
                    }
                    Overlay.display = display;
                })(KeyboardFns.Overlay || (KeyboardFns.Overlay = {}));
                var Overlay = KeyboardFns.Overlay;
            })(Inputs.KeyboardFns || (Inputs.KeyboardFns = {}));
            var KeyboardFns = Inputs.KeyboardFns;
        })(Game.Inputs || (Game.Inputs = {}));
        var Inputs = Game.Inputs;
    })(Musicope.Game || (Musicope.Game = {}));
    var Game = Musicope.Game;
})(Musicope || (Musicope = {}));
//# sourceMappingURL=overlay.js.map