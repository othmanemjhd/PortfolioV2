emailjs.init("vSs6Egt9P1XOCO5Jw"); // Replace with your Email.js user ID

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Use the Email.js send function
    emailjs.send("service_feqgnbo", "template_aj7koz3", {
        from_name: name,
        to_name: "Othmane",
        message: message,
        email_id: email,
    })
        .then(function (response) {
            console.log("Email sent successfully:");
            alert("Email sent successfully!");
        }, function (error) {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again later.");
        });
}
