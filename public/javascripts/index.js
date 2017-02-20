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

  function initial() {
    if (window.innerWidth >=1200) {
      display = 3;
      layoutHeight = Math.max(introductionHeight, experienceHeight, skillHeight) 
      assign(true, true, true);
    } else if (window.innerWidth < 1200 & window.innerWidth >= 768) {
      display = 2;
      layoutHeight = Math.max(introductionHeight, experienceHeight) 
      assign(true, true, false);
    } else {
      display = 1;
    }
  }

  initial();

  function assign(isIntroProvided, isExperProvided, isSkillProvided) {
    introduction.style.height = isIntroProvided == true ? layoutHeight + 'px' : '';
    experience.style.height = isExperProvided == true ? layoutHeight + 'px' : '';
    skill.style.height = isSkillProvided == true ? layoutHeight + 'px' : '';
  }

  var handler = function() {
    if (window.innerWidth >= 1200) {
      if (display != 3) { 
        assign(false, false, false);
        display = 3;
      }
      if (window.innerWidth > 1500) {
        assign(false, false, false);      
      }
      getScrollHeight();
      layoutHeight=Math.max(introductionHeight, experienceHeight, skillHeight) 
      assign(true, true, true);
    } else if (window.innerWidth < 1200 & window.innerWidth >= 768) {
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