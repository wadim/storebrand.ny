
$(document).ready(function(){

  $('#stb-slider').slider({

    from: 0,
    to: 100,
    domNode: '#stb-slider',
    valueElem: '#stb-slider-value',

    calculate : function(value){
      $(this.domNode).siblings(this.valueElem).text(value);
      return value; //SB.format.Number(value);
    },
    complete : function(value){
      // _iPadSliderFix();
    },
    onstatechange : function(value){

      var _left = $(this.domNode).find('.jslider-bg .l');
      var _right = $(this.domNode).find('.jslider-bg .r');
      var _pointer = $(this.domNode).find('.jslider-pointer');
      if(_pointer && _pointer.length > 0) {
        var _l = _pointer[0].style.left.split('%')[0];
        var _r = 100 - _l;

        _left.css({
          width: _l + '%'
        });

        _right.css({
          width: _r + '%',
          left: _l + '%'
        });
      }
    },

    /**
     * Get percentage value to adjust circle background size
     * Not used ATM, keeping for future use.
     *
     * @param   Element   pointer
     * @return  Integer   _shrinkPercent
     */
    getPercentVal: function(pointer){

      var _pointer        = pointer;
      var _percent        = 0;
      var _shrinkPercent  = 100;

      if(_pointer && _pointer.length > 0) {

        var _l          = _pointer[0].style.left.split('%')[0];
        var _r          = 100 - _l;
        _percent        = _l;
        _shrinkPercent  = 100 -_percent;
      }

      return _shrinkPercent;
    }
  });

});
