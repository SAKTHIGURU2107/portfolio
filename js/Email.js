
let button1 = document.getElementById("sendMessageButton")


button1.addEventListener("click", () => {

    const emaildata = {
        _username: document.getElementById("name").value,
        _email: document.getElementById("email").value,
        _subject: document.getElementById("subject").value,
        _message: document.getElementById("message").value,
    }


    emailjs.send("service_i86otxg", "template_mxsxn4e", emaildata)
        .then(() => {

            alert("Your Message Send Successfully")

        })

})