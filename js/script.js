function sendEmail() {
    // Verkrijg formuliergegevens
    var ouderVoornaam = document.getElementById("ouder_voornaam").value;
    var ouderAchternaam = document.getElementById("ouder_achternaam").value;
    var ouderEmail = document.getElementById("ouder_email").value;
    var ouderTelefoon = document.getElementById("ouder_telefoon").value;
    var kindVoornaam = document.getElementById("kind_voornaam").value;
    var kindAchternaam = document.getElementById("kind_achternaam").value;
    var kindLeeftijd = document.getElementById("kind_leeftijd").value;
    var kindSchool = document.getElementById("kind_school").value;

    // Verkrijg geselecteerde keuze
    var keuzeRadios = document.getElementsByName('keuze');
    var keuzeWaarde = null;

    for (var i = 0; i < keuzeRadios.length; i++) {
        if (keuzeRadios[i].checked) {
            keuzeWaarde = keuzeRadios[i].value;
            break;
        }
    }

    var extraInformatie = document.getElementById("extra").value;

    // Configureer Email.js met je gebruikers-ID
    emailjs.init("user_your_emailjs_user_id");

    // Stel parameters in voor het e-mailbericht
    var templateParams = {
        ouderVoornaam: ouderVoornaam,
        ouderAchternaam: ouderAchternaam,
        ouderEmail: ouderEmail,
        ouderTelefoon: ouderTelefoon,
        kindVoornaam: kindVoornaam,
        kindAchternaam: kindAchternaam,
        kindLeeftijd: kindLeeftijd,
        kindSchool: kindSchool,
        keuze: keuzeWaarde,
        extraInformatie: extraInformatie
    };

    // Verzend het e-mailbericht met je service-ID en template-ID
    emailjs.send("service_4onsgcp", "template_jbrkr5r", templateParams)
        .then(function(response) {
            console.log("Formulier succesvol verzonden!", response);

            // Voeg hier eventueel verdere client-side logica toe, zoals het tonen van een bedankpagina
        }, function(error) {
            console.error("Er is een fout opgetreden bij het verzenden van het formulier.", error);
        });
}
