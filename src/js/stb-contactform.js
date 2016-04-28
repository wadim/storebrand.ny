$(document).ready(function(){
  $("#customerYes, #customerNo").change(function() {
    if($("#customerYes").is(":checked") == true) {
      $("#noticeCustomer").removeClass("hidden");
      $("#noticeNonCustomer").addClass("hidden");
    } else {
      $("#noticeCustomer").addClass("hidden");
      $("#noticeNonCustomer").removeClass("hidden");
    }
  })

  $("#selectLevel1").change( function(){
    var chosenLevel1 = $("#selectLevel1").val();
    $(".regarding").hide();
    $(".contactForm").hide();
    $(".messageFeedback").hide();
    $("#message-level1-"+chosenLevel1).show();
    $("#regarding-"+chosenLevel1).show();
  });

  $(".selectLevel2").change( function(){
    var showmessage = $(this).find("option:selected").attr("data-show-message");
    $(".messageFeedback").hide();
    if(showmessage){
      $("#message-level2-"+showmessage).show();
    }
    var showForm = $(this).find("option:selected").attr("data-showform");
    showForm ? $(".contactForm").show() : $(".contactForm").hide();
  })
});
