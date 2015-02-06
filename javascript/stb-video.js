// This loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var bootstrapEnv;

// This function creates an <iframe> (and YouTube player) after the API code downloads.

function onYouTubeIframeAPIReady() {
  bootstrapEnv = findBootstrapEnvironment();
  $('.video-player-banner').each(function(index, element){
    new YT.Player($(element).attr('id'), {
      videoId: $(element).attr('data-youtube-id'),
      playerVars: { autohide:1, modestbranding: 1, controls: 1,theme:'light',html5:1, showinfo:0, rel:0},
      events: {
        'onReady': onPlayerReadyBanner,
        'onStateChange': onPlayerStateChangeBanner
      }
    });
  });

  $('.video-player-inline').each(function(index, element) {
    new YT.Player($(element).attr('id'), {
      videoId: $(element).attr('data-youtube-id'),
      playerVars: { autohide:1, modestbranding: 1, controls: 1,theme:'light',html5:1, showinfo:0, rel:0},
      events: {
        'onReady': onPlayerReadyInline,
        'onStateChange': onPlayerStateChangeInline
      }
    });
  });
}

// The API will call this function when the video player is ready.
function onPlayerReadyInline(event) {
  $(event.target.d).prev().click(function() {
    event.target.playVideo();
    $(this).fadeOut('slow');
  });
}

function onPlayerReadyBanner(event) {
  $('.playVideoBtn').click(function() {
    playVideoBanner(event.target);
  });

  $('.video-close').click(function() {
    stopVideoBanner(event.target);
  });
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1), the player should play for six seconds and then stop.
function onPlayerStateChangeInline(event) {
  if(event.data == 0){
    $(event.target.d).prev().show();
    event.target.seekTo(0, false);
  } else if(event.data == 2) {
    $(event.target.d).prev().show();
  }
};

function onPlayerStateChangeBanner(event) {
  if(event.data == 0) {
    stopVideoBanner(event.target);
  }
}

function stopVideoBanner(player) {
  if(bootstrapEnv == 'md' || bootstrapEnv == 'lg') {
    player.stopVideo();
    player.seekTo(0, false);
  }
  var bannerVideo = $(player.d).closest('.banner-video');
  bannerVideo.children('.video-container').hide(500);
  bannerVideo.children('.video-text').show(500);
  bannerVideo.parent().addClass('top-padding-30');
}

function playVideoBanner(player) {
  var bannerVideo = $(player.d).closest('.banner-video');
  bannerVideo.parent().removeClass('top-padding-30');
  bannerVideo.children('.video-text').hide(500);
  bannerVideo.children('.video-container').show(500, function() {
   if(bootstrapEnv == 'md' || bootstrapEnv == 'lg'){
     player.playVideo();
   }
  });
}