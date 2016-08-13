(function($) {

  $.fn.isValid = function() {
    return this[0].checkValidity();
  };

  var forms = {
    $inputs : $('input, textarea'),
    stateTouched : 'js-state--touched',
    stateFilled : 'js-state--filled',
    stateValid : 'js-state--valid',
    stateInvalid : 'js-state--invalid',
    setValidState : function($input) {
      if ($input.isValid()) {
        $input.removeClass(this.stateInvalid);
        $input.addClass(this.stateValid);
      } else {
        $input.removeClass(this.stateValid);
        $input.addClass(this.stateInvalid);
      }
    },
    setEmptyState : function($input) {
      if ($input.val()) {
        $input.addClass(this.stateFilled);
      } else {
        $input.removeClass(this.stateFilled);
      }
    }
  };

  forms.$inputs.focusout(function() {
    $(this).addClass(forms.stateTouched);
    forms.touchedInputs = $(forms.stateTouched);
  });

  forms.$inputs.keyup(function() {
    forms.setEmptyState($(this));
    forms.setValidState($(this));
  });

})(jQuery);
