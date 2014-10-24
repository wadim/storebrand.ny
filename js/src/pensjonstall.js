$(document).ready(function(){
  var slider1 = $( "#stb-slider-pensjon");
  var slider2 = $("#stb-slider-dagenslonn");
  var slider1obj = {
    from: 62,
    to: 75,
    domNode: "#stb-slider",
    valueElem: "#stb-slider-value",
    dimension: '&nbsp;år',
    calculate: function(a) {
      return $(this.domNode).siblings(this.valueElem).val(a), a
    },
    complete: function() {},
    onstatechange: function() {
      var a = $(this.domNode).find(".jslider-bg .l"),
          b = $(this.domNode).find(".jslider-bg .r"),
          c = $(this.domNode).find(".jslider-pointer");
      if (c && c.length > 0) {
        var d = c[0].style.left.split("%")[0],
            e = 100 - d;
        a.css({
          width: d + "%"
        }), b.css({
          width: e + "%",
          left: d + "%"
        })
      }
    },
    getPercentVal: function(a) {
      var b = a,
          c = 0,
          d = 100;
      if (b && b.length > 0) {
        var e = b[0].style.left.split("%")[0];
        c = e, d = 100 - c
      }
      return d
    }
  };
  var slider2obj = {
    from: 40,
    to: 100,
    step: 0.1,
    round: 1,
    domNode: "#stb-slider",
    valueElem: "#stb-slider-value",
    dimension: '&nbsp;%',
    calculate: function(a) {
      return $(this.domNode).siblings(this.valueElem).val(a), a
    },
    complete: function() {},
    onstatechange: function() {
      var a = $(this.domNode).find(".jslider-bg .l"),
          b = $(this.domNode).find(".jslider-bg .r"),
          c = $(this.domNode).find(".jslider-pointer");
      if (c && c.length > 0) {
        var d = c[0].style.left.split("%")[0],
            e = 100 - d;
        a.css({
          width: d + "%"
        }), b.css({
          width: e + "%",
          left: d + "%"
        })
      }
    },
    getPercentVal: function(a) {
      var b = a,
          c = 0,
          d = 100;
      if (b && b.length > 0) {
        var e = b[0].style.left.split("%")[0];
        c = e, d = 100 - c
      }
      return d
    }
  };

  initiateSlider(slider1, slider1obj, "år", "pensjonnaar");
  initiateSlider(slider2, slider2obj, "%", "dagenslonn");

});