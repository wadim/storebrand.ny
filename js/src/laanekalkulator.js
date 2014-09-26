$(document).ready(function(){
  var slider1 = $("#stb-slider-nedbetaling").slider({
    from: 0,
    to: 30,
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
  });
  var slider2 = $("#stb-slider-lanerente").slider({
    from: 0,
    to: 20,
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
  });

  $('#nedbetaling-input').change(function(){
    slider1.slider('value', $(this).val());
  });

  $('#lanerente-input').change(function(){
    slider2.slider('value', $(this).val());
  });
});/**
 * Created with IntelliJ IDEA.
 * User: runeblekenkulstad
 * Date: 26.09.14
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */
