window.onload = function() {
  var introduction=document.getElementById("introduction") 
  var skill=document.getElementById("skill")
  var experience=document.getElementById("experience") 

  var introductionHeight = introduction.scrollHeight;
  var skillHeight = skill.scrollHeight;
  var experienceHeight = experience.scrollHeight;

  var layoutHeight, display;

  function initial() {
    if (window.innerWidth >=1200) {
      display = 3;
      layoutHeight = Math.max(introductionHeight, skillHeight, experienceHeight) 
      introduction.style.height = layoutHeight + 'px';
      skill.style.height = layoutHeight + 'px';
      experience.style.height = layoutHeight + 'px';
    } else if (window.innerWidth < 1200 & window.innerWidth >= 768) {
      display = 2;
      layoutHeight = Math.max(introductionHeight, skillHeight) 
      introduction.style.height = layoutHeight + 'px';
      skill.style.height = layoutHeight + 'px';
    } else {
      display = 1;
    }
  }

  initial();

  var handler = function() {
    if (window.innerWidth >= 1200) {
      if (display != 3) { 
        introduction.style.height = '';
        skill.style.height = '';
        experience.style.height = '';
        display = 3;
      }
      if (window.innerWidth > 1500) {
        introduction.style.height = '';
        skill.style.height = '';
        experience.style.height = '';        
      }
      introductionHeight = introduction.scrollHeight;
      skillHeight = skill.scrollHeight;
      experienceHeight = experience.scrollHeight;
      layoutHeight=Math.max(introductionHeight, skillHeight, experienceHeight) 
      introduction.style.height = layoutHeight + 'px';
      skill.style.height = layoutHeight + 'px';
      experience.style.height = layoutHeight + 'px';
    } else if (window.innerWidth < 1200 & window.innerWidth >= 768) {
      if (display != 2) { 
        introduction.style.height = '';
        skill.style.height = '';
        experience.style.height = '';
        display = 2;
      }
      introductionHeight = introduction.scrollHeight;
      skillHeight = skill.scrollHeight;
      layoutHeight=Math.max(introductionHeight, skillHeight) 
      introduction.style.height = layoutHeight + 'px';
      skill.style.height = layoutHeight + 'px';
      experience.style.height = '';      
    } else {
      display = 1;
      introduction.style.height = '';
      skill.style.height = '';
      experience.style.height = '';
    }
  }

  window.onresize = handler;
}