class bootsaludador{

  saludar(nombre, genero, edad) {
    return  "Hola, " + this.verificarHora() + this.verificarGeneroEdad(genero, edad) + nombre;
  }

  verificarGeneroEdad(genero, edad)
  {
    genero.toLowerCase();
    if (genero === "masculino" && edad >= 30)
      return "señor "
    if (genero === "masculino" && edad < 30)
      return "joven "
    if (genero === "femenino" && edad >= 30)
      return "señora "
    if (genero === "femenino" && edad < 30)
      return "señorita "
  }

  verificarHora()
  {
    const d = new Date();
    let hour = d.getHours();
    
    if (hour >= 1 && hour < 12)
    return "buenos dias "
    if (hour > 12 && hour < 18)
    return "buenas tardes "
    if (hour > 18 && hour < 24)
    return "buenas noches "
  }


}


export default bootsaludador;
