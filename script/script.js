// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
           }
        else{
            event.preventDefault()
         }
  
          form.classList.add('was-validated')
        }, false)
      })
  }
  )()
$("#form").on("submit",function(){
    const Fname=$("#validationCustom01").val();
    const Lname=$("#validationCustom02").val();
    const Phone=$("#validationCustom05").val();
    const Email=$("#exampleFormControlInput1").val();
    const msg=$("#exampleFormControlTextarea1").val();
    $("#values").html(
        `<h5>First Name:</h5>
        <p id="name1">${Fname}</p>
        <h5>Last Name:</h5>
        <p id="name2">${Lname}</p>
        <h5>Phone:</h5>
        <p id="Phone">${Phone}</p>
        <h5>Email:</h5>
        <p id="Email">${Email}</p>
        <h5>Message:</h5>
        <p id="msg">${msg}</p>`
    )

    $("#submit").click()
});

 