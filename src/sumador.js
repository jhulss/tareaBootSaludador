class bootsaludador{

  saludar(nombre, genero) {
    return  "Hola " + this.verificarGenero(genero) + nombre;
  }

  verificarGenero(genero)
  {
    genero.toLowerCase();
    if (genero === "masculino")
      return "Sr. "
    else 
      return "Sra. "
  }

  

}


export default bootsaludador;
