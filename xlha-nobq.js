(function(b, a) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = a() : typeof define === "function" && define.amd ? define(a) : (b = typeof globalThis !== "undefined" ? globalThis : b || self, b.Cropper = a())
}(this, (function() {
    function G(b2) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            G = function(b3) {
                return typeof b3
            }
        } else {
            G = function(b3) {
                return b3 && typeof Symbol === "function" && b3.constructor === Symbol && b3 !== Symbol.prototype ? "symbol" : typeof b3
            }
        }
        return G(b2)
    }

    function aC(b2, b3) {
        if (!(b2 instanceof b3)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function bM(b5, b3) {
        for (var b2 = 0; b2 < b3.length; b2++) {
            var b4 = b3[b2];
            b4.enumerable = b4.enumerable || false;
            b4.configurable = true;
            if ("value" in b4) {
                b4.writable = true
            }
            Object.defineProperty(b5, b4.key, b4)
        }
    }

    function a8(b4, b2, b3) {
        if (b2) {
            bM(b4.prototype, b2)
        }
        if (b3) {
            bM(b4, b3)
        }
        return b4
    }

    function bi(b4, b2, b3) {
        if (b2 in b4) {
            Object.defineProperty(b4, b2, {
                value: b3,
                enumerable: true,
                configurable: true,
                writable: true
            })
        } else {
            b4[b2] = b3
        }
        return b4
    }

    function bI(b3, b4) {
        var b5 = Object.keys(b3);
        if (Object.getOwnPropertySymbols) {
            var b2 = Object.getOwnPropertySymbols(b3);
            if (b4) {
                b2 = b2.filter(function(b6) {
                    return Object.getOwnPropertyDescriptor(b3, b6).enumerable
                })
            }
            b5.push.apply(b5, b2)
        }
        return b5
    }

    function bW(b4) {
        for (var b2 = 1; b2 < arguments.length; b2++) {
            var b3 = arguments[b2] != null ? arguments[b2] : {};
            if (b2 % 2) {
                bI(Object(b3), true).forEach(function(b5) {
                    bi(b4, b5, b3[b5])
                })
            } else {
                if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(b4, Object.getOwnPropertyDescriptors(b3))
                } else {
                    bI(Object(b3)).forEach(function(b5) {
                        Object.defineProperty(b4, b5, Object.getOwnPropertyDescriptor(b3, b5))
                    })
                }
            }
        }
        return b4
    }

    function an(b2) {
        return aH(b2) || av(b2) || aZ(b2) || q()
    }

    function aH(b2) {
        if (Array.isArray(b2)) {
            return be(b2)
        }
    }

    function av(b2) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(b2)) {
            return Array.from(b2)
        }
    }

    function aZ(b3, b2) {
        if (!b3) {
            return
        }
        if (typeof b3 === "string") {
            return be(b3, b2)
        }
        var b4 = Object.prototype.toString.call(b3).slice(8, -1);
        if (b4 === "Object" && b3.constructor) {
            b4 = b3.constructor.name
        }
        if (b4 === "Map" || b4 === "Set") {
            return Array.from(b3)
        }
        if (b4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b4)) {
            return be(b3, b2)
        }
    }

    function be(b3, b2) {
        if (b2 == null || b2 > b3.length) {
            b2 = b3.length
        }
        for (var b5 = 0, b4 = new Array(b2); b5 < b2; b5++) {
            b4[b5] = b3[b5]
        }
        return b4
    }

    function q() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var h = typeof window !== "undefined" && typeof window.document !== "undefined";
    var aw = h ? window : {};
    var P = h && aw.document.documentElement ? "ontouchstart" in aw.document.documentElement : false;
    var bz = h ? "PointerEvent" in aw : false;
    var M = "cropper";
    var ae = "all";
    var bd = "crop";
    var bK = "move";
    var F = "zoom";
    var ay = "e";
    var X = "w";
    var b = "s";
    var bV = "n";
    var a0 = "ne";
    var aD = "nw";
    var e = "se";
    var bL = "sw";
    var bA = "".concat(M, "-crop");
    var f = "".concat(M, "-disabled");
    var g = "".concat(M, "-hidden");
    var aj = "".concat(M, "-hide");
    var ai = "".concat(M, "-invisible");
    var bo = "".concat(M, "-modal");
    var bZ = "".concat(M, "-move");
    var bp = "".concat(M, "Action");
    var a2 = "".concat(M, "Preview");
    var aq = "crop";
    var aO = "move";
    var at = "none";
    var bO = "crop";
    var aY = "cropend";
    var bT = "cropmove";
    var D = "cropstart";
    var bP = "dblclick";
    var bn = P ? "touchstart" : "mousedown";
    var bh = P ? "touchmove" : "mousemove";
    var I = P ? "touchend touchcancel" : "mouseup";
    var bw = bz ? "pointerdown" : bn;
    var bG = bz ? "pointermove" : bh;
    var bQ = bz ? "pointerup pointercancel" : I;
    var ak = "ready";
    var az = "resize";
    var aL = "wheel";
    var ap = "zoom";
    var aJ = "image/jpeg";
    var S = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
    var a9 = /^data:/;
    var bF = /^data:image\/jpeg;base64,/;
    var ba = /^img|canvas$/i;
    var C = 200;
    var aG = 100;
    var V = {
        viewMode: 0,
        dragMode: aq,
        initialAspectRatio: NaN,
        aspectRatio: NaN,
        data: null,
        preview: "",
        responsive: true,
        restore: true,
        checkCrossOrigin: true,
        checkOrientation: true,
        modal: true,
        guides: true,
        center: true,
        highlight: true,
        background: true,
        autoCrop: true,
        autoCropArea: 0.8,
        movable: true,
        rotatable: true,
        scalable: true,
        zoomable: true,
        zoomOnTouch: true,
        zoomOnWheel: true,
        wheelZoomRatio: 0.1,
        cropBoxMovable: true,
        cropBoxResizable: true,
        toggleDragModeOnDblclick: true,
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: C,
        minContainerHeight: aG,
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
    };
    var al = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
    var aI = Number.isNaN || aw.isNaN;

    function af(b2) {
        return typeof b2 === "number" && !aI(b2)
    }
    var bC = function bC(b2) {
        return b2 > 0 && b2 < Infinity
    };

    function aP(b2) {
        return typeof b2 === "undefined"
    }

    function bY(b2) {
        return G(b2) === "object" && b2 !== null
    }
    var J = Object.prototype.hasOwnProperty;

    function w(b4) {
        if (!bY(b4)) {
            return false
        }
        try {
            var b5 = b4.constructor;
            var b3 = b5.prototype;
            return b5 && b3 && J.call(b3, "isPrototypeOf")
        } catch (b2) {
            return false
        }
    }

    function n(b2) {
        return typeof b2 === "function"
    }
    var B = Array.prototype.slice;

    function s(b2) {
        return Array.from ? Array.from(b2) : B.call(b2)
    }

    function ar(b2, b3) {
        if (b2 && n(b3)) {
            if (Array.isArray(b2) || af(b2.length)) {
                s(b2).forEach(function(b5, b4) {
                    b3.call(b2, b5, b4, b2)
                })
            } else {
                if (bY(b2)) {
                    Object.keys(b2).forEach(function(b4) {
                        b3.call(b2, b2[b4], b4, b2)
                    })
                }
            }
        }
        return b2
    }
    var ag = Object.assign || function ag(b5) {
        for (var b2 = arguments.length, b3 = new Array(b2 > 1 ? b2 - 1 : 0), b4 = 1; b4 < b2; b4++) {
            b3[b4 - 1] = arguments[b4]
        }
        if (bY(b5) && b3.length > 0) {
            b3.forEach(function(b6) {
                if (bY(b6)) {
                    Object.keys(b6).forEach(function(b7) {
                        b5[b7] = b6[b7]
                    })
                }
            })
        }
        return b5
    };
    var bl = /\.\d*(?:0|9){12}\d*$/;

    function bq(b2) {
        var b3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
        return bl.test(b2) ? Math.round(b2 * b3) / b3 : b2
    }
    var i = /^width|height|left|top|marginLeft|marginTop$/;

    function T(b2, b4) {
        var b3 = b2.style;
        ar(b4, function(b6, b5) {
            if (i.test(b5) && af(b6)) {
                b6 = "".concat(b6, "px")
            }
            b3[b5] = b6
        })
    }

    function z(b2, b3) {
        return b2.classList ? b2.classList.contains(b3) : b2.className.indexOf(b3) > -1
    }

    function x(b2, b4) {
        if (!b4) {
            return
        }
        if (af(b2.length)) {
            ar(b2, function(b5) {
                x(b5, b4)
            });
            return
        }
        if (b2.classList) {
            b2.classList.add(b4);
            return
        }
        var b3 = b2.className.trim();
        if (!b3) {
            b2.className = b4
        } else {
            if (b3.indexOf(b4) < 0) {
                b2.className = "".concat(b3, " ").concat(b4)
            }
        }
    }

    function a5(b2, b3) {
        if (!b3) {
            return
        }
        if (af(b2.length)) {
            ar(b2, function(b4) {
                a5(b4, b3)
            });
            return
        }
        if (b2.classList) {
            b2.classList.remove(b3);
            return
        }
        if (b2.className.indexOf(b3) >= 0) {
            b2.className = b2.className.replace(b3, "")
        }
    }

    function a3(b2, b4, b3) {
        if (!b4) {
            return
        }
        if (af(b2.length)) {
            ar(b2, function(b5) {
                a3(b5, b4, b3)
            });
            return
        }
        if (b3) {
            x(b2, b4)
        } else {
            a5(b2, b4)
        }
    }
    var u = /([a-z\d])([A-Z])/g;

    function aA(b2) {
        return b2.replace(u, "$1-$2").toLowerCase()
    }

    function bg(b3, b2) {
        if (bY(b3[b2])) {
            return b3[b2]
        }
        if (b3.dataset) {
            return b3.dataset[b2]
        }
        return b3.getAttribute("data-".concat(aA(b2)))
    }

    function au(b3, b2, b4) {
        if (bY(b4)) {
            b3[b2] = b4
        } else {
            if (b3.dataset) {
                b3.dataset[b2] = b4
            } else {
                b3.setAttribute("data-".concat(aA(b2)), b4)
            }
        }
    }

    function p(b4, b3) {
        if (bY(b4[b3])) {
            try {
                delete b4[b3]
            } catch (b2) {
                b4[b3] = undefined
            }
        } else {
            if (b4.dataset) {
                try {
                    delete b4.dataset[b3]
                } catch (b2) {
                    b4.dataset[b3] = undefined
                }
            } else {
                b4.removeAttribute("data-".concat(aA(b3)))
            }
        }
    }
    var H = /\s\s*/;
    var aK = function() {
        var b2 = false;
        if (h) {
            var b5 = false;
            var b6 = function b6() {};
            var b4 = Object.defineProperty({}, "once", {
                get: function b3() {
                    b2 = true;
                    return b5
                },
                set: function b7(b8) {
                    b5 = b8
                }
            });
            aw.addEventListener("test", b6, b4);
            aw.removeEventListener("test", b6, b4)
        }
        return b2
    }();

    function j(b3, b5, b6) {
        var b2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var b4 = b6;
        b5.trim().split(H).forEach(function(b8) {
            if (!aK) {
                var b7 = b3.listeners;
                if (b7 && b7[b8] && b7[b8][b6]) {
                    b4 = b7[b8][b6];
                    delete b7[b8][b6];
                    if (Object.keys(b7[b8]).length === 0) {
                        delete b7[b8]
                    }
                    if (Object.keys(b7).length === 0) {
                        delete b3.listeners
                    }
                }
            }
            b3.removeEventListener(b8, b4, b2)
        })
    }

    function bv(b4, b5, b6) {
        var b3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var b2 = b6;
        b5.trim().split(H).forEach(function(ca) {
            if (b3.once && !aK) {
                var b7 = b4.listeners,
                    b9 = b7 === void 0 ? {} : b7;
                b2 = function b8() {
                    delete b9[ca][b6];
                    b4.removeEventListener(ca, b2, b3);
                    for (var cb = arguments.length, cd = new Array(cb), cc = 0; cc < cb; cc++) {
                        cd[cc] = arguments[cc]
                    }
                    b6.apply(b4, cd)
                };
                if (!b9[ca]) {
                    b9[ca] = {}
                }
                if (b9[ca][b6]) {
                    b4.removeEventListener(ca, b9[ca][b6], b3)
                }
                b9[ca][b6] = b2;
                b4.listeners = b9
            }
            b4.addEventListener(ca, b2, b3)
        })
    }

    function aT(b2, b3, b5) {
        var b4;
        if (n(Event) && n(CustomEvent)) {
            b4 = new CustomEvent(b3, {
                detail: b5,
                bubbles: true,
                cancelable: true
            })
        } else {
            b4 = document.createEvent("CustomEvent");
            b4.initCustomEvent(b3, true, true, b5)
        }
        return b2.dispatchEvent(b4)
    }

    function bX(b2) {
        var b3 = b2.getBoundingClientRect();
        return {
            left: b3.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: b3.top + (window.pageYOffset - document.documentElement.clientTop)
        }
    }
    var aM = aw.location;
    var aQ = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

    function bk(b2) {
        var b3 = b2.match(aQ);
        return b3 !== null && (b3[1] !== aM.protocol || b3[2] !== aM.hostname || b3[3] !== aM.port)
    }

    function bR(b2) {
        var b3 = "timestamp=".concat(new Date().getTime());
        return b2 + (b2.indexOf("?") === -1 ? "?" : "&") + b3
    }

    function K(b7) {
        var b6 = b7.rotate,
            b5 = b7.scaleX,
            b3 = b7.scaleY,
            b9 = b7.translateX,
            b8 = b7.translateY;
        var b2 = [];
        if (af(b9) && b9 !== 0) {
            b2.push("translateX(".concat(b9, "px)"))
        }
        if (af(b8) && b8 !== 0) {
            b2.push("translateY(".concat(b8, "px)"))
        }
        if (af(b6) && b6 !== 0) {
            b2.push("rotate(".concat(b6, "deg)"))
        }
        if (af(b5) && b5 !== 1) {
            b2.push("scaleX(".concat(b5, ")"))
        }
        if (af(b3) && b3 !== 1) {
            b2.push("scaleY(".concat(b3, ")"))
        }
        var b4 = b2.length ? b2.join(" ") : "none";
        return {
            WebkitTransform: b4,
            msTransform: b4,
            transform: b4
        }
    }

    function bf(b2) {
        var b4 = bW({}, b2);
        var b3 = 0;
        ar(b2, function(b6, b5) {
            delete b4[b5];
            ar(b4, function(b7) {
                var b9 = Math.abs(b6.startX - b7.startX);
                var cc = Math.abs(b6.startY - b7.startY);
                var b8 = Math.abs(b6.endX - b7.endX);
                var ca = Math.abs(b6.endY - b7.endY);
                var ce = Math.sqrt(b9 * b9 + cc * cc);
                var cd = Math.sqrt(b8 * b8 + ca * ca);
                var cb = (cd - ce) / ce;
                if (Math.abs(cb) > Math.abs(b3)) {
                    b3 = cb
                }
            })
        });
        return b3
    }

    function aB(b6, b5) {
        var b4 = b6.pageX,
            b3 = b6.pageY;
        var b2 = {
            endX: b4,
            endY: b3
        };
        return b5 ? b2 : bW({
            startX: b4,
            startY: b3
        }, b2)
    }

    function bu(b2) {
        var b4 = 0;
        var b3 = 0;
        var b5 = 0;
        ar(b2, function(b8) {
            var b7 = b8.startX,
                b6 = b8.startY;
            b4 += b7;
            b3 += b6;
            b5 += 1
        });
        b4 /= b5;
        b3 /= b5;
        return {
            pageX: b4,
            pageY: b3
        }
    }

    function bx(b9) {
        var b6 = b9.aspectRatio,
            b2 = b9.height,
            b5 = b9.width;
        var b4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "contain";
        var b8 = bC(b5);
        var b7 = bC(b2);
        if (b8 && b7) {
            var b3 = b2 * b6;
            if (b4 === "contain" && b3 > b5 || b4 === "cover" && b3 < b5) {
                b2 = b5 / b6
            } else {
                b5 = b2 * b6
            }
        } else {
            if (b8) {
                b2 = b5 / b6
            } else {
                if (b7) {
                    b5 = b2 * b6
                }
            }
        }
        return {
            width: b5,
            height: b2
        }
    }

    function bs(b5) {
        var b3 = b5.width,
            ca = b5.height,
            b6 = b5.degree;
        b6 = Math.abs(b6) % 180;
        if (b6 === 90) {
            return {
                width: ca,
                height: b3
            }
        }
        var b4 = b6 % 90 * Math.PI / 180;
        var b8 = Math.sin(b4);
        var b9 = Math.cos(b4);
        var b7 = b3 * b9 + ca * b8;
        var b2 = b3 * b8 + ca * b9;
        return b6 > 90 ? {
            width: b2,
            height: b7
        } : {
            width: b7,
            height: b2
        }
    }

    function a6(b5, ca, b9, b7) {
        var cm = ca.aspectRatio,
            cz = ca.naturalWidth,
            cu = ca.naturalHeight,
            ct = ca.rotate,
            cD = ct === void 0 ? 0 : ct,
            ch = ca.scaleX,
            cx = ch === void 0 ? 1 : ch,
            cf = ca.scaleY,
            cw = cf === void 0 ? 1 : cf;
        var co = b9.aspectRatio,
            b8 = b9.naturalWidth,
            cb = b9.naturalHeight;
        var cE = b7.fillColor,
            cG = cE === void 0 ? "transparent" : cE,
            cy = b7.imageSmoothingEnabled,
            ce = cy === void 0 ? true : cy,
            cp = b7.imageSmoothingQuality,
            cc = cp === void 0 ? "low" : cp,
            cr = b7.maxWidth,
            cn = cr === void 0 ? Infinity : cr,
            cA = b7.maxHeight,
            cC = cA === void 0 ? Infinity : cA,
            ck = b7.minWidth,
            cd = ck === void 0 ? 0 : ck,
            cg = b7.minHeight,
            cl = cg === void 0 ? 0 : cg;
        var b6 = document.createElement("canvas");
        var cF = b6.getContext("2d");
        var cB = bx({
            aspectRatio: co,
            width: cn,
            height: cC
        });
        var cv = bx({
            aspectRatio: co,
            width: cd,
            height: cl
        }, "cover");
        var b2 = Math.min(cB.width, Math.max(cv.width, b8));
        var b4 = Math.min(cB.height, Math.max(cv.height, cb));
        var cq = bx({
            aspectRatio: cm,
            width: cn,
            height: cC
        });
        var cj = bx({
            aspectRatio: cm,
            width: cd,
            height: cl
        }, "cover");
        var ci = Math.min(cq.width, Math.max(cj.width, cz));
        var cs = Math.min(cq.height, Math.max(cj.height, cu));
        var b3 = [-ci / 2, -cs / 2, ci, cs];
        b6.width = bq(b2);
        b6.height = bq(b4);
        cF.fillStyle = cG;
        cF.fillRect(0, 0, b2, b4);
        cF.save();
        cF.translate(b2 / 2, b4 / 2);
        cF.rotate(cD * Math.PI / 180);
        cF.scale(cx, cw);
        cF.imageSmoothingEnabled = ce;
        cF.imageSmoothingQuality = cc;
        cF.drawImage.apply(cF, [b5].concat(an(b3.map(function(cH) {
            return Math.floor(bq(cH))
        }))));
        cF.restore();
        return b6
    }
    var r = String.fromCharCode;

    function O(b5, b6, b3) {
        var b4 = "";
        b3 += b6;
        for (var b2 = b6; b2 < b3; b2 += 1) {
            b4 += r(b5.getUint8(b2))
        }
        return b4
    }
    var ab = /^data:.*,/;

    function aF(b5) {
        var b3 = b5.replace(ab, "");
        var b6 = atob(b3);
        var b4 = new ArrayBuffer(b6.length);
        var b2 = new Uint8Array(b4);
        ar(b2, function(b8, b7) {
            b2[b7] = b6.charCodeAt(b7)
        });
        return b4
    }

    function aa(b3, b4) {
        var b6 = [];
        var b5 = 8192;
        var b2 = new Uint8Array(b3);
        while (b2.length > 0) {
            b6.push(r.apply(null, s(b2.subarray(0, b5))));
            b2 = b2.subarray(b5)
        }
        return "data:".concat(b4, ";base64,").concat(btoa(b6.join("")))
    }

    function y(b9) {
        var ce = new DataView(b9);
        var b4;
        try {
            var b3;
            var b8;
            var ch;
            if (ce.getUint8(0) === 255 && ce.getUint8(1) === 216) {
                var b5 = ce.byteLength;
                var b6 = 2;
                while (b6 + 1 < b5) {
                    if (ce.getUint8(b6) === 255 && ce.getUint8(b6 + 1) === 225) {
                        b8 = b6;
                        break
                    }
                    b6 += 1
                }
            }
            if (b8) {
                var cg = b8 + 4;
                var cd = b8 + 10;
                if (O(ce, cg, 4) === "Exif") {
                    var cb = ce.getUint16(cd);
                    b3 = cb === 18761;
                    if (b3 || cb === 19789) {
                        if (ce.getUint16(cd + 2, b3) === 42) {
                            var b2 = ce.getUint32(cd + 4, b3);
                            if (b2 >= 8) {
                                ch = cd + b2
                            }
                        }
                    }
                }
            }
            if (ch) {
                var ca = ce.getUint16(ch, b3);
                var cf;
                var b7;
                for (b7 = 0; b7 < ca; b7 += 1) {
                    cf = ch + b7 * 12 + 2;
                    if (ce.getUint16(cf, b3) === 274) {
                        cf += 8;
                        b4 = ce.getUint16(cf, b3);
                        ce.setUint16(cf, 1, b3);
                        break
                    }
                }
            }
        } catch (cc) {
            b4 = 1
        }
        return b4
    }

    function k(b3) {
        var b5 = 0;
        var b4 = 1;
        var b2 = 1;
        switch (b3) {
            case 2:
                b4 = -1;
                break;
            case 3:
                b5 = -180;
                break;
            case 4:
                b2 = -1;
                break;
            case 5:
                b5 = 90;
                b2 = -1;
                break;
            case 6:
                b5 = 90;
                break;
            case 7:
                b5 = 90;
                b4 = -1;
                break;
            case 8:
                b5 = -90;
                break
        }
        return {
            rotate: b5,
            scaleX: b4,
            scaleY: b2
        }
    }
    var Y = {
        render: function Y() {
            this.initContainer();
            this.initCanvas();
            this.initCropBox();
            this.renderCanvas();
            if (this.cropped) {
                this.renderCropBox()
            }
        },
        initContainer: function br() {
            var b5 = this.element,
                b4 = this.options,
                b3 = this.container,
                b7 = this.cropper;
            var b6 = Number(b4.minContainerWidth);
            var b8 = Number(b4.minContainerHeight);
            x(b7, g);
            a5(b5, g);
            var b2 = {
                width: Math.max(b3.offsetWidth, b6 >= 0 ? b6 : C),
                height: Math.max(b3.offsetHeight, b8 >= 0 ? b8 : aG)
            };
            this.containerData = b2;
            T(b7, {
                width: b2.width,
                height: b2.height
            });
            x(b5, g);
            a5(b7, g)
        },
        initCanvas: function bt() {
            var b9 = this.containerData,
                b2 = this.imageData;
            var b4 = this.options.viewMode;
            var b3 = Math.abs(b2.rotate) % 180 === 90;
            var b8 = b3 ? b2.naturalHeight : b2.naturalWidth;
            var ca = b3 ? b2.naturalWidth : b2.naturalHeight;
            var cb = b8 / ca;
            var b5 = b9.width;
            var b7 = b9.height;
            if (b9.height * cb > b9.width) {
                if (b4 === 3) {
                    b5 = b9.height * cb
                } else {
                    b7 = b9.width / cb
                }
            } else {
                if (b4 === 3) {
                    b7 = b9.width / cb
                } else {
                    b5 = b9.height * cb
                }
            }
            var b6 = {
                aspectRatio: cb,
                naturalWidth: b8,
                naturalHeight: ca,
                width: b5,
                height: b7
            };
            this.canvasData = b6;
            this.limited = b4 === 1 || b4 === 2;
            this.limitCanvas(true, true);
            b6.width = Math.min(Math.max(b6.width, b6.minWidth), b6.maxWidth);
            b6.height = Math.min(Math.max(b6.height, b6.minHeight), b6.maxHeight);
            b6.left = (b9.width - b6.width) / 2;
            b6.top = (b9.height - b6.height) / 2;
            b6.oldLeft = b6.left;
            b6.oldTop = b6.top;
            this.initialCanvasData = ag({}, b6)
        },
        limitCanvas: function bm(b2, b7) {
            var cf = this.options,
                b9 = this.containerData,
                b8 = this.canvasData,
                b5 = this.cropBoxData;
            var b6 = cf.viewMode;
            var cd = b8.aspectRatio;
            var cc = this.cropped && b5;
            if (b2) {
                var ce = Number(cf.minCanvasWidth) || 0;
                var ca = Number(cf.minCanvasHeight) || 0;
                if (b6 > 1) {
                    ce = Math.max(ce, b9.width);
                    ca = Math.max(ca, b9.height);
                    if (b6 === 3) {
                        if (ca * cd > ce) {
                            ce = ca * cd
                        } else {
                            ca = ce / cd
                        }
                    }
                } else {
                    if (b6 > 0) {
                        if (ce) {
                            ce = Math.max(ce, cc ? b5.width : 0)
                        } else {
                            if (ca) {
                                ca = Math.max(ca, cc ? b5.height : 0)
                            } else {
                                if (cc) {
                                    ce = b5.width;
                                    ca = b5.height;
                                    if (ca * cd > ce) {
                                        ce = ca * cd
                                    } else {
                                        ca = ce / cd
                                    }
                                }
                            }
                        }
                    }
                }
                var b3 = bx({
                    aspectRatio: cd,
                    width: ce,
                    height: ca
                });
                ce = b3.width;
                ca = b3.height;
                b8.minWidth = ce;
                b8.minHeight = ca;
                b8.maxWidth = Infinity;
                b8.maxHeight = Infinity
            }
            if (b7) {
                if (b6 > (cc ? 0 : 1)) {
                    var b4 = b9.width - b8.width;
                    var cb = b9.height - b8.height;
                    b8.minLeft = Math.min(0, b4);
                    b8.minTop = Math.min(0, cb);
                    b8.maxLeft = Math.max(0, b4);
                    b8.maxTop = Math.max(0, cb);
                    if (cc && this.limited) {
                        b8.minLeft = Math.min(b5.left, b5.left + (b5.width - b8.width));
                        b8.minTop = Math.min(b5.top, b5.top + (b5.height - b8.height));
                        b8.maxLeft = b5.left;
                        b8.maxTop = b5.top;
                        if (b6 === 2) {
                            if (b8.width >= b9.width) {
                                b8.minLeft = Math.min(0, b4);
                                b8.maxLeft = Math.max(0, b4)
                            }
                            if (b8.height >= b9.height) {
                                b8.minTop = Math.min(0, cb);
                                b8.maxTop = Math.max(0, cb)
                            }
                        }
                    }
                } else {
                    b8.minLeft = -b8.width;
                    b8.minTop = -b8.height;
                    b8.maxLeft = b9.width;
                    b8.maxTop = b9.height
                }
            }
        },
        renderCanvas: function bH(b7, b5) {
            var b6 = this.canvasData,
                b2 = this.imageData;
            if (b5) {
                var b4 = bs({
                        width: b2.naturalWidth * Math.abs(b2.scaleX || 1),
                        height: b2.naturalHeight * Math.abs(b2.scaleY || 1),
                        degree: b2.rotate || 0
                    }),
                    b8 = b4.width,
                    b9 = b4.height;
                var b3 = b6.width * (b8 / b6.naturalWidth);
                var ca = b6.height * (b9 / b6.naturalHeight);
                b6.left -= (b3 - b6.width) / 2;
                b6.top -= (ca - b6.height) / 2;
                b6.width = b3;
                b6.height = ca;
                b6.aspectRatio = b8 / b9;
                b6.naturalWidth = b8;
                b6.naturalHeight = b9;
                this.limitCanvas(true, false)
            }
            if (b6.width > b6.maxWidth || b6.width < b6.minWidth) {
                b6.left = b6.oldLeft
            }
            if (b6.height > b6.maxHeight || b6.height < b6.minHeight) {
                b6.top = b6.oldTop
            }
            b6.width = Math.min(Math.max(b6.width, b6.minWidth), b6.maxWidth);
            b6.height = Math.min(Math.max(b6.height, b6.minHeight), b6.maxHeight);
            this.limitCanvas(false, true);
            b6.left = Math.min(Math.max(b6.left, b6.minLeft), b6.maxLeft);
            b6.top = Math.min(Math.max(b6.top, b6.minTop), b6.maxTop);
            b6.oldLeft = b6.left;
            b6.oldTop = b6.top;
            T(this.canvas, ag({
                width: b6.width,
                height: b6.height
            }, K({
                translateX: b6.left,
                translateY: b6.top
            })));
            this.renderImage(b7);
            if (this.cropped && this.limited) {
                this.limitCropBox(true, true)
            }
        },
        renderImage: function bJ(b5) {
            var b3 = this.canvasData,
                b6 = this.imageData;
            var b4 = b6.naturalWidth * (b3.width / b3.naturalWidth);
            var b2 = b6.naturalHeight * (b3.height / b3.naturalHeight);
            ag(b6, {
                width: b4,
                height: b2,
                left: (b3.width - b4) / 2,
                top: (b3.height - b2) / 2
            });
            T(this.image, ag({
                width: b6.width,
                height: b6.height
            }, K(ag({
                translateX: b6.left,
                translateY: b6.top
            }, b6))));
            if (b5) {
                this.output()
            }
        },
        initCropBox: function d() {
            var b3 = this.options,
                b2 = this.canvasData;
            var b4 = b3.aspectRatio || b3.initialAspectRatio;
            var b6 = Number(b3.autoCropArea) || 0.8;
            var b5 = {
                width: b2.width,
                height: b2.height
            };
            if (b4) {
                if (b2.height * b4 > b2.width) {
                    b5.height = b5.width / b4
                } else {
                    b5.width = b5.height * b4
                }
            }
            this.cropBoxData = b5;
            this.limitCropBox(true, true);
            b5.width = Math.min(Math.max(b5.width, b5.minWidth), b5.maxWidth);
            b5.height = Math.min(Math.max(b5.height, b5.minHeight), b5.maxHeight);
            b5.width = Math.max(b5.minWidth, b5.width * b6);
            b5.height = Math.max(b5.minHeight, b5.height * b6);
            b5.left = b2.left + (b2.width - b5.width) / 2;
            b5.top = b2.top + (b2.height - b5.height) / 2;
            b5.oldLeft = b5.left;
            b5.oldTop = b5.top;
            this.initialCropBoxData = ag({}, b5)
        },
        limitCropBox: function bE(b2, b5) {
            var cd = this.options,
                b7 = this.containerData,
                b6 = this.canvasData,
                b4 = this.cropBoxData,
                ca = this.limited;
            var cc = cd.aspectRatio;
            if (b2) {
                var b3 = Number(cd.minCropBoxWidth) || 0;
                var b8 = Number(cd.minCropBoxHeight) || 0;
                var b9 = ca ? Math.min(b7.width, b6.width, b6.width + b6.left, b7.width - b6.left) : b7.width;
                var cb = ca ? Math.min(b7.height, b6.height, b6.height + b6.top, b7.height - b6.top) : b7.height;
                b3 = Math.min(b3, b7.width);
                b8 = Math.min(b8, b7.height);
                if (cc) {
                    if (b3 && b8) {
                        if (b8 * cc > b3) {
                            b8 = b3 / cc
                        } else {
                            b3 = b8 * cc
                        }
                    } else {
                        if (b3) {
                            b8 = b3 / cc
                        } else {
                            if (b8) {
                                b3 = b8 * cc
                            }
                        }
                    }
                    if (cb * cc > b9) {
                        cb = b9 / cc
                    } else {
                        b9 = cb * cc
                    }
                }
                b4.minWidth = Math.min(b3, b9);
                b4.minHeight = Math.min(b8, cb);
                b4.maxWidth = b9;
                b4.maxHeight = cb
            }
            if (b5) {
                if (ca) {
                    b4.minLeft = Math.max(0, b6.left);
                    b4.minTop = Math.max(0, b6.top);
                    b4.maxLeft = Math.min(b7.width, b6.left + b6.width) - b4.width;
                    b4.maxTop = Math.min(b7.height, b6.top + b6.height) - b4.height
                } else {
                    b4.minLeft = 0;
                    b4.minTop = 0;
                    b4.maxLeft = b7.width - b4.width;
                    b4.maxTop = b7.height - b4.height
                }
            }
        },
        renderCropBox: function N() {
            var b3 = this.options,
                b2 = this.containerData,
                b4 = this.cropBoxData;
            if (b4.width > b4.maxWidth || b4.width < b4.minWidth) {
                b4.left = b4.oldLeft
            }
            if (b4.height > b4.maxHeight || b4.height < b4.minHeight) {
                b4.top = b4.oldTop
            }
            b4.width = Math.min(Math.max(b4.width, b4.minWidth), b4.maxWidth);
            b4.height = Math.min(Math.max(b4.height, b4.minHeight), b4.maxHeight);
            this.limitCropBox(false, true);
            b4.left = Math.min(Math.max(b4.left, b4.minLeft), b4.maxLeft);
            b4.top = Math.min(Math.max(b4.top, b4.minTop), b4.maxTop);
            b4.oldLeft = b4.left;
            b4.oldTop = b4.top;
            if (b3.movable && b3.cropBoxMovable) {
                au(this.face, bp, b4.width >= b2.width && b4.height >= b2.height ? bK : ae)
            }
            T(this.cropBox, ag({
                width: b4.width,
                height: b4.height
            }, K({
                translateX: b4.left,
                translateY: b4.top
            })));
            if (this.cropped && this.limited) {
                this.limitCanvas(true, true)
            }
            if (!this.disabled) {
                this.output()
            }
        },
        output: function bU() {
            this.preview();
            aT(this.element, bO, this.getData())
        }
    };
    var a = {
        initPreview: function bD() {
            var b4 = this.element,
                b2 = this.crossOrigin;
            var b8 = this.options.preview;
            var b3 = b2 ? this.crossOriginUrl : this.url;
            var b7 = b4.alt || "The image to preview";
            var b6 = document.createElement("img");
            if (b2) {
                b6.crossOrigin = b2
            }
            b6.src = b3;
            b6.alt = b7;
            this.viewBox.appendChild(b6);
            this.viewBoxImage = b6;
            if (!b8) {
                return
            }
            var b5 = b8;
            if (typeof b8 === "string") {
                b5 = b4.ownerDocument.querySelectorAll(b8)
            } else {
                if (b8.querySelector) {
                    b5 = [b8]
                }
            }
            this.previews = b5;
            ar(b5, function(ca) {
                var b9 = document.createElement("img");
                au(ca, a2, {
                    width: ca.offsetWidth,
                    height: ca.offsetHeight,
                    html: ca.innerHTML
                });
                if (b2) {
                    b9.crossOrigin = b2
                }
                b9.src = b3;
                b9.alt = b7;
                b9.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
                ca.innerHTML = "";
                ca.appendChild(b9)
            })
        },
        resetPreview: function b1() {
            ar(this.previews, function(b2) {
                var b3 = bg(b2, a2);
                T(b2, {
                    width: b3.width,
                    height: b3.height
                });
                b2.innerHTML = b3.html;
                p(b2, a2)
            })
        },
        preview: function a() {
            var b2 = this.imageData,
                b7 = this.canvasData,
                b5 = this.cropBoxData;
            var b3 = b5.width,
                b8 = b5.height;
            var b4 = b2.width,
                ca = b2.height;
            var b6 = b5.left - b7.left - b2.left;
            var b9 = b5.top - b7.top - b2.top;
            if (!this.cropped || this.disabled) {
                return
            }
            T(this.viewBoxImage, ag({
                width: b4,
                height: ca
            }, K(ag({
                translateX: -b6,
                translateY: -b9
            }, b2))));
            ar(this.previews, function(cc) {
                var cg = bg(cc, a2);
                var ch = cg.width;
                var cf = cg.height;
                var ce = ch;
                var cb = cf;
                var cd = 1;
                if (b3) {
                    cd = ch / b3;
                    cb = b8 * cd
                }
                if (b8 && cb > cf) {
                    cd = cf / b8;
                    ce = b3 * cd;
                    cb = cf
                }
                T(cc, {
                    width: ce,
                    height: cb
                });
                T(cc.getElementsByTagName("img")[0], ag({
                    width: b4 * cd,
                    height: ca * cd
                }, K(ag({
                    translateX: -b6 * cd,
                    translateY: -b9 * cd
                }, b2))))
            })
        }
    };
    var bS = {
        bind: function aS() {
            var b3 = this.element,
                b2 = this.options,
                b4 = this.cropper;
            if (n(b2.cropstart)) {
                bv(b3, D, b2.cropstart)
            }
            if (n(b2.cropmove)) {
                bv(b3, bT, b2.cropmove)
            }
            if (n(b2.cropend)) {
                bv(b3, aY, b2.cropend)
            }
            if (n(b2.crop)) {
                bv(b3, bO, b2.crop)
            }
            if (n(b2.zoom)) {
                bv(b3, ap, b2.zoom)
            }
            bv(b4, bw, this.onCropStart = this.cropStart.bind(this));
            if (b2.zoomable && b2.zoomOnWheel) {
                bv(b4, aL, this.onWheel = this.wheel.bind(this), {
                    passive: false,
                    capture: true
                })
            }
            if (b2.toggleDragModeOnDblclick) {
                bv(b4, bP, this.onDblclick = this.dblclick.bind(this))
            }
            bv(b3.ownerDocument, bG, this.onCropMove = this.cropMove.bind(this));
            bv(b3.ownerDocument, bQ, this.onCropEnd = this.cropEnd.bind(this));
            if (b2.responsive) {
                bv(window, az, this.onResize = this.resize.bind(this))
            }
        },
        unbind: function bj() {
            var b3 = this.element,
                b2 = this.options,
                b4 = this.cropper;
            if (n(b2.cropstart)) {
                j(b3, D, b2.cropstart)
            }
            if (n(b2.cropmove)) {
                j(b3, bT, b2.cropmove)
            }
            if (n(b2.cropend)) {
                j(b3, aY, b2.cropend)
            }
            if (n(b2.crop)) {
                j(b3, bO, b2.crop)
            }
            if (n(b2.zoom)) {
                j(b3, ap, b2.zoom)
            }
            j(b4, bw, this.onCropStart);
            if (b2.zoomable && b2.zoomOnWheel) {
                j(b4, aL, this.onWheel, {
                    passive: false,
                    capture: true
                })
            }
            if (b2.toggleDragModeOnDblclick) {
                j(b4, bP, this.onDblclick)
            }
            j(b3.ownerDocument, bG, this.onCropMove);
            j(b3.ownerDocument, bQ, this.onCropEnd);
            if (b2.responsive) {
                j(window, az, this.onResize)
            }
        }
    };
    var a4 = {
        resize: function A() {
            if (this.disabled) {
                return
            }
            var b5 = this.options,
                b3 = this.container,
                b2 = this.containerData;
            var b6 = b3.offsetWidth / b2.width;
            if (b6 !== 1 || b3.offsetHeight !== b2.height) {
                var b4;
                var b7;
                if (b5.restore) {
                    b4 = this.getCanvasData();
                    b7 = this.getCropBoxData()
                }
                this.render();
                if (b5.restore) {
                    this.setCanvasData(ar(b4, function(b9, b8) {
                        b4[b8] = b9 * b6
                    }));
                    this.setCropBoxData(ar(b7, function(b9, b8) {
                        b7[b8] = b9 * b6
                    }))
                }
            }
        },
        dblclick: function ah() {
            if (this.disabled || this.options.dragMode === at) {
                return
            }
            this.setDragMode(z(this.dragBox, bA) ? aO : aq)
        },
        wheel: function l(b3) {
            var b5 = this;
            var b2 = Number(this.options.wheelZoomRatio) || 0.1;
            var b4 = 1;
            if (this.disabled) {
                return
            }
            b3.preventDefault();
            if (this.wheeling) {
                return
            }
            this.wheeling = true;
            setTimeout(function() {
                b5.wheeling = false
            }, 50);
            if (b3.deltaY) {
                b4 = b3.deltaY > 0 ? 1 : -1
            } else {
                if (b3.wheelDelta) {
                    b4 = -b3.wheelDelta / 120
                } else {
                    if (b3.detail) {
                        b4 = b3.detail > 0 ? 1 : -1
                    }
                }
            }
            this.zoom(-b4 * b2, b3)
        },
        cropStart: function bc(b6) {
            var b5 = b6.buttons,
                b4 = b6.button;
            if (this.disabled || (b6.type === "mousedown" || b6.type === "pointerdown" && b6.pointerType === "mouse") && (af(b5) && b5 !== 1 || af(b4) && b4 !== 0 || b6.ctrlKey)) {
                return
            }
            var b3 = this.options,
                b2 = this.pointers;
            var b7;
            if (b6.changedTouches) {
                ar(b6.changedTouches, function(b8) {
                    b2[b8.identifier] = aB(b8)
                })
            } else {
                b2[b6.pointerId || 0] = aB(b6)
            }
            if (Object.keys(b2).length > 1 && b3.zoomable && b3.zoomOnTouch) {
                b7 = F
            } else {
                b7 = bg(b6.target, bp)
            }
            if (!S.test(b7)) {
                return
            }
            if (aT(this.element, D, {
                    originalEvent: b6,
                    action: b7
                }) === false) {
                return
            }
            b6.preventDefault();
            this.action = b7;
            this.cropping = false;
            if (b7 === bd) {
                this.cropping = true;
                x(this.dragBox, bo)
            }
        },
        cropMove: function aW(b3) {
            var b4 = this.action;
            if (this.disabled || !b4) {
                return
            }
            var b2 = this.pointers;
            b3.preventDefault();
            if (aT(this.element, bT, {
                    originalEvent: b3,
                    action: b4
                }) === false) {
                return
            }
            if (b3.changedTouches) {
                ar(b3.changedTouches, function(b5) {
                    ag(b2[b5.identifier] || {}, aB(b5, true))
                })
            } else {
                ag(b2[b3.pointerId || 0] || {}, aB(b3, true))
            }
            this.change(b3)
        },
        cropEnd: function by(b3) {
            if (this.disabled) {
                return
            }
            var b4 = this.action,
                b2 = this.pointers;
            if (b3.changedTouches) {
                ar(b3.changedTouches, function(b5) {
                    delete b2[b5.identifier]
                })
            } else {
                delete b2[b3.pointerId || 0]
            }
            if (!b4) {
                return
            }
            b3.preventDefault();
            if (!Object.keys(b2).length) {
                this.action = ""
            }
            if (this.cropping) {
                this.cropping = false;
                a3(this.dragBox, bo, this.cropped && this.options.modal)
            }
            aT(this.element, aY, {
                originalEvent: b3,
                action: b4
            })
        }
    };
    var aN = {
        change: function aN(cl) {
            var b4 = this.options,
                ca = this.canvasData,
                b3 = this.containerData,
                cf = this.cropBoxData,
                b9 = this.pointers;
            var ck = this.action;
            var b2 = b4.aspectRatio;
            var b5 = cf.left,
                cc = cf.top,
                ci = cf.width,
                cd = cf.height;
            var co = b5 + ci;
            var b7 = cc + cd;
            var ce = 0;
            var b8 = 0;
            var cm = b3.width;
            var ch = b3.height;
            var cg = true;
            var b6;
            if (!b2 && cl.shiftKey) {
                b2 = ci && cd ? ci / cd : 1
            }
            if (this.limited) {
                ce = cf.minLeft;
                b8 = cf.minTop;
                cm = ce + Math.min(b3.width, ca.width, ca.left + ca.width);
                ch = b8 + Math.min(b3.height, ca.height, ca.top + ca.height)
            }
            var cj = b9[Object.keys(b9)[0]];
            var cb = {
                x: cj.endX - cj.startX,
                y: cj.endY - cj.startY
            };
            var cn = function cn(cp) {
                switch (cp) {
                    case ay:
                        if (co + cb.x > cm) {
                            cb.x = cm - co
                        }
                        break;
                    case X:
                        if (b5 + cb.x < ce) {
                            cb.x = ce - b5
                        }
                        break;
                    case bV:
                        if (cc + cb.y < b8) {
                            cb.y = b8 - cc
                        }
                        break;
                    case b:
                        if (b7 + cb.y > ch) {
                            cb.y = ch - b7
                        }
                        break
                }
            };
            switch (ck) {
                case ae:
                    b5 += cb.x;
                    cc += cb.y;
                    break;
                case ay:
                    if (cb.x >= 0 && (co >= cm || b2 && (cc <= b8 || b7 >= ch))) {
                        cg = false;
                        break
                    }
                    cn(ay);
                    ci += cb.x;
                    if (ci < 0) {
                        ck = X;
                        ci = -ci;
                        b5 -= ci
                    }
                    if (b2) {
                        cd = ci / b2;
                        cc += (cf.height - cd) / 2
                    }
                    break;
                case bV:
                    if (cb.y <= 0 && (cc <= b8 || b2 && (b5 <= ce || co >= cm))) {
                        cg = false;
                        break
                    }
                    cn(bV);
                    cd -= cb.y;
                    cc += cb.y;
                    if (cd < 0) {
                        ck = b;
                        cd = -cd;
                        cc -= cd
                    }
                    if (b2) {
                        ci = cd * b2;
                        b5 += (cf.width - ci) / 2
                    }
                    break;
                case X:
                    if (cb.x <= 0 && (b5 <= ce || b2 && (cc <= b8 || b7 >= ch))) {
                        cg = false;
                        break
                    }
                    cn(X);
                    ci -= cb.x;
                    b5 += cb.x;
                    if (ci < 0) {
                        ck = ay;
                        ci = -ci;
                        b5 -= ci
                    }
                    if (b2) {
                        cd = ci / b2;
                        cc += (cf.height - cd) / 2
                    }
                    break;
                case b:
                    if (cb.y >= 0 && (b7 >= ch || b2 && (b5 <= ce || co >= cm))) {
                        cg = false;
                        break
                    }
                    cn(b);
                    cd += cb.y;
                    if (cd < 0) {
                        ck = bV;
                        cd = -cd;
                        cc -= cd
                    }
                    if (b2) {
                        ci = cd * b2;
                        b5 += (cf.width - ci) / 2
                    }
                    break;
                case a0:
                    if (b2) {
                        if (cb.y <= 0 && (cc <= b8 || co >= cm)) {
                            cg = false;
                            break
                        }
                        cn(bV);
                        cd -= cb.y;
                        cc += cb.y;
                        ci = cd * b2
                    } else {
                        cn(bV);
                        cn(ay);
                        if (cb.x >= 0) {
                            if (co < cm) {
                                ci += cb.x
                            } else {
                                if (cb.y <= 0 && cc <= b8) {
                                    cg = false
                                }
                            }
                        } else {
                            ci += cb.x
                        }
                        if (cb.y <= 0) {
                            if (cc > b8) {
                                cd -= cb.y;
                                cc += cb.y
                            }
                        } else {
                            cd -= cb.y;
                            cc += cb.y
                        }
                    }
                    if (ci < 0 && cd < 0) {
                        ck = bL;
                        cd = -cd;
                        ci = -ci;
                        cc -= cd;
                        b5 -= ci
                    } else {
                        if (ci < 0) {
                            ck = aD;
                            ci = -ci;
                            b5 -= ci
                        } else {
                            if (cd < 0) {
                                ck = e;
                                cd = -cd;
                                cc -= cd
                            }
                        }
                    }
                    break;
                case aD:
                    if (b2) {
                        if (cb.y <= 0 && (cc <= b8 || b5 <= ce)) {
                            cg = false;
                            break
                        }
                        cn(bV);
                        cd -= cb.y;
                        cc += cb.y;
                        ci = cd * b2;
                        b5 += cf.width - ci
                    } else {
                        cn(bV);
                        cn(X);
                        if (cb.x <= 0) {
                            if (b5 > ce) {
                                ci -= cb.x;
                                b5 += cb.x
                            } else {
                                if (cb.y <= 0 && cc <= b8) {
                                    cg = false
                                }
                            }
                        } else {
                            ci -= cb.x;
                            b5 += cb.x
                        }
                        if (cb.y <= 0) {
                            if (cc > b8) {
                                cd -= cb.y;
                                cc += cb.y
                            }
                        } else {
                            cd -= cb.y;
                            cc += cb.y
                        }
                    }
                    if (ci < 0 && cd < 0) {
                        ck = e;
                        cd = -cd;
                        ci = -ci;
                        cc -= cd;
                        b5 -= ci
                    } else {
                        if (ci < 0) {
                            ck = a0;
                            ci = -ci;
                            b5 -= ci
                        } else {
                            if (cd < 0) {
                                ck = bL;
                                cd = -cd;
                                cc -= cd
                            }
                        }
                    }
                    break;
                case bL:
                    if (b2) {
                        if (cb.x <= 0 && (b5 <= ce || b7 >= ch)) {
                            cg = false;
                            break
                        }
                        cn(X);
                        ci -= cb.x;
                        b5 += cb.x;
                        cd = ci / b2
                    } else {
                        cn(b);
                        cn(X);
                        if (cb.x <= 0) {
                            if (b5 > ce) {
                                ci -= cb.x;
                                b5 += cb.x
                            } else {
                                if (cb.y >= 0 && b7 >= ch) {
                                    cg = false
                                }
                            }
                        } else {
                            ci -= cb.x;
                            b5 += cb.x
                        }
                        if (cb.y >= 0) {
                            if (b7 < ch) {
                                cd += cb.y
                            }
                        } else {
                            cd += cb.y
                        }
                    }
                    if (ci < 0 && cd < 0) {
                        ck = a0;
                        cd = -cd;
                        ci = -ci;
                        cc -= cd;
                        b5 -= ci
                    } else {
                        if (ci < 0) {
                            ck = e;
                            ci = -ci;
                            b5 -= ci
                        } else {
                            if (cd < 0) {
                                ck = aD;
                                cd = -cd;
                                cc -= cd
                            }
                        }
                    }
                    break;
                case e:
                    if (b2) {
                        if (cb.x >= 0 && (co >= cm || b7 >= ch)) {
                            cg = false;
                            break
                        }
                        cn(ay);
                        ci += cb.x;
                        cd = ci / b2
                    } else {
                        cn(b);
                        cn(ay);
                        if (cb.x >= 0) {
                            if (co < cm) {
                                ci += cb.x
                            } else {
                                if (cb.y >= 0 && b7 >= ch) {
                                    cg = false
                                }
                            }
                        } else {
                            ci += cb.x
                        }
                        if (cb.y >= 0) {
                            if (b7 < ch) {
                                cd += cb.y
                            }
                        } else {
                            cd += cb.y
                        }
                    }
                    if (ci < 0 && cd < 0) {
                        ck = aD;
                        cd = -cd;
                        ci = -ci;
                        cc -= cd;
                        b5 -= ci
                    } else {
                        if (ci < 0) {
                            ck = bL;
                            ci = -ci;
                            b5 -= ci
                        } else {
                            if (cd < 0) {
                                ck = a0;
                                cd = -cd;
                                cc -= cd
                            }
                        }
                    }
                    break;
                case bK:
                    this.move(cb.x, cb.y);
                    cg = false;
                    break;
                case F:
                    this.zoom(bf(b9), cl);
                    cg = false;
                    break;
                case bd:
                    if (!cb.x || !cb.y) {
                        cg = false;
                        break
                    }
                    b6 = bX(this.cropper);
                    b5 = cj.startX - b6.left;
                    cc = cj.startY - b6.top;
                    ci = cf.minWidth;
                    cd = cf.minHeight;
                    if (cb.x > 0) {
                        ck = cb.y > 0 ? e : a0
                    } else {
                        if (cb.x < 0) {
                            b5 -= ci;
                            ck = cb.y > 0 ? bL : aD
                        }
                    }
                    if (cb.y < 0) {
                        cc -= cd
                    }
                    if (!this.cropped) {
                        a5(this.cropBox, g);
                        this.cropped = true;
                        if (this.limited) {
                            this.limitCropBox(true, true)
                        }
                    }
                    break
            }
            if (cg) {
                cf.width = ci;
                cf.height = cd;
                cf.left = b5;
                cf.top = cc;
                this.action = ck;
                this.renderCropBox()
            }
            ar(b9, function(cp) {
                cp.startX = cp.endX;
                cp.startY = cp.endY
            })
        }
    };
    var ax = {
        crop: function o() {
            if (this.ready && !this.cropped && !this.disabled) {
                this.cropped = true;
                this.limitCropBox(true, true);
                if (this.options.modal) {
                    x(this.dragBox, bo)
                }
                a5(this.cropBox, g);
                this.setCropBoxData(this.initialCropBoxData)
            }
            return this
        },
        reset: function bb() {
            if (this.ready && !this.disabled) {
                this.imageData = ag({}, this.initialImageData);
                this.canvasData = ag({}, this.initialCanvasData);
                this.cropBoxData = ag({}, this.initialCropBoxData);
                this.renderCanvas();
                if (this.cropped) {
                    this.renderCropBox()
                }
            }
            return this
        },
        clear: function bN() {
            if (this.cropped && !this.disabled) {
                ag(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                });
                this.cropped = false;
                this.renderCropBox();
                this.limitCanvas(true, true);
                this.renderCanvas();
                a5(this.dragBox, bo);
                x(this.cropBox, g)
            }
            return this
        },
        replace: function aV(b3) {
            var b2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!this.disabled && b3) {
                if (this.isImg) {
                    this.element.src = b3
                }
                if (b2) {
                    this.url = b3;
                    this.image.src = b3;
                    if (this.ready) {
                        this.viewBoxImage.src = b3;
                        ar(this.previews, function(b4) {
                            b4.getElementsByTagName("img")[0].src = b3
                        })
                    }
                } else {
                    if (this.isImg) {
                        this.replaced = true
                    }
                    this.options.data = null;
                    this.uncreate();
                    this.load(b3)
                }
            }
            return this
        },
        enable: function m() {
            if (this.ready && this.disabled) {
                this.disabled = false;
                a5(this.cropper, f)
            }
            return this
        },
        disable: function aE() {
            if (this.ready && !this.disabled) {
                this.disabled = true;
                x(this.cropper, f)
            }
            return this
        },
        destroy: function t() {
            var b2 = this.element;
            if (!b2[M]) {
                return this
            }
            b2[M] = undefined;
            if (this.isImg && this.replaced) {
                b2.src = this.originalUrl
            }
            this.uncreate();
            return this
        },
        move: function L(b2) {
            var b6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : b2;
            var b3 = this.canvasData,
                b5 = b3.left,
                b4 = b3.top;
            return this.moveTo(aP(b2) ? b2 : b5 + Number(b2), aP(b6) ? b6 : b4 + Number(b6))
        },
        moveTo: function bB(b2) {
            var b5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : b2;
            var b3 = this.canvasData;
            var b4 = false;
            b2 = Number(b2);
            b5 = Number(b5);
            if (this.ready && !this.disabled && this.options.movable) {
                if (af(b2)) {
                    b3.left = b2;
                    b4 = true
                }
                if (af(b5)) {
                    b3.top = b5;
                    b4 = true
                }
                if (b4) {
                    this.renderCanvas(true)
                }
            }
            return this
        },
        zoom: function a1(b4, b2) {
            var b3 = this.canvasData;
            b4 = Number(b4);
            if (b4 < 0) {
                b4 = 1 / (1 - b4)
            } else {
                b4 = 1 + b4
            }
            return this.zoomTo(b3.width * b4 / b3.naturalWidth, null, b2)
        },
        zoomTo: function aU(b9, cd, ca) {
            var cf = this.options,
                b6 = this.canvasData;
            var b4 = b6.width,
                ce = b6.height,
                b8 = b6.naturalWidth,
                cb = b6.naturalHeight;
            b9 = Number(b9);
            if (b9 >= 0 && this.ready && !this.disabled && cf.zoomable) {
                var b7 = b8 * b9;
                var b3 = cb * b9;
                if (aT(this.element, ap, {
                        ratio: b9,
                        oldRatio: b4 / b8,
                        originalEvent: ca
                    }) === false) {
                    return this
                }
                if (ca) {
                    var cc = this.pointers;
                    var b5 = bX(this.cropper);
                    var b2 = cc && Object.keys(cc).length ? bu(cc) : {
                        pageX: ca.pageX,
                        pageY: ca.pageY
                    };
                    b6.left -= (b7 - b4) * ((b2.pageX - b5.left - b6.left) / b4);
                    b6.top -= (b3 - ce) * ((b2.pageY - b5.top - b6.top) / ce)
                } else {
                    if (w(cd) && af(cd.x) && af(cd.y)) {
                        b6.left -= (b7 - b4) * ((cd.x - b6.left) / b4);
                        b6.top -= (b3 - ce) * ((cd.y - b6.top) / ce)
                    } else {
                        b6.left -= (b7 - b4) / 2;
                        b6.top -= (b3 - ce) / 2
                    }
                }
                b6.width = b7;
                b6.height = b3;
                this.renderCanvas(true)
            }
            return this
        },
        rotate: function v(b2) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(b2))
        },
        rotateTo: function b0(b2) {
            b2 = Number(b2);
            if (af(b2) && this.ready && !this.disabled && this.options.rotatable) {
                this.imageData.rotate = b2 % 360;
                this.renderCanvas(true, true)
            }
            return this
        },
        scaleX: function W(b3) {
            var b2 = this.imageData.scaleY;
            return this.scale(b3, af(b2) ? b2 : 1)
        },
        scaleY: function U(b3) {
            var b2 = this.imageData.scaleX;
            return this.scale(af(b2) ? b2 : 1, b3)
        },
        scale: function aX(b4) {
            var b2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : b4;
            var b5 = this.imageData;
            var b3 = false;
            b4 = Number(b4);
            b2 = Number(b2);
            if (this.ready && !this.disabled && this.options.scalable) {
                if (af(b4)) {
                    b5.scaleX = b4;
                    b3 = true
                }
                if (af(b2)) {
                    b5.scaleY = b2;
                    b3 = true
                }
                if (b3) {
                    this.renderCanvas(true, true)
                }
            }
            return this
        },
        getData: function bg() {
            var b5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var ca = this.options,
                b2 = this.imageData,
                b6 = this.canvasData,
                b4 = this.cropBoxData;
            var b7;
            if (this.ready && this.cropped) {
                b7 = {
                    x: b4.left - b6.left,
                    y: b4.top - b6.top,
                    width: b4.width,
                    height: b4.height
                };
                var b8 = b2.width / b2.naturalWidth;
                ar(b7, function(cc, cb) {
                    b7[cb] = cc / b8
                });
                if (b5) {
                    var b3 = Math.round(b7.y + b7.height);
                    var b9 = Math.round(b7.x + b7.width);
                    b7.x = Math.round(b7.x);
                    b7.y = Math.round(b7.y);
                    b7.width = b9 - b7.x;
                    b7.height = b3 - b7.y
                }
            } else {
                b7 = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            if (ca.rotatable) {
                b7.rotate = b2.rotate || 0
            }
            if (ca.scalable) {
                b7.scaleX = b2.scaleX || 1;
                b7.scaleY = b2.scaleY || 1
            }
            return b7
        },
        setData: function au(b7) {
            var b4 = this.options,
                b8 = this.imageData,
                b3 = this.canvasData;
            var b6 = {};
            if (this.ready && !this.disabled && w(b7)) {
                var b2 = false;
                if (b4.rotatable) {
                    if (af(b7.rotate) && b7.rotate !== b8.rotate) {
                        b8.rotate = b7.rotate;
                        b2 = true
                    }
                }
                if (b4.scalable) {
                    if (af(b7.scaleX) && b7.scaleX !== b8.scaleX) {
                        b8.scaleX = b7.scaleX;
                        b2 = true
                    }
                    if (af(b7.scaleY) && b7.scaleY !== b8.scaleY) {
                        b8.scaleY = b7.scaleY;
                        b2 = true
                    }
                }
                if (b2) {
                    this.renderCanvas(true, true)
                }
                var b5 = b8.width / b8.naturalWidth;
                if (af(b7.x)) {
                    b6.left = b7.x * b5 + b3.left
                }
                if (af(b7.y)) {
                    b6.top = b7.y * b5 + b3.top
                }
                if (af(b7.width)) {
                    b6.width = b7.width * b5
                }
                if (af(b7.height)) {
                    b6.height = b7.height * b5
                }
                this.setCropBoxData(b6)
            }
            return this
        },
        getContainerData: function a7() {
            return this.ready ? ag({}, this.containerData) : {}
        },
        getImageData: function ad() {
            return this.sized ? ag({}, this.imageData) : {}
        },
        getCanvasData: function Z() {
            var b2 = this.canvasData;
            var b3 = {};
            if (this.ready) {
                ar(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(b4) {
                    b3[b4] = b2[b4]
                })
            }
            return b3
        },
        setCanvasData: function c(b4) {
            var b2 = this.canvasData;
            var b3 = b2.aspectRatio;
            if (this.ready && !this.disabled && w(b4)) {
                if (af(b4.left)) {
                    b2.left = b4.left
                }
                if (af(b4.top)) {
                    b2.top = b4.top
                }
                if (af(b4.width)) {
                    b2.width = b4.width;
                    b2.height = b4.width / b3
                } else {
                    if (af(b4.height)) {
                        b2.height = b4.height;
                        b2.width = b4.height * b3
                    }
                }
                this.renderCanvas(true)
            }
            return this
        },
        getCropBoxData: function am() {
            var b3 = this.cropBoxData;
            var b2;
            if (this.ready && this.cropped) {
                b2 = {
                    left: b3.left,
                    top: b3.top,
                    width: b3.width,
                    height: b3.height
                }
            }
            return b2 || {}
        },
        setCropBoxData: function aR(b6) {
            var b5 = this.cropBoxData;
            var b3 = this.options.aspectRatio;
            var b4;
            var b2;
            if (this.ready && this.cropped && !this.disabled && w(b6)) {
                if (af(b6.left)) {
                    b5.left = b6.left
                }
                if (af(b6.top)) {
                    b5.top = b6.top
                }
                if (af(b6.width) && b6.width !== b5.width) {
                    b4 = true;
                    b5.width = b6.width
                }
                if (af(b6.height) && b6.height !== b5.height) {
                    b2 = true;
                    b5.height = b6.height
                }
                if (b3) {
                    if (b4) {
                        b5.height = b5.width / b3
                    } else {
                        if (b2) {
                            b5.width = b5.height * b3
                        }
                    }
                }
                this.renderCropBox()
            }
            return this
        },
        getCroppedCanvas: function ao() {
            var cc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (!this.ready || !window.HTMLCanvasElement) {
                return null
            }
            var ci = this.canvasData;
            var co = a6(this.image, this.imageData, ci, cc);
            if (!this.cropped) {
                return co
            }
            var ch = this.getData(),
                cv = ch.x,
                cu = ch.y,
                ce = ch.width,
                cq = ch.height;
            var cg = co.width / Math.floor(ci.naturalWidth);
            if (cg !== 1) {
                cv *= cg;
                cu *= cg;
                ce *= cg;
                cq *= cg
            }
            var b4 = ce / cq;
            var cd = bx({
                aspectRatio: b4,
                width: cc.maxWidth || Infinity,
                height: cc.maxHeight || Infinity
            });
            var ct = bx({
                aspectRatio: b4,
                width: cc.minWidth || 0,
                height: cc.minHeight || 0
            }, "cover");
            var cf = bx({
                    aspectRatio: b4,
                    width: cc.width || (cg !== 1 ? co.width : ce),
                    height: cc.height || (cg !== 1 ? co.height : cq)
                }),
                cn = cf.width,
                cm = cf.height;
            cn = Math.min(cd.width, Math.max(ct.width, cn));
            cm = Math.min(cd.height, Math.max(ct.height, cm));
            var cb = document.createElement("canvas");
            var b7 = cb.getContext("2d");
            cb.width = bq(cn);
            cb.height = bq(cm);
            b7.fillStyle = cc.fillColor || "transparent";
            b7.fillRect(0, 0, cn, cm);
            var cp = cc.imageSmoothingEnabled,
                b3 = cp === void 0 ? true : cp,
                b9 = cc.imageSmoothingQuality;
            b7.imageSmoothingEnabled = b3;
            if (b9) {
                b7.imageSmoothingQuality = b9
            }
            var cj = co.width;
            var b8 = co.height;
            var b2 = cv;
            var cx = cu;
            var cl;
            var cs;
            var b6;
            var b5;
            var ca;
            var ck;
            if (b2 <= -ce || b2 > cj) {
                b2 = 0;
                cl = 0;
                b6 = 0;
                ca = 0
            } else {
                if (b2 <= 0) {
                    b6 = -b2;
                    b2 = 0;
                    cl = Math.min(cj, ce + b2);
                    ca = cl
                } else {
                    if (b2 <= cj) {
                        b6 = 0;
                        cl = Math.min(ce, cj - b2);
                        ca = cl
                    }
                }
            }
            if (cl <= 0 || cx <= -cq || cx > b8) {
                cx = 0;
                cs = 0;
                b5 = 0;
                ck = 0
            } else {
                if (cx <= 0) {
                    b5 = -cx;
                    cx = 0;
                    cs = Math.min(b8, cq + cx);
                    ck = cs
                } else {
                    if (cx <= b8) {
                        b5 = 0;
                        cs = Math.min(cq, b8 - cx);
                        ck = cs
                    }
                }
            }
            var cr = [b2, cx, cl, cs];
            if (ca > 0 && ck > 0) {
                var cw = cn / ce;
                cr.push(b6 * cw, b5 * cw, ca * cw, ck * cw)
            }
            b7.drawImage.apply(b7, [co].concat(an(cr.map(function(cy) {
                return Math.floor(bq(cy))
            }))));
            return cb
        },
        setAspectRatio: function E(b3) {
            var b2 = this.options;
            if (!this.disabled && !aP(b3)) {
                b2.aspectRatio = Math.max(0, b3) || NaN;
                if (this.ready) {
                    this.initCropBox();
                    if (this.cropped) {
                        this.renderCropBox()
                    }
                }
            }
            return this
        },
        setDragMode: function ac(b7) {
            var b2 = this.options,
                b3 = this.dragBox,
                b4 = this.face;
            if (this.ready && !this.disabled) {
                var b6 = b7 === aq;
                var b5 = b2.movable && b7 === aO;
                b7 = b6 || b5 ? b7 : at;
                b2.dragMode = b7;
                au(b3, bp, b7);
                a3(b3, bA, b6);
                a3(b3, bZ, b5);
                if (!b2.cropBoxMovable) {
                    au(b4, bp, b7);
                    a3(b4, bA, b6);
                    a3(b4, bZ, b5)
                }
            }
            return this
        }
    };
    var Q = aw.Cropper;
    var R = function() {
        function b9(cf) {
            var ce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            aC(this, b9);
            if (!cf || !ba.test(cf.tagName)) {
                throw new Error("The first argument is required and must be an <img> or <canvas> element.")
            }
            this.element = cf;
            this.options = ag({}, V, w(ce) && ce);
            this.cropped = false;
            this.disabled = false;
            this.pointers = {};
            this.ready = false;
            this.reloading = false;
            this.replaced = false;
            this.sized = false;
            this.sizing = false;
            this.init()
        }
        a8(b9, [{
            key: "init",
            value: function cc() {
                var cg = this.element;
                var cf = cg.tagName.toLowerCase();
                var ce;
                if (cg[M]) {
                    return
                }
                cg[M] = this;
                if (cf === "img") {
                    this.isImg = true;
                    ce = cg.getAttribute("src") || "";
                    this.originalUrl = ce;
                    if (!ce) {
                        return
                    }
                    ce = cg.src
                } else {
                    if (cf === "canvas" && window.HTMLCanvasElement) {
                        ce = cg.toDataURL()
                    }
                }
                this.load(ce)
            }
        }, {
            key: "load",
            value: function cb(cf) {
                var cj = this;
                if (!cf) {
                    return
                }
                this.url = cf;
                this.imageData = {};
                var cg = this.element,
                    ce = this.options;
                if (!ce.rotatable && !ce.scalable) {
                    ce.checkOrientation = false
                }
                if (!ce.checkOrientation || !window.ArrayBuffer) {
                    this.clone();
                    return
                }
                if (a9.test(cf)) {
                    if (bF.test(cf)) {
                        this.read(aF(cf))
                    } else {
                        this.clone()
                    }
                    return
                }
                var ch = new XMLHttpRequest();
                var ci = this.clone.bind(this);
                this.reloading = true;
                this.xhr = ch;
                ch.onabort = ci;
                ch.onerror = ci;
                ch.ontimeout = ci;
                ch.onprogress = function() {
                    if (ch.getResponseHeader("content-type") !== aJ) {
                        ch.abort()
                    }
                };
                ch.onload = function() {
                    cj.read(ch.response)
                };
                ch.onloadend = function() {
                    cj.reloading = false;
                    cj.xhr = null
                };
                if (ce.checkCrossOrigin && bk(cf) && cg.crossOrigin) {
                    cf = bR(cf)
                }
                ch.open("GET", cf, true);
                ch.responseType = "arraybuffer";
                ch.withCredentials = cg.crossOrigin === "use-credentials";
                ch.send()
            }
        }, {
            key: "read",
            value: function b4(cj) {
                var ci = this.options,
                    cl = this.imageData;
                var cf = y(cj);
                var ch = 0;
                var cg = 1;
                var ce = 1;
                if (cf > 1) {
                    this.url = aa(cj, aJ);
                    var ck = k(cf);
                    ch = ck.rotate;
                    cg = ck.scaleX;
                    ce = ck.scaleY
                }
                if (ci.rotatable) {
                    cl.rotate = ch
                }
                if (ci.scalable) {
                    cl.scaleX = cg;
                    cl.scaleY = ce
                }
                this.clone()
            }
        }, {
            key: "clone",
            value: function b7() {
                var cg = this.element,
                    cf = this.url;
                var ce = cg.crossOrigin;
                var ch = cf;
                if (this.options.checkCrossOrigin && bk(cf)) {
                    if (!ce) {
                        ce = "anonymous"
                    }
                    ch = bR(cf)
                }
                this.crossOrigin = ce;
                this.crossOriginUrl = ch;
                var ci = document.createElement("img");
                if (ce) {
                    ci.crossOrigin = ce
                }
                ci.src = ch || cf;
                ci.alt = cg.alt || "The image to crop";
                this.image = ci;
                ci.onload = this.start.bind(this);
                ci.onerror = this.stop.bind(this);
                x(ci, aj);
                cg.parentNode.insertBefore(ci, cg.nextSibling)
            }
        }, {
            key: "start",
            value: function b3() {
                var ch = this;
                var cj = this.image;
                cj.onload = null;
                cj.onerror = null;
                this.sizing = true;
                var cg = aw.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(aw.navigator.userAgent);
                var cf = function cf(ck, cl) {
                    ag(ch.imageData, {
                        naturalWidth: ck,
                        naturalHeight: cl,
                        aspectRatio: ck / cl
                    });
                    ch.initialImageData = ag({}, ch.imageData);
                    ch.sizing = false;
                    ch.sized = true;
                    ch.build()
                };
                if (cj.naturalWidth && !cg) {
                    cf(cj.naturalWidth, cj.naturalHeight);
                    return
                }
                var ci = document.createElement("img");
                var ce = document.body || document.documentElement;
                this.sizingImage = ci;
                ci.onload = function() {
                    cf(ci.width, ci.height);
                    if (!cg) {
                        ce.removeChild(ci)
                    }
                };
                ci.src = cj.src;
                if (!cg) {
                    ci.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
                    ce.appendChild(ci)
                }
            }
        }, {
            key: "stop",
            value: function b8() {
                var ce = this.image;
                ce.onload = null;
                ce.onerror = null;
                ce.parentNode.removeChild(ce);
                this.image = null
            }
        }, {
            key: "build",
            value: function ca() {
                if (!this.sized || this.ready) {
                    return
                }
                var ck = this.element,
                    cn = this.options,
                    ch = this.image;
                var cf = ck.parentNode;
                var cm = document.createElement("div");
                cm.innerHTML = al;
                var ce = cm.querySelector(".".concat(M, "-container"));
                var cg = ce.querySelector(".".concat(M, "-canvas"));
                var cj = ce.querySelector(".".concat(M, "-drag-box"));
                var ci = ce.querySelector(".".concat(M, "-crop-box"));
                var cl = ci.querySelector(".".concat(M, "-face"));
                this.container = cf;
                this.cropper = ce;
                this.canvas = cg;
                this.dragBox = cj;
                this.cropBox = ci;
                this.viewBox = ce.querySelector(".".concat(M, "-view-box"));
                this.face = cl;
                cg.appendChild(ch);
                x(ck, g);
                cf.insertBefore(ce, ck.nextSibling);
                if (!this.isImg) {
                    a5(ch, aj)
                }
                this.initPreview();
                this.bind();
                cn.initialAspectRatio = Math.max(0, cn.initialAspectRatio) || NaN;
                cn.aspectRatio = Math.max(0, cn.aspectRatio) || NaN;
                cn.viewMode = Math.max(0, Math.min(3, Math.round(cn.viewMode))) || 0;
                x(ci, g);
                if (!cn.guides) {
                    x(ci.getElementsByClassName("".concat(M, "-dashed")), g)
                }
                if (!cn.center) {
                    x(ci.getElementsByClassName("".concat(M, "-center")), g)
                }
                if (cn.background) {
                    x(ce, "".concat(M, "-bg"))
                }
                if (!cn.highlight) {
                    x(cl, ai)
                }
                if (cn.cropBoxMovable) {
                    x(cl, bZ);
                    au(cl, bp, ae)
                }
                if (!cn.cropBoxResizable) {
                    x(ci.getElementsByClassName("".concat(M, "-line")), g);
                    x(ci.getElementsByClassName("".concat(M, "-point")), g)
                }
                this.render();
                this.ready = true;
                this.setDragMode(cn.dragMode);
                if (cn.autoCrop) {
                    this.crop()
                }
                this.setData(cn.data);
                if (n(cn.ready)) {
                    bv(ck, ak, cn.ready, {
                        once: true
                    })
                }
                aT(ck, ak)
            }
        }, {
            key: "unbuild",
            value: function cd() {
                if (!this.ready) {
                    return
                }
                this.ready = false;
                this.unbind();
                this.resetPreview();
                this.cropper.parentNode.removeChild(this.cropper);
                a5(this.element, g)
            }
        }, {
            key: "uncreate",
            value: function b2() {
                if (this.ready) {
                    this.unbuild();
                    this.ready = false;
                    this.cropped = false
                } else {
                    if (this.sizing) {
                        this.sizingImage.onload = null;
                        this.sizing = false;
                        this.sized = false
                    } else {
                        if (this.reloading) {
                            this.xhr.onabort = null;
                            this.xhr.abort()
                        } else {
                            if (this.image) {
                                this.stop()
                            }
                        }
                    }
                }
            }
        }], [{
            key: "noConflict",
            value: function b5() {
                window.Cropper = Q;
                return b9
            }
        }, {
            key: "setDefaults",
            value: function b6(ce) {
                ag(V, w(ce) && ce)
            }
        }]);
        return b9
    }();
    ag(R.prototype, Y, a, bS, a4, aN, ax);
    return R
})));

