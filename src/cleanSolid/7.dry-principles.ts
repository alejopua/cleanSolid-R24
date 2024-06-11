// Principios DRY

// DRY: Don't Repeat Yourself
// Simplemente es evitar tener duplicación de código.
// Simplificar las pruebas.
// Ayuda a centralizar procesos.
// Aplicar el principio DRY, usualmente lleva a refactorizar el código.

type Size = "" | "S" | "M" | "L";
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    // No DRY
    // if (this.name.length <= 0) throw new Error("Name is empty");
    // if (this.size.length <= 0) throw new Error("Size is empty");

    // DRY
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) throw new Error(`${key} is empty`);

          break;
        case "number":
          if (this[key] <= 0) throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${key} is not supported`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady()) return;

    return `Product: ${this.name}, Price: $${this.price}, Size: ${this.size}`;
  }
}

(() => {
  const tShirt = new Product("T-Shirt", 10, "M");
  console.log(tShirt.toString());
})();
