// Estructura recomendada de una clase

// 1. Comenzar con lista de propiedades
// Propiedades estáticas.
// Propiedades públicas de último.

// 2. Métodos
// Empezando por los constructores estáticos.
// Luego el constructor.
// Seguidamente métodos estáticos.
// Métodos privados después.
// Resto de métodos de instancia ordenados de mayor a menor importancia.
// Getters y Setters al final.

// EJEMPLO

class HtmlElement {
  public static domReady: boolean = false;

  private _id: string;
  private type: string;
  private updatedAt: number;

  static createInput(id: string) {
    return new HtmlElement(id, "input");
  }

  constructor(id: string, type: string) {
    this._id = id;
    this.type = type;
    this.updatedAt = Date.now();
  }

  setType(type: string) {
    this.type = type;
    this.updatedAt = Date.now();
  }

  get id(): string {
    return this._id;
  }
}

// Explicación del ejemplo

// Propiedades:
// domReady: Propiedad estática.
// _id, type, updatedAt: Propiedades privadas.

// Métodos:
// createInput: Método estático que retorna una nueva instancia de HtmlElement.
// Constructor: Inicializa las propiedades _id, type, y updatedAt.
// setType: Método que permite actualizar la propiedad type y el timestamp updatedAt.
// id: Getter para la propiedad _id.