! function(A, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (A = A || self).html2canvas = e()
}(this, function() {
    "use strict";
    var r = function(A, e) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(A, e) {
                A.__proto__ = e
            } || function(A, e) {
                for (var t in e) e.hasOwnProperty(t) && (A[t] = e[t])
            })(A, e)
    };

    function A(A, e) {
        function t() {
            this.constructor = A
        }
        r(A, e), A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
    }
    var K = function() {
        return (K = Object.assign || function(A) {
            for (var e, t = 1, r = arguments.length; t < r; t++)
                for (var n in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
            return A
        }).apply(this, arguments)
    };

    function a(B, s, o, i) {
        return new(o || (o = Promise))(function(A, e) {
            function t(A) {
                try {
                    n(i.next(A))
                } catch (A) {
                    e(A)
                }
            }

            function r(A) {
                try {
                    n(i.throw(A))
                } catch (A) {
                    e(A)
                }
            }

            function n(e) {
                e.done ? A(e.value) : new o(function(A) {
                    A(e.value)
                }).then(t, r)
            }
            n((i = i.apply(B, s || [])).next())
        })
    }

    function S(t, r) {
        var n, B, s, A, o = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return A = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (A[Symbol.iterator] = function() {
            return this
        }), A;

        function e(e) {
            return function(A) {
                return function(e) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, B && (s = 2 & e[0] ? B.return : e[0] ? B.throw || ((s = B.return) && s.call(B), 0) : B.next) && !(s = s.call(B, e[1])).done) return s;
                        switch (B = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                            case 0:
                            case 1:
                                s = e;
                                break;
                            case 4:
                                return o.label++, {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, B = e[1], e = [0];
                                continue;
                            case 7:
                                e = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = o.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                    o.label = e[1];
                                    break
                                }
                                if (6 === e[0] && o.label < s[1]) {
                                    o.label = s[1], s = e;
                                    break
                                }
                                if (s && o.label < s[2]) {
                                    o.label = s[2], o.ops.push(e);
                                    break
                                }
                                s[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        e = r.call(t, o)
                    } catch (A) {
                        e = [6, A], B = 0
                    } finally {
                        n = s = 0
                    }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }([e, A])
            }
        }
    }
    var I = (n.prototype.add = function(A, e, t, r) {
        return new n(this.left + A, this.top + e, this.width + t, this.height + r)
    }, n.fromClientRect = function(A) {
        return new n(A.left, A.top, A.width, A.height)
    }, n);

    function n(A, e, t, r) {
        this.left = A, this.top = e, this.width = t, this.height = r
    }
    for (var T = function(A) {
            return I.fromClientRect(A.getBoundingClientRect())
        }, c = function(A) {
            for (var e = [], t = 0, r = A.length; t < r;) {
                var n = A.charCodeAt(t++);
                if (55296 <= n && n <= 56319 && t < r) {
                    var B = A.charCodeAt(t++);
                    56320 == (64512 & B) ? e.push(((1023 & n) << 10) + (1023 & B) + 65536) : (e.push(n), t--)
                } else e.push(n)
            }
            return e
        }, l = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
            var t = A.length;
            if (!t) return "";
            for (var r = [], n = -1, B = ""; ++n < t;) {
                var s = A[n];
                s <= 65535 ? r.push(s) : (s -= 65536, r.push(55296 + (s >> 10), s % 1024 + 56320)), (n + 1 === t || 16384 < r.length) && (B += String.fromCharCode.apply(String, r), r.length = 0)
            }
            return B
        }, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Q = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), t = 0; t < e.length; t++) Q[e.charCodeAt(t)] = t;

    function B(A, e, t) {
        return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
    }
    var s = (o.prototype.get = function(A) {
        var e;
        if (0 <= A) {
            if (A < 55296 || 56319 < A && A <= 65535) return e = ((e = this.index[A >> 5]) << 2) + (31 & A), this.data[e];
            if (A <= 65535) return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[e];
            if (A < this.highStart) return e = 2080 + (A >> 11), e = this.index[e], e += A >> 5 & 63, e = ((e = this.index[e]) << 2) + (31 & A), this.data[e];
            if (A <= 1114111) return this.data[this.highValueIndex]
        }
        return this.errorValue
    }, o);

    function o(A, e, t, r, n, B) {
        this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = r, this.index = n, this.data = B
    }

    function C(A, e, t, r) {
        var n = r[t];
        if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n)
            for (var B = t; B <= r.length;) {
                if ((i = r[++B]) === e) return !0;
                if (i !== H) break
            }
        if (n === H)
            for (B = t; 0 < B;) {
                var s = r[--B];
                if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
                    for (var o = t; o <= r.length;) {
                        var i;
                        if ((i = r[++o]) === e) return !0;
                        if (i !== H) break
                    }
                if (s !== H) break
            }
        return !1
    }

    function g(A, e) {
        for (var t = A; 0 <= t;) {
            var r = e[t];
            if (r !== H) return r;
            t--
        }
        return 0
    }

    function w(A, e, t, r, n) {
        if (0 === t[r]) return Y;
        var B = r - 1;
        if (Array.isArray(n) && !0 === n[B]) return Y;
        var s = B - 1,
            o = 1 + B,
            i = e[B],
            a = 0 <= s ? e[s] : 0,
            c = e[o];
        if (2 === i && 3 === c) return Y;
        if (-1 !== j.indexOf(i)) return "!";
        if (-1 !== j.indexOf(c)) return Y;
        if (-1 !== $.indexOf(c)) return Y;
        if (8 === g(B, e)) return "÷";
        if (11 === q.get(A[B]) && (c === X || c === P || c === x)) return Y;
        if (7 === i || 7 === c) return Y;
        if (9 === i) return Y;
        if (-1 === [H, d, f].indexOf(i) && 9 === c) return Y;
        if (-1 !== [p, N, m, v, y].indexOf(c)) return Y;
        if (g(B, e) === O) return Y;
        if (C(23, O, B, e)) return Y;
        if (C([p, N], L, B, e)) return Y;
        if (C(12, 12, B, e)) return Y;
        if (i === H) return "÷";
        if (23 === i || 23 === c) return Y;
        if (16 === c || 16 === i) return "÷";
        if (-1 !== [d, f, L].indexOf(c) || 14 === i) return Y;
        if (36 === a && -1 !== rA.indexOf(i)) return Y;
        if (i === y && 36 === c) return Y;
        if (c === R && -1 !== Z.concat(R, m, D, X, P, x).indexOf(i)) return Y;
        if (-1 !== Z.indexOf(c) && i === D || -1 !== Z.indexOf(i) && c === D) return Y;
        if (i === M && -1 !== [X, P, x].indexOf(c) || -1 !== [X, P, x].indexOf(i) && c === b) return Y;
        if (-1 !== Z.indexOf(i) && -1 !== AA.indexOf(c) || -1 !== AA.indexOf(i) && -1 !== Z.indexOf(c)) return Y;
        if (-1 !== [M, b].indexOf(i) && (c === D || -1 !== [O, f].indexOf(c) && e[1 + o] === D) || -1 !== [O, f].indexOf(i) && c === D || i === D && -1 !== [D, y, v].indexOf(c)) return Y;
        if (-1 !== [D, y, v, p, N].indexOf(c))
            for (var Q = B; 0 <= Q;) {
                if ((w = e[Q]) === D) return Y;
                if (-1 === [y, v].indexOf(w)) break;
                Q--
            }
        if (-1 !== [M, b].indexOf(c))
            for (Q = -1 !== [p, N].indexOf(i) ? s : B; 0 <= Q;) {
                var w;
                if ((w = e[Q]) === D) return Y;
                if (-1 === [y, v].indexOf(w)) break;
                Q--
            }
        if (J === i && -1 !== [J, G, V, z].indexOf(c) || -1 !== [G, V].indexOf(i) && -1 !== [G, k].indexOf(c) || -1 !== [k, z].indexOf(i) && c === k) return Y;
        if (-1 !== tA.indexOf(i) && -1 !== [R, b].indexOf(c) || -1 !== tA.indexOf(c) && i === M) return Y;
        if (-1 !== Z.indexOf(i) && -1 !== Z.indexOf(c)) return Y;
        if (i === v && -1 !== Z.indexOf(c)) return Y;
        if (-1 !== Z.concat(D).indexOf(i) && c === O || -1 !== Z.concat(D).indexOf(c) && i === N) return Y;
        if (41 === i && 41 === c) {
            for (var u = t[B], U = 1; 0 < u && 41 === e[--u];) U++;
            if (U % 2 != 0) return Y
        }
        return i === P && c === x ? Y : "÷"
    }

    function u(t, A) {
        A || (A = {
            lineBreak: "normal",
            wordBreak: "normal"
        });
        var e = function(A, n) {
                void 0 === n && (n = "strict");
                var B = [],
                    s = [],
                    o = [];
                return A.forEach(function(A, e) {
                    var t = q.get(A);
                    if (50 < t ? (o.push(!0), t -= 50) : o.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(n) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return s.push(e), B.push(16);
                    if (4 !== t && 11 !== t) return s.push(e), 31 === t ? B.push("strict" === n ? L : X) : t === W ? B.push(_) : 29 === t ? B.push(_) : 43 === t ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? B.push(X) : B.push(_) : void B.push(t);
                    if (0 === e) return s.push(e), B.push(_);
                    var r = B[e - 1];
                    return -1 === eA.indexOf(r) ? (s.push(s[e - 1]), B.push(r)) : (s.push(e), B.push(_))
                }), [s, B, o]
            }(t, A.lineBreak),
            r = e[0],
            n = e[1],
            B = e[2];
        return "break-all" !== A.wordBreak && "break-word" !== A.wordBreak || (n = n.map(function(A) {
            return -1 !== [D, _, W].indexOf(A) ? X : A
        })), [r, n, "keep-all" === A.wordBreak ? B.map(function(A, e) {
            return A && 19968 <= t[e] && t[e] <= 40959
        }) : void 0]
    }
    var i, U, E, F, h, H = 10,
        d = 13,
        f = 15,
        p = 17,
        N = 18,
        m = 19,
        R = 20,
        L = 21,
        O = 22,
        v = 24,
        D = 25,
        b = 26,
        M = 27,
        y = 28,
        _ = 30,
        P = 32,
        x = 33,
        V = 34,
        z = 35,
        X = 37,
        J = 38,
        G = 39,
        k = 40,
        W = 42,
        Y = "×",
        q = (i = function(A) {
            var e, t, r, n, B, s = .75 * A.length,
                o = A.length,
                i = 0;
            "=" === A[A.length - 1] && (s--, "=" === A[A.length - 2] && s--);
            var a = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s),
                c = Array.isArray(a) ? a : new Uint8Array(a);
            for (e = 0; e < o; e += 4) t = Q[A.charCodeAt(e)], r = Q[A.charCodeAt(e + 1)], n = Q[A.charCodeAt(e + 2)], B = Q[A.charCodeAt(e + 3)], c[i++] = t << 2 | r >> 4, c[i++] = (15 & r) << 4 | n >> 2, c[i++] = (3 & n) << 6 | 63 & B;
            return a
        }("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"), U = Array.isArray(i) ? function(A) {
            for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
            return t
        }(i) : new Uint32Array(i), E = Array.isArray(i) ? function(A) {
            for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
            return t
        }(i) : new Uint16Array(i), F = B(E, 12, U[4] / 2), h = 2 === U[5] ? B(E, (24 + U[4]) / 2) : function(A, e, t) {
            return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
        }(U, Math.ceil((24 + U[4]) / 4)), new s(U[0], U[1], U[2], U[3], F, h)),
        Z = [_, 36],
        j = [1, 2, 3, 5],
        $ = [H, 8],
        AA = [M, b],
        eA = j.concat($),
        tA = [J, G, k, V, z],
        rA = [f, d],
        nA = (BA.prototype.slice = function() {
            return l.apply(void 0, this.codePoints.slice(this.start, this.end))
        }, BA);

    function BA(A, e, t, r) {
        this.codePoints = A, this.required = "!" === e, this.start = t, this.end = r
    }
    var sA, oA;
    (oA = sA || (sA = {}))[oA.STRING_TOKEN = 0] = "STRING_TOKEN", oA[oA.BAD_STRING_TOKEN = 1] = "BAD_STRING_TOKEN", oA[oA.LEFT_PARENTHESIS_TOKEN = 2] = "LEFT_PARENTHESIS_TOKEN", oA[oA.RIGHT_PARENTHESIS_TOKEN = 3] = "RIGHT_PARENTHESIS_TOKEN", oA[oA.COMMA_TOKEN = 4] = "COMMA_TOKEN", oA[oA.HASH_TOKEN = 5] = "HASH_TOKEN", oA[oA.DELIM_TOKEN = 6] = "DELIM_TOKEN", oA[oA.AT_KEYWORD_TOKEN = 7] = "AT_KEYWORD_TOKEN", oA[oA.PREFIX_MATCH_TOKEN = 8] = "PREFIX_MATCH_TOKEN", oA[oA.DASH_MATCH_TOKEN = 9] = "DASH_MATCH_TOKEN", oA[oA.INCLUDE_MATCH_TOKEN = 10] = "INCLUDE_MATCH_TOKEN", oA[oA.LEFT_CURLY_BRACKET_TOKEN = 11] = "LEFT_CURLY_BRACKET_TOKEN", oA[oA.RIGHT_CURLY_BRACKET_TOKEN = 12] = "RIGHT_CURLY_BRACKET_TOKEN", oA[oA.SUFFIX_MATCH_TOKEN = 13] = "SUFFIX_MATCH_TOKEN", oA[oA.SUBSTRING_MATCH_TOKEN = 14] = "SUBSTRING_MATCH_TOKEN", oA[oA.DIMENSION_TOKEN = 15] = "DIMENSION_TOKEN", oA[oA.PERCENTAGE_TOKEN = 16] = "PERCENTAGE_TOKEN", oA[oA.NUMBER_TOKEN = 17] = "NUMBER_TOKEN", oA[oA.FUNCTION = 18] = "FUNCTION", oA[oA.FUNCTION_TOKEN = 19] = "FUNCTION_TOKEN", oA[oA.IDENT_TOKEN = 20] = "IDENT_TOKEN", oA[oA.COLUMN_TOKEN = 21] = "COLUMN_TOKEN", oA[oA.URL_TOKEN = 22] = "URL_TOKEN", oA[oA.BAD_URL_TOKEN = 23] = "BAD_URL_TOKEN", oA[oA.CDC_TOKEN = 24] = "CDC_TOKEN", oA[oA.CDO_TOKEN = 25] = "CDO_TOKEN", oA[oA.COLON_TOKEN = 26] = "COLON_TOKEN", oA[oA.SEMICOLON_TOKEN = 27] = "SEMICOLON_TOKEN", oA[oA.LEFT_SQUARE_BRACKET_TOKEN = 28] = "LEFT_SQUARE_BRACKET_TOKEN", oA[oA.RIGHT_SQUARE_BRACKET_TOKEN = 29] = "RIGHT_SQUARE_BRACKET_TOKEN", oA[oA.UNICODE_RANGE_TOKEN = 30] = "UNICODE_RANGE_TOKEN", oA[oA.WHITESPACE_TOKEN = 31] = "WHITESPACE_TOKEN", oA[oA.EOF_TOKEN = 32] = "EOF_TOKEN";

    function iA(A) {
        return 48 <= A && A <= 57
    }

    function aA(A) {
        return iA(A) || 65 <= A && A <= 70 || 97 <= A && A <= 102
    }

    function cA(A) {
        return 10 === A || 9 === A || 32 === A
    }

    function QA(A) {
        return function(A) {
            return function(A) {
                return 97 <= A && A <= 122
            }(A) || function(A) {
                return 65 <= A && A <= 90
            }(A)
        }(A) || function(A) {
            return 128 <= A
        }(A) || 95 === A
    }

    function wA(A) {
        return QA(A) || iA(A) || 45 === A
    }

    function uA(A, e) {
        return 92 === A && 10 !== e
    }

    function UA(A, e, t) {
        return 45 === A ? QA(e) || uA(e, t) : !!QA(A) || !(92 !== A || !uA(A, e))
    }

    function lA(A, e, t) {
        return 43 === A || 45 === A ? !!iA(e) || 46 === e && iA(t) : iA(46 === A ? e : A)
    }
    var CA = {
            type: sA.LEFT_PARENTHESIS_TOKEN
        },
        gA = {
            type: sA.RIGHT_PARENTHESIS_TOKEN
        },
        EA = {
            type: sA.COMMA_TOKEN
        },
        FA = {
            type: sA.SUFFIX_MATCH_TOKEN
        },
        hA = {
            type: sA.PREFIX_MATCH_TOKEN
        },
        HA = {
            type: sA.COLUMN_TOKEN
        },
        dA = {
            type: sA.DASH_MATCH_TOKEN
        },
        fA = {
            type: sA.INCLUDE_MATCH_TOKEN
        },
        pA = {
            type: sA.LEFT_CURLY_BRACKET_TOKEN
        },
        NA = {
            type: sA.RIGHT_CURLY_BRACKET_TOKEN
        },
        KA = {
            type: sA.SUBSTRING_MATCH_TOKEN
        },
        IA = {
            type: sA.BAD_URL_TOKEN
        },
        TA = {
            type: sA.BAD_STRING_TOKEN
        },
        mA = {
            type: sA.CDO_TOKEN
        },
        RA = {
            type: sA.CDC_TOKEN
        },
        LA = {
            type: sA.COLON_TOKEN
        },
        OA = {
            type: sA.SEMICOLON_TOKEN
        },
        vA = {
            type: sA.LEFT_SQUARE_BRACKET_TOKEN
        },
        DA = {
            type: sA.RIGHT_SQUARE_BRACKET_TOKEN
        },
        bA = {
            type: sA.WHITESPACE_TOKEN
        },
        SA = {
            type: sA.EOF_TOKEN
        },
        MA = (yA.prototype.write = function(A) {
            this._value = this._value.concat(c(A))
        }, yA.prototype.read = function() {
            for (var A = [], e = this.consumeToken(); e !== SA;) A.push(e), e = this.consumeToken();
            return A
        }, yA.prototype.consumeToken = function() {
            var A = this.consumeCodePoint();
            switch (A) {
                case 34:
                    return this.consumeStringToken(34);
                case 35:
                    var e = this.peekCodePoint(0),
                        t = this.peekCodePoint(1),
                        r = this.peekCodePoint(2);
                    if (wA(e) || uA(t, r)) {
                        var n = UA(e, t, r) ? 2 : 1,
                            B = this.consumeName();
                        return {
                            type: sA.HASH_TOKEN,
                            value: B,
                            flags: n
                        }
                    }
                    break;
                case 36:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), FA;
                    break;
                case 39:
                    return this.consumeStringToken(39);
                case 40:
                    return CA;
                case 41:
                    return gA;
                case 42:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), KA;
                    break;
                case 43:
                    if (lA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                    break;
                case 44:
                    return EA;
                case 45:
                    var s = A,
                        o = this.peekCodePoint(0),
                        i = this.peekCodePoint(1);
                    if (lA(s, o, i)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                    if (UA(s, o, i)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                    if (45 === o && 62 === i) return this.consumeCodePoint(), this.consumeCodePoint(), RA;
                    break;
                case 46:
                    if (lA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                    break;
                case 47:
                    if (42 === this.peekCodePoint(0))
                        for (this.consumeCodePoint();;) {
                            var a = this.consumeCodePoint();
                            if (42 === a && 47 === (a = this.consumeCodePoint())) return this.consumeToken();
                            if (-1 === a) return this.consumeToken()
                        }
                    break;
                case 58:
                    return LA;
                case 59:
                    return OA;
                case 60:
                    if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), mA;
                    break;
                case 64:
                    var c = this.peekCodePoint(0),
                        Q = this.peekCodePoint(1),
                        w = this.peekCodePoint(2);
                    if (UA(c, Q, w)) return B = this.consumeName(), {
                        type: sA.AT_KEYWORD_TOKEN,
                        value: B
                    };
                    break;
                case 91:
                    return vA;
                case 92:
                    if (uA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                    break;
                case 93:
                    return DA;
                case 61:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), hA;
                    break;
                case 123:
                    return pA;
                case 125:
                    return NA;
                case 117:
                case 85:
                    var u = this.peekCodePoint(0),
                        U = this.peekCodePoint(1);
                    return 43 !== u || !aA(U) && 63 !== U || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                case 124:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), dA;
                    if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), HA;
                    break;
                case 126:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), fA;
                    break;
                case -1:
                    return SA
            }
            return cA(A) ? (this.consumeWhiteSpace(), bA) : iA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : QA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
                type: sA.DELIM_TOKEN,
                value: l(A)
            }
        }, yA.prototype.consumeCodePoint = function() {
            var A = this._value.shift();
            return void 0 === A ? -1 : A
        }, yA.prototype.reconsumeCodePoint = function(A) {
            this._value.unshift(A)
        }, yA.prototype.peekCodePoint = function(A) {
            return A >= this._value.length ? -1 : this._value[A]
        }, yA.prototype.consumeUnicodeRangeToken = function() {
            for (var A = [], e = this.consumeCodePoint(); aA(e) && A.length < 6;) A.push(e), e = this.consumeCodePoint();
            for (var t = !1; 63 === e && A.length < 6;) A.push(e), e = this.consumeCodePoint(), t = !0;
            if (t) {
                var r = parseInt(l.apply(void 0, A.map(function(A) {
                        return 63 === A ? 48 : A
                    })), 16),
                    n = parseInt(l.apply(void 0, A.map(function(A) {
                        return 63 === A ? 70 : A
                    })), 16);
                return {
                    type: sA.UNICODE_RANGE_TOKEN,
                    start: r,
                    end: n
                }
            }
            var B = parseInt(l.apply(void 0, A), 16);
            if (45 === this.peekCodePoint(0) && aA(this.peekCodePoint(1))) {
                this.consumeCodePoint(), e = this.consumeCodePoint();
                for (var s = []; aA(e) && s.length < 6;) s.push(e), e = this.consumeCodePoint();
                return n = parseInt(l.apply(void 0, s), 16), {
                    type: sA.UNICODE_RANGE_TOKEN,
                    start: B,
                    end: n
                }
            }
            return {
                type: sA.UNICODE_RANGE_TOKEN,
                start: B,
                end: B
            }
        }, yA.prototype.consumeIdentLikeToken = function() {
            var A = this.consumeName();
            return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                type: sA.FUNCTION_TOKEN,
                value: A
            }) : {
                type: sA.IDENT_TOKEN,
                value: A
            }
        }, yA.prototype.consumeUrlToken = function() {
            var A = [];
            if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {
                type: sA.URL_TOKEN,
                value: ""
            };
            var e, t = this.peekCodePoint(0);
            if (39 === t || 34 === t) {
                var r = this.consumeStringToken(this.consumeCodePoint());
                return r.type === sA.STRING_TOKEN && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
                    type: sA.URL_TOKEN,
                    value: r.value
                }) : (this.consumeBadUrlRemnants(), IA)
            }
            for (;;) {
                var n = this.consumeCodePoint();
                if (-1 === n || 41 === n) return {
                    type: sA.URL_TOKEN,
                    value: l.apply(void 0, A)
                };
                if (cA(n)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                    type: sA.URL_TOKEN,
                    value: l.apply(void 0, A)
                }) : (this.consumeBadUrlRemnants(), IA);
                if (34 === n || 39 === n || 40 === n || 0 <= (e = n) && e <= 8 || 11 === e || 14 <= e && e <= 31 || 127 === e) return this.consumeBadUrlRemnants(), IA;
                if (92 === n) {
                    if (!uA(n, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), IA;
                    A.push(this.consumeEscapedCodePoint())
                } else A.push(n)
            }
        }, yA.prototype.consumeWhiteSpace = function() {
            for (; cA(this.peekCodePoint(0));) this.consumeCodePoint()
        }, yA.prototype.consumeBadUrlRemnants = function() {
            for (;;) {
                var A = this.consumeCodePoint();
                if (41 === A || -1 === A) return;
                uA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
            }
        }, yA.prototype.consumeStringSlice = function(A) {
            for (var e = ""; 0 < A;) {
                var t = Math.min(6e4, A);
                e += l.apply(void 0, this._value.splice(0, t)), A -= t
            }
            return this._value.shift(), e
        }, yA.prototype.consumeStringToken = function(A) {
            for (var e = "", t = 0;;) {
                var r = this._value[t];
                if (-1 === r || void 0 === r || r === A) return e += this.consumeStringSlice(t), {
                    type: sA.STRING_TOKEN,
                    value: e
                };
                if (10 === r) return this._value.splice(0, t), TA;
                if (92 === r) {
                    var n = this._value[t + 1]; - 1 !== n && void 0 !== n && (10 === n ? (e += this.consumeStringSlice(t), t = -1, this._value.shift()) : uA(r, n) && (e += this.consumeStringSlice(t), e += l(this.consumeEscapedCodePoint()), t = -1))
                }
                t++
            }
        }, yA.prototype.consumeNumber = function() {
            var A = [],
                e = 4,
                t = this.peekCodePoint(0);
            for (43 !== t && 45 !== t || A.push(this.consumeCodePoint()); iA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
            t = this.peekCodePoint(0);
            var r = this.peekCodePoint(1);
            if (46 === t && iA(r))
                for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; iA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
            t = this.peekCodePoint(0), r = this.peekCodePoint(1);
            var n = this.peekCodePoint(2);
            if ((69 === t || 101 === t) && ((43 === r || 45 === r) && iA(n) || iA(r)))
                for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; iA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
            return [function(A) {
                var e = 0,
                    t = 1;
                43 !== A[e] && 45 !== A[e] || (45 === A[e] && (t = -1), e++);
                for (var r = []; iA(A[e]);) r.push(A[e++]);
                var n = r.length ? parseInt(l.apply(void 0, r), 10) : 0;
                46 === A[e] && e++;
                for (var B = []; iA(A[e]);) B.push(A[e++]);
                var s = B.length,
                    o = s ? parseInt(l.apply(void 0, B), 10) : 0;
                69 !== A[e] && 101 !== A[e] || e++;
                var i = 1;
                43 !== A[e] && 45 !== A[e] || (45 === A[e] && (i = -1), e++);
                for (var a = []; iA(A[e]);) a.push(A[e++]);
                var c = a.length ? parseInt(l.apply(void 0, a), 10) : 0;
                return t * (n + o * Math.pow(10, -s)) * Math.pow(10, i * c)
            }(A), e]
        }, yA.prototype.consumeNumericToken = function() {
            var A = this.consumeNumber(),
                e = A[0],
                t = A[1],
                r = this.peekCodePoint(0),
                n = this.peekCodePoint(1),
                B = this.peekCodePoint(2);
            if (UA(r, n, B)) {
                var s = this.consumeName();
                return {
                    type: sA.DIMENSION_TOKEN,
                    number: e,
                    flags: t,
                    unit: s
                }
            }
            return 37 === r ? (this.consumeCodePoint(), {
                type: sA.PERCENTAGE_TOKEN,
                number: e,
                flags: t
            }) : {
                type: sA.NUMBER_TOKEN,
                number: e,
                flags: t
            }
        }, yA.prototype.consumeEscapedCodePoint = function() {
            var A = this.consumeCodePoint();
            if (aA(A)) {
                for (var e = l(A); aA(this.peekCodePoint(0)) && e.length < 6;) e += l(this.consumeCodePoint());
                cA(this.peekCodePoint(0)) && this.consumeCodePoint();
                var t = parseInt(e, 16);
                return 0 === t || function(A) {
                    return 55296 <= A && A <= 57343
                }(t) || 1114111 < t ? 65533 : t
            }
            return -1 === A ? 65533 : A
        }, yA.prototype.consumeName = function() {
            for (var A = "";;) {
                var e = this.consumeCodePoint();
                if (wA(e)) A += l(e);
                else {
                    if (!uA(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), A;
                    A += l(this.consumeEscapedCodePoint())
                }
            }
        }, yA);

    function yA() {
        this._value = []
    }
    var _A = (PA.create = function(A) {
        var e = new MA;
        return e.write(A), new PA(e.read())
    }, PA.parseValue = function(A) {
        return PA.create(A).parseComponentValue()
    }, PA.parseValues = function(A) {
        return PA.create(A).parseComponentValues()
    }, PA.prototype.parseComponentValue = function() {
        for (var A = this.consumeToken(); A.type === sA.WHITESPACE_TOKEN;) A = this.consumeToken();
        if (A.type === sA.EOF_TOKEN) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
        this.reconsumeToken(A);
        for (var e = this.consumeComponentValue();
            (A = this.consumeToken()).type === sA.WHITESPACE_TOKEN;);
        if (A.type === sA.EOF_TOKEN) return e;
        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
    }, PA.prototype.parseComponentValues = function() {
        for (var A = [];;) {
            var e = this.consumeComponentValue();
            if (e.type === sA.EOF_TOKEN) return A;
            A.push(e), A.push()
        }
    }, PA.prototype.consumeComponentValue = function() {
        var A = this.consumeToken();
        switch (A.type) {
            case sA.LEFT_CURLY_BRACKET_TOKEN:
            case sA.LEFT_SQUARE_BRACKET_TOKEN:
            case sA.LEFT_PARENTHESIS_TOKEN:
                return this.consumeSimpleBlock(A.type);
            case sA.FUNCTION_TOKEN:
                return this.consumeFunction(A)
        }
        return A
    }, PA.prototype.consumeSimpleBlock = function(A) {
        for (var e = {
                type: A,
                values: []
            }, t = this.consumeToken();;) {
            if (t.type === sA.EOF_TOKEN || Be(t, A)) return e;
            this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), t = this.consumeToken()
        }
    }, PA.prototype.consumeFunction = function(A) {
        for (var e = {
                name: A.value,
                values: [],
                type: sA.FUNCTION
            };;) {
            var t = this.consumeToken();
            if (t.type === sA.EOF_TOKEN || t.type === sA.RIGHT_PARENTHESIS_TOKEN) return e;
            this.reconsumeToken(t), e.values.push(this.consumeComponentValue())
        }
    }, PA.prototype.consumeToken = function() {
        var A = this._tokens.shift();
        return void 0 === A ? SA : A
    }, PA.prototype.reconsumeToken = function(A) {
        this._tokens.unshift(A)
    }, PA);

    function PA(A) {
        this._tokens = A
    }

    function xA(A) {
        return A.type === sA.DIMENSION_TOKEN
    }

    function VA(A) {
        return A.type === sA.NUMBER_TOKEN
    }

    function zA(A) {
        return A.type === sA.IDENT_TOKEN
    }

    function XA(A) {
        return A.type === sA.STRING_TOKEN
    }

    function JA(A, e) {
        return zA(A) && A.value === e
    }

    function GA(A) {
        return A.type !== sA.WHITESPACE_TOKEN
    }

    function kA(A) {
        return A.type !== sA.WHITESPACE_TOKEN && A.type !== sA.COMMA_TOKEN
    }

    function WA(A) {
        var e = [],
            t = [];
        return A.forEach(function(A) {
            if (A.type === sA.COMMA_TOKEN) {
                if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
                return e.push(t), void(t = [])
            }
            A.type !== sA.WHITESPACE_TOKEN && t.push(A)
        }), t.length && e.push(t), e
    }

    function YA(A) {
        return A.type === sA.NUMBER_TOKEN || A.type === sA.DIMENSION_TOKEN
    }

    function qA(A) {
        return A.type === sA.PERCENTAGE_TOKEN || YA(A)
    }

    function ZA(A) {
        return 1 < A.length ? [A[0], A[1]] : [A[0]]
    }

    function jA(A, e, t) {
        var r = A[0],
            n = A[1];
        return [ae(r, e), ae(void 0 !== n ? n : r, t)]
    }

    function $A(A) {
        return A.type === sA.DIMENSION_TOKEN && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit)
    }

    function Ae(A) {
        switch (A.filter(zA).map(function(A) {
                return A.value
            }).join(" ")) {
            case "to bottom right":
            case "to right bottom":
            case "left top":
            case "top left":
                return [se, se];
            case "to top":
            case "bottom":
                return Qe(0);
            case "to bottom left":
            case "to left bottom":
            case "right top":
            case "top right":
                return [se, ie];
            case "to right":
            case "left":
                return Qe(90);
            case "to top left":
            case "to left top":
            case "right bottom":
            case "bottom right":
                return [ie, ie];
            case "to bottom":
            case "top":
                return Qe(180);
            case "to top right":
            case "to right top":
            case "left bottom":
            case "bottom left":
                return [ie, se];
            case "to left":
            case "right":
                return Qe(270)
        }
        return 0
    }

    function ee(A) {
        return 0 == (255 & A)
    }

    function te(A) {
        var e = 255 & A,
            t = 255 & A >> 8,
            r = 255 & A >> 16,
            n = 255 & A >> 24;
        return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")"
    }

    function re(A, e) {
        if (A.type === sA.NUMBER_TOKEN) return A.number;
        if (A.type !== sA.PERCENTAGE_TOKEN) return 0;
        var t = 3 === e ? 1 : 255;
        return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
    }

    function ne(A) {
        var e = A.filter(kA);
        if (3 === e.length) {
            var t = e.map(re),
                r = t[0],
                n = t[1],
                B = t[2];
            return ue(r, n, B, 1)
        }
        if (4 !== e.length) return 0;
        var s = e.map(re),
            o = (r = s[0], n = s[1], B = s[2], s[3]);
        return ue(r, n, B, o)
    }
    var Be = function(A, e) {
            return e === sA.LEFT_CURLY_BRACKET_TOKEN && A.type === sA.RIGHT_CURLY_BRACKET_TOKEN || (e === sA.LEFT_SQUARE_BRACKET_TOKEN && A.type === sA.RIGHT_SQUARE_BRACKET_TOKEN || e === sA.LEFT_PARENTHESIS_TOKEN && A.type === sA.RIGHT_PARENTHESIS_TOKEN)
        },
        se = {
            type: sA.NUMBER_TOKEN,
            number: 0,
            flags: 4
        },
        oe = {
            type: sA.PERCENTAGE_TOKEN,
            number: 50,
            flags: 4
        },
        ie = {
            type: sA.PERCENTAGE_TOKEN,
            number: 100,
            flags: 4
        },
        ae = function(A, e) {
            if (A.type === sA.PERCENTAGE_TOKEN) return A.number / 100 * e;
            if (xA(A)) switch (A.unit) {
                case "rem":
                case "em":
                    return 16 * A.number;
                case "px":
                default:
                    return A.number
            }
            return A.number
        },
        ce = function(A) {
            if (A.type === sA.DIMENSION_TOKEN) switch (A.unit) {
                case "deg":
                    return Math.PI * A.number / 180;
                case "grad":
                    return Math.PI / 200 * A.number;
                case "rad":
                    return A.number;
                case "turn":
                    return 2 * Math.PI * A.number
            }
            throw new Error("Unsupported angle type")
        },
        Qe = function(A) {
            return Math.PI * A / 180
        },
        we = function(A) {
            if (A.type === sA.FUNCTION) {
                var e = he[A.name];
                if (void 0 === e) throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
                return e(A.values)
            }
            if (A.type === sA.HASH_TOKEN) {
                if (3 === A.value.length) {
                    var t = A.value.substring(0, 1),
                        r = A.value.substring(1, 2),
                        n = A.value.substring(2, 3);
                    return ue(parseInt(t + t, 16), parseInt(r + r, 16), parseInt(n + n, 16), 1)
                }
                if (4 === A.value.length) {
                    t = A.value.substring(0, 1), r = A.value.substring(1, 2), n = A.value.substring(2, 3);
                    var B = A.value.substring(3, 4);
                    return ue(parseInt(t + t, 16), parseInt(r + r, 16), parseInt(n + n, 16), parseInt(B + B, 16) / 255)
                }
                if (6 === A.value.length) {
                    t = A.value.substring(0, 2), r = A.value.substring(2, 4), n = A.value.substring(4, 6);
                    return ue(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), 1)
                }
                if (8 === A.value.length) {
                    t = A.value.substring(0, 2), r = A.value.substring(2, 4), n = A.value.substring(4, 6), B = A.value.substring(6, 8);
                    return ue(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), parseInt(B, 16) / 255)
                }
            }
            if (A.type === sA.IDENT_TOKEN) {
                var s = He[A.value.toUpperCase()];
                if (void 0 !== s) return s
            }
            return He.TRANSPARENT
        },
        ue = function(A, e, t, r) {
            return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0
        };

    function Ue(A, e, t) {
        return t < 0 && (t += 1), 1 <= t && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
    }

    function le(A) {
        var e = A.filter(kA),
            t = e[0],
            r = e[1],
            n = e[2],
            B = e[3],
            s = (t.type === sA.NUMBER_TOKEN ? Qe(t.number) : ce(t)) / (2 * Math.PI),
            o = qA(r) ? r.number / 100 : 0,
            i = qA(n) ? n.number / 100 : 0,
            a = void 0 !== B && qA(B) ? ae(B, 1) : 1;
        if (0 == o) return ue(255 * i, 255 * i, 255 * i, 1);
        var c = i <= .5 ? i * (1 + o) : i + o - i * o,
            Q = 2 * i - c,
            w = Ue(Q, c, s + 1 / 3),
            u = Ue(Q, c, s),
            U = Ue(Q, c, s - 1 / 3);
        return ue(255 * w, 255 * u, 255 * U, a)
    }
    var Ce, ge, Ee, Fe, he = {
            hsl: le,
            hsla: le,
            rgb: ne,
            rgba: ne
        },
        He = {
            ALICEBLUE: 4042850303,
            ANTIQUEWHITE: 4209760255,
            AQUA: 16777215,
            AQUAMARINE: 2147472639,
            AZURE: 4043309055,
            BEIGE: 4126530815,
            BISQUE: 4293182719,
            BLACK: 255,
            BLANCHEDALMOND: 4293643775,
            BLUE: 65535,
            BLUEVIOLET: 2318131967,
            BROWN: 2771004159,
            BURLYWOOD: 3736635391,
            CADETBLUE: 1604231423,
            CHARTREUSE: 2147418367,
            CHOCOLATE: 3530104575,
            CORAL: 4286533887,
            CORNFLOWERBLUE: 1687547391,
            CORNSILK: 4294499583,
            CRIMSON: 3692313855,
            CYAN: 16777215,
            DARKBLUE: 35839,
            DARKCYAN: 9145343,
            DARKGOLDENROD: 3095837695,
            DARKGRAY: 2846468607,
            DARKGREEN: 6553855,
            DARKGREY: 2846468607,
            DARKKHAKI: 3182914559,
            DARKMAGENTA: 2332068863,
            DARKOLIVEGREEN: 1433087999,
            DARKORANGE: 4287365375,
            DARKORCHID: 2570243327,
            DARKRED: 2332033279,
            DARKSALMON: 3918953215,
            DARKSEAGREEN: 2411499519,
            DARKSLATEBLUE: 1211993087,
            DARKSLATEGRAY: 793726975,
            DARKSLATEGREY: 793726975,
            DARKTURQUOISE: 13554175,
            DARKVIOLET: 2483082239,
            DEEPPINK: 4279538687,
            DEEPSKYBLUE: 12582911,
            DIMGRAY: 1768516095,
            DIMGREY: 1768516095,
            DODGERBLUE: 512819199,
            FIREBRICK: 2988581631,
            FLORALWHITE: 4294635775,
            FORESTGREEN: 579543807,
            FUCHSIA: 4278255615,
            GAINSBORO: 3705462015,
            GHOSTWHITE: 4177068031,
            GOLD: 4292280575,
            GOLDENROD: 3668254975,
            GRAY: 2155905279,
            GREEN: 8388863,
            GREENYELLOW: 2919182335,
            GREY: 2155905279,
            HONEYDEW: 4043305215,
            HOTPINK: 4285117695,
            INDIANRED: 3445382399,
            INDIGO: 1258324735,
            IVORY: 4294963455,
            KHAKI: 4041641215,
            LAVENDER: 3873897215,
            LAVENDERBLUSH: 4293981695,
            LAWNGREEN: 2096890111,
            LEMONCHIFFON: 4294626815,
            LIGHTBLUE: 2916673279,
            LIGHTCORAL: 4034953471,
            LIGHTCYAN: 3774873599,
            LIGHTGOLDENRODYELLOW: 4210742015,
            LIGHTGRAY: 3553874943,
            LIGHTGREEN: 2431553791,
            LIGHTGREY: 3553874943,
            LIGHTPINK: 4290167295,
            LIGHTSALMON: 4288707327,
            LIGHTSEAGREEN: 548580095,
            LIGHTSKYBLUE: 2278488831,
            LIGHTSLATEGRAY: 2005441023,
            LIGHTSLATEGREY: 2005441023,
            LIGHTSTEELBLUE: 2965692159,
            LIGHTYELLOW: 4294959359,
            LIME: 16711935,
            LIMEGREEN: 852308735,
            LINEN: 4210091775,
            MAGENTA: 4278255615,
            MAROON: 2147483903,
            MEDIUMAQUAMARINE: 1724754687,
            MEDIUMBLUE: 52735,
            MEDIUMORCHID: 3126187007,
            MEDIUMPURPLE: 2473647103,
            MEDIUMSEAGREEN: 1018393087,
            MEDIUMSLATEBLUE: 2070474495,
            MEDIUMSPRINGGREEN: 16423679,
            MEDIUMTURQUOISE: 1221709055,
            MEDIUMVIOLETRED: 3340076543,
            MIDNIGHTBLUE: 421097727,
            MINTCREAM: 4127193855,
            MISTYROSE: 4293190143,
            MOCCASIN: 4293178879,
            NAVAJOWHITE: 4292783615,
            NAVY: 33023,
            OLDLACE: 4260751103,
            OLIVE: 2155872511,
            OLIVEDRAB: 1804477439,
            ORANGE: 4289003775,
            ORANGERED: 4282712319,
            ORCHID: 3664828159,
            PALEGOLDENROD: 4008225535,
            PALEGREEN: 2566625535,
            PALETURQUOISE: 2951671551,
            PALEVIOLETRED: 3681588223,
            PAPAYAWHIP: 4293907967,
            PEACHPUFF: 4292524543,
            PERU: 3448061951,
            PINK: 4290825215,
            PLUM: 3718307327,
            POWDERBLUE: 2967529215,
            PURPLE: 2147516671,
            REBECCAPURPLE: 1714657791,
            RED: 4278190335,
            ROSYBROWN: 3163525119,
            ROYALBLUE: 1097458175,
            SADDLEBROWN: 2336560127,
            SALMON: 4202722047,
            SANDYBROWN: 4104413439,
            SEAGREEN: 780883967,
            SEASHELL: 4294307583,
            SIENNA: 2689740287,
            SILVER: 3233857791,
            SKYBLUE: 2278484991,
            SLATEBLUE: 1784335871,
            SLATEGRAY: 1887473919,
            SLATEGREY: 1887473919,
            SNOW: 4294638335,
            SPRINGGREEN: 16744447,
            STEELBLUE: 1182971135,
            TAN: 3535047935,
            TEAL: 8421631,
            THISTLE: 3636451583,
            TOMATO: 4284696575,
            TRANSPARENT: 0,
            TURQUOISE: 1088475391,
            VIOLET: 4001558271,
            WHEAT: 4125012991,
            WHITE: 4294967295,
            WHITESMOKE: 4126537215,
            YELLOW: 4294902015,
            YELLOWGREEN: 2597139199
        };
    (ge = Ce || (Ce = {}))[ge.VALUE = 0] = "VALUE", ge[ge.LIST = 1] = "LIST", ge[ge.IDENT_VALUE = 2] = "IDENT_VALUE", ge[ge.TYPE_VALUE = 3] = "TYPE_VALUE", ge[ge.TOKEN_VALUE = 4] = "TOKEN_VALUE", (Fe = Ee || (Ee = {}))[Fe.BORDER_BOX = 0] = "BORDER_BOX", Fe[Fe.PADDING_BOX = 1] = "PADDING_BOX";

    function de(A) {
        var e = we(A[0]),
            t = A[1];
        return t && qA(t) ? {
            color: e,
            stop: t
        } : {
            color: e,
            stop: null
        }
    }

    function fe(A, t) {
        var e = A[0],
            r = A[A.length - 1];
        null === e.stop && (e.stop = se), null === r.stop && (r.stop = ie);
        for (var n = [], B = 0, s = 0; s < A.length; s++) {
            var o = A[s].stop;
            if (null !== o) {
                var i = ae(o, t);
                B < i ? n.push(i) : n.push(B), B = i
            } else n.push(null)
        }
        var a = null;
        for (s = 0; s < n.length; s++) {
            var c = n[s];
            if (null === c) null === a && (a = s);
            else if (null !== a) {
                for (var Q = s - a, w = (c - n[a - 1]) / (1 + Q), u = 1; u <= Q; u++) n[a + u - 1] = w * u;
                a = null
            }
        }
        return A.map(function(A, e) {
            return {
                color: A.color,
                stop: Math.max(Math.min(1, n[e] / t), 0)
            }
        })
    }

    function pe(A, e, t) {
        var r = "number" == typeof A ? A : function(A, e, t) {
                var r = e / 2,
                    n = t / 2,
                    B = ae(A[0], e) - r,
                    s = n - ae(A[1], t);
                return (Math.atan2(s, B) + 2 * Math.PI) % (2 * Math.PI)
            }(A, e, t),
            n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
            B = e / 2,
            s = t / 2,
            o = n / 2,
            i = Math.sin(r - Math.PI / 2) * o,
            a = Math.cos(r - Math.PI / 2) * o;
        return [n, B - a, B + a, s - i, s + i]
    }

    function Ne(A, e) {
        return Math.sqrt(A * A + e * e)
    }

    function Ke(A, e, B, s, o) {
        return [
            [0, 0],
            [0, e],
            [A, 0],
            [A, e]
        ].reduce(function(A, e) {
            var t = e[0],
                r = e[1],
                n = Ne(B - t, s - r);
            return (o ? n < A.optimumDistance : n > A.optimumDistance) ? {
                optimumCorner: e,
                optimumDistance: n
            } : A
        }, {
            optimumDistance: o ? 1 / 0 : -1 / 0,
            optimumCorner: null
        }).optimumCorner
    }

    function Ie(A) {
        var n = Qe(180),
            B = [];
        return WA(A).forEach(function(A, e) {
            if (0 === e) {
                var t = A[0];
                if (t.type === sA.IDENT_TOKEN && -1 !== ["top", "left", "right", "bottom"].indexOf(t.value)) return void(n = Ae(A));
                if ($A(t)) return void(n = (ce(t) + Qe(270)) % Qe(360))
            }
            var r = de(A);
            B.push(r)
        }), {
            angle: n,
            stops: B,
            type: xe.LINEAR_GRADIENT
        }
    }

    function Te(A) {
        return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
    }
    var me = {
            name: "background-clip",
            initialValue: "border-box",
            prefix: !(Fe[Fe.CONTENT_BOX = 2] = "CONTENT_BOX"),
            type: Ce.LIST,
            parse: function(A) {
                return A.map(function(A) {
                    if (zA(A)) switch (A.value) {
                        case "padding-box":
                            return Ee.PADDING_BOX;
                        case "content-box":
                            return Ee.CONTENT_BOX
                    }
                    return Ee.BORDER_BOX
                })
            }
        },
        Re = {
            name: "background-color",
            initialValue: "transparent",
            prefix: !1,
            type: Ce.TYPE_VALUE,
            format: "color"
        },
        Le = function(A, e, t, r, n) {
            var B = "http://www.w3.org/2000/svg",
                s = document.createElementNS(B, "svg"),
                o = document.createElementNS(B, "foreignObject");
            return s.setAttributeNS(null, "width", A.toString()), s.setAttributeNS(null, "height", e.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(o), o.appendChild(n), s
        },
        Oe = function(r) {
            return new Promise(function(A, e) {
                var t = new Image;
                t.onload = function() {
                    return A(t)
                }, t.onerror = e, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
            })
        },
        ve = {
            get SUPPORT_RANGE_BOUNDS() {
                var A = function(A) {
                    if (A.createRange) {
                        var e = A.createRange();
                        if (e.getBoundingClientRect) {
                            var t = A.createElement("boundtest");
                            t.style.height = "123px", t.style.display = "block", A.body.appendChild(t), e.selectNode(t);
                            var r = e.getBoundingClientRect(),
                                n = Math.round(r.height);
                            if (A.body.removeChild(t), 123 === n) return !0
                        }
                    }
                    return !1
                }(document);
                return Object.defineProperty(ve, "SUPPORT_RANGE_BOUNDS", {
                    value: A
                }), A
            },
            get SUPPORT_SVG_DRAWING() {
                var A = function(A) {
                    var e = new Image,
                        t = A.createElement("canvas"),
                        r = t.getContext("2d");
                    if (!r) return !1;
                    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                    try {
                        r.drawImage(e, 0, 0), t.toDataURL()
                    } catch (A) {
                        return !1
                    }
                    return !0
                }(document);
                return Object.defineProperty(ve, "SUPPORT_SVG_DRAWING", {
                    value: A
                }), A
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
                var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function(r) {
                    var A = r.createElement("canvas"),
                        n = 100;
                    A.width = n, A.height = n;
                    var B = A.getContext("2d");
                    if (!B) return Promise.reject(!1);
                    B.fillStyle = "rgb(0, 255, 0)", B.fillRect(0, 0, n, n);
                    var e = new Image,
                        s = A.toDataURL();
                    e.src = s;
                    var t = Le(n, n, 0, 0, e);
                    return B.fillStyle = "red", B.fillRect(0, 0, n, n), Oe(t).then(function(A) {
                        B.drawImage(A, 0, 0);
                        var e = B.getImageData(0, 0, n, n).data;
                        B.fillStyle = "red", B.fillRect(0, 0, n, n);
                        var t = r.createElement("div");
                        return t.style.backgroundImage = "url(" + s + ")", t.style.height = "100px", Te(e) ? Oe(Le(n, n, 0, 0, t)) : Promise.reject(!1)
                    }).then(function(A) {
                        return B.drawImage(A, 0, 0), Te(B.getImageData(0, 0, n, n).data)
                    }).catch(function() {
                        return !1
                    })
                }(document) : Promise.resolve(!1);
                return Object.defineProperty(ve, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                    value: A
                }), A
            },
            get SUPPORT_CORS_IMAGES() {
                var A = void 0 !== (new Image).crossOrigin;
                return Object.defineProperty(ve, "SUPPORT_CORS_IMAGES", {
                    value: A
                }), A
            },
            get SUPPORT_RESPONSE_TYPE() {
                var A = "string" == typeof(new XMLHttpRequest).responseType;
                return Object.defineProperty(ve, "SUPPORT_RESPONSE_TYPE", {
                    value: A
                }), A
            },
            get SUPPORT_CORS_XHR() {
                var A = "withCredentials" in new XMLHttpRequest;
                return Object.defineProperty(ve, "SUPPORT_CORS_XHR", {
                    value: A
                }), A
            }
        },
        De = (be.prototype.debug = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, [this.id, this.getTime() + "ms"].concat(A)) : this.info.apply(this, A))
        }, be.prototype.getTime = function() {
            return Date.now() - this.start
        }, be.create = function(A) {
            be.instances[A.id] = new be(A)
        }, be.destroy = function(A) {
            delete be.instances[A]
        }, be.getInstance = function(A) {
            var e = be.instances[A];
            if (void 0 === e) throw new Error("No logger instance found with id " + A);
            return e
        }, be.prototype.info = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, [this.id, this.getTime() + "ms"].concat(A))
        }, be.prototype.error = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, [this.id, this.getTime() + "ms"].concat(A)) : this.info.apply(this, A))
        }, be.instances = {}, be);

    function be(A) {
        var e = A.id,
            t = A.enabled;
        this.id = e, this.enabled = t, this.start = Date.now()
    }
    var Se = (Me.create = function(A, e) {
        return Me._caches[A] = new ye(A, e)
    }, Me.destroy = function(A) {
        delete Me._caches[A]
    }, Me.open = function(A) {
        var e = Me._caches[A];
        if (void 0 !== e) return e;
        throw new Error('Cache with key "' + A + '" not found')
    }, Me.getOrigin = function(A) {
        var e = Me._link;
        return e ? (e.href = A, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank"
    }, Me.isSameOrigin = function(A) {
        return Me.getOrigin(A) === Me._origin
    }, Me.setContext = function(A) {
        Me._link = A.document.createElement("a"), Me._origin = Me.getOrigin(A.location.href)
    }, Me.getInstance = function() {
        var A = Me._current;
        if (null === A) throw new Error("No cache instance attached");
        return A
    }, Me.attachInstance = function(A) {
        Me._current = A
    }, Me.detachInstance = function() {
        Me._current = null
    }, Me._caches = {}, Me._origin = "about:blank", Me._current = null, Me);

    function Me() {}
    var ye = (_e.prototype.addImage = function(A) {
        var e = Promise.resolve();
        return this.has(A) || (Ye(A) || Ge(A)) && (this._cache[A] = this.loadImage(A)), e
    }, _e.prototype.match = function(A) {
        return this._cache[A]
    }, _e.prototype.loadImage = function(s) {
        return a(this, void 0, void 0, function() {
            var e, r, t, n, B = this;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return e = Se.isSameOrigin(s), r = !ke(s) && !0 === this._options.useCORS && ve.SUPPORT_CORS_IMAGES && !e, t = !ke(s) && !e && "string" == typeof this._options.proxy && ve.SUPPORT_CORS_XHR && !r, e || !1 !== this._options.allowTaint || ke(s) || t || r ? (n = s, t ? [4, this.proxy(n)] : [3, 2]) : [2];
                    case 1:
                        n = A.sent(), A.label = 2;
                    case 2:
                        return De.getInstance(this.id).debug("Added image " + s.substring(0, 256)), [4, new Promise(function(A, e) {
                            var t = new Image;
                            t.onload = function() {
                                return A(t)
                            }, t.onerror = e, (We(n) || r) && (t.crossOrigin = "anonymous"), t.src = n, !0 === t.complete && setTimeout(function() {
                                return A(t)
                            }, 500), 0 < B._options.imageTimeout && setTimeout(function() {
                                return e("Timed out (" + B._options.imageTimeout + "ms) loading image")
                            }, B._options.imageTimeout)
                        })];
                    case 3:
                        return [2, A.sent()]
                }
            })
        })
    }, _e.prototype.has = function(A) {
        return void 0 !== this._cache[A]
    }, _e.prototype.keys = function() {
        return Promise.resolve(Object.keys(this._cache))
    }, _e.prototype.proxy = function(B) {
        var s = this,
            o = this._options.proxy;
        if (!o) throw new Error("No proxy defined");
        var i = B.substring(0, 256);
        return new Promise(function(e, t) {
            var r = ve.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                n = new XMLHttpRequest;
            if (n.onload = function() {
                    if (200 === n.status)
                        if ("text" == r) e(n.response);
                        else {
                            var A = new FileReader;
                            A.addEventListener("load", function() {
                                return e(A.result)
                            }, !1), A.addEventListener("error", function(A) {
                                return t(A)
                            }, !1), A.readAsDataURL(n.response)
                        }
                    else t("Failed to proxy resource " + i + " with status code " + n.status)
                }, n.onerror = t, n.open("GET", o + "?url=" + encodeURIComponent(B) + "&responseType=" + r), "text" != r && n instanceof XMLHttpRequest && (n.responseType = r), s._options.imageTimeout) {
                var A = s._options.imageTimeout;
                n.timeout = A, n.ontimeout = function() {
                    return t("Timed out (" + A + "ms) proxying " + i)
                }
            }
            n.send()
        })
    }, _e);

    function _e(A, e) {
        this.id = A, this._options = e, this._cache = {}
    }

    function Pe(A) {
        var n = rt.CIRCLE,
            B = Bt.FARTHEST_CORNER,
            s = [],
            o = [];
        return WA(A).forEach(function(A, e) {
            var t = !0;
            if (0 === e ? t = A.reduce(function(A, e) {
                    if (zA(e)) switch (e.value) {
                        case "center":
                            return o.push(oe), !1;
                        case "top":
                        case "left":
                            return o.push(se), !1;
                        case "right":
                        case "bottom":
                            return o.push(ie), !1
                    } else if (qA(e) || YA(e)) return o.push(e), !1;
                    return A
                }, t) : 1 === e && (t = A.reduce(function(A, e) {
                    if (zA(e)) switch (e.value) {
                        case "circle":
                            return n = rt.CIRCLE, !1;
                        case et:
                            return n = rt.ELLIPSE, !1;
                        case tt:
                        case Ze:
                            return B = Bt.CLOSEST_SIDE, !1;
                        case je:
                            return B = Bt.FARTHEST_SIDE, !1;
                        case $e:
                            return B = Bt.CLOSEST_CORNER, !1;
                        case "cover":
                        case At:
                            return B = Bt.FARTHEST_CORNER, !1
                    } else if (YA(e) || qA(e)) return Array.isArray(B) || (B = []), B.push(e), !1;
                    return A
                }, t)), t) {
                var r = de(A);
                s.push(r)
            }
        }), {
            size: B,
            shape: n,
            stops: s,
            position: o,
            type: xe.RADIAL_GRADIENT
        }
    }
    var xe, Ve, ze = /^data:image\/svg\+xml/i,
        Xe = /^data:image\/.*;base64,/i,
        Je = /^data:image\/.*/i,
        Ge = function(A) {
            return ve.SUPPORT_SVG_DRAWING || !qe(A)
        },
        ke = function(A) {
            return Je.test(A)
        },
        We = function(A) {
            return Xe.test(A)
        },
        Ye = function(A) {
            return "blob" === A.substr(0, 4)
        },
        qe = function(A) {
            return "svg" === A.substr(-3).toLowerCase() || ze.test(A)
        },
        Ze = "closest-side",
        je = "farthest-side",
        $e = "closest-corner",
        At = "farthest-corner",
        et = "ellipse",
        tt = "contain";
    (Ve = xe || (xe = {}))[Ve.URL = 0] = "URL", Ve[Ve.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT", Ve[Ve.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT";
    var rt, nt, Bt, st;
    (nt = rt || (rt = {}))[nt.CIRCLE = 0] = "CIRCLE", nt[nt.ELLIPSE = 1] = "ELLIPSE", (st = Bt || (Bt = {}))[st.CLOSEST_SIDE = 0] = "CLOSEST_SIDE", st[st.FARTHEST_SIDE = 1] = "FARTHEST_SIDE", st[st.CLOSEST_CORNER = 2] = "CLOSEST_CORNER", st[st.FARTHEST_CORNER = 3] = "FARTHEST_CORNER";
    var ot = function(A) {
        if (A.type === sA.URL_TOKEN) {
            var e = {
                url: A.value,
                type: xe.URL
            };
            return Se.getInstance().addImage(A.value), e
        }
        if (A.type !== sA.FUNCTION) throw new Error("Unsupported image type");
        var t = ct[A.name];
        if (void 0 === t) throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
        return t(A.values)
    };
    var it, at, ct = {
            "linear-gradient": function(A) {
                var n = Qe(180),
                    B = [];
                return WA(A).forEach(function(A, e) {
                    if (0 === e) {
                        var t = A[0];
                        if (t.type === sA.IDENT_TOKEN && "to" === t.value) return void(n = Ae(A));
                        if ($A(t)) return void(n = ce(t))
                    }
                    var r = de(A);
                    B.push(r)
                }), {
                    angle: n,
                    stops: B,
                    type: xe.LINEAR_GRADIENT
                }
            },
            "-moz-linear-gradient": Ie,
            "-ms-linear-gradient": Ie,
            "-o-linear-gradient": Ie,
            "-webkit-linear-gradient": Ie,
            "radial-gradient": function(A) {
                var B = rt.CIRCLE,
                    s = Bt.FARTHEST_CORNER,
                    o = [],
                    i = [];
                return WA(A).forEach(function(A, e) {
                    var t = !0;
                    if (0 === e) {
                        var r = !1;
                        t = A.reduce(function(A, e) {
                            if (r)
                                if (zA(e)) switch (e.value) {
                                    case "center":
                                        return i.push(oe), A;
                                    case "top":
                                    case "left":
                                        return i.push(se), A;
                                    case "right":
                                    case "bottom":
                                        return i.push(ie), A
                                } else(qA(e) || YA(e)) && i.push(e);
                                else if (zA(e)) switch (e.value) {
                                case "circle":
                                    return B = rt.CIRCLE, !1;
                                case et:
                                    return B = rt.ELLIPSE, !1;
                                case "at":
                                    return !(r = !0);
                                case Ze:
                                    return s = Bt.CLOSEST_SIDE, !1;
                                case "cover":
                                case je:
                                    return s = Bt.FARTHEST_SIDE, !1;
                                case tt:
                                case $e:
                                    return s = Bt.CLOSEST_CORNER, !1;
                                case At:
                                    return s = Bt.FARTHEST_CORNER, !1
                            } else if (YA(e) || qA(e)) return Array.isArray(s) || (s = []), s.push(e), !1;
                            return A
                        }, t)
                    }
                    if (t) {
                        var n = de(A);
                        o.push(n)
                    }
                }), {
                    size: s,
                    shape: B,
                    stops: o,
                    position: i,
                    type: xe.RADIAL_GRADIENT
                }
            },
            "-moz-radial-gradient": Pe,
            "-ms-radial-gradient": Pe,
            "-o-radial-gradient": Pe,
            "-webkit-radial-gradient": Pe,
            "-webkit-gradient": function(A) {
                var e = Qe(180),
                    s = [],
                    o = xe.LINEAR_GRADIENT,
                    t = rt.CIRCLE,
                    r = Bt.FARTHEST_CORNER;
                return WA(A).forEach(function(A, e) {
                    var t = A[0];
                    if (0 === e) {
                        if (zA(t) && "linear" === t.value) return void(o = xe.LINEAR_GRADIENT);
                        if (zA(t) && "radial" === t.value) return void(o = xe.RADIAL_GRADIENT)
                    }
                    if (t.type === sA.FUNCTION)
                        if ("from" === t.name) {
                            var r = we(t.values[0]);
                            s.push({
                                stop: se,
                                color: r
                            })
                        } else if ("to" === t.name) r = we(t.values[0]), s.push({
                        stop: ie,
                        color: r
                    });
                    else if ("color-stop" === t.name) {
                        var n = t.values.filter(kA);
                        if (2 === n.length) {
                            r = we(n[1]);
                            var B = n[0];
                            VA(B) && s.push({
                                stop: {
                                    type: sA.PERCENTAGE_TOKEN,
                                    number: 100 * B.number,
                                    flags: B.flags
                                },
                                color: r
                            })
                        }
                    }
                }), o === xe.LINEAR_GRADIENT ? {
                    angle: (e + Qe(180)) % Qe(360),
                    stops: s,
                    type: o
                } : {
                    size: r,
                    shape: t,
                    stops: s,
                    position: [],
                    type: o
                }
            }
        },
        Qt = {
            name: "background-image",
            initialValue: "none",
            type: Ce.LIST,
            prefix: !1,
            parse: function(A) {
                if (0 === A.length) return [];
                var e = A[0];
                return e.type === sA.IDENT_TOKEN && "none" === e.value ? [] : A.filter(function(A) {
                    return kA(A) && function(A) {
                        return A.type !== sA.FUNCTION || ct[A.name]
                    }(A)
                }).map(ot)
            }
        },
        wt = {
            name: "background-origin",
            initialValue: "border-box",
            prefix: !1,
            type: Ce.LIST,
            parse: function(A) {
                return A.map(function(A) {
                    if (zA(A)) switch (A.value) {
                        case "padding-box":
                            return 1;
                        case "content-box":
                            return 2
                    }
                    return 0
                })
            }
        },
        ut = {
            name: "background-position",
            initialValue: "0% 0%",
            type: Ce.LIST,
            prefix: !1,
            parse: function(A) {
                return WA(A).map(function(A) {
                    return A.filter(qA)
                }).map(ZA)
            }
        };
    (at = it || (it = {}))[at.REPEAT = 0] = "REPEAT", at[at.NO_REPEAT = 1] = "NO_REPEAT", at[at.REPEAT_X = 2] = "REPEAT_X";
    var Ut, lt, Ct = {
            name: "background-repeat",
            initialValue: "repeat",
            prefix: !(at[at.REPEAT_Y = 3] = "REPEAT_Y"),
            type: Ce.LIST,
            parse: function(A) {
                return WA(A).map(function(A) {
                    return A.filter(zA).map(function(A) {
                        return A.value
                    }).join(" ")
                }).map(gt)
            }
        },
        gt = function(A) {
            switch (A) {
                case "no-repeat":
                    return it.NO_REPEAT;
                case "repeat-x":
                case "repeat no-repeat":
                    return it.REPEAT_X;
                case "repeat-y":
                case "no-repeat repeat":
                    return it.REPEAT_Y;
                case "repeat":
                default:
                    return it.REPEAT
            }
        };
    (lt = Ut || (Ut = {})).AUTO = "auto", lt.CONTAIN = "contain";

    function Et(A) {
        return {
            name: "border-" + A + "-color",
            initialValue: "transparent",
            prefix: !1,
            type: Ce.TYPE_VALUE,
            format: "color"
        }
    }

    function Ft(A) {
        return {
            name: "border-radius-" + A,
            initialValue: "0 0",
            prefix: !1,
            type: Ce.LIST,
            parse: function(A) {
                return ZA(A.filter(qA))
            }
        }
    }
    var ht, Ht, dt = {
            name: "background-size",
            initialValue: "0",
            prefix: !(lt.COVER = "cover"),
            type: Ce.LIST,
            parse: function(A) {
                return WA(A).map(function(A) {
                    return A.filter(ft)
                })
            }
        },
        ft = function(A) {
            return zA(A) || qA(A)
        },
        pt = Et("top"),
        Nt = Et("right"),
        Kt = Et("bottom"),
        It = Et("left"),
        Tt = Ft("top-left"),
        mt = Ft("top-right"),
        Rt = Ft("bottom-right"),
        Lt = Ft("bottom-left");
    (Ht = ht || (ht = {}))[Ht.NONE = 0] = "NONE", Ht[Ht.SOLID = 1] = "SOLID";

    function Ot(A) {
        return {
            name: "border-" + A + "-style",
            initialValue: "solid",
            prefix: !1,
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "none":
                        return ht.NONE
                }
                return ht.SOLID
            }
        }
    }

    function vt(A) {
        return {
            name: "border-" + A + "-width",
            initialValue: "0",
            type: Ce.VALUE,
            prefix: !1,
            parse: function(A) {
                return xA(A) ? A.number : 0
            }
        }
    }
    var Dt, bt, St = Ot("top"),
        Mt = Ot("right"),
        yt = Ot("bottom"),
        _t = Ot("left"),
        Pt = vt("top"),
        xt = vt("right"),
        Vt = vt("bottom"),
        zt = vt("left"),
        Xt = {
            name: "color",
            initialValue: "transparent",
            prefix: !1,
            type: Ce.TYPE_VALUE,
            format: "color"
        },
        Jt = {
            name: "display",
            initialValue: "inline-block",
            prefix: !1,
            type: Ce.LIST,
            parse: function(A) {
                return A.filter(zA).reduce(function(A, e) {
                    return A | Gt(e.value)
                }, 0)
            }
        },
        Gt = function(A) {
            switch (A) {
                case "block":
                    return 2;
                case "inline":
                    return 4;
                case "run-in":
                    return 8;
                case "flow":
                    return 16;
                case "flow-root":
                    return 32;
                case "table":
                    return 64;
                case "flex":
                case "-webkit-flex":
                    return 128;
                case "grid":
                case "-ms-grid":
                    return 256;
                case "ruby":
                    return 512;
                case "subgrid":
                    return 1024;
                case "list-item":
                    return 2048;
                case "table-row-group":
                    return 4096;
                case "table-header-group":
                    return 8192;
                case "table-footer-group":
                    return 16384;
                case "table-row":
                    return 32768;
                case "table-cell":
                    return 65536;
                case "table-column-group":
                    return 131072;
                case "table-column":
                    return 262144;
                case "table-caption":
                    return 524288;
                case "ruby-base":
                    return 1048576;
                case "ruby-text":
                    return 2097152;
                case "ruby-base-container":
                    return 4194304;
                case "ruby-text-container":
                    return 8388608;
                case "contents":
                    return 16777216;
                case "inline-block":
                    return 33554432;
                case "inline-list-item":
                    return 67108864;
                case "inline-table":
                    return 134217728;
                case "inline-flex":
                    return 268435456;
                case "inline-grid":
                    return 536870912
            }
            return 0
        };
    (bt = Dt || (Dt = {}))[bt.NONE = 0] = "NONE", bt[bt.LEFT = 1] = "LEFT", bt[bt.RIGHT = 2] = "RIGHT", bt[bt.INLINE_START = 3] = "INLINE_START";
    var kt, Wt, Yt, qt, Zt = {
            name: "float",
            initialValue: "none",
            prefix: !(bt[bt.INLINE_END = 4] = "INLINE_END"),
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "left":
                        return Dt.LEFT;
                    case "right":
                        return Dt.RIGHT;
                    case "inline-start":
                        return Dt.INLINE_START;
                    case "inline-end":
                        return Dt.INLINE_END
                }
                return Dt.NONE
            }
        },
        jt = {
            name: "letter-spacing",
            initialValue: "0",
            prefix: !1,
            type: Ce.VALUE,
            parse: function(A) {
                return A.type === sA.IDENT_TOKEN && "normal" === A.value ? 0 : A.type === sA.NUMBER_TOKEN ? A.number : A.type === sA.DIMENSION_TOKEN ? A.number : 0
            }
        },
        $t = {
            name: "line-break",
            initialValue: (Wt = kt || (kt = {})).NORMAL = "normal",
            prefix: !(Wt.STRICT = "strict"),
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "strict":
                        return kt.STRICT;
                    case "normal":
                    default:
                        return kt.NORMAL
                }
            }
        },
        Ar = {
            name: "line-height",
            initialValue: "normal",
            prefix: !1,
            type: Ce.TOKEN_VALUE
        },
        er = {
            name: "list-style-image",
            initialValue: "none",
            type: Ce.VALUE,
            prefix: !1,
            parse: function(A) {
                return A.type === sA.IDENT_TOKEN && "none" === A.value ? null : ot(A)
            }
        };
    (qt = Yt || (Yt = {}))[qt.INSIDE = 0] = "INSIDE";
    var tr, rr, nr = {
        name: "list-style-position",
        initialValue: "outside",
        prefix: !(qt[qt.OUTSIDE = 1] = "OUTSIDE"),
        type: Ce.IDENT_VALUE,
        parse: function(A) {
            switch (A) {
                case "inside":
                    return Yt.INSIDE;
                case "outside":
                default:
                    return Yt.OUTSIDE
            }
        }
    };
    (rr = tr || (tr = {}))[rr.NONE = -1] = "NONE", rr[rr.DISC = 0] = "DISC", rr[rr.CIRCLE = 1] = "CIRCLE", rr[rr.SQUARE = 2] = "SQUARE", rr[rr.DECIMAL = 3] = "DECIMAL", rr[rr.CJK_DECIMAL = 4] = "CJK_DECIMAL", rr[rr.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO", rr[rr.LOWER_ROMAN = 6] = "LOWER_ROMAN", rr[rr.UPPER_ROMAN = 7] = "UPPER_ROMAN", rr[rr.LOWER_GREEK = 8] = "LOWER_GREEK", rr[rr.LOWER_ALPHA = 9] = "LOWER_ALPHA", rr[rr.UPPER_ALPHA = 10] = "UPPER_ALPHA", rr[rr.ARABIC_INDIC = 11] = "ARABIC_INDIC", rr[rr.ARMENIAN = 12] = "ARMENIAN", rr[rr.BENGALI = 13] = "BENGALI", rr[rr.CAMBODIAN = 14] = "CAMBODIAN", rr[rr.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH", rr[rr.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM", rr[rr.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC", rr[rr.DEVANAGARI = 18] = "DEVANAGARI", rr[rr.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC", rr[rr.GEORGIAN = 20] = "GEORGIAN", rr[rr.GUJARATI = 21] = "GUJARATI", rr[rr.GURMUKHI = 22] = "GURMUKHI", rr[rr.HEBREW = 22] = "HEBREW", rr[rr.HIRAGANA = 23] = "HIRAGANA", rr[rr.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA", rr[rr.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL", rr[rr.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL", rr[rr.KANNADA = 27] = "KANNADA", rr[rr.KATAKANA = 28] = "KATAKANA", rr[rr.KATAKANA_IROHA = 29] = "KATAKANA_IROHA", rr[rr.KHMER = 30] = "KHMER", rr[rr.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL", rr[rr.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL", rr[rr.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL", rr[rr.LAO = 34] = "LAO", rr[rr.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN", rr[rr.MALAYALAM = 36] = "MALAYALAM", rr[rr.MONGOLIAN = 37] = "MONGOLIAN", rr[rr.MYANMAR = 38] = "MYANMAR", rr[rr.ORIYA = 39] = "ORIYA", rr[rr.PERSIAN = 40] = "PERSIAN", rr[rr.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL", rr[rr.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL", rr[rr.TAMIL = 43] = "TAMIL", rr[rr.TELUGU = 44] = "TELUGU", rr[rr.THAI = 45] = "THAI", rr[rr.TIBETAN = 46] = "TIBETAN", rr[rr.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL", rr[rr.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL", rr[rr.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN", rr[rr.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN";

    function Br(A) {
        return {
            name: "margin-" + A,
            initialValue: "0",
            prefix: !1,
            type: Ce.TOKEN_VALUE
        }
    }
    var sr, or, ir = {
            name: "list-style-type",
            initialValue: "none",
            prefix: !(rr[rr.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED"),
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "disc":
                        return tr.DISC;
                    case "circle":
                        return tr.CIRCLE;
                    case "square":
                        return tr.SQUARE;
                    case "decimal":
                        return tr.DECIMAL;
                    case "cjk-decimal":
                        return tr.CJK_DECIMAL;
                    case "decimal-leading-zero":
                        return tr.DECIMAL_LEADING_ZERO;
                    case "lower-roman":
                        return tr.LOWER_ROMAN;
                    case "upper-roman":
                        return tr.UPPER_ROMAN;
                    case "lower-greek":
                        return tr.LOWER_GREEK;
                    case "lower-alpha":
                        return tr.LOWER_ALPHA;
                    case "upper-alpha":
                        return tr.UPPER_ALPHA;
                    case "arabic-indic":
                        return tr.ARABIC_INDIC;
                    case "armenian":
                        return tr.ARMENIAN;
                    case "bengali":
                        return tr.BENGALI;
                    case "cambodian":
                        return tr.CAMBODIAN;
                    case "cjk-earthly-branch":
                        return tr.CJK_EARTHLY_BRANCH;
                    case "cjk-heavenly-stem":
                        return tr.CJK_HEAVENLY_STEM;
                    case "cjk-ideographic":
                        return tr.CJK_IDEOGRAPHIC;
                    case "devanagari":
                        return tr.DEVANAGARI;
                    case "ethiopic-numeric":
                        return tr.ETHIOPIC_NUMERIC;
                    case "georgian":
                        return tr.GEORGIAN;
                    case "gujarati":
                        return tr.GUJARATI;
                    case "gurmukhi":
                        return tr.GURMUKHI;
                    case "hebrew":
                        return tr.HEBREW;
                    case "hiragana":
                        return tr.HIRAGANA;
                    case "hiragana-iroha":
                        return tr.HIRAGANA_IROHA;
                    case "japanese-formal":
                        return tr.JAPANESE_FORMAL;
                    case "japanese-informal":
                        return tr.JAPANESE_INFORMAL;
                    case "kannada":
                        return tr.KANNADA;
                    case "katakana":
                        return tr.KATAKANA;
                    case "katakana-iroha":
                        return tr.KATAKANA_IROHA;
                    case "khmer":
                        return tr.KHMER;
                    case "korean-hangul-formal":
                        return tr.KOREAN_HANGUL_FORMAL;
                    case "korean-hanja-formal":
                        return tr.KOREAN_HANJA_FORMAL;
                    case "korean-hanja-informal":
                        return tr.KOREAN_HANJA_INFORMAL;
                    case "lao":
                        return tr.LAO;
                    case "lower-armenian":
                        return tr.LOWER_ARMENIAN;
                    case "malayalam":
                        return tr.MALAYALAM;
                    case "mongolian":
                        return tr.MONGOLIAN;
                    case "myanmar":
                        return tr.MYANMAR;
                    case "oriya":
                        return tr.ORIYA;
                    case "persian":
                        return tr.PERSIAN;
                    case "simp-chinese-formal":
                        return tr.SIMP_CHINESE_FORMAL;
                    case "simp-chinese-informal":
                        return tr.SIMP_CHINESE_INFORMAL;
                    case "tamil":
                        return tr.TAMIL;
                    case "telugu":
                        return tr.TELUGU;
                    case "thai":
                        return tr.THAI;
                    case "tibetan":
                        return tr.TIBETAN;
                    case "trad-chinese-formal":
                        return tr.TRAD_CHINESE_FORMAL;
                    case "trad-chinese-informal":
                        return tr.TRAD_CHINESE_INFORMAL;
                    case "upper-armenian":
                        return tr.UPPER_ARMENIAN;
                    case "disclosure-open":
                        return tr.DISCLOSURE_OPEN;
                    case "disclosure-closed":
                        return tr.DISCLOSURE_CLOSED;
                    case "none":
                    default:
                        return tr.NONE
                }
            }
        },
        ar = Br("top"),
        cr = Br("right"),
        Qr = Br("bottom"),
        wr = Br("left");
    (or = sr || (sr = {}))[or.VISIBLE = 0] = "VISIBLE", or[or.HIDDEN = 1] = "HIDDEN", or[or.SCROLL = 2] = "SCROLL";

    function ur(A) {
        return {
            name: "padding-" + A,
            initialValue: "0",
            prefix: !1,
            type: Ce.TYPE_VALUE,
            format: "length-percentage"
        }
    }
    var Ur, lr, Cr, gr, Er = {
            name: "overflow",
            initialValue: "visible",
            prefix: !(or[or.AUTO = 3] = "AUTO"),
            type: Ce.LIST,
            parse: function(A) {
                return A.filter(zA).map(function(A) {
                    switch (A.value) {
                        case "hidden":
                            return sr.HIDDEN;
                        case "scroll":
                            return sr.SCROLL;
                        case "auto":
                            return sr.AUTO;
                        case "visible":
                        default:
                            return sr.VISIBLE
                    }
                })
            }
        },
        Fr = {
            name: "overflow-wrap",
            initialValue: (lr = Ur || (Ur = {})).NORMAL = "normal",
            prefix: !(lr.BREAK_WORD = "break-word"),
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "break-word":
                        return Ur.BREAK_WORD;
                    case "normal":
                    default:
                        return Ur.NORMAL
                }
            }
        },
        hr = ur("top"),
        Hr = ur("right"),
        dr = ur("bottom"),
        fr = ur("left");
    (gr = Cr || (Cr = {}))[gr.LEFT = 0] = "LEFT", gr[gr.CENTER = 1] = "CENTER";
    var pr, Nr, Kr = {
        name: "text-align",
        initialValue: "left",
        prefix: !(gr[gr.RIGHT = 2] = "RIGHT"),
        type: Ce.IDENT_VALUE,
        parse: function(A) {
            switch (A) {
                case "right":
                    return Cr.RIGHT;
                case "center":
                case "justify":
                    return Cr.CENTER;
                case "left":
                default:
                    return Cr.LEFT
            }
        }
    };
    (Nr = pr || (pr = {}))[Nr.STATIC = 0] = "STATIC", Nr[Nr.RELATIVE = 1] = "RELATIVE", Nr[Nr.ABSOLUTE = 2] = "ABSOLUTE", Nr[Nr.FIXED = 3] = "FIXED";
    var Ir, Tr, mr = {
            name: "position",
            initialValue: "static",
            prefix: !(Nr[Nr.STICKY = 4] = "STICKY"),
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "relative":
                        return pr.RELATIVE;
                    case "absolute":
                        return pr.ABSOLUTE;
                    case "fixed":
                        return pr.FIXED;
                    case "sticky":
                        return pr.STICKY
                }
                return pr.STATIC
            }
        },
        Rr = {
            name: "text-shadow",
            initialValue: "none",
            type: Ce.LIST,
            prefix: !1,
            parse: function(A) {
                return 1 === A.length && JA(A[0], "none") ? [] : WA(A).map(function(A) {
                    for (var e = {
                            color: He.TRANSPARENT,
                            offsetX: se,
                            offsetY: se,
                            blur: se
                        }, t = 0, r = 0; r < A.length; r++) {
                        var n = A[r];
                        YA(n) ? (0 === t ? e.offsetX = n : 1 === t ? e.offsetY = n : e.blur = n, t++) : e.color = we(n)
                    }
                    return e
                })
            }
        };
    (Tr = Ir || (Ir = {}))[Tr.NONE = 0] = "NONE", Tr[Tr.LOWERCASE = 1] = "LOWERCASE", Tr[Tr.UPPERCASE = 2] = "UPPERCASE";
    var Lr, Or, vr = {
            name: "text-transform",
            initialValue: "none",
            prefix: !(Tr[Tr.CAPITALIZE = 3] = "CAPITALIZE"),
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "uppercase":
                        return Ir.UPPERCASE;
                    case "lowercase":
                        return Ir.LOWERCASE;
                    case "capitalize":
                        return Ir.CAPITALIZE
                }
                return Ir.NONE
            }
        },
        Dr = {
            name: "transform",
            initialValue: "none",
            prefix: !0,
            type: Ce.VALUE,
            parse: function(A) {
                if (A.type === sA.IDENT_TOKEN && "none" === A.value) return null;
                if (A.type !== sA.FUNCTION) return null;
                var e = br[A.name];
                if (void 0 === e) throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
                return e(A.values)
            }
        },
        br = {
            matrix: function(A) {
                var e = A.filter(function(A) {
                    return A.type === sA.NUMBER_TOKEN
                }).map(function(A) {
                    return A.number
                });
                return 6 === e.length ? e : null
            },
            matrix3d: function(A) {
                var e = A.filter(function(A) {
                        return A.type === sA.NUMBER_TOKEN
                    }).map(function(A) {
                        return A.number
                    }),
                    t = e[0],
                    r = e[1],
                    n = (e[2], e[3], e[4]),
                    B = e[5],
                    s = (e[6], e[7], e[8], e[9], e[10], e[11], e[12]),
                    o = e[13];
                e[14], e[15];
                return 16 === e.length ? [t, r, n, B, s, o] : null
            }
        },
        Sr = {
            type: sA.PERCENTAGE_TOKEN,
            number: 50,
            flags: 4
        },
        Mr = [Sr, Sr],
        yr = {
            name: "transform-origin",
            initialValue: "50% 50%",
            prefix: !0,
            type: Ce.LIST,
            parse: function(A) {
                var e = A.filter(qA);
                return 2 !== e.length ? Mr : [e[0], e[1]]
            }
        };
    (Or = Lr || (Lr = {}))[Or.VISIBLE = 0] = "VISIBLE", Or[Or.HIDDEN = 1] = "HIDDEN";
    var _r, Pr, xr = {
        name: "visible",
        initialValue: "none",
        prefix: !(Or[Or.COLLAPSE = 2] = "COLLAPSE"),
        type: Ce.IDENT_VALUE,
        parse: function(A) {
            switch (A) {
                case "hidden":
                    return Lr.HIDDEN;
                case "collapse":
                    return Lr.COLLAPSE;
                case "visible":
                default:
                    return Lr.VISIBLE
            }
        }
    };
    (Pr = _r || (_r = {})).NORMAL = "normal", Pr.BREAK_ALL = "break-all";
    var Vr, zr, Xr = {
            name: "word-break",
            initialValue: "normal",
            prefix: !(Pr.KEEP_ALL = "keep-all"),
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "break-all":
                        return _r.BREAK_ALL;
                    case "keep-all":
                        return _r.KEEP_ALL;
                    case "normal":
                    default:
                        return _r.NORMAL
                }
            }
        },
        Jr = {
            name: "z-index",
            initialValue: "auto",
            prefix: !1,
            type: Ce.VALUE,
            parse: function(A) {
                if (A.type === sA.IDENT_TOKEN) return {
                    auto: !0,
                    order: 0
                };
                if (VA(A)) return {
                    auto: !1,
                    order: A.number
                };
                throw new Error("Invalid z-index number parsed")
            }
        },
        Gr = {
            name: "opacity",
            initialValue: "1",
            type: Ce.VALUE,
            prefix: !1,
            parse: function(A) {
                return VA(A) ? A.number : 1
            }
        },
        kr = {
            name: "text-decoration-color",
            initialValue: "transparent",
            prefix: !1,
            type: Ce.TYPE_VALUE,
            format: "color"
        },
        Wr = {
            name: "text-decoration-line",
            initialValue: "none",
            prefix: !1,
            type: Ce.LIST,
            parse: function(A) {
                return A.filter(zA).map(function(A) {
                    switch (A.value) {
                        case "underline":
                            return 1;
                        case "overline":
                            return 2;
                        case "line-through":
                            return 3;
                        case "none":
                            return 4
                    }
                    return 0
                }).filter(function(A) {
                    return 0 !== A
                })
            }
        },
        Yr = {
            name: "font-family",
            initialValue: "",
            prefix: !1,
            type: Ce.LIST,
            parse: function(A) {
                var e = [],
                    t = [];
                return A.forEach(function(A) {
                    switch (A.type) {
                        case sA.IDENT_TOKEN:
                        case sA.STRING_TOKEN:
                            e.push(A.value);
                            break;
                        case sA.NUMBER_TOKEN:
                            e.push(A.number.toString());
                            break;
                        case sA.COMMA_TOKEN:
                            t.push(e.join(" ")), e.length = 0
                    }
                }), e.length && t.push(e.join(" ")), t.map(function(A) {
                    return -1 === A.indexOf(" ") ? A : "'" + A + "'"
                })
            }
        },
        qr = {
            name: "font-size",
            initialValue: "0",
            prefix: !1,
            type: Ce.TYPE_VALUE,
            format: "length"
        },
        Zr = {
            name: "font-weight",
            initialValue: "normal",
            type: Ce.VALUE,
            prefix: !1,
            parse: function(A) {
                if (VA(A)) return A.number;
                if (zA(A)) switch (A.value) {
                    case "bold":
                        return 700;
                    case "normal":
                    default:
                        return 400
                }
                return 400
            }
        },
        jr = {
            name: "font-variant",
            initialValue: "none",
            type: Ce.LIST,
            prefix: !1,
            parse: function(A) {
                return A.filter(zA).map(function(A) {
                    return A.value
                })
            }
        };
    (zr = Vr || (Vr = {})).NORMAL = "normal", zr.ITALIC = "italic";

    function $r(A, e) {
        return 0 != (A & e)
    }

    function An(A, e, t) {
        if (!A) return "";
        var r = A[Math.min(e, A.length - 1)];
        return r ? t ? r.open : r.close : ""
    }
    var en = {
            name: "font-style",
            initialValue: "normal",
            prefix: !(zr.OBLIQUE = "oblique"),
            type: Ce.IDENT_VALUE,
            parse: function(A) {
                switch (A) {
                    case "oblique":
                        return Vr.OBLIQUE;
                    case "italic":
                        return Vr.ITALIC;
                    case "normal":
                    default:
                        return Vr.NORMAL
                }
            }
        },
        tn = {
            name: "content",
            initialValue: "none",
            type: Ce.LIST,
            prefix: !1,
            parse: function(A) {
                if (0 === A.length) return [];
                var e = A[0];
                return e.type === sA.IDENT_TOKEN && "none" === e.value ? [] : A
            }
        },
        rn = {
            name: "counter-increment",
            initialValue: "none",
            prefix: !0,
            type: Ce.LIST,
            parse: function(A) {
                if (0 === A.length) return null;
                var e = A[0];
                if (e.type === sA.IDENT_TOKEN && "none" === e.value) return null;
                for (var t = [], r = A.filter(GA), n = 0; n < r.length; n++) {
                    var B = r[n],
                        s = r[n + 1];
                    if (B.type === sA.IDENT_TOKEN) {
                        var o = s && VA(s) ? s.number : 1;
                        t.push({
                            counter: B.value,
                            increment: o
                        })
                    }
                }
                return t
            }
        },
        nn = {
            name: "counter-reset",
            initialValue: "none",
            prefix: !0,
            type: Ce.LIST,
            parse: function(A) {
                if (0 === A.length) return [];
                for (var e = [], t = A.filter(GA), r = 0; r < t.length; r++) {
                    var n = t[r],
                        B = t[r + 1];
                    if (zA(n) && "none" !== n.value) {
                        var s = B && VA(B) ? B.number : 0;
                        e.push({
                            counter: n.value,
                            reset: s
                        })
                    }
                }
                return e
            }
        },
        Bn = {
            name: "quotes",
            initialValue: "none",
            prefix: !0,
            type: Ce.LIST,
            parse: function(A) {
                if (0 === A.length) return null;
                var e = A[0];
                if (e.type === sA.IDENT_TOKEN && "none" === e.value) return null;
                var t = [],
                    r = A.filter(XA);
                if (r.length % 2 != 0) return null;
                for (var n = 0; n < r.length; n += 2) {
                    var B = r[n].value,
                        s = r[n + 1].value;
                    t.push({
                        open: B,
                        close: s
                    })
                }
                return t
            }
        },
        sn = {
            name: "box-shadow",
            initialValue: "none",
            type: Ce.LIST,
            prefix: !1,
            parse: function(A) {
                return 1 === A.length && JA(A[0], "none") ? [] : WA(A).map(function(A) {
                    for (var e = {
                            color: 255,
                            offsetX: se,
                            offsetY: se,
                            blur: se,
                            spread: se,
                            inset: !1
                        }, t = 0, r = 0; r < A.length; r++) {
                        var n = A[r];
                        JA(n, "inset") ? e.inset = !0 : YA(n) ? (0 === t ? e.offsetX = n : 1 === t ? e.offsetY = n : 2 === t ? e.blur = n : e.spread = n, t++) : e.color = we(n)
                    }
                    return e
                })
            }
        },
        on = (an.prototype.isVisible = function() {
            return 0 < this.display && 0 < this.opacity && this.visibility === Lr.VISIBLE
        }, an.prototype.isTransparent = function() {
            return ee(this.backgroundColor)
        }, an.prototype.isTransformed = function() {
            return null !== this.transform
        }, an.prototype.isPositioned = function() {
            return this.position !== pr.STATIC
        }, an.prototype.isPositionedWithZIndex = function() {
            return this.isPositioned() && !this.zIndex.auto
        }, an.prototype.isFloating = function() {
            return this.float !== Dt.NONE
        }, an.prototype.isInlineLevel = function() {
            return $r(this.display, 4) || $r(this.display, 33554432) || $r(this.display, 268435456) || $r(this.display, 536870912) || $r(this.display, 67108864) || $r(this.display, 134217728)
        }, an);

    function an(A) {
        this.backgroundClip = un(me, A.backgroundClip), this.backgroundColor = un(Re, A.backgroundColor), this.backgroundImage = un(Qt, A.backgroundImage), this.backgroundOrigin = un(wt, A.backgroundOrigin), this.backgroundPosition = un(ut, A.backgroundPosition), this.backgroundRepeat = un(Ct, A.backgroundRepeat), this.backgroundSize = un(dt, A.backgroundSize), this.borderTopColor = un(pt, A.borderTopColor), this.borderRightColor = un(Nt, A.borderRightColor), this.borderBottomColor = un(Kt, A.borderBottomColor), this.borderLeftColor = un(It, A.borderLeftColor), this.borderTopLeftRadius = un(Tt, A.borderTopLeftRadius), this.borderTopRightRadius = un(mt, A.borderTopRightRadius), this.borderBottomRightRadius = un(Rt, A.borderBottomRightRadius), this.borderBottomLeftRadius = un(Lt, A.borderBottomLeftRadius), this.borderTopStyle = un(St, A.borderTopStyle), this.borderRightStyle = un(Mt, A.borderRightStyle), this.borderBottomStyle = un(yt, A.borderBottomStyle), this.borderLeftStyle = un(_t, A.borderLeftStyle), this.borderTopWidth = un(Pt, A.borderTopWidth), this.borderRightWidth = un(xt, A.borderRightWidth), this.borderBottomWidth = un(Vt, A.borderBottomWidth), this.borderLeftWidth = un(zt, A.borderLeftWidth), this.boxShadow = un(sn, A.boxShadow), this.color = un(Xt, A.color), this.display = un(Jt, A.display), this.float = un(Zt, A.cssFloat), this.fontFamily = un(Yr, A.fontFamily), this.fontSize = un(qr, A.fontSize), this.fontStyle = un(en, A.fontStyle), this.fontVariant = un(jr, A.fontVariant), this.fontWeight = un(Zr, A.fontWeight), this.letterSpacing = un(jt, A.letterSpacing), this.lineBreak = un($t, A.lineBreak), this.lineHeight = un(Ar, A.lineHeight), this.listStyleImage = un(er, A.listStyleImage), this.listStylePosition = un(nr, A.listStylePosition), this.listStyleType = un(ir, A.listStyleType), this.marginTop = un(ar, A.marginTop), this.marginRight = un(cr, A.marginRight), this.marginBottom = un(Qr, A.marginBottom), this.marginLeft = un(wr, A.marginLeft), this.opacity = un(Gr, A.opacity);
        var e = un(Er, A.overflow);
        this.overflowX = e[0], this.overflowY = e[1 < e.length ? 1 : 0], this.overflowWrap = un(Fr, A.overflowWrap), this.paddingTop = un(hr, A.paddingTop), this.paddingRight = un(Hr, A.paddingRight), this.paddingBottom = un(dr, A.paddingBottom), this.paddingLeft = un(fr, A.paddingLeft), this.position = un(mr, A.position), this.textAlign = un(Kr, A.textAlign), this.textDecorationColor = un(kr, A.textDecorationColor || A.color), this.textDecorationLine = un(Wr, A.textDecorationLine), this.textShadow = un(Rr, A.textShadow), this.textTransform = un(vr, A.textTransform), this.transform = un(Dr, A.transform), this.transformOrigin = un(yr, A.transformOrigin), this.visibility = un(xr, A.visibility), this.wordBreak = un(Xr, A.wordBreak), this.zIndex = un(Jr, A.zIndex)
    }
    var cn, Qn = function(A) {
            this.content = un(tn, A.content), this.quotes = un(Bn, A.quotes)
        },
        wn = function(A) {
            this.counterIncrement = un(rn, A.counterIncrement), this.counterReset = un(nn, A.counterReset)
        },
        un = function(A, e) {
            var t = new MA,
                r = null != e ? e.toString() : A.initialValue;
            t.write(r);
            var n = new _A(t.read());
            switch (A.type) {
                case Ce.IDENT_VALUE:
                    var B = n.parseComponentValue();
                    return A.parse(zA(B) ? B.value : A.initialValue);
                case Ce.VALUE:
                    return A.parse(n.parseComponentValue());
                case Ce.LIST:
                    return A.parse(n.parseComponentValues());
                case Ce.TOKEN_VALUE:
                    return n.parseComponentValue();
                case Ce.TYPE_VALUE:
                    switch (A.format) {
                        case "angle":
                            return ce(n.parseComponentValue());
                        case "color":
                            return we(n.parseComponentValue());
                        case "image":
                            return ot(n.parseComponentValue());
                        case "length":
                            var s = n.parseComponentValue();
                            return YA(s) ? s : se;
                        case "length-percentage":
                            var o = n.parseComponentValue();
                            return qA(o) ? o : se
                    }
            }
            throw new Error("Attempting to parse unsupported css format type " + A.format)
        },
        Un = function(A) {
            this.styles = new on(window.getComputedStyle(A, null)), this.textNodes = [], this.elements = [], null !== this.styles.transform && wB(A) && (A.style.transform = "none"), this.bounds = T(A), this.flags = 0
        },
        ln = function(A, e) {
            this.text = A, this.bounds = e
        },
        Cn = function(A) {
            var e = A.ownerDocument;
            if (e) {
                var t = e.createElement("html2canvaswrapper");
                t.appendChild(A.cloneNode(!0));
                var r = A.parentNode;
                if (r) {
                    r.replaceChild(t, A);
                    var n = T(t);
                    return t.firstChild && r.replaceChild(t.firstChild, t), n
                }
            }
            return new I(0, 0, 0, 0)
        },
        gn = function(A, e, t) {
            var r = A.ownerDocument;
            if (!r) throw new Error("Node has no owner document");
            var n = r.createRange();
            return n.setStart(A, e), n.setEnd(A, e + t), I.fromClientRect(n.getBoundingClientRect())
        },
        En = function(A, e) {
            return 0 !== e.letterSpacing ? c(A).map(function(A) {
                return l(A)
            }) : Fn(A, e)
        },
        Fn = function(A, e) {
            for (var t, r = function(A, e) {
                    var t = c(A),
                        r = u(t, e),
                        n = r[0],
                        B = r[1],
                        s = r[2],
                        o = t.length,
                        i = 0,
                        a = 0;
                    return {
                        next: function() {
                            if (o <= a) return {
                                done: !0,
                                value: null
                            };
                            for (var A = Y; a < o && (A = w(t, B, n, ++a, s)) === Y;);
                            if (A === Y && a !== o) return {
                                done: !0,
                                value: null
                            };
                            var e = new nA(t, A, i, a);
                            return i = a, {
                                value: e,
                                done: !1
                            }
                        }
                    }
                }(A, {
                    lineBreak: e.lineBreak,
                    wordBreak: e.overflowWrap === Ur.BREAK_WORD ? "break-word" : e.wordBreak
                }), n = []; !(t = r.next()).done;) t.value && n.push(t.value.slice());
            return n
        },
        hn = function(A, e) {
            this.text = Hn(A.data, e.textTransform), this.textBounds = function(A, t, r) {
                var e = En(A, t),
                    n = [],
                    B = 0;
                return e.forEach(function(A) {
                    if (t.textDecorationLine.length || 0 < A.trim().length)
                        if (ve.SUPPORT_RANGE_BOUNDS) n.push(new ln(A, gn(r, B, A.length)));
                        else {
                            var e = r.splitText(A.length);
                            n.push(new ln(A, Cn(r))), r = e
                        }
                    else ve.SUPPORT_RANGE_BOUNDS || (r = r.splitText(A.length));
                    B += A.length
                }), n
            }(this.text, e, A)
        },
        Hn = function(A, e) {
            switch (e) {
                case Ir.LOWERCASE:
                    return A.toLowerCase();
                case Ir.CAPITALIZE:
                    return A.replace(dn, fn);
                case Ir.UPPERCASE:
                    return A.toUpperCase();
                default:
                    return A
            }
        },
        dn = /(^|\s|:|-|\(|\))([a-z])/g,
        fn = function(A, e, t) {
            return 0 < A.length ? e + t.toUpperCase() : A
        },
        pn = (A(Nn, cn = Un), Nn);

    function Nn(A) {
        var e = cn.call(this, A) || this;
        return e.src = A.currentSrc || A.src, e.intrinsicWidth = A.naturalWidth, e.intrinsicHeight = A.naturalHeight, Se.getInstance().addImage(e.src), e
    }
    var Kn, In = (A(Tn, Kn = Un), Tn);

    function Tn(A) {
        var e = Kn.call(this, A) || this;
        return e.canvas = A, e.intrinsicWidth = A.width, e.intrinsicHeight = A.height, e
    }
    var mn, Rn = (A(Ln, mn = Un), Ln);

    function Ln(A) {
        var e = mn.call(this, A) || this,
            t = new XMLSerializer;
        return e.svg = "data:image/svg+xml," + encodeURIComponent(t.serializeToString(A)), e.intrinsicWidth = A.width.baseVal.value, e.intrinsicHeight = A.height.baseVal.value, Se.getInstance().addImage(e.svg), e
    }
    var On, vn = (A(Dn, On = Un), Dn);

    function Dn(A) {
        var e = On.call(this, A) || this;
        return e.value = A.value, e
    }
    var bn, Sn = (A(Mn, bn = Un), Mn);

    function Mn(A) {
        var e = bn.call(this, A) || this;
        return e.start = A.start, e.reversed = "boolean" == typeof A.reversed && !0 === A.reversed, e
    }
    var yn, _n = [{
            type: sA.DIMENSION_TOKEN,
            flags: 0,
            unit: "px",
            number: 3
        }],
        Pn = [{
            type: sA.PERCENTAGE_TOKEN,
            flags: 0,
            number: 50
        }],
        xn = "checkbox",
        Vn = "radio",
        zn = "password",
        Xn = 707406591,
        Jn = (A(Gn, yn = Un), Gn);

    function Gn(A) {
        var e = yn.call(this, A) || this;
        switch (e.type = A.type.toLowerCase(), e.checked = A.checked, e.value = function(A) {
                var e = A.type === zn ? new Array(A.value.length + 1).join("•") : A.value;
                return 0 === e.length ? A.placeholder || "" : e
            }(A), e.type !== xn && e.type !== Vn || (e.styles.backgroundColor = 3739148031, e.styles.borderTopColor = e.styles.borderRightColor = e.styles.borderBottomColor = e.styles.borderLeftColor = 2779096575, e.styles.borderTopWidth = e.styles.borderRightWidth = e.styles.borderBottomWidth = e.styles.borderLeftWidth = 1, e.styles.borderTopStyle = e.styles.borderRightStyle = e.styles.borderBottomStyle = e.styles.borderLeftStyle = ht.SOLID, e.styles.backgroundClip = [Ee.BORDER_BOX], e.styles.backgroundOrigin = [0], e.bounds = function(A) {
                return A.width > A.height ? new I(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new I(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A
            }(e.bounds)), e.type) {
            case xn:
                e.styles.borderTopRightRadius = e.styles.borderTopLeftRadius = e.styles.borderBottomRightRadius = e.styles.borderBottomLeftRadius = _n;
                break;
            case Vn:
                e.styles.borderTopRightRadius = e.styles.borderTopLeftRadius = e.styles.borderBottomRightRadius = e.styles.borderBottomLeftRadius = Pn
        }
        return e
    }
    var kn, Wn = (A(Yn, kn = Un), Yn);

    function Yn(A) {
        var e = kn.call(this, A) || this,
            t = A.options[A.selectedIndex || 0];
        return e.value = t && t.text || "", e
    }
    var qn, Zn = (A(jn, qn = Un), jn);

    function jn(A) {
        var e = qn.call(this, A) || this;
        return e.value = A.value, e
    }

    function $n(A) {
        return we(_A.create(A).parseComponentValue())
    }
    var AB, eB = (A(tB, AB = Un), tB);

    function tB(A) {
        var e = AB.call(this, A) || this;
        e.src = A.src, e.width = parseInt(A.width, 10) || 0, e.height = parseInt(A.height, 10) || 0, e.backgroundColor = e.styles.backgroundColor;
        try {
            if (A.contentWindow && A.contentWindow.document && A.contentWindow.document.documentElement) {
                e.tree = oB(A.contentWindow.document.documentElement);
                var t = A.contentWindow.document.documentElement ? $n(getComputedStyle(A.contentWindow.document.documentElement).backgroundColor) : He.TRANSPARENT,
                    r = A.contentWindow.document.body ? $n(getComputedStyle(A.contentWindow.document.body).backgroundColor) : He.TRANSPARENT;
                e.backgroundColor = ee(t) ? ee(r) ? e.styles.backgroundColor : r : t
            }
        } catch (A) {}
        return e
    }

    function rB(A) {
        return "STYLE" === A.tagName
    }
    var nB = ["OL", "UL", "MENU"],
        BB = function(A, e, t) {
            for (var r = A.firstChild, n = void 0; r; r = n)
                if (n = r.nextSibling, cB(r) && 0 < r.data.trim().length) e.textNodes.push(new hn(r, e.styles));
                else if (QB(r)) {
                var B = sB(r);
                B.styles.isVisible() && (iB(r, B, t) ? B.flags |= 4 : aB(B.styles) && (B.flags |= 2), -1 !== nB.indexOf(r.tagName) && (B.flags |= 8), e.elements.push(B), dB(r) || gB(r) || fB(r) || BB(r, B, t))
            }
        },
        sB = function(A) {
            return hB(A) ? new pn(A) : FB(A) ? new In(A) : gB(A) ? new Rn(A) : UB(A) ? new vn(A) : lB(A) ? new Sn(A) : CB(A) ? new Jn(A) : fB(A) ? new Wn(A) : dB(A) ? new Zn(A) : HB(A) ? new eB(A) : new Un(A)
        },
        oB = function(A) {
            var e = sB(A);
            return e.flags |= 4, BB(A, e, e), e
        },
        iB = function(A, e, t) {
            return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || EB(A) && t.styles.isTransparent()
        },
        aB = function(A) {
            return A.isPositioned() || A.isFloating()
        },
        cB = function(A) {
            return A.nodeType === Node.TEXT_NODE
        },
        QB = function(A) {
            return A.nodeType === Node.ELEMENT_NODE
        },
        wB = function(A) {
            return QB(A) && void 0 !== A.style && !uB(A)
        },
        uB = function(A) {
            return "object" == typeof A.className
        },
        UB = function(A) {
            return "LI" === A.tagName
        },
        lB = function(A) {
            return "OL" === A.tagName
        },
        CB = function(A) {
            return "INPUT" === A.tagName
        },
        gB = function(A) {
            return "svg" === A.tagName
        },
        EB = function(A) {
            return "BODY" === A.tagName
        },
        FB = function(A) {
            return "CANVAS" === A.tagName
        },
        hB = function(A) {
            return "IMG" === A.tagName
        },
        HB = function(A) {
            return "IFRAME" === A.tagName
        },
        dB = function(A) {
            return "TEXTAREA" === A.tagName
        },
        fB = function(A) {
            return "SELECT" === A.tagName
        },
        pB = (NB.prototype.getCounterValue = function(A) {
            var e = this.counters[A];
            return e && e.length ? e[e.length - 1] : 1
        }, NB.prototype.getCounterValues = function(A) {
            var e = this.counters[A];
            return e || []
        }, NB.prototype.pop = function(A) {
            var e = this;
            A.forEach(function(A) {
                return e.counters[A].pop()
            })
        }, NB.prototype.parse = function(A) {
            var t = this,
                e = A.counterIncrement,
                r = A.counterReset,
                n = !0;
            null !== e && e.forEach(function(A) {
                var e = t.counters[A.counter];
                e && 0 !== A.increment && (n = !1, e[Math.max(0, e.length - 1)] += A.increment)
            });
            var B = [];
            return n && r.forEach(function(A) {
                var e = t.counters[A.counter];
                B.push(A.counter), e || (e = t.counters[A.counter] = []), e.push(A.reset)
            }), B
        }, NB);

    function NB() {
        this.counters = {}
    }

    function KB(r, A, e, n, t, B) {
        return r < A || e < r ? yB(r, t, 0 < B.length) : n.integers.reduce(function(A, e, t) {
            for (; e <= r;) r -= e, A += n.values[t];
            return A
        }, "") + B
    }

    function IB(A, e, t, r) {
        for (var n = ""; t || A--, n = r(A) + n, e <= (A /= e) * e;);
        return n
    }

    function TB(A, e, t, r, n) {
        var B = t - e + 1;
        return (A < 0 ? "-" : "") + (IB(Math.abs(A), B, r, function(A) {
            return l(Math.floor(A % B) + e)
        }) + n)
    }

    function mB(A, e, t) {
        void 0 === t && (t = ". ");
        var r = e.length;
        return IB(Math.abs(A), r, !1, function(A) {
            return e[Math.floor(A % r)]
        }) + t
    }

    function RB(A, e, t, r, n, B) {
        if (A < -9999 || 9999 < A) return yB(A, tr.CJK_DECIMAL, 0 < n.length);
        var s = Math.abs(A),
            o = n;
        if (0 === s) return e[0] + o;
        for (var i = 0; 0 < s && i <= 4; i++) {
            var a = s % 10;
            0 == a && $r(B, 1) && "" !== o ? o = e[a] + o : 1 < a || 1 == a && 0 === i || 1 == a && 1 === i && $r(B, 2) || 1 == a && 1 === i && $r(B, 4) && 100 < A || 1 == a && 1 < i && $r(B, 8) ? o = e[a] + (0 < i ? t[i - 1] : "") + o : 1 == a && 0 < i && (o = t[i - 1] + o), s = Math.floor(s / 10)
        }
        return (A < 0 ? r : "") + o
    }
    var LB, OB, vB = {
            integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        },
        DB = {
            integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
        },
        bB = {
            integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
        },
        SB = {
            integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
        },
        MB = "마이너스",
        yB = function(A, e, t) {
            var r = t ? ". " : "",
                n = t ? "、" : "",
                B = t ? ", " : "",
                s = t ? " " : "";
            switch (e) {
                case tr.DISC:
                    return "•" + s;
                case tr.CIRCLE:
                    return "◦" + s;
                case tr.SQUARE:
                    return "◾" + s;
                case tr.DECIMAL_LEADING_ZERO:
                    var o = TB(A, 48, 57, !0, r);
                    return o.length < 4 ? "0" + o : o;
                case tr.CJK_DECIMAL:
                    return mB(A, "〇一二三四五六七八九", n);
                case tr.LOWER_ROMAN:
                    return KB(A, 1, 3999, vB, tr.DECIMAL, r).toLowerCase();
                case tr.UPPER_ROMAN:
                    return KB(A, 1, 3999, vB, tr.DECIMAL, r);
                case tr.LOWER_GREEK:
                    return TB(A, 945, 969, !1, r);
                case tr.LOWER_ALPHA:
                    return TB(A, 97, 122, !1, r);
                case tr.UPPER_ALPHA:
                    return TB(A, 65, 90, !1, r);
                case tr.ARABIC_INDIC:
                    return TB(A, 1632, 1641, !0, r);
                case tr.ARMENIAN:
                case tr.UPPER_ARMENIAN:
                    return KB(A, 1, 9999, DB, tr.DECIMAL, r);
                case tr.LOWER_ARMENIAN:
                    return KB(A, 1, 9999, DB, tr.DECIMAL, r).toLowerCase();
                case tr.BENGALI:
                    return TB(A, 2534, 2543, !0, r);
                case tr.CAMBODIAN:
                case tr.KHMER:
                    return TB(A, 6112, 6121, !0, r);
                case tr.CJK_EARTHLY_BRANCH:
                    return mB(A, "子丑寅卯辰巳午未申酉戌亥", n);
                case tr.CJK_HEAVENLY_STEM:
                    return mB(A, "甲乙丙丁戊己庚辛壬癸", n);
                case tr.CJK_IDEOGRAPHIC:
                case tr.TRAD_CHINESE_INFORMAL:
                    return RB(A, "零一二三四五六七八九", "十百千萬", "負", n, 14);
                case tr.TRAD_CHINESE_FORMAL:
                    return RB(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
                case tr.SIMP_CHINESE_INFORMAL:
                    return RB(A, "零一二三四五六七八九", "十百千萬", "负", n, 14);
                case tr.SIMP_CHINESE_FORMAL:
                    return RB(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
                case tr.JAPANESE_INFORMAL:
                    return RB(A, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);
                case tr.JAPANESE_FORMAL:
                    return RB(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);
                case tr.KOREAN_HANGUL_FORMAL:
                    return RB(A, "영일이삼사오육칠팔구", "십백천만", MB, B, 7);
                case tr.KOREAN_HANJA_INFORMAL:
                    return RB(A, "零一二三四五六七八九", "十百千萬", MB, B, 0);
                case tr.KOREAN_HANJA_FORMAL:
                    return RB(A, "零壹貳參四五六七八九", "拾百千", MB, B, 7);
                case tr.DEVANAGARI:
                    return TB(A, 2406, 2415, !0, r);
                case tr.GEORGIAN:
                    return KB(A, 1, 19999, SB, tr.DECIMAL, r);
                case tr.GUJARATI:
                    return TB(A, 2790, 2799, !0, r);
                case tr.GURMUKHI:
                    return TB(A, 2662, 2671, !0, r);
                case tr.HEBREW:
                    return KB(A, 1, 10999, bB, tr.DECIMAL, r);
                case tr.HIRAGANA:
                    return mB(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                case tr.HIRAGANA_IROHA:
                    return mB(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                case tr.KANNADA:
                    return TB(A, 3302, 3311, !0, r);
                case tr.KATAKANA:
                    return mB(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
                case tr.KATAKANA_IROHA:
                    return mB(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
                case tr.LAO:
                    return TB(A, 3792, 3801, !0, r);
                case tr.MONGOLIAN:
                    return TB(A, 6160, 6169, !0, r);
                case tr.MYANMAR:
                    return TB(A, 4160, 4169, !0, r);
                case tr.ORIYA:
                    return TB(A, 2918, 2927, !0, r);
                case tr.PERSIAN:
                    return TB(A, 1776, 1785, !0, r);
                case tr.TAMIL:
                    return TB(A, 3046, 3055, !0, r);
                case tr.TELUGU:
                    return TB(A, 3174, 3183, !0, r);
                case tr.THAI:
                    return TB(A, 3664, 3673, !0, r);
                case tr.TIBETAN:
                    return TB(A, 3872, 3881, !0, r);
                case tr.DECIMAL:
                default:
                    return TB(A, 48, 57, !0, r)
            }
        },
        _B = "data-html2canvas-ignore",
        PB = (xB.prototype.toIFrame = function(A, t) {
            var e = this,
                r = XB(A, t);
            if (!r.contentWindow) return Promise.reject("Unable to find iframe window");
            var n = A.defaultView.pageXOffset,
                B = A.defaultView.pageYOffset,
                s = r.contentWindow,
                o = s.document,
                i = JB(r).then(function() {
                    return a(e, void 0, void 0, function() {
                        var e;
                        return S(this, function(A) {
                            switch (A.label) {
                                case 0:
                                    return this.scrolledElements.forEach(YB), s && (s.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s.scrollY === t.top && s.scrollX === t.left || (o.documentElement.style.top = -t.top + "px", o.documentElement.style.left = -t.left + "px", o.documentElement.style.position = "absolute")), e = this.options.onclone, void 0 === this.clonedReferenceElement ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : o.fonts && o.fonts.ready ? [4, o.fonts.ready] : [3, 2];
                                case 1:
                                    A.sent(), A.label = 2;
                                case 2:
                                    return "function" == typeof e ? [2, Promise.resolve().then(function() {
                                        return e(o)
                                    }).then(function() {
                                        return r
                                    })] : [2, r]
                            }
                        })
                    })
                });
            return o.open(), o.write(kB(document.doctype) + "<html></html>"), WB(this.referenceElement.ownerDocument, n, B), o.replaceChild(o.adoptNode(this.documentElement), o.documentElement), o.close(), i
        }, xB.prototype.createElementClone = function(A) {
            if (FB(A)) return this.createCanvasClone(A);
            if (rB(A)) return this.createStyleClone(A);
            var e = A.cloneNode(!1);
            return hB(e) && "lazy" === e.loading && (e.loading = "eager"), e
        }, xB.prototype.createStyleClone = function(A) {
            try {
                var e = A.sheet;
                if (e && e.cssRules) {
                    var t = [].slice.call(e.cssRules, 0).reduce(function(A, e) {
                            return e && "string" == typeof e.cssText ? A + e.cssText : A
                        }, ""),
                        r = A.cloneNode(!1);
                    return r.textContent = t, r
                }
            } catch (A) {
                if (De.getInstance(this.options.id).error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A
            }
            return A.cloneNode(!1)
        }, xB.prototype.createCanvasClone = function(A) {
            if (this.options.inlineImages && A.ownerDocument) {
                var e = A.ownerDocument.createElement("img");
                try {
                    return e.src = A.toDataURL(), e
                } catch (A) {
                    De.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")
                }
            }
            var t = A.cloneNode(!1);
            try {
                t.width = A.width, t.height = A.height;
                var r = A.getContext("2d"),
                    n = t.getContext("2d");
                return n && (r ? n.putImageData(r.getImageData(0, 0, A.width, A.height), 0, 0) : n.drawImage(A, 0, 0)), t
            } catch (A) {}
            return t
        }, xB.prototype.cloneNode = function(A) {
            if (cB(A)) return document.createTextNode(A.data);
            if (!A.ownerDocument) return A.cloneNode(!1);
            var e = A.ownerDocument.defaultView;
            if (e && QB(A) && (wB(A) || uB(A))) {
                var t = this.createElementClone(A),
                    r = e.getComputedStyle(A),
                    n = e.getComputedStyle(A, ":before"),
                    B = e.getComputedStyle(A, ":after");
                this.referenceElement === A && wB(t) && (this.clonedReferenceElement = t), EB(t) && $B(t);
                for (var s = this.counters.parse(new wn(r)), o = this.resolvePseudoContent(A, t, n, LB.BEFORE), i = A.firstChild; i; i = i.nextSibling) QB(i) && ("SCRIPT" === i.tagName || i.hasAttribute(_B) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(i)) || this.options.copyStyles && QB(i) && rB(i) || t.appendChild(this.cloneNode(i));
                o && t.insertBefore(o, t.firstChild);
                var a = this.resolvePseudoContent(A, t, B, LB.AFTER);
                return a && t.appendChild(a), this.counters.pop(s), r && (this.options.copyStyles || uB(A)) && !HB(A) && GB(r, t), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([t, A.scrollLeft, A.scrollTop]), (dB(A) || fB(A)) && (dB(t) || fB(t)) && (t.value = A.value), t
            }
            return A.cloneNode(!1)
        }, xB.prototype.resolvePseudoContent = function(U, A, e, t) {
            var l = this;
            if (e) {
                var r = e.content,
                    C = A.ownerDocument;
                if (C && r && "none" !== r && "-moz-alt-content" !== r && "none" !== e.display) {
                    this.counters.parse(new wn(e));
                    var g = new Qn(e),
                        E = C.createElement("html2canvaspseudoelement");
                    GB(e, E), g.content.forEach(function(A) {
                        if (A.type === sA.STRING_TOKEN) E.appendChild(C.createTextNode(A.value));
                        else if (A.type === sA.URL_TOKEN) {
                            var e = C.createElement("img");
                            e.src = A.value, e.style.opacity = "1", E.appendChild(e)
                        } else if (A.type === sA.FUNCTION) {
                            if ("attr" === A.name) {
                                var t = A.values.filter(zA);
                                t.length && E.appendChild(C.createTextNode(U.getAttribute(t[0].value) || ""))
                            } else if ("counter" === A.name) {
                                var r = A.values.filter(kA),
                                    n = r[0],
                                    B = r[1];
                                if (n && zA(n)) {
                                    var s = l.counters.getCounterValue(n.value),
                                        o = B && zA(B) ? ir.parse(B.value) : tr.DECIMAL;
                                    E.appendChild(C.createTextNode(yB(s, o, !1)))
                                }
                            } else if ("counters" === A.name) {
                                var i = A.values.filter(kA),
                                    a = (n = i[0], i[1]);
                                if (B = i[2], n && zA(n)) {
                                    var c = l.counters.getCounterValues(n.value),
                                        Q = B && zA(B) ? ir.parse(B.value) : tr.DECIMAL,
                                        w = a && a.type === sA.STRING_TOKEN ? a.value : "",
                                        u = c.map(function(A) {
                                            return yB(A, Q, !1)
                                        }).join(w);
                                    E.appendChild(C.createTextNode(u))
                                }
                            }
                        } else if (A.type === sA.IDENT_TOKEN) switch (A.value) {
                            case "open-quote":
                                E.appendChild(C.createTextNode(An(g.quotes, l.quoteDepth++, !0)));
                                break;
                            case "close-quote":
                                E.appendChild(C.createTextNode(An(g.quotes, --l.quoteDepth, !1)));
                                break;
                            default:
                                E.appendChild(C.createTextNode(A.value))
                        }
                    }), E.className = qB + " " + ZB;
                    var n = t === LB.BEFORE ? " " + qB : " " + ZB;
                    return uB(A) ? A.className.baseValue += n : A.className += n, E
                }
            }
        }, xB.destroy = function(A) {
            return !!A.parentNode && (A.parentNode.removeChild(A), !0)
        }, xB);

    function xB(A, e) {
        if (this.options = e, this.scrolledElements = [], this.referenceElement = A, this.counters = new pB, this.quoteDepth = 0, !A.ownerDocument) throw new Error("Cloned element does not have an owner document");
        this.documentElement = this.cloneNode(A.ownerDocument.documentElement)
    }(OB = LB || (LB = {}))[OB.BEFORE = 0] = "BEFORE", OB[OB.AFTER = 1] = "AFTER";
    var VB, zB, XB = function(A, e) {
            var t = A.createElement("iframe");
            return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(_B, "true"), A.body.appendChild(t), t
        },
        JB = function(n) {
            return new Promise(function(e, A) {
                var t = n.contentWindow;
                if (!t) return A("No window assigned for iframe");
                var r = t.document;
                t.onload = n.onload = r.onreadystatechange = function() {
                    t.onload = n.onload = r.onreadystatechange = null;
                    var A = setInterval(function() {
                        0 < r.body.childNodes.length && "complete" === r.readyState && (clearInterval(A), e(n))
                    }, 50)
                }
            })
        },
        GB = function(A, e) {
            for (var t = A.length - 1; 0 <= t; t--) {
                var r = A.item(t);
                "content" !== r && e.style.setProperty(r, A.getPropertyValue(r))
            }
            return e
        },
        kB = function(A) {
            var e = "";
            return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e
        },
        WB = function(A, e, t) {
            A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
        },
        YB = function(A) {
            var e = A[0],
                t = A[1],
                r = A[2];
            e.scrollLeft = t, e.scrollTop = r
        },
        qB = "___html2canvas___pseudoelement_before",
        ZB = "___html2canvas___pseudoelement_after",
        jB = '{\n    content: "" !important;\n    display: none !important;\n}',
        $B = function(A) {
            As(A, "." + qB + ":before" + jB + "\n         ." + ZB + ":after" + jB)
        },
        As = function(A, e) {
            var t = A.ownerDocument;
            if (t) {
                var r = t.createElement("style");
                r.textContent = e, A.appendChild(r)
            }
        };
    (zB = VB || (VB = {}))[zB.VECTOR = 0] = "VECTOR", zB[zB.BEZIER_CURVE = 1] = "BEZIER_CURVE";

    function es(A, t) {
        return A.length === t.length && A.some(function(A, e) {
            return A === t[e]
        })
    }
    var ts = (rs.prototype.add = function(A, e) {
        return new rs(this.x + A, this.y + e)
    }, rs);

    function rs(A, e) {
        this.type = VB.VECTOR, this.x = A, this.y = e
    }

    function ns(A, e, t) {
        return new ts(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
    }
    var Bs = (ss.prototype.subdivide = function(A, e) {
        var t = ns(this.start, this.startControl, A),
            r = ns(this.startControl, this.endControl, A),
            n = ns(this.endControl, this.end, A),
            B = ns(t, r, A),
            s = ns(r, n, A),
            o = ns(B, s, A);
        return e ? new ss(this.start, t, B, o) : new ss(o, s, n, this.end)
    }, ss.prototype.add = function(A, e) {
        return new ss(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e))
    }, ss.prototype.reverse = function() {
        return new ss(this.end, this.endControl, this.startControl, this.start)
    }, ss);

    function ss(A, e, t, r) {
        this.type = VB.BEZIER_CURVE, this.start = A, this.startControl = e, this.endControl = t, this.end = r
    }

    function os(A) {
        return A.type === VB.BEZIER_CURVE
    }
    var is, as, cs = function(A) {
        var e = A.styles,
            t = A.bounds,
            r = jA(e.borderTopLeftRadius, t.width, t.height),
            n = r[0],
            B = r[1],
            s = jA(e.borderTopRightRadius, t.width, t.height),
            o = s[0],
            i = s[1],
            a = jA(e.borderBottomRightRadius, t.width, t.height),
            c = a[0],
            Q = a[1],
            w = jA(e.borderBottomLeftRadius, t.width, t.height),
            u = w[0],
            U = w[1],
            l = [];
        l.push((n + o) / t.width), l.push((u + c) / t.width), l.push((B + U) / t.height), l.push((i + Q) / t.height);
        var C = Math.max.apply(Math, l);
        1 < C && (n /= C, B /= C, o /= C, i /= C, c /= C, Q /= C, u /= C, U /= C);
        var g = t.width - o,
            E = t.height - Q,
            F = t.width - c,
            h = t.height - U,
            H = e.borderTopWidth,
            d = e.borderRightWidth,
            f = e.borderBottomWidth,
            p = e.borderLeftWidth,
            N = ae(e.paddingTop, A.bounds.width),
            K = ae(e.paddingRight, A.bounds.width),
            I = ae(e.paddingBottom, A.bounds.width),
            T = ae(e.paddingLeft, A.bounds.width);
        this.topLeftBorderBox = 0 < n || 0 < B ? us(t.left, t.top, n, B, is.TOP_LEFT) : new ts(t.left, t.top), this.topRightBorderBox = 0 < o || 0 < i ? us(t.left + g, t.top, o, i, is.TOP_RIGHT) : new ts(t.left + t.width, t.top), this.bottomRightBorderBox = 0 < c || 0 < Q ? us(t.left + F, t.top + E, c, Q, is.BOTTOM_RIGHT) : new ts(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = 0 < u || 0 < U ? us(t.left, t.top + h, u, U, is.BOTTOM_LEFT) : new ts(t.left, t.top + t.height), this.topLeftPaddingBox = 0 < n || 0 < B ? us(t.left + p, t.top + H, Math.max(0, n - p), Math.max(0, B - H), is.TOP_LEFT) : new ts(t.left + p, t.top + H), this.topRightPaddingBox = 0 < o || 0 < i ? us(t.left + Math.min(g, t.width + p), t.top + H, g > t.width + d ? 0 : o - d, i - H, is.TOP_RIGHT) : new ts(t.left + t.width - d, t.top + H), this.bottomRightPaddingBox = 0 < c || 0 < Q ? us(t.left + Math.min(F, t.width - p), t.top + Math.min(E, t.height + H), Math.max(0, c - d), Q - f, is.BOTTOM_RIGHT) : new ts(t.left + t.width - d, t.top + t.height - f), this.bottomLeftPaddingBox = 0 < u || 0 < U ? us(t.left + p, t.top + h, Math.max(0, u - p), U - f, is.BOTTOM_LEFT) : new ts(t.left + p, t.top + t.height - f), this.topLeftContentBox = 0 < n || 0 < B ? us(t.left + p + T, t.top + H + N, Math.max(0, n - (p + T)), Math.max(0, B - (H + N)), is.TOP_LEFT) : new ts(t.left + p + T, t.top + H + N), this.topRightContentBox = 0 < o || 0 < i ? us(t.left + Math.min(g, t.width + p + T), t.top + H + N, g > t.width + p + T ? 0 : o - p + T, i - (H + N), is.TOP_RIGHT) : new ts(t.left + t.width - (d + K), t.top + H + N), this.bottomRightContentBox = 0 < c || 0 < Q ? us(t.left + Math.min(F, t.width - (p + T)), t.top + Math.min(E, t.height + H + N), Math.max(0, c - (d + K)), Q - (f + I), is.BOTTOM_RIGHT) : new ts(t.left + t.width - (d + K), t.top + t.height - (f + I)), this.bottomLeftContentBox = 0 < u || 0 < U ? us(t.left + p + T, t.top + h, Math.max(0, u - (p + T)), U - (f + I), is.BOTTOM_LEFT) : new ts(t.left + p + T, t.top + t.height - (f + I))
    };
    (as = is || (is = {}))[as.TOP_LEFT = 0] = "TOP_LEFT", as[as.TOP_RIGHT = 1] = "TOP_RIGHT", as[as.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", as[as.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";

    function Qs(A) {
        return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
    }

    function ws(A) {
        return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
    }
    var us = function(A, e, t, r, n) {
            var B = (Math.sqrt(2) - 1) / 3 * 4,
                s = t * B,
                o = r * B,
                i = A + t,
                a = e + r;
            switch (n) {
                case is.TOP_LEFT:
                    return new Bs(new ts(A, a), new ts(A, a - o), new ts(i - s, e), new ts(i, e));
                case is.TOP_RIGHT:
                    return new Bs(new ts(A, e), new ts(A + s, e), new ts(i, a - o), new ts(i, a));
                case is.BOTTOM_RIGHT:
                    return new Bs(new ts(i, e), new ts(i, e + o), new ts(A + s, a), new ts(A, a));
                case is.BOTTOM_LEFT:
                default:
                    return new Bs(new ts(i, a), new ts(i - s, a), new ts(A, e + o), new ts(A, e))
            }
        },
        Us = function(A, e, t) {
            this.type = 0, this.target = 6, this.offsetX = A, this.offsetY = e, this.matrix = t
        },
        ls = function(A, e) {
            this.type = 1, this.target = e, this.path = A
        },
        Cs = function(A) {
            this.type = 2, this.target = 6, this.opacity = A
        },
        gs = function(A) {
            this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = []
        },
        Es = (Fs.prototype.getParentEffects = function() {
            var A = this.effects.slice(0);
            if (this.container.styles.overflowX !== sr.VISIBLE) {
                var e = Qs(this.curves),
                    t = ws(this.curves);
                es(e, t) || A.push(new ls(t, 6))
            }
            return A
        }, Fs);

    function Fs(A, e) {
        if (this.container = A, this.effects = e.slice(0), this.curves = new cs(A), A.styles.opacity < 1 && this.effects.push(new Cs(A.styles.opacity)), null !== A.styles.transform) {
            var t = A.bounds.left + A.styles.transformOrigin[0].number,
                r = A.bounds.top + A.styles.transformOrigin[1].number,
                n = A.styles.transform;
            this.effects.push(new Us(t, r, n))
        }
        if (A.styles.overflowX !== sr.VISIBLE) {
            var B = Qs(this.curves),
                s = ws(this.curves);
            es(B, s) ? this.effects.push(new ls(B, 6)) : (this.effects.push(new ls(B, 2)), this.effects.push(new ls(s, 4)))
        }
    }

    function hs(A) {
        var e = A.bounds,
            t = A.styles;
        return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
    }

    function Hs(A) {
        var e = A.styles,
            t = A.bounds,
            r = ae(e.paddingLeft, t.width),
            n = ae(e.paddingRight, t.width),
            B = ae(e.paddingTop, t.width),
            s = ae(e.paddingBottom, t.width);
        return t.add(r + e.borderLeftWidth, B + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + B + s))
    }

    function ds(A, e, t) {
        var r = function(A, e) {
                return 0 === A ? e.bounds : 2 === A ? Hs(e) : hs(e)
            }(ms(A.styles.backgroundOrigin, e), A),
            n = function(A, e) {
                return A === Ee.BORDER_BOX ? e.bounds : A === Ee.CONTENT_BOX ? Hs(e) : hs(e)
            }(ms(A.styles.backgroundClip, e), A),
            B = Ts(ms(A.styles.backgroundSize, e), t, r),
            s = B[0],
            o = B[1],
            i = jA(ms(A.styles.backgroundPosition, e), r.width - s, r.height - o);
        return [Rs(ms(A.styles.backgroundRepeat, e), i, B, r, n), Math.round(r.left + i[0]), Math.round(r.top + i[1]), s, o]
    }

    function fs(A) {
        return zA(A) && A.value === Ut.AUTO
    }

    function ps(A) {
        return "number" == typeof A
    }
    var Ns = function(c, Q, w, u) {
            c.container.elements.forEach(function(A) {
                var e = $r(A.flags, 4),
                    t = $r(A.flags, 2),
                    r = new Es(A, c.getParentEffects());
                $r(A.styles.display, 2048) && u.push(r);
                var n = $r(A.flags, 8) ? [] : u;
                if (e || t) {
                    var B = e || A.styles.isPositioned() ? w : Q,
                        s = new gs(r);
                    if (A.styles.isPositioned() || A.styles.opacity < 1 || A.styles.isTransformed()) {
                        var o = A.styles.zIndex.order;
                        if (o < 0) {
                            var i = 0;
                            B.negativeZIndex.some(function(A, e) {
                                return o > A.element.container.styles.zIndex.order ? (i = e, !1) : 0 < i
                            }), B.negativeZIndex.splice(i, 0, s)
                        } else if (0 < o) {
                            var a = 0;
                            B.positiveZIndex.some(function(A, e) {
                                return o >= A.element.container.styles.zIndex.order ? (a = e + 1, !1) : 0 < a
                            }), B.positiveZIndex.splice(a, 0, s)
                        } else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(s)
                    } else A.styles.isFloating() ? B.nonPositionedFloats.push(s) : B.nonPositionedInlineLevel.push(s);
                    Ns(r, s, e ? s : w, n)
                } else A.styles.isInlineLevel() ? Q.inlineLevel.push(r) : Q.nonInlineLevel.push(r), Ns(r, Q, w, n);
                $r(A.flags, 8) && Ks(A, n)
            })
        },
        Ks = function(A, e) {
            for (var t = A instanceof Sn ? A.start : 1, r = A instanceof Sn && A.reversed, n = 0; n < e.length; n++) {
                var B = e[n];
                B.container instanceof vn && "number" == typeof B.container.value && 0 !== B.container.value && (t = B.container.value), B.listValue = yB(t, B.container.styles.listStyleType, !0), t += r ? -1 : 1
            }
        },
        Is = function(A, e, t, r) {
            var n = [];
            return os(A) ? n.push(A.subdivide(.5, !1)) : n.push(A), os(t) ? n.push(t.subdivide(.5, !0)) : n.push(t), os(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), os(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e), n
        },
        Ts = function(A, e, t) {
            var r = e[0],
                n = e[1],
                B = e[2],
                s = A[0],
                o = A[1];
            if (qA(s) && o && qA(o)) return [ae(s, t.width), ae(o, t.height)];
            var i = ps(B);
            if (zA(s) && (s.value === Ut.CONTAIN || s.value === Ut.COVER)) return ps(B) ? t.width / t.height < B != (s.value === Ut.COVER) ? [t.width, t.width / B] : [t.height * B, t.height] : [t.width, t.height];
            var a = ps(r),
                c = ps(n),
                Q = a || c;
            if (fs(s) && (!o || fs(o))) return a && c ? [r, n] : i || Q ? Q && i ? [a ? r : n * B, c ? n : r / B] : [a ? r : t.width, c ? n : t.height] : [t.width, t.height];
            if (i) {
                var w = 0,
                    u = 0;
                return qA(s) ? w = ae(s, t.width) : qA(o) && (u = ae(o, t.height)), fs(s) ? w = u * B : o && !fs(o) || (u = w / B), [w, u]
            }
            var U = null,
                l = null;
            if (qA(s) ? U = ae(s, t.width) : o && qA(o) && (l = ae(o, t.height)), null === U || o && !fs(o) || (l = a && c ? U / r * n : t.height), null !== l && fs(s) && (U = a && c ? l / n * r : t.width), null !== U && null !== l) return [U, l];
            throw new Error("Unable to calculate background-size for element")
        },
        ms = function(A, e) {
            var t = A[e];
            return void 0 === t ? A[0] : t
        },
        Rs = function(A, e, t, r, n) {
            var B = e[0],
                s = e[1],
                o = t[0],
                i = t[1];
            switch (A) {
                case it.REPEAT_X:
                    return [new ts(Math.round(r.left), Math.round(r.top + s)), new ts(Math.round(r.left + r.width), Math.round(r.top + s)), new ts(Math.round(r.left + r.width), Math.round(i + r.top + s)), new ts(Math.round(r.left), Math.round(i + r.top + s))];
                case it.REPEAT_Y:
                    return [new ts(Math.round(r.left + B), Math.round(r.top)), new ts(Math.round(r.left + B + o), Math.round(r.top)), new ts(Math.round(r.left + B + o), Math.round(r.height + r.top)), new ts(Math.round(r.left + B), Math.round(r.height + r.top))];
                case it.NO_REPEAT:
                    return [new ts(Math.round(r.left + B), Math.round(r.top + s)), new ts(Math.round(r.left + B + o), Math.round(r.top + s)), new ts(Math.round(r.left + B + o), Math.round(r.top + s + i)), new ts(Math.round(r.left + B), Math.round(r.top + s + i))];
                default:
                    return [new ts(Math.round(n.left), Math.round(n.top)), new ts(Math.round(n.left + n.width), Math.round(n.top)), new ts(Math.round(n.left + n.width), Math.round(n.height + n.top)), new ts(Math.round(n.left), Math.round(n.height + n.top))]
            }
        },
        Ls = "Hidden Text",
        Os = (vs.prototype.parseMetrics = function(A, e) {
            var t = this._document.createElement("div"),
                r = this._document.createElement("img"),
                n = this._document.createElement("span"),
                B = this._document.body;
            t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = e, t.style.margin = "0", t.style.padding = "0", B.appendChild(t), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = e, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(Ls)), t.appendChild(n), t.appendChild(r);
            var s = r.offsetTop - n.offsetTop + 2;
            t.removeChild(n), t.appendChild(this._document.createTextNode(Ls)), t.style.lineHeight = "normal", r.style.verticalAlign = "super";
            var o = r.offsetTop - t.offsetTop + 2;
            return B.removeChild(t), {
                baseline: s,
                middle: o
            }
        }, vs.prototype.getMetrics = function(A, e) {
            var t = A + " " + e;
            return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)), this._data[t]
        }, vs);

    function vs(A) {
        this._data = {}, this._document = A
    }
    var Ds = (bs.prototype.applyEffects = function(A, e) {
        for (var t = this; this._activeEffects.length;) this.popEffect();
        A.filter(function(A) {
            return $r(A.target, e)
        }).forEach(function(A) {
            return t.applyEffect(A)
        })
    }, bs.prototype.applyEffect = function(A) {
        this.ctx.save(),
            function(A) {
                return 2 === A.type
            }(A) && (this.ctx.globalAlpha = A.opacity),
            function(A) {
                return 0 === A.type
            }(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)),
            function(A) {
                return 1 === A.type
            }(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A)
    }, bs.prototype.popEffect = function() {
        this._activeEffects.pop(), this.ctx.restore()
    }, bs.prototype.renderStack = function(e) {
        return a(this, void 0, void 0, function() {
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return e.element.container.styles.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
                    case 1:
                        A.sent(), A.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, bs.prototype.renderNode = function(e) {
        return a(this, void 0, void 0, function() {
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
                    case 1:
                        return A.sent(), [4, this.renderNodeContent(e)];
                    case 2:
                        A.sent(), A.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, bs.prototype.renderTextWithLetterSpacing = function(t, A) {
        var r = this;
        0 === A ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height) : c(t.text).map(function(A) {
            return l(A)
        }).reduce(function(A, e) {
            return r.ctx.fillText(e, A, t.bounds.top + t.bounds.height), A + r.ctx.measureText(e).width
        }, t.bounds.left)
    }, bs.prototype.createFontStyle = function(A) {
        var e = A.fontVariant.filter(function(A) {
                return "normal" === A || "small-caps" === A
            }).join(""),
            t = A.fontFamily.join(", "),
            r = xA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
        return [
            [A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r
        ]
    }, bs.prototype.renderTextNode = function(r, o) {
        return a(this, void 0, void 0, function() {
            var e, t, n, B, s = this;
            return S(this, function(A) {
                return e = this.createFontStyle(o), t = e[0], n = e[1], B = e[2], this.ctx.font = t, r.textBounds.forEach(function(r) {
                    s.ctx.fillStyle = te(o.color), s.renderTextWithLetterSpacing(r, o.letterSpacing);
                    var A = o.textShadow;
                    A.length && r.text.trim().length && (A.slice(0).reverse().forEach(function(A) {
                        s.ctx.shadowColor = te(A.color), s.ctx.shadowOffsetX = A.offsetX.number * s.options.scale, s.ctx.shadowOffsetY = A.offsetY.number * s.options.scale, s.ctx.shadowBlur = A.blur.number, s.ctx.fillText(r.text, r.bounds.left, r.bounds.top + r.bounds.height)
                    }), s.ctx.shadowColor = "", s.ctx.shadowOffsetX = 0, s.ctx.shadowOffsetY = 0, s.ctx.shadowBlur = 0), o.textDecorationLine.length && (s.ctx.fillStyle = te(o.textDecorationColor || o.color), o.textDecorationLine.forEach(function(A) {
                        switch (A) {
                            case 1:
                                var e = s.fontMetrics.getMetrics(n, B).baseline;
                                s.ctx.fillRect(r.bounds.left, Math.round(r.bounds.top + e), r.bounds.width, 1);
                                break;
                            case 2:
                                s.ctx.fillRect(r.bounds.left, Math.round(r.bounds.top), r.bounds.width, 1);
                                break;
                            case 3:
                                var t = s.fontMetrics.getMetrics(n, B).middle;
                                s.ctx.fillRect(r.bounds.left, Math.ceil(r.bounds.top + t), r.bounds.width, 1)
                        }
                    }))
                }), [2]
            })
        })
    }, bs.prototype.renderReplacedElement = function(A, e, t) {
        if (t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight) {
            var r = Hs(A),
                n = ws(e);
            this.path(n), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore()
        }
    }, bs.prototype.renderNodeContent = function(l) {
        return a(this, void 0, void 0, function() {
            var e, t, r, n, B, s, o, i, a, c, Q, w, u, U;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        this.applyEffects(l.effects, 4), e = l.container, t = l.curves, r = e.styles, n = 0, B = e.textNodes, A.label = 1;
                    case 1:
                        return n < B.length ? (s = B[n], [4, this.renderTextNode(s, r)]) : [3, 4];
                    case 2:
                        A.sent(), A.label = 3;
                    case 3:
                        return n++, [3, 1];
                    case 4:
                        if (!(e instanceof pn)) return [3, 8];
                        A.label = 5;
                    case 5:
                        return A.trys.push([5, 7, , 8]), [4, this.options.cache.match(e.src)];
                    case 6:
                        return w = A.sent(), this.renderReplacedElement(e, t, w), [3, 8];
                    case 7:
                        return A.sent(), De.getInstance(this.options.id).error("Error loading image " + e.src), [3, 8];
                    case 8:
                        if (e instanceof In && this.renderReplacedElement(e, t, e.canvas), !(e instanceof Rn)) return [3, 12];
                        A.label = 9;
                    case 9:
                        return A.trys.push([9, 11, , 12]), [4, this.options.cache.match(e.svg)];
                    case 10:
                        return w = A.sent(), this.renderReplacedElement(e, t, w), [3, 12];
                    case 11:
                        return A.sent(), De.getInstance(this.options.id).error("Error loading svg " + e.svg.substring(0, 255)), [3, 12];
                    case 12:
                        return e instanceof eB && e.tree ? [4, new bs({
                            id: this.options.id,
                            scale: this.options.scale,
                            backgroundColor: e.backgroundColor,
                            x: 0,
                            y: 0,
                            scrollX: 0,
                            scrollY: 0,
                            width: e.width,
                            height: e.height,
                            cache: this.options.cache,
                            windowWidth: e.width,
                            windowHeight: e.height
                        }).render(e.tree)] : [3, 14];
                    case 13:
                        o = A.sent(), e.width && e.height && this.ctx.drawImage(o, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), A.label = 14;
                    case 14:
                        if (e instanceof Jn && (i = Math.min(e.bounds.width, e.bounds.height), e.type === xn ? e.checked && (this.ctx.save(), this.path([new ts(e.bounds.left + .39363 * i, e.bounds.top + .79 * i), new ts(e.bounds.left + .16 * i, e.bounds.top + .5549 * i), new ts(e.bounds.left + .27347 * i, e.bounds.top + .44071 * i), new ts(e.bounds.left + .39694 * i, e.bounds.top + .5649 * i), new ts(e.bounds.left + .72983 * i, e.bounds.top + .23 * i), new ts(e.bounds.left + .84 * i, e.bounds.top + .34085 * i), new ts(e.bounds.left + .39363 * i, e.bounds.top + .79 * i)]), this.ctx.fillStyle = te(Xn), this.ctx.fill(), this.ctx.restore()) : e.type === Vn && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + i / 2, e.bounds.top + i / 2, i / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = te(Xn), this.ctx.fill(), this.ctx.restore())), Ss(e) && e.value.length) {
                            switch (this.ctx.font = this.createFontStyle(r)[0], this.ctx.fillStyle = te(r.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = ys(e.styles.textAlign), U = Hs(e), a = 0, e.styles.textAlign) {
                                case Cr.CENTER:
                                    a += U.width / 2;
                                    break;
                                case Cr.RIGHT:
                                    a += U.width
                            }
                            c = U.add(a, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([new ts(U.left, U.top), new ts(U.left + U.width, U.top), new ts(U.left + U.width, U.top + U.height), new ts(U.left, U.top + U.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ln(e.value, c), r.letterSpacing), this.ctx.restore(), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"
                        }
                        if (!$r(e.styles.display, 2048)) return [3, 20];
                        if (null === e.styles.listStyleImage) return [3, 19];
                        if ((Q = e.styles.listStyleImage).type !== xe.URL) return [3, 18];
                        w = void 0, u = Q.url, A.label = 15;
                    case 15:
                        return A.trys.push([15, 17, , 18]), [4, this.options.cache.match(u)];
                    case 16:
                        return w = A.sent(), this.ctx.drawImage(w, e.bounds.left - (w.width + 10), e.bounds.top), [3, 18];
                    case 17:
                        return A.sent(), De.getInstance(this.options.id).error("Error loading list-style-image " + u), [3, 18];
                    case 18:
                        return [3, 20];
                    case 19:
                        l.listValue && e.styles.listStyleType !== tr.NONE && (this.ctx.font = this.createFontStyle(r)[0], this.ctx.fillStyle = te(r.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new I(e.bounds.left, e.bounds.top + ae(e.styles.paddingTop, e.bounds.width), e.bounds.width, function(A, e) {
                            return zA(A) && "normal" === A.value ? 1.2 * e : A.type === sA.NUMBER_TOKEN ? e * A.number : qA(A) ? ae(A, e) : e
                        }(r.lineHeight, r.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ln(l.listValue, U), r.letterSpacing), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), A.label = 20;
                    case 20:
                        return [2]
                }
            })
        })
    }, bs.prototype.renderStackContent = function(C) {
        return a(this, void 0, void 0, function() {
            var e, t, r, n, B, s, o, i, a, c, Q, w, u, U, l;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return [4, this.renderNodeBackgroundAndBorders(C.element)];
                    case 1:
                        A.sent(), e = 0, t = C.negativeZIndex, A.label = 2;
                    case 2:
                        return e < t.length ? (l = t[e], [4, this.renderStack(l)]) : [3, 5];
                    case 3:
                        A.sent(), A.label = 4;
                    case 4:
                        return e++, [3, 2];
                    case 5:
                        return [4, this.renderNodeContent(C.element)];
                    case 6:
                        A.sent(), r = 0, n = C.nonInlineLevel, A.label = 7;
                    case 7:
                        return r < n.length ? (l = n[r], [4, this.renderNode(l)]) : [3, 10];
                    case 8:
                        A.sent(), A.label = 9;
                    case 9:
                        return r++, [3, 7];
                    case 10:
                        B = 0, s = C.nonPositionedFloats, A.label = 11;
                    case 11:
                        return B < s.length ? (l = s[B], [4, this.renderStack(l)]) : [3, 14];
                    case 12:
                        A.sent(), A.label = 13;
                    case 13:
                        return B++, [3, 11];
                    case 14:
                        o = 0, i = C.nonPositionedInlineLevel, A.label = 15;
                    case 15:
                        return o < i.length ? (l = i[o], [4, this.renderStack(l)]) : [3, 18];
                    case 16:
                        A.sent(), A.label = 17;
                    case 17:
                        return o++, [3, 15];
                    case 18:
                        a = 0, c = C.inlineLevel, A.label = 19;
                    case 19:
                        return a < c.length ? (l = c[a], [4, this.renderNode(l)]) : [3, 22];
                    case 20:
                        A.sent(), A.label = 21;
                    case 21:
                        return a++, [3, 19];
                    case 22:
                        Q = 0, w = C.zeroOrAutoZIndexOrTransformedOrOpacity, A.label = 23;
                    case 23:
                        return Q < w.length ? (l = w[Q], [4, this.renderStack(l)]) : [3, 26];
                    case 24:
                        A.sent(), A.label = 25;
                    case 25:
                        return Q++, [3, 23];
                    case 26:
                        u = 0, U = C.positiveZIndex, A.label = 27;
                    case 27:
                        return u < U.length ? (l = U[u], [4, this.renderStack(l)]) : [3, 30];
                    case 28:
                        A.sent(), A.label = 29;
                    case 29:
                        return u++, [3, 27];
                    case 30:
                        return [2]
                }
            })
        })
    }, bs.prototype.mask = function(A) {
        this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath()
    }, bs.prototype.path = function(A) {
        this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath()
    }, bs.prototype.formatPath = function(A) {
        var r = this;
        A.forEach(function(A, e) {
            var t = os(A) ? A.start : A;
            0 === e ? r.ctx.moveTo(t.x, t.y) : r.ctx.lineTo(t.x, t.y), os(A) && r.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
        })
    }, bs.prototype.renderRepeat = function(A, e, t, r) {
        this.path(A), this.ctx.fillStyle = e, this.ctx.translate(t, r), this.ctx.fill(), this.ctx.translate(-t, -r)
    }, bs.prototype.resizeImage = function(A, e, t) {
        if (A.width === e && A.height === t) return A;
        var r = this.canvas.ownerDocument.createElement("canvas");
        return r.width = e, r.height = t, r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), r
    }, bs.prototype.renderBackgroundImage = function(b) {
        return a(this, void 0, void 0, function() {
            var v, e, D, t, r, n;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        v = b.styles.backgroundImage.length - 1, e = function(e) {
                            var t, r, n, B, s, o, i, a, c, Q, w, u, U, l, C, g, E, F, h, H, d, f, p, N, K, I, T, m, R, L, O;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        if (e.type !== xe.URL) return [3, 5];
                                        t = void 0, r = e.url, A.label = 1;
                                    case 1:
                                        return A.trys.push([1, 3, , 4]), [4, D.options.cache.match(r)];
                                    case 2:
                                        return t = A.sent(), [3, 4];
                                    case 3:
                                        return A.sent(), De.getInstance(D.options.id).error("Error loading background-image " + r), [3, 4];
                                    case 4:
                                        return t && (n = ds(b, v, [t.width, t.height, t.width / t.height]), g = n[0], f = n[1], p = n[2], h = n[3], H = n[4], l = D.ctx.createPattern(D.resizeImage(t, h, H), "repeat"), D.renderRepeat(g, l, f, p)), [3, 6];
                                    case 5:
                                        ! function(A) {
                                            return A.type === xe.LINEAR_GRADIENT
                                        }(e) ? function(A) {
                                            return A.type === xe.RADIAL_GRADIENT
                                        }(e) && (C = ds(b, v, [null, null, null]), g = C[0], E = C[1], F = C[2], h = C[3], H = C[4], d = 0 === e.position.length ? [oe] : e.position, f = ae(d[0], h), p = ae(d[d.length - 1], H), N = function(A, e, t, r, n) {
                                            var B = 0,
                                                s = 0;
                                            switch (A.size) {
                                                case Bt.CLOSEST_SIDE:
                                                    A.shape === rt.CIRCLE ? B = s = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === rt.ELLIPSE && (B = Math.min(Math.abs(e), Math.abs(e - r)), s = Math.min(Math.abs(t), Math.abs(t - n)));
                                                    break;
                                                case Bt.CLOSEST_CORNER:
                                                    if (A.shape === rt.CIRCLE) B = s = Math.min(Ne(e, t), Ne(e, t - n), Ne(e - r, t), Ne(e - r, t - n));
                                                    else if (A.shape === rt.ELLIPSE) {
                                                        var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)),
                                                            i = Ke(r, n, e, t, !0),
                                                            a = i[0],
                                                            c = i[1];
                                                        s = o * (B = Ne(a - e, (c - t) / o))
                                                    }
                                                    break;
                                                case Bt.FARTHEST_SIDE:
                                                    A.shape === rt.CIRCLE ? B = s = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === rt.ELLIPSE && (B = Math.max(Math.abs(e), Math.abs(e - r)), s = Math.max(Math.abs(t), Math.abs(t - n)));
                                                    break;
                                                case Bt.FARTHEST_CORNER:
                                                    if (A.shape === rt.CIRCLE) B = s = Math.max(Ne(e, t), Ne(e, t - n), Ne(e - r, t), Ne(e - r, t - n));
                                                    else if (A.shape === rt.ELLIPSE) {
                                                        o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r));
                                                        var Q = Ke(r, n, e, t, !1);
                                                        a = Q[0], c = Q[1], s = o * (B = Ne(a - e, (c - t) / o))
                                                    }
                                            }
                                            return Array.isArray(A.size) && (B = ae(A.size[0], r), s = 2 === A.size.length ? ae(A.size[1], n) : B), [B, s]
                                        }(e, f, p, h, H), K = N[0], I = N[1], 0 < K && 0 < K && (T = D.ctx.createRadialGradient(E + f, F + p, 0, E + f, F + p, K), fe(e.stops, 2 * K).forEach(function(A) {
                                            return T.addColorStop(A.stop, te(A.color))
                                        }), D.path(g), D.ctx.fillStyle = T, K !== I ? (m = b.bounds.left + .5 * b.bounds.width, R = b.bounds.top + .5 * b.bounds.height, O = 1 / (L = I / K), D.ctx.save(), D.ctx.translate(m, R), D.ctx.transform(1, 0, 0, L, 0, 0), D.ctx.translate(-m, -R), D.ctx.fillRect(E, O * (F - R) + R, h, H * O), D.ctx.restore()) : D.ctx.fill())) : (B = ds(b, v, [null, null, null]), g = B[0], f = B[1], p = B[2], h = B[3], H = B[4], s = pe(e.angle, h, H), o = s[0], i = s[1], a = s[2], c = s[3], Q = s[4], (w = document.createElement("canvas")).width = h, w.height = H, u = w.getContext("2d"), U = u.createLinearGradient(i, c, a, Q), fe(e.stops, o).forEach(function(A) {
                                            return U.addColorStop(A.stop, te(A.color))
                                        }), u.fillStyle = U, u.fillRect(0, 0, h, H), 0 < h && 0 < H && (l = D.ctx.createPattern(w, "repeat"), D.renderRepeat(g, l, f, p))), A.label = 6;
                                    case 6:
                                        return v--, [2]
                                }
                            })
                        }, D = this, t = 0, r = b.styles.backgroundImage.slice(0).reverse(), A.label = 1;
                    case 1:
                        return t < r.length ? (n = r[t], [5, e(n)]) : [3, 4];
                    case 2:
                        A.sent(), A.label = 3;
                    case 3:
                        return t++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, bs.prototype.renderBorder = function(e, t, r) {
        return a(this, void 0, void 0, function() {
            return S(this, function(A) {
                return this.path(function(A, e) {
                    switch (e) {
                        case 0:
                            return Is(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                        case 1:
                            return Is(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                        case 2:
                            return Is(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                        case 3:
                        default:
                            return Is(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
                    }
                }(r, t)), this.ctx.fillStyle = te(e), this.ctx.fill(), [2]
            })
        })
    }, bs.prototype.renderNodeBackgroundAndBorders = function(c) {
        return a(this, void 0, void 0, function() {
            var e, t, r, n, B, s, o, i, a = this;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return this.applyEffects(c.effects, 2), e = c.container.styles, t = !ee(e.backgroundColor) || e.backgroundImage.length, r = [{
                            style: e.borderTopStyle,
                            color: e.borderTopColor
                        }, {
                            style: e.borderRightStyle,
                            color: e.borderRightColor
                        }, {
                            style: e.borderBottomStyle,
                            color: e.borderBottomColor
                        }, {
                            style: e.borderLeftStyle,
                            color: e.borderLeftColor
                        }], n = Ms(ms(e.backgroundClip, 0), c.curves), t || e.boxShadow.length ? (this.ctx.save(), this.path(n), this.ctx.clip(), ee(e.backgroundColor) || (this.ctx.fillStyle = te(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(c.container)]) : [3, 2];
                    case 1:
                        A.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach(function(A) {
                            a.ctx.save();
                            var e = Qs(c.curves),
                                t = A.inset ? 0 : 1e4,
                                r = function(A, t, r, n, B) {
                                    return A.map(function(A, e) {
                                        switch (e) {
                                            case 0:
                                                return A.add(t, r);
                                            case 1:
                                                return A.add(t + n, r);
                                            case 2:
                                                return A.add(t + n, r + B);
                                            case 3:
                                                return A.add(t, r + B)
                                        }
                                        return A
                                    })
                                }(e, -t + (A.inset ? 1 : -1) * A.spread.number, (A.inset ? 1 : -1) * A.spread.number, A.spread.number * (A.inset ? -2 : 2), A.spread.number * (A.inset ? -2 : 2));
                            A.inset ? (a.path(e), a.ctx.clip(), a.mask(r)) : (a.mask(e), a.ctx.clip(), a.path(r)), a.ctx.shadowOffsetX = A.offsetX.number + t, a.ctx.shadowOffsetY = A.offsetY.number, a.ctx.shadowColor = te(A.color), a.ctx.shadowBlur = A.blur.number, a.ctx.fillStyle = A.inset ? te(A.color) : "rgba(0,0,0,1)", a.ctx.fill(), a.ctx.restore()
                        }), A.label = 2;
                    case 2:
                        s = B = 0, o = r, A.label = 3;
                    case 3:
                        return s < o.length ? (i = o[s]).style === ht.NONE || ee(i.color) ? [3, 5] : [4, this.renderBorder(i.color, B, c.curves)] : [3, 7];
                    case 4:
                        A.sent(), A.label = 5;
                    case 5:
                        B++, A.label = 6;
                    case 6:
                        return s++, [3, 3];
                    case 7:
                        return [2]
                }
            })
        })
    }, bs.prototype.render = function(t) {
        return a(this, void 0, void 0, function() {
            var e;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return this.options.backgroundColor && (this.ctx.fillStyle = te(this.options.backgroundColor), this.ctx.fillRect(this.options.x - this.options.scrollX, this.options.y - this.options.scrollY, this.options.width, this.options.height)), e = function(A) {
                            var e = new Es(A, []),
                                t = new gs(e),
                                r = [];
                            return Ns(e, t, t, r), Ks(e.container, r), t
                        }(t), [4, this.renderStack(e)];
                    case 1:
                        return A.sent(), this.applyEffects([], 2), [2, this.canvas]
                }
            })
        })
    }, bs);

    function bs(A) {
        this._activeEffects = [], this.canvas = A.canvas ? A.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), (this.options = A).canvas || (this.canvas.width = Math.floor(A.width * A.scale), this.canvas.height = Math.floor(A.height * A.scale), this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px"), this.fontMetrics = new Os(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY), this.ctx.textBaseline = "bottom", this._activeEffects = [], De.getInstance(A.id).debug("Canvas renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale)
    }
    var Ss = function(A) {
            return A instanceof Zn || (A instanceof Wn || A instanceof Jn && A.type !== Vn && A.type !== xn)
        },
        Ms = function(A, e) {
            switch (A) {
                case Ee.BORDER_BOX:
                    return Qs(e);
                case Ee.CONTENT_BOX:
                    return function(A) {
                        return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
                    }(e);
                case Ee.PADDING_BOX:
                default:
                    return ws(e)
            }
        },
        ys = function(A) {
            switch (A) {
                case Cr.CENTER:
                    return "center";
                case Cr.RIGHT:
                    return "right";
                case Cr.LEFT:
                default:
                    return "left"
            }
        },
        _s = (Ps.prototype.render = function(r) {
            return a(this, void 0, void 0, function() {
                var e, t;
                return S(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return e = Le(Math.max(this.options.windowWidth, this.options.width) * this.options.scale, Math.max(this.options.windowHeight, this.options.height) * this.options.scale, this.options.scrollX * this.options.scale, this.options.scrollY * this.options.scale, r), [4, Vs(e)];
                        case 1:
                            return t = A.sent(), this.options.backgroundColor && (this.ctx.fillStyle = te(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
                    }
                })
            })
        }, Ps);

    function Ps(A) {
        this.canvas = A.canvas ? A.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = A, this.canvas.width = Math.floor(A.width * A.scale), this.canvas.height = Math.floor(A.height * A.scale), this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px", this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY), De.getInstance(A.id).debug("EXPERIMENTAL ForeignObject renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale)
    }

    function xs(A) {
        return we(_A.create(A).parseComponentValue())
    }
    var Vs = function(r) {
        return new Promise(function(A, e) {
            var t = new Image;
            t.onload = function() {
                A(t)
            }, t.onerror = e, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
        })
    };
    "undefined" != typeof window && Se.setContext(window);
    var zs = function(p, N) {
        return a(void 0, void 0, void 0, function() {
            var e, t, r, n, B, s, o, i, a, c, Q, w, u, U, l, C, g, E, F, h, H, d, f;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        if (!(e = p.ownerDocument)) throw new Error("Element is not attached to a Document");
                        if (!(t = e.defaultView)) throw new Error("Document is not attached to a Window");
                        return r = (Math.round(1e3 * Math.random()) + Date.now()).toString(16), n = EB(p) || function(A) {
                            return "HTML" === A.tagName
                        }(p) ? function(A) {
                            var e = A.body,
                                t = A.documentElement;
                            if (!e || !t) throw new Error("Unable to get document size");
                            var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)),
                                n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                            return new I(0, 0, r, n)
                        }(e) : T(p), B = n.width, s = n.height, o = n.left, i = n.top, a = K({}, {
                            allowTaint: !1,
                            imageTimeout: 15e3,
                            proxy: void 0,
                            useCORS: !1
                        }, N), c = {
                            backgroundColor: "#ffffff",
                            cache: N.cache ? N.cache : Se.create(r, a),
                            logging: !0,
                            removeContainer: !0,
                            foreignObjectRendering: !1,
                            scale: t.devicePixelRatio || 1,
                            windowWidth: t.innerWidth,
                            windowHeight: t.innerHeight,
                            scrollX: t.pageXOffset,
                            scrollY: t.pageYOffset,
                            x: o,
                            y: i,
                            width: Math.ceil(B),
                            height: Math.ceil(s),
                            id: r
                        }, Q = K({}, c, a, N), w = new I(Q.scrollX, Q.scrollY, Q.windowWidth, Q.windowHeight), De.create({
                            id: r,
                            enabled: Q.logging
                        }), De.getInstance(r).debug("Starting document clone"), u = new PB(p, {
                            id: r,
                            onclone: Q.onclone,
                            ignoreElements: Q.ignoreElements,
                            inlineImages: Q.foreignObjectRendering,
                            copyStyles: Q.foreignObjectRendering
                        }), (U = u.clonedReferenceElement) ? [4, u.toIFrame(e, w)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                    case 1:
                        return l = A.sent(), C = e.documentElement ? xs(getComputedStyle(e.documentElement).backgroundColor) : He.TRANSPARENT, g = e.body ? xs(getComputedStyle(e.body).backgroundColor) : He.TRANSPARENT, E = N.backgroundColor, F = "string" == typeof E ? xs(E) : null === E ? He.TRANSPARENT : 4294967295, h = p === e.documentElement ? ee(C) ? ee(g) ? F : g : C : F, H = {
                            id: r,
                            cache: Q.cache,
                            canvas: Q.canvas,
                            backgroundColor: h,
                            scale: Q.scale,
                            x: Q.x,
                            y: Q.y,
                            scrollX: Q.scrollX,
                            scrollY: Q.scrollY,
                            width: Q.width,
                            height: Q.height,
                            windowWidth: Q.windowWidth,
                            windowHeight: Q.windowHeight
                        }, Q.foreignObjectRendering ? (De.getInstance(r).debug("Document cloned, using foreign object rendering"), [4, new _s(H).render(U)]) : [3, 3];
                    case 2:
                        return d = A.sent(), [3, 5];
                    case 3:
                        return De.getInstance(r).debug("Document cloned, using computed rendering"), Se.attachInstance(Q.cache), De.getInstance(r).debug("Starting DOM parsing"), f = oB(U), Se.detachInstance(), h === f.styles.backgroundColor && (f.styles.backgroundColor = He.TRANSPARENT), De.getInstance(r).debug("Starting renderer"), [4, new Ds(H).render(f)];
                    case 4:
                        d = A.sent(), A.label = 5;
                    case 5:
                        return !0 === Q.removeContainer && (PB.destroy(l) || De.getInstance(r).error("Cannot detach cloned iframe as it is not in the DOM anymore")), De.getInstance(r).debug("Finished rendering"), De.destroy(r), Se.destroy(r), [2, d]
                }
            })
        })
    };
    return function(A, e) {
        return void 0 === e && (e = {}), zs(A, e)
    }
});