var _a;
//listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //const profilepictureinput= document.getElementById('profilepictureinput') as HTMLInputElement;
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //picture elements
        //creat resume outpu const profilepicturefile= profilepictureinput.files?.[0]
        //const profilepictureURL = profilepicturefile? URL.createObjectURL (profilepicturefile):'';
        var resumeoutput = "\n\n\n<h2>resume</h2>\n<p><strong>name: </strong> <span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span><p>\n<p><strong>email: </strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span><p>\n<p><strong>phone: </strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span><p>\n\n<h3>education</h3>\n<p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n<h3>experience</p>\n<p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n<h3>skills</h3>\n<p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n");
        //display the resume output
        var resumeoutputElement = document.getElementById('resumeoutput');
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more out put elements are missing');
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
