var s,
  portraitsGrid = {

    settings: {
      face: $('.face'),
      steps: $('.steps'),
      btn: $('.btn'),
      transitionGridIn: "fadeIn",
      transitionTitlesIn: "transition.flipYIn",
      transitionGridOut: "fadeOut",
      transitionTitlesOut: "transition.flipYOut",
    },

    init: function(options) {
      this.settings = $.extend(this.settings, options);
      s = this.settings;
      this.loadPortraits();
      this.initEvents();

    },

    loadPortraits: function() {
      var genero = ["p"];
      $('.face').find('img').each(function(i) {
      	console.log(i+1);
        var rand = genero[Math.floor(Math.random() * genero.length)];
        $(this).attr('src', "images/" + rand + (((i+1)%24)+1).toString() + '.jpg'); //http://randomuser.me
      });
      var t = $('.face').last().find('img');
      console.log($('.face').last().find('img'));
      console.log("---------------");
      console.log($(".face"));
      console.log("---------------");
      console.log($(".face").last());
      t.one('load', function() {
        portraitsGrid.sequenceInOut(500, s.transitionGridIn, false, 800, 2700, s.transitionTitlesIn, 2500);
      });
    },

    initEvents: function() {
      $(".btn").on('click', function(e) {
        e.preventDefault();
        portraitsGrid.sequenceInOut(0, s.transitionGridOut, true, 200, 0, s.transitionTitlesOut, 1800);
        setTimeout(function() {
          portraitsGrid.sequenceInOut(500, s.transitionGridIn, false, 800, 2700, s.transitionTitlesIn, 2500);
        }, 3800);
      });
    },

    sequenceInOut: function(delaygrid, easegrid, backgrid, durationgrid, delaytext, easetext, durationtext) {
      $(".face").delay(delaygrid).velocity(easegrid, {
        stagger: 55,
        duration: durationgrid,
        backwards: backgrid,
        drag: true
      });
      $(".steps").delay(delaytext).velocity(easetext, {
        duration: durationtext,
        backwards: backgrid,
        drag: true
      });
    }

  };

$(function() {
  portraitsGrid.init({
    transitionGridIn: "transition.bounceIn",
    transitionGridOut: "transition.flipYOut"
  });
});
