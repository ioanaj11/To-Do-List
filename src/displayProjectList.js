function displayProjectsList(list){
    const sideMenu=document.querySelector('.side-menu');
    const projectsDiv=document.createElement('ul');
    projectsDiv.classList.add('projectsDiv');

    for(let i=1; i<list.length; i++){
        const projectName=document.createElement('li');
        
        const projectNameBtn=document.createElement('button');
        projectNameBtn.textContent=`\u2022 ${list[i]}`;

        projectsDiv.appendChild(projectNameBtn);
    }
    sideMenu.appendChild(projectsDiv);

  }

export {displayProjectsList};