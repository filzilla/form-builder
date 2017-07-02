var container = document.querySelector('#form-container');



 for (i = 0; i < formData.length; i++){
   var control = formData [i];
   var inputElement = document.createElement('input');
        inputElement.setAttribute('class', 'input');

    inputElement.type = control.type;

    inputElement.placeholder= control.label;
    inputElement.icon = control.icon;

    inputElement.id = control.id;

    inputElement.option = control.option;
    inputElement.setAttribute('class','option');



    container.appendChild(inputElement);
   }


    var submitElement = document.querySelector('.footer'); 
    submitElement.setAttribute("type", "submit");
    submitElement.setAttribute("name", "dsubmit");
    submitElement.setAttribute("value", "Submit");




container.appendChild(submitElement);
