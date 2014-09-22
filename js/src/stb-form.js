/* Verify National Identity Number ***********************************************/
function verifyID(nr) {
  var pn = new Array();
  var v1 = new Array(3,7,6,1,8,9,4,5,2,1,0);
  var v2 = new Array(5,4,3,2,7,6,5,4,3,2,1);
  for(var i=0; i<nr.length; i++) {
    pn[i] = nr.charAt(i);
  }
  var k1=0;
  for(var i=0; i<v1.length; i++) {
    k1 += pn[i]*v1[i];
  }
  var k2=0;
  for(var i=0; i<v2.length; i++) {
    k2 += pn[i]*v2[i];
  }
  if (k1%11==0 && k2%11==0 ) {
    return true;
  } else {
    return false;
  }
}

function findBootstrapEnvironment() {
  var envs = ['xs', 'sm', 'md', 'lg'];

  $el = $('<div>');
  $el.appendTo($('body'));

  for (var i = envs.length - 1; i >= 0; i--) {
    var env = envs[i];

    $el.addClass('hidden-'+env);
    if ($el.is(':hidden')) {
      $el.remove();
      return env
    }
  };
}

var idValidator = {
  message: '<span class="stb-color-sprite-medium warning circle"></span> Fødselsnummeret er ikke gyldig!',
  callback: function(value, validor){
    return verifyID(value);
  }
};

$("document").ready(function(){
  $(".row .column").matchHeight(true);

  var bootstrapEnv = findBootstrapEnvironment();

  var formSelector;

  if(bootstrapEnv == 'md' || bootstrapEnv == 'lg'){
    formSelector = $('form.validateForm');
    formSelector.bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      group: '.stb-form-group',
      fields: validationFields
    }).on('success.form.bv', function(e) {
          // Prevent form submission
          e.preventDefault();

          var $form = $(e.target),
              validator = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();

          var nextPanel = $('.formSection.active').next('section.formSection');
          $('#step-'+$('.formSection.active').attr('id')).removeClass('prog-todo').addClass('prog-done');
          navigateToSection(nextPanel);

        });

    $('#backButton').click(function(){
      navigateToSection($('.formSection.active').prev('section.formSection'));
      $('#nextButton').removeClass("disabled").prop("disabled", false);
    });

    $('.progressBar-circle li').click(function(){
      var panelId = $(this).attr('id').split('-')[1];
      navigateTo($('#'+panelId));
    });


  }else{
    formSelector = $('form.validateFormMobile');
    formSelector.bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      group: '.stb-form-group',
      fields: validationFields
    }).on('success.form.bv', function(e) {
          // Prevent form submission
          e.preventDefault();

          var $form = $(e.target),
              validator = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();

          var currentActive = $('.panel-collapse.collapse.in');
          var nextActive = $(currentActive).parent().next().find('div.panel-collapse');
          navigateToNext(currentActive, nextActive);
        });

    $('.backButton').click(function(){
      var currentActive = $('.panel-collapse.collapse.in');
      var nextActive = $(currentActive).parent().prev().find('div.panel-collapse');
      setActiveMobile(currentActive, nextActive);
    })

    $(".nextButton").click(function(event){
      validateFieldsMobile(event);
    });

    formSelector.find('a.accordion').click(function(){
      var currentActive = $('.panel-collapse.collapse.in');
      var nextActive = $(this).closest('div').next();
      if(nextActive.parent().hasClass('completed') || nextActive.parent().hasClass('current')){
        if(currentActive.parent().hasClass('completed')){
          if(validateForm(formSelector)){
            setActiveMobile(currentActive, nextActive);
          }else{
            $('html, body').animate({
              scrollTop: $('div.has-error:first').offset().top-100
            }, 1000);
          }
        }else{
          setActiveMobile(currentActive, nextActive);
        }
      }

      if($(this).closest('div').next().attr('id') == "kontoopplysninger-mobile"){
        $(this).closest('div').next().collapse('toggle');
      }

    });

    formSelector.find('#accordion').on('show.bs.collapse', function (event) {
      $(event.target).prev().find('span:last').toggleClass('chevron-down chevron-up')
    });

    formSelector.find('#accordion').on('hide.bs.collapse', function () {
      $('.panel-collapse.collapse.in').prev().find('span:last').toggleClass('chevron-down chevron-up')
    });
  }

});

function validateForm(form){
  var bsValidator = form.data('bootstrapValidator');
  bsValidator.validate();
  return bsValidator.isValid();
}

//Desktop version Javascript
//Navigates to next section if completed/ongoing and validates the current section
function navigateTo(next){
  //Check if we can go to the section
  if(stepPanel(next).hasClass('prog-done') || stepPanel(next).hasClass('prog-clickable')){
    var currentActive = $('.formSection.active');
    //If section has been completed before it should be validated for possible changes.
    if(stepPanel(currentActive).hasClass('prog-done')){
      if(validateForm($('form.validateForm'))){
        navigateToSection(next)
      }else{
        if($('div.has-error:first').length != 0){
          $('html, body').animate({
            scrollTop: $('div.has-error:first').offset().top-100
          }, 1000);
        }

      }
    }else{
      navigateToSection(next);
    }
  }
}

//Get the related step in the progress bar
function stepPanel(element){
  return $('#step-'+element.attr('id'));
}

//Set the next panel to active
function navigateToSection(nextActive){

  var currentActive = $('.formSection.active');
  if(currentActive.attr('id') != nextActive.attr('id')){
    currentActive.hide().removeClass('active');
    nextActive.show().addClass('active');

    $("#navigationButtons").show();

    if(nextActive.next('section').is('#kvittering')){
      $("#nextButton").text("Send");
    }else if(nextActive.is("#kvittering")){
      $("#navigationButtons").hide();
      $('.progressBar-circle li').off();
    }else{
      $("#nextButton").text('Neste').removeClass("disabled");
    }

    if(nextActive.prev('section').length == 0){
      $('#backButton').hide();
    }else{
      $('#backButton').show();
    }

    //Update the progressbar
    stepPanel(currentActive).removeClass('prog-active');
    stepPanel(nextActive).addClass('prog-active prog-clickable');

    $('body,html').animate({scrollTop: 0}, 800);
  }

}


//Mobile version javascript
function navigateToNext(currentActive, nextActive){
  $(currentActive).parent().addClass('completed').removeClass('current');
  nextActive.parent().addClass('current');
  setActiveMobile(currentActive, nextActive);
}

function setActiveMobile(currentActive, nextActive){
  if(currentActive.attr('id') != nextActive.attr('id')){
    $(currentActive).collapse('hide');
    $(nextActive).collapse('show');
    if(nextActive.attr('id') == 'kvittering-mobile'){
      $('form.validateFormMobile a.accordion').off();
    }
    $('body,html').animate({scrollTop: 0}, 800);
    // nextActive.prev().find('span:first').next().toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
  }else{
    $(currentActive).collapse('toggle');
    //nextActive.prev().find('span:first').next().toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
  }
}

function validateFieldsMobile(event){
  event.preventDefault();
  var currentActive = $('.panel-collapse.collapse.in');
  var nextActive = $(currentActive).parent().next().find('div.panel-collapse');
  if(validateForm($('form.validateFormMobile'))){
    setActiveMobile(currentActive, nextActive);
  }else{
    if($('div.has-error:first').length != 0){
      $('html, body').animate({
        scrollTop: $('div.has-error:first').offset().top-100
      }, 1000);
    }

  }
}

function cancelSubmitForm(){
  if (confirm('Vil du virkelig avbryte bestillingen?')) {
    window.history.back();
  }
}
