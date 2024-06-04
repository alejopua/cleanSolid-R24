// --Nombres pronunciables y expresivos--

// --> Principios SOLID
// 1. Single Responsibility Principle (SRP):
// Cada clase debe tener una única responsabilidad.
// Al tener nombres claros y expresivos para clases y métodos, es más fácil identificar cuál es su responsabilidad. Por ejemplo, una clase llamada OrderProcessor sugiere que su responsabilidad es procesar órdenes, haciendo el código más entendible.

// 2. Open/Closed Principle (OCP):
// Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación.
// Utilizar nombres claros ayuda a los desarrolladores a entender cómo extender el sistema sin modificar el código existente. Un método llamado calculateTax es más comprensible que uno llamado calc.

// 3. Liskov Substitution Principle (LSP):
// Los objetos deben poder sustituirse por sus subtipos sin alterar el programa.
// Nombres consistentes aseguran un uso adecuado. manteniendo el principio de sustitución de Liskov.

// 4.Interface Segregation Principle (ISP):
// No forzar a los clientes a depender de interfaces que no usan.
// Nombres claros en interfaces y métodos mejoran la comprensión.
// Por ejemplo, una interfaz llamada PaymentProcessor es más específica y entendible que una llamada Processor.

// 5.Dependency Inversion Principle (DIP):
// Los módulos de alto nivel no deben depender de los de bajo nivel, sino de abstracciones.
// Nombres claros facilitan la identificación de dependencias y abstracciones.


// --> Clean Code
// 1.Nombres pronunciables: Facilitan la comunicación entre desarrolladores. Es más fácil hablar sobre un método processPayment que sobre procPmt. Recuerda que los nombres siempre deben estar escritos en inglés.

// 2.Nombres expresivos: Ayudan a entender el propósito del código. Un método llamado getUserEmail es explícito en cuanto a su funcionalidad, mientras que getUsrEml es menos claro.

// 3.Evitar abreviaturas innecesarias:
// Pueden confundir a otros desarrolladores y al propio autor del código en el futuro. Usar nombres completos y claros, como calculateInterestRate en lugar de calcIntrRt, mejora la legibilidad.

// 4.Consistencia:
// Usar una convención de nombres consistente a lo largo del código. Por ejemplo, si se decide usar camelCase para nombres de métodos, mantener esa convención en todo el proyecto.

// 5.Contexto:
// Los nombres deben proporcionar suficiente contexto. Un método llamado add en una clase ShoppingCart es claro porque el contexto de ShoppingCart sugiere que add se refiere a agregar un producto al carrito.

// 6.Evitar nombres genéricos:
// Nombres como data, info o item no son específicos y pueden llevar a confusión. Es mejor usar nombres específicos como customerData, orderInfo o productItem.



--------------------------------------------

// 1. Camel Case (camelCase)
// La primera letra de la primera palabra está en minúscula, y la primera letra de cada palabra subsiguiente está en mayúscula.
// Uso común: JavaScript, Java, C++, C#, Python (para variables y funciones).
// Ejemplo: totalAmount, calculateInterestRate

// 2. Pascal Case (PascalCase)
// La primera letra de cada palabra está en mayúscula.
// Uso común: C#, TypeScript (para clases y métodos públicos), JavaScript (para clases).
// Ejemplo: CustomerAccount, ProcessPayment

// 3. Snake Case (snake_case)
// Todas las letras están en minúscula y las palabras están separadas por guiones bajos.
// Uso común: Python (para variables y funciones), bases de datos SQL.
// Ejemplo: total_amount, calculate_interest_rate

// 4. Kebab Case (kebab-case)
// Todas las letras están en minúscula y las palabras están separadas por guiones.
// Uso común: URL y nombres de archivos.
// Ejemplo: my-variable-name

// 5. Upper Snake Case (UPPER_SNAKE_CASE)
// Todas las letras están en mayúscula y las palabras están separadas por guiones bajos.
// Uso común: Constantes en muchos lenguajes (C, C++, Python, JavaScript).
// Ejemplo: MAX_VALUE, API_KEY

// --> Consejos para elegir un estilo
// 1.Consistencia: Elige un estilo y úsalo de manera consistente en todo tu proyecto.
// 2.Legibilidad: Prefiere estilos que mejoren la legibilidad del código.
// 3.Convenciones del lenguaje: Sigue las convenciones del lenguaje que estés usando. Por ejemplo, usa camelCase para variables y funciones en JavaScript, y snake_case para variables y funciones en Python.
// 4.Contexto del equipo/proyecto: Asegúrate de que todos los miembros del equipo estén de acuerdo con las convenciones de nombres elegidas para el proyecto.
