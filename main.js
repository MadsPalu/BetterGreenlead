const form = document.getElementById("mailForm");

    form.addEventListener("submit", e => {
        let name = document.querySelector(".formName").value;
        let email = document.querySelector(".formEmail").value;
        let tele = document.querySelector(".formTele").value;
        let subject = document.querySelector(".formSubject").value;
        let msg = document.querySelector(".formMsg").value;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "backupmailforbackup@gmail.com",
            Password: "C7E023D7F0CEC0D7BAB26B35F949C3F3029F",
            To: `${email}`,
            From: "backupmailforbackup@gmail.com",
            Subject: `${subject}`,
            Body: `Thank you for your mail, we will get to you as soon as possible! <br> Best regards, <br> Greenlead`,
        }).then((success) => {
            alert("message sent to your mail!");
        }).catch((error) =>{
            alert("Something went wrong");
        })
    })