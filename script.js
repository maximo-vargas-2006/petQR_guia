function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const tamano = document.getElementById("tamano").value;
  const zona = document.getElementById("zona").value;
  const telefonoContacto = document.getElementById("telefono").value;
  const obs = document.getElementById("obs").value;

  const mensaje =
    "¡Hola! 👋 Quiero solicitar mi PetQR 🐾\n\n" +
    "Datos de mi mascota:\n" +
    "• Nombre: " + nombre + "\n" +
    "• Tipo: " + tipo + "\n" +
    "• Tamaño de chapa: " + tamano + "\n" +
    "• Zona: " + zona + "\n" +
    "• Teléfono: " + telefonoContacto + "\n" +
    "• Observaciones: " + obs + "\n\n" +
    "Quedo a la espera para coordinar 🙂";

  const telefonoVendedor = "5491144408187"; // TU NÚMERO

  const url = "https://wa.me/" + telefonoVendedor + "?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}
