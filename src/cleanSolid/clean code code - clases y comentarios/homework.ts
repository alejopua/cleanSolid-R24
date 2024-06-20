(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElement {
    public Attributes: InputAttributes;
    public Events: InputEvents;
    public html: HtmlElement;
    constructor(id: string, placeholder: string, value: string) {
      this.Attributes = new InputAttributes(value, placeholder);
      this.Events = new InputEvents();
      this.html = new HtmlElement(id, "input");
    }
  }

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
