//listing element
document.getElementById('resumeform')?.addEventListener('submit' , function(event){
    event.preventDefault();


//const profilepictureinput= document.getElementById('profilepictureinput') as HTMLInputElement;


const nameElement = document.getElementById('name')as HTMLInputElement;
const emailElement = document.getElementById('email')as HTMLInputElement;
const phoneElement = document.getElementById('phone')as HTMLInputElement;
const educationElement = document.getElementById('education')as HTMLInputElement;
const experienceElement = document.getElementById('experience')as HTMLInputElement;
const skillsElement = document.getElementById('skills')as HTMLInputElement;

if (  nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement ){
  

    const name = nameElement.value;
    const email = emailElement.value ;
    const phone = phoneElement.value ;
    const education = educationElement.value ;
    const experience = experienceElement.value ;
    const skills = skillsElement.value ;
//picture elements

//creat resume outpu const profilepicturefile= profilepictureinput.files?.[0]
//const profilepictureURL = profilepicturefile? URL.createObjectURL (profilepicturefile):'';


const resumeoutput =`


<h2>resume</h2>
<p><strong>name: </strong> <span id="edit-name" class="editable">${name}</span><p>
<p><strong>email: </strong><span id="edit-email" class="editable"> ${email}</span><p>
<p><strong>phone: </strong> <span id="edit-phone" class="editable">${phone}</span><p>

<h3>education</h3>
<p id="edit-education" class="editable">${education}</p>

<h3>experience</p>
<p id="edit-experience" class="editable">${experience}</p>

<h3>skills</h3>
<p id="edit-skills" class="editable">${skills}</p>
`;


//display the resume output
const resumeoutputElement = document.getElementById('resumeoutput')
if(resumeoutputElement){
    resumeoutputElement.innerHTML=resumeoutput;
makeEditable();
}

}else {
    console.error('one or more out put elements are missing')
} 


})

function makeEditable(){
    const editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(element => {
        element.addEventListener('click' , function(){
           const currentElement = element as HTMLElement; 
           const currentvalue = currentElement.textContent||"";

           //replace content

           if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
            const input = document.createElement ('input')
            input.type = 'text'
            input.value = currentvalue
            input.classList.add('editing input')


            input.addEventListener('blur' , function(){
                currentElement.textContent = input.value;
                currentElement.style.display = 'inline'
                input.remove()


            })

            currentElement.style.display = 'none'
            currentElement.parentNode?.insertBefore(input,currentElement)
            input.focus()
           }
        })
    })
}