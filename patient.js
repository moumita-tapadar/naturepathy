class User{
    constructor(firstName,lastName,gen,p_Number,e_mail){
      debugger
      this.f_Name=firstName;
      this.l_tName=lastName;
      this.gender=gen;
      this.contact=p_Number;
      this.mail=e_mail;
    }

    validate(){
      var regexp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var regexp_ph = /^[0-9]{10,10}$/;  
      if(this.f_Name.length > 1 && this.l_tName.length >1 && this.gender.length >1 && this.contact.length >1 && this.mail.length >1){
        if(regexp.test(this.mail) && regexp_ph.test(this.contact)){
          debugger
          return true;
        }
      }
      else{
        debugger
        return false;
      }
    }

    static customMessage(messageType, message){
      const msgCustom =`<div class="alert alert-${messageType}">${message}</div>`;
      const myForm = document.querySelector('form');
      myForm.insertAdjacentHTML('beforeend',msgCustom );
      setTimeout(()=> {
          document.querySelector('.alert').remove();
      },4000 );
    }
}


const firstName = document.querySelector('#f_name');
const lastName = document.querySelector('#l_name');
const p_Number = document.querySelector('#contact');
const email = document.querySelector('#mail');
const btnSubmit = document.querySelector('#submit_1');


btnSubmit.addEventListener('click', function(event){
const gen = document.querySelector('input[name="gen"]:checked');
var gen_value = '';
if (gen != null){
  gen_value = gen.value;
}
debugger
var obj = new User(firstName.value, lastName.value, gen_value, p_Number.value,email.value);
var response = obj.validate();
// debugger
if (response==true){  
  User.customMessage(
    "success",
    "Succesfully Submited"
  )
}
else
  User.customMessage(
      "danger",
      "please enter valid Input"
  )
  event.preventDefault();
})







