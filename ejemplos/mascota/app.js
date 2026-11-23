const formMascota = document.getElementById("formMascota");

formMascota.addEventListener("submit", (event) => {
    event.preventDefault();

    const mascota = {
        nombre: document.getElementById("mascota").value,
        raza: document.getElementById("raza").value,
        edad: Number(document.getElementById("edad").value)
    };

    // LocalStorage solo guarda texto: el objeto se convierte a JSON
    localStorage.setItem("mascota", JSON.stringify(mascota));
});
