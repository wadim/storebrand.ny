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
      changeCalculatedValue('laanekalkulator');
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
      changeCalculatedValue('laanekalkulator');
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

  $('#lanebelop').change(function(){
    changeCalculatedValue('laanekalkulator');
  });

  $('#nedbetaling-input').change(function(){
    slider1.slider('value', $(this).val());
  });

  $('#lanerente-input').change(function(){
    slider2.slider('value', $(this).val());
  });

});

var changeCalculatedValue = function(formId) {
  var form = "#" + formId;
  var previousValue = $(form).find(".calculated-value").text();
  var principal = $(form).find("[name='loan-total']").val() || 0; //total loan
 // console.log(principal);
  var monthlyInterestRate = Math.ceil(($(form).find("[name='interest']").val() / 12)*100)/10000;
 // console.log(monthlyInterestRate);
  var numberOfMonthlyPayments = Math.ceil($(form).find("[name='years']").val() * 12) || 1;
 // console.log(numberOfMonthlyPayments);
  var calculatedValue = Math.ceil((monthlyInterestRate * principal)/(1 - Math.pow((1 + monthlyInterestRate), -numberOfMonthlyPayments))) || 0;
 // console.log(calculatedValue);
  $(form).find(".calculated-value").text(calculatedValue);
}