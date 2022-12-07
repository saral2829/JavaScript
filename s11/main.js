// Caso Propuesto:

// Crear una clase Alumno con los atributos:
// código, nombre, nota1, nota2 y nota3;
// y las operaciones: promedio (), condicion () y obsequio ().
// Para calcular el promedio considere la siguiente fórmula:
// PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
// Para la condición determine si es
// “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
// Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.

class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.nota3 = nota3;
      this.nota4 = nota4;
    }
  
    notaFinal() {
      return (
        ((this.nota1 * 0.15) / 20 +
          (this.nota2 * 0.2) / 20 +
          (this.nota3 * 0.25) / 20 +
          (this.nota4 * 0.4) / 20) *
        20
      );
    }
  
    condicion() {
      if (this.notaFinal() >= 12) {
        console.log("Aprobado");
      } else {
        console.log("Desaprobado");
      }
    }
  
    obsequio() {
      if (this.notaFinal() > 17) {
        console.log("Usted se ha ganado una mochila");
      } else {
        console.log("No tiene obsequio");
      }
    }
  }

// const form=document.querySelector('#form');
// form.addEventListener("submit",obtenerDatos)

// const nombre=document.querySelector('#nombre').value
  const alumno1 = new Alumno(2, "lucia", 17, 18, 19, 17);
  console.log(alumno1.notaFinal());
  console.log(alumno1.condicion());
  console.log(alumno1.obsequio());

