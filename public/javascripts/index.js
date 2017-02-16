window.onload = function() {
  var introduction=document.getElementById("introduction") 
  var skill=document.getElementById("skill")
  var experience=document.getElementById("experience") 

  var introductionHeight,skillHeight,experienceHeight,layoutHeight, display;

  getScrollHeight();

  function getScrollHeight() {
    introductionHeight = introduction.scrollHeight;
    skillHeight = skill.scrollHeight;
    experienceHeight = experience.scrollHeight;  
  }

  function initial() {
    if (window.innerWidth >=1200) {
      display = 3;
      layoutHeight = Math.max(introductionHeight, skillHeight, experienceHeight) 
      assign(true, true, true);
    } else if (window.innerWidth < 1200 & window.innerWidth >= 768) {
      display = 2;
      layoutHeight = Math.max(introductionHeight, skillHeight) 
      assign(true, true, false);
    } else {
      display = 1;
    }
  }

  initial();

  function assign(isIntroProvided, isSkillProvided, isExperProvided) {
    introduction.style.height = isIntroProvided == true ? layoutHeight + 'px' : '';
    skill.style.height = isSkillProvided == true ? layoutHeight + 'px' : '';
    experience.style.height = isExperProvided == true ? layoutHeight + 'px' : '';
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
      layoutHeight=Math.max(introductionHeight, skillHeight, experienceHeight) 
      assign(true, true, true);
    } else if (window.innerWidth < 1200 & window.innerWidth >= 768) {
      if (display != 2) { 
        assign(false, false, false);
        display = 2;
      }
      getScrollHeight();
      layoutHeight=Math.max(introductionHeight, skillHeight)
      assign(true, true, false);  
    } else {
      display = 1;
      assign(false, false, false);
    }
  }

  window.onresize = handler;
}