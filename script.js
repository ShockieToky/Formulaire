// Simuler un utilisateur
let user = null;
// Gérer fiche l'inscription
document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('telephone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Les mots de passe ne correspondent pas.';
        return;
    }

    user = { firstName, lastName, email, tel }; // Simuler l'enregistrement
    document.getElementById('registrationForm').style.display = 'none';
});
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('musique').play();
    document.removeEventListener('click', musicPlay);
}