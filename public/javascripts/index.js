window.onload = function() {
  var introduction=document.getElementById("introduction") 
  var experience=document.getElementById("experience") 
  var skill=document.getElementById("skill")

  var introductionHeight,skillHeight,experienceHeight,layoutHeight, display;

  getScrollHeight();

  function getScrollHeight() {
    introductionHeight = introduction.scrollHeight;
    experienceHeight = experience.scrollHeight;  
    skillHeight = skill.scrollHeight;
  }

  function changeRate(isBiggerthan1440) {
    if (isBiggerthan1440) {
      introduction.className = 'part col-md-3 col-sm-4 col-xs-12 col-lg-2';
      experience.className = 'part col-md-9 col-sm-8 col-xs-12 col-lg-6';
      skill.className = 'part col-md-12 col-sm-12 col-xs-12 col-lg-4';
      display = 3;     
    } else {
      introduction.className = 'part col-md-3 col-sm-4 col-xs-12 col-lg-3';
      experience.className = 'part col-md-9 col-sm-8 col-xs-12 col-lg-9';
      skill.className = 'part col-md-12 col-sm-12 col-xs-12 col-lg-12';
      display = 2;      
    }
  }

  function assign(isIntroProvided, isExperProvided, isSkillProvided) {
    introduction.style.height = isIntroProvided == true ? layoutHeight + 'px' : '';
    experience.style.height = isExperProvided == true ? layoutHeight + 'px' : '';
    skill.style.height = isSkillProvided == true ? layoutHeight + 'px' : '';
  }

  function initial() {
    if (window.innerWidth >= 1440) {
      changeRate(true);
    } else if (window.innerWidth < 1440 && window.innerWidth >= 1200) {
      console.log()
      changeRate(false);
    }

    if (window.innerWidth >= 1440) {
      display = 3;
      getScrollHeight();
      layoutHeight = Math.max(introductionHeight, experienceHeight, skillHeight) 
      assign(true, true, true);
    } else if (window.innerWidth < 1440 & window.innerWidth >= 768) {
      display = 2;
      getScrollHeight();
      layoutHeight = Math.max(introductionHeight, experienceHeight) 
      assign(true, true, false);
    } else {
      display = 1;
    }
  }

  initial();

  var handler = function() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1440) {
      if (display != 3) { 
        changeRate(true);
        assign(false, false, false);
        display = 3;
      }
      if (window.innerWidth > 1500) {
        assign(false, false, false);      
      }
      getScrollHeight();
      layoutHeight=Math.max(introductionHeight, experienceHeight, skillHeight) 
      assign(true, true, true);
    } else if (window.innerWidth < 1440 & window.innerWidth >= 768) {
      if (window.innerWidth >= 1200) {
        changeRate(false);
      }
      if (window.innerWidth > 800) {
        assign(false, false, false);
      }
      if (display != 2) { 
        assign(false, false, false);
        display = 2;
      }
      getScrollHeight();
      layoutHeight=Math.max(introductionHeight, experienceHeight)
      assign(true, true, false);  
    } else {
      display = 1;
      assign(false, false, false);
    }
  }

  window.onresize = handler;
}