const form = document.getElementById("mailForm");

form.addEventListener("submit", (e) => {
  let name = document.querySelector(".formName").value;
  let email = document.querySelector(".formEmail").value;
  let tele = document.querySelector(".formTele").value;
  let subject = document.querySelector(".formSubject").value;
  let msg = document.querySelector(".formMsg").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "backupmailforbackup@gmail.com",
    Password: "",
    To: `${email}`,
    From: "backupmailforbackup@gmail.com",
    Subject: `${subject}`,
    Body: `Thank you for your mail, we will get to you as soon as possible! <br> Best regards, <br> Greenlead`,
  }).catch((error) => {
    alert("Something went wrong");
  });
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "backupmailforbackup@gmail.com",
    Password: "",
    To: `mpespp@gmail.com`,
    From: "backupmailforbackup@gmail.com",
    Subject: `${subject}`,
    Body: `${name}
          <br>${tele}
          <br>${email}
          <br><br>${msg}`,
  })
    .then((success) => {
      alert("message sent to your mail!");
    })
    .catch((error) => {
      alert("Something went wrong");
    });
});

function scrollcheck() {
  if (window.innerWidth < 1023) {
    document.getElementById("serviceNav").style.display = "none";
  } else {
    if (window.scrollY < 400) {
      document.getElementById("serviceNav").style.display = "none";
    } else {
      document.getElementById("serviceNav").style.display = "block";
    }
  }
}

const mediaQuery = window.matchMedia("(min-width: 1023px)");
window.addEventListener("resize", function () {
  if (mediaQuery.matches) {
    window.addEventListener("scroll", scrollcheck);
  } else {
    this.window.removeEventListener("scroll", scrollcheck);
    document.getElementById("serviceNav").style.display = "none";
  }
});

