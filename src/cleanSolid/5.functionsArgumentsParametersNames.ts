// --> NOMBRES DE FUNCIONES, ARGUMENTOS Y PARÁMETROS <--

// * Tratemos de limitar las funciones a 3 parámetros o 1

// toWhom es un parámetro
// Pero cuando se llama a la función, es un argumento

function sendEmail(toWhom: string): boolean {
  // Verificar correo
  if (!toWhom.includes("@")) return false;

  // Construir el cuerpo o mensaje

  // Enviar correo

  // Si todo sale bien
  return true;
}

// Se recomienda que al definir la interface o en genera al ordenemos los argumentos de forma alfabética
interface SendEmailOptions {
  toWhom: string;
  from: string;
  body: string;
  subject: string;
  apikey: string;
}

// Mejor
function sendEmail({
  toWhom,
  from,
  body,
  subject,
  apikey,
}: SendEmailOptions): boolean {
  // Verificar correo
  if (!toWhom.includes("@")) return false;

  // Construir el cuerpo o mensaje

  // Enviar correo

  // Si todo sale bien
  return true;
}

// No muy bien
function sendEmail(
  toWhom: string,
  from: string,
  body: string,
  subject: string,
  apikey: string
): boolean {
  // Verificar correo
  if (!toWhom.includes("@")) return false;

  // Construir el cuerpo o mensaje

  // Enviar correo

  // Si todo sale bien
  return true;
}

// Homework 1

(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBiographyById(id: string) {
    console.log({ id });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ cast, description, rating, title }: Movie) {
    console.log({ cast, description, rating, title });
  }

  const checkActor = (fullName: string) => {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;
    return true;
  };

  function createActor(fullName: string, birthdate: Date): void {
    const checkName = checkActor(fullName);

    if (!checkName) console.log("Failure to create the actor");
    console.log("Created actor");
  }
})();

// RECOMENDACIONES
//* Simplicidad es fundamental
//* Funciones de tamaño reducido
//* Funciones de una sola linea sin causar complejidad
//* Menos de 20 lineas
//*  Evita el uso de else y mejor usa ternarios
