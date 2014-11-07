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

$("document").ready(function(){

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
          if(!$('.formSection.active').hasClass('lastSection')){
            e.preventDefault();
            validatedSuccessDesktop();
          }

          var $form = $(e.target),
          validator = $form.data('bootstrapValidator'),
          submitButton = validator.getSubmitButton();
        });

    $('#backButton').click(function(){
      navigateToSectionDesktop($('.formSection.active').prev('section.formSection'));
      $('#nextButton').removeClass("disabled").prop("disabled", false);
    });


    $('.progressBar-circle li').click(function(){
      var section = $('#'+$(this).attr('id').split('-')[1]);
      if(validateSectionDesktop(section)){
        navigateToSectionDesktop(section);
      }

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
          if(!$('.panel-collapse.collapse.in').hasClass('lastSection')){
            e.preventDefault();
            validatedSuccessMobile();
          }

          var $form = $(e.target),
              validator = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();


        });

    $('.backButton').click(function(){
      var currentActive = $('.panel-collapse.collapse.in');
      var nextActive = $(currentActive).parent().prev().find('div.panel-collapse');
      navigateToSectionMobile(currentActive, nextActive);
    });

    formSelector.find('a.accordion').click(function(){
      var currentActive = $('.panel-collapse.collapse.in');
      var nextActive = $(this).closest('div').next();
      if(nextActive.parent().hasClass('completed') || nextActive.parent().hasClass('current')){
        if(currentActive.parent().hasClass('completed')){
          if(validateForm(formSelector)){
            navigateToSectionMobile(currentActive, nextActive);
          }else{
            if($('div.has-error:first').length != 0){
              $('html, body').animate({
                scrollTop: $('div.has-error:first').offset().top-100
              }, 1000);
            }
          }
        }else{
          navigateToSectionMobile(currentActive, nextActive);
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

function validatedSuccessDesktop(){
  var nextPanel = $('.formSection.active').next('section.formSection');
  $('#step-'+$('.formSection.active').attr('id')).removeClass('prog-todo').addClass('prog-done');
  navigateToSectionDesktop(nextPanel);
}

//Desktop version Javascript
//Navigates to next section if completed/ongoing and validates the current section
function validateSectionDesktop(next){
  //Check if we can go to the section
  if(stepPanel(next).hasClass('prog-done') || stepPanel(next).hasClass('prog-clickable')){
    var currentActive = $('.formSection.active');
    //If section has been completed before it should be validated for possible changes.
    if(stepPanel(currentActive).hasClass('prog-done')){
       validateSection();
    }else{
      return true;
    }
  }
}

//Set the next panel to active
function navigateToSectionDesktop(nextActive){

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
function validatedSuccessMobile(){
  var currentActive = $('.panel-collapse.collapse.in');
  var nextActive = $(currentActive).parent().next().find('div.panel-collapse');
  $(currentActive).parent().addClass('completed').removeClass('current');
  nextActive.parent().addClass('current');
  navigateToSectionMobile(currentActive, nextActive);
}

function navigateToSectionMobile(currentActive, nextActive){
  if(currentActive.attr('id') != nextActive.attr('id')){
    $(currentActive).collapse('hide');
    $(nextActive).collapse('show');
    if(nextActive.attr('id') == 'kvittering-mobile'){
      $('form.validateFormMobile a.accordion').off();
    }
    $('body,html').animate({scrollTop: 0}, 800);
  }else{
    $(currentActive).collapse('toggle');
  }
}

//Common functions
function validateSection(mobile){
  event.preventDefault();
  var theForm;
  if(mobile){
    theForm = $('form.validateFormMobile');
  }else{
    theForm = $('form.validateForm');
  }

  if(validateForm(theForm)){
    return true;

  }else{
    if($('div.has-error:first').length != 0){
      $('html, body').animate({
        scrollTop: $('div.has-error:first').offset().top-100
      }, 1000);
    }
    return false;
  }
}

function validateForm(form){
  var bsValidator = form.data('bootstrapValidator');
  bsValidator.validate();
  return bsValidator.isValid();
}

//Get the related step in the progress bar
function stepPanel(element){
  return $('#step-'+element.attr('id'));
}

function cancelSubmitForm(){
  if (confirm('Vil du virkelig avbryte bestillingen?')) {
    window.history.back();
  }
}