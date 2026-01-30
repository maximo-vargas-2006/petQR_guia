function ejemploWhatsApp() {
  const mensaje =
    "Hola 👋\n" +
    "Este es un ejemplo de cómo PetQR permite contactar al dueño.\n" +
    "Con un solo toque, se envía la ubicación.";

  const url = "https://wa.me/5491112345678?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}
