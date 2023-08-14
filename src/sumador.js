class bootsaludador{

  saludar(nombre, genero, edad) {
    return  "Hola " + this.verificarGeneroEdad(genero, edad) + nombre;
  }

  verificarGeneroEdad(genero, edad)
  {
    genero.toLowerCase();
    if (genero === "masculino" && edad >= 30)
      return "Sr. "
    if (genero === "masculino" && edad < 30)
      return "Joven. "
    if (genero === "femenino" && edad >= 30)
      return "Sra. "
    if (genero === "femenino" && edad < 30)
      return "Señorita. "
  }



}


export default bootsaludador;
