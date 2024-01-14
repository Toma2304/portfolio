const skills = document.querySelectorAll('.row');

skills.forEach(skill => {
    for(let i = 0; i <= 4; i++) {
        const star = document.createElement('div', '');
        skill.lastElementChild.appendChild(star);
    }

    if(skill.firstElementChild.innerHTML === 'English'){
        for(let i = 0; i <= 3; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'French'){
        for(let i = 0; i <= 2; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'Russian'){
        for(let i = 0; i <= 4; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'Ukrainian'){
        for(let i = 0; i <= 4; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'Georgian'){
        for(let i = 0; i <= 2; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'Java'){
        for(let i = 0; i <= 2; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'JavaScript'){
        for(let i = 0; i <= 3; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'HTML/CSS'){
        for(let i = 0; i <= 3; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'PHP'){
        for(let i = 0; i <= 2; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    } else if(skill.firstElementChild.innerHTML === 'C++'){
        for(let i = 0; i <= 2; i++) {
            skill.lastElementChild.children[i].classList.add('color');
        }
    }
})