function enviarWhatsApp() {

  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const nacimiento = document.getElementById("nacimiento").value;
  const tamano = document.getElementById("tamano").value;
  const zona = document.getElementById("zona").value;
  const telefono = document.getElementById("telefono").value;
  const salud = document.getElementById("salud").value;
  const vacunas = document.getElementById("vacunas").value;
  const conducta = document.getElementById("conducta").value;
  const obs = document.getElementById("obs").value;

  // Validación básica
  if (nombre === "" || telefono === "") {
    alert("Por favor completa al menos el nombre de la mascota y el teléfono.");
    return;
  }

  const mensaje =
    "🐾 *Solicitud de PetQR* 🐾\n\n" +
    "📌 Nombre: " + nombre + "\n" +
    "🐶 Tipo: " + tipo + "\n" +
    "🎂 Fecha de nacimiento: " + nacimiento + "\n" +
    "🔹 Tamaño de chapa: " + tamano + "\n" +
    "📍 Zona: " + zona + "\n" +
    "📞 Teléfono: " + telefono + "\n\n" +
    "❤️ Estado de salud: " + salud + "\n" +
    "💉 Vacunas: " + vacunas + "\n" +
    "🧠 Conducta: " + conducta + "\n" +
    "📝 Observaciones: " + obs;

  const numeroVendedor = "5491144408187"; 
  // ⚠️ Reemplazá por tu número real con código país.
  // Ejemplo Argentina: 5491144408187

  const url = "https://wa.me/" + numeroVendedor + "?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}