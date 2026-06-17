export const bancoPreguntas = [
  // ==========================================
  // BLOQUE 1: Pertenencia (∈, ∉) - 10 Preguntas
  // ==========================================
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta:
      "Dado A = {1, 2, 3, 5, π}, ¿cuál de las siguientes afirmaciones de pertenencia es correcta?",
    opciones: ["2 ∉ A", "3 ∈ A", "π ∉ A", "4 ∈ A"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta:
      "¿A qué conjunto numérico pertenece el número -5 según la notación relevante?",
    opciones: [
      "ℕ (Naturales)",
      "∅ (Vacío)",
      "ℚ (Racionales) pero no a ℝ",
      "ℤ (Enteros)",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta:
      "Si definimos el conjunto por comprensión B = {x | x es un natural impar}, ¿qué elemento pertenece a B?",
    opciones: ["2", "4", "7", "0"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta: "¿Qué significa el símbolo ∉ en la teoría básica?",
    opciones: [
      "Pertenece al conjunto",
      "No es un elemento del conjunto",
      "El conjunto es infinito",
      "El conjunto es universal",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta: "En el conjunto C = { {1}, 2, 3 }, ¿es correcto decir que 1 ∈ C?",
    opciones: [
      "Falso, 1 es un elemento pero solo si está entre llaves como subconjunto",
      "Verdadero, porque está dentro de las llaves principales",
      "Falso, el elemento que pertenece es el conjunto {1}",
      "Verdadero, por la propiedad de extensión",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta:
      "¿Cuál de estos elementos NO pertenece al conjunto de los números naturales (ℕ) según el estándar?",
    opciones: ["-3", "1", "10", "100"],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta:
      "Dado el intervalo cerrado [2, 8], ¿el número 8 pertenece al conjunto?",
    opciones: [
      "No, porque los intervalos solo incluyen el interior",
      "Sí, pertenece porque el corchete indica que se incluye el extremo",
      "Solo si es un conjunto de números enteros",
      "Depende del conjunto universal",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta:
      "Dado el intervalo abierto (5, 9), ¿el número 5 pertenece al conjunto?",
    opciones: [
      "Sí, pertenece",
      "No pertenece, el paréntesis excluye al extremo",
      "Solo pertenece si x es un número real",
      "Pertenece a la mitad del intervalo",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta: "¿Cuál es el valor de verdad de: 0 ∈ ∅?",
    opciones: [
      "Falso, el conjunto vacío no posee ningún elemento",
      "Verdadero, el 0 siempre está en todos los conjuntos",
      "Verdadero, por definición de cardinalidad",
      "Falso, porque el 0 es un número entero",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "pertenencia",
    pregunta:
      "Si un conjunto se describe por extensión como A = {1, 2, 2, 3, 1}, ¿cuántos elementos distintos pertenecen a A?",
    opciones: [
      "5 elementos",
      "2 elementos",
      "3 elementos (1, 2 y 3)",
      "1 elemento",
    ],
    correcta: 2,
  },

  // ==========================================
  // BLOQUE 2: Subconjuntos (⊆, ⊊) - 10 Preguntas
  // ==========================================
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta: "¿Cuándo se dice que A es un subconjunto de B (A ⊆ B)?",
    opciones: [
      "Si A tiene más elementos que B",
      "Si todo elemento de A es también un elemento de B",
      "Si A y B no tienen elementos en común",
      "Solo si A es el conjunto vacío",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta: "¿Qué afirmación es siempre verdadera para cualquier conjunto A?",
    opciones: [
      "A ⊆ ∅",
      "A ∈ A",
      "A ⊊ A",
      "∅ ⊆ A (El vacío está incluido en todo conjunto)",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta:
      "Si A = {1, 3, 5} y B = {1, 2, 3, 4, 5}, ¿qué relación existe entre ellos?",
    opciones: ["A ∈ B", "A = B", "A ⊆ B", "B ⊆ A"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta: "¿Qué significa que A sea un subconjunto propio de B (A ⊂ B)?",
    opciones: [
      "Que A es igual a B",
      "Que A es un subconjunto de B, pero A ≠ B",
      "Que B es el conjunto vacío",
      "Que A no tiene ningún elemento de B",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta: "¿Cuándo se dice que dos conjuntos A y B son disjuntos?",
    opciones: [
      "Cuando A ⊆ B",
      "Cuando no tienen ningún elemento en común",
      "Cuando sus diagramas de Venn se cruzan",
      "Cuando A y B son el conjunto universal",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta:
      "Si |A| = 3, ¿cuántos subconjuntos tiene en total el conjunto de partes P(A)?",
    opciones: [
      "3 subconjuntos",
      "6 subconjuntos",
      "9 subconjuntos",
      "8 subconjuntos (2³)",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta:
      "Respecto a los conjuntos numéricos, ¿cuál de estas relaciones es correcta?",
    opciones: ["ℤ ⊊ ℕ", "ℕ ⊆ ℤ", "ℝ ⊆ ℚ", "ℤ ⊆ ℕ"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta: "Dado X = {1}, ¿cuál es su Conjunto de Partes P(X)?",
    opciones: ["{ ∅, {1} }", "{ 1 }", "{ ∅, 1 }", "{ 0, 1 }"],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta:
      "¿Es correcto afirmar que todo conjunto está contenido en sí mismo (A ⊆ A)?",
    opciones: [
      "No, nunca",
      "Solo si es un conjunto finito",
      "Verdadero",
      "Solo si es el conjunto universal",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "subconjuntos",
    pregunta:
      "Si el conjunto A y B tienen exactamente los mismos elementos, se dice que:",
    opciones: [
      "A es un subconjunto propio de B",
      "A y B son iguales",
      "A y B son disjuntos",
      "A es el conjunto vacío",
    ],
    correcta: 1,
  },

  // ==========================================
  // BLOQUE 3: Producto Cartesiano - 10 Preguntas
  // ==========================================
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta: "¿Qué es un par ordenado (a, b) en el producto cartesiano?",
    opciones: [
      "Una suma de dos números",
      "Un conjunto de dos elementos donde el orden es irrelevante",
      "Un punto o relación donde el orden de los elementos es relevante",
      "Un subconjunto del conjunto vacío",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta: "Si A = {1, 2} y B = {x, y}, ¿cuál es un elemento de A × B?",
    opciones: ["(x, 1)", "(1, x)", "(1, 2)", "(x, y)"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta:
      "Si el cardinal |A| = 3 y el cardinal |B| = 4, ¿cuál es el cardinal del producto |A × B|?",
    opciones: ["7 elementos", "12 elementos", "1 elemento", "81 elementos"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta: "En el producto cartesiano, ¿es (1, 3) lo mismo que (3, 1)?",
    opciones: [
      "Sí, el orden no importa",
      "Solo si los conjuntos son iguales",
      "No, el orden de las coordenadas es relevante",
      "Depende del diagrama de Venn",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta:
      "Dado A × B = {(a, 1), (a, 2), (b, 1), (b, 2)}, ¿cuáles son los elementos del conjunto A?",
    opciones: ["A = {1, 2}", "A = {a, b, 1, 2}", "A = {a, b}", "A = {∅}"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta:
      "¿Qué resulta de la operación A × ∅ (Producto de un conjunto con el vacío)?",
    opciones: ["A", "∅ (El conjunto vacío)", "{ 0 }", "El conjunto Universal"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta:
      "En un sistema de ejes cartesianos, ¿cómo se denomina al eje horizontal (x)?",
    opciones: [
      "Eje de ordenadas",
      "Eje de funciones",
      "Eje de abscisas",
      "Eje de origen",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta:
      "Si representamos un producto de números reales ℝ × ℝ en el plano, el resultado es:",
    opciones: [
      "Un punto aislado",
      "Una sucesión de puntos separados",
      "Un conjunto infinito de puntos que forman el plano",
      "Un subconjunto propio de ℕ",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta: "¿Cómo se llama la primera componente de un par ordenado (x, y)?",
    opciones: ["Ordenada", "Pertenencia", "Elemento propio", "Abscisa"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "cartesianos",
    pregunta:
      "Para los conjuntos A={a, b} y B={1, 2}, ¿cuántos elementos tiene el conjunto B × A?",
    opciones: ["2 elementos", "16 elementos", "0 elementos", "4 elementos"],
    correcta: 3,
  },

  // ==========================================
  // BLOQUE 1: Tablas de verdad - 10 Preguntas
  // ==========================================
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "¿Qué conectivo lógico se considera unitario porque actúa sobre una sola proposición?",
    opciones: [
      "La conjunción (∧)",
      "La negación (¬)",
      "La disyunción (∨)",
      "La implicación (⇒)",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta: "Una conjunción (p ∧ q) resulta verdadera únicamente cuando:",
    opciones: [
      "Al menos una de las partes es verdadera",
      "Las dos proposiciones son falsas",
      "Ambas proposiciones son verdaderas",
      "La primera es falsa y la segunda es verdadera",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "La disyunción inclusiva (p ∨ q) es falsa solo en el caso de que:",
    opciones: [
      "Ambas proposiciones componentes sean falsas",
      "Exista una contradicción lógica",
      "Los valores de verdad sean opuestos",
      "p sea verdadera y q sea falsa",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "¿Cuál es la diferencia entre disyunción inclusiva (∨) y exclusiva (⊻)?",
    opciones: [
      "No hay diferencia, son sinónimos",
      "La inclusiva es falsa si ambas son V, la exclusiva es verdadera",
      "La exclusiva es verdadera solo si uno de los dos valores es V pero no ambos",
      "La exclusiva solo se usa para números negativos",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "Según el orden de precedencia, ¿qué conectivo debe resolverse primero en una expresión sin paréntesis?",
    opciones: [
      "∧ (Conjunción)",
      "∨ (Disyunción)",
      "⇒ (Implicación)",
      "¬ (Negación)",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "Si p es Falso y q es Verdadero, ¿cuál es el valor de verdad de la expresión: p ∨ q?",
    opciones: ["Falso", "Indeterminado", "Verdadero", "Contradictorio"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "Si evaluamos la conjunción (p ∧ ¬p), ¿qué resultado obtendremos siempre?",
    opciones: [
      "Falso (es una contradicción)",
      "Verdadero (es una tautología)",
      "Depende del valor inicial de p",
      "Verdadero solo si p es impar",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "¿Qué significa que un razonamiento sea 'deductivo' según el inicio de la unidad?",
    opciones: [
      "Que las premisas son siempre falsas",
      "Que si suponemos ciertas premisas, la conclusión se sigue necesariamente",
      "Que la verdad depende del sentimiento del emisor",
      "Que no se pueden usar tablas de verdad",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "Dadas las proposiciones p: 'Hoy llueve' y q: 'Hay sol'. ¿Cómo se traduce a notación lógica 'No llueve y hay sol'?",
    opciones: ["p ∧ q", "¬(p ∨ q)", "¬p ∨ q", "¬p ∧ q"],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "tablas",
    pregunta:
      "El nexo coloquial 'pero' suele utilizarse en lógica para representar a:",
    opciones: [
      "Una disyunción exclusiva",
      "Una conjunción (∧)",
      "Una implicación directa",
      "Una negación parcial",
    ],
    correcta: 1,
  },

  // ==========================================
  // BLOQUE 2: Cuantificadores (∀x / ∃x) - 10 Preguntas
  // ==========================================
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "¿Cuál es el nombre del símbolo ∀ utilizado en las funciones proposicionales?",
    opciones: [
      "Cuantificador Universal",
      "Cuantificador Existencial",
      "Elemento de Pertenencia",
      "Identidad Absoluta",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta: "El símbolo ∃ se lee coloquialmente como:",
    opciones: [
      "Para todo x...",
      "Para cada x se cumple...",
      "Existe un x tal que...",
      "No existe ningún x...",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "La negación de la proposición 'Todos los números son positivos' es:",
    opciones: [
      "Ningún número es positivo",
      "Todos los números son negativos",
      "Existe un número que no es positivo",
      "Existe un número que es negativo y positivo",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "Si negamos una proposición cuantificada universalmente (∀x, P(x)), el resultado es equivalente a:",
    opciones: ["∀x, ¬P(x)", "∃x | ¬P(x)", "∃x | P(x)", "¬(∃x | P(x))"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "¿Qué transforma a una función proposicional P(x) en una proposición con valor de verdad definido?",
    opciones: [
      "Una suma algebraica",
      "La inclusión de una variable y",
      "La aplicación de un cuantificador",
      "El cambio de minúscula a mayúscula",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "Sobre el valor de verdad: '∀x ∈ ℕ, x es mayor que 1' es una proposición:",
    opciones: [
      "Falsa (el 1 no es mayor que 1)",
      "Verdadera para todo natural",
      "Incierta porque x es variable",
      "Falsa solo para números racionales",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "La negación de 'Existe un número que es primo' es equivalente a decir:",
    opciones: [
      "Ningún número es primo",
      "Existen varios números primos",
      "Todos los números son primos",
      "Un número es primo solo si es impar",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "Para que una proposición con cuantificador existencial (∃x) sea VERDADERA, se requiere que:",
    opciones: [
      "Se cumpla para la totalidad del universo",
      "Se cumpla para al menos un elemento del conjunto",
      "No se cumpla para ningún elemento",
      "El universo sea el conjunto vacío",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "El universo del discurso en una función proposicional representa:",
    opciones: [
      "El valor de verdad Falso",
      "El conjunto de todos los valores que puede tomar la variable x",
      "El resultado final de la tabla",
      "Los símbolos binarios permitidos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "cuantificadores",
    pregunta:
      "¿Cuál es la expresión lógica de 'Todos los números reales son mayores que cero'?",
    opciones: ["∃x ∈ ℝ | x > 0", "∀x | x > 0", "∀x ∈ ℝ, x > 0", "¬(∀x ∈ ℝ)"],
    correcta: 2,
  },

  // ==========================================
  // BLOQUE 3: Condicional e Inversa - 10 Preguntas
  // ==========================================
  {
    nivel: 2,
    tema: "condicional",
    pregunta: "La implicación (p ⇒ q) solo es falsa cuando sucede que:",
    opciones: [
      "El antecedente p es falso",
      "El consecuente q es falso y p es verdadero",
      "Ambos son verdaderos",
      "p y q son ambos falsos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta:
      "En la expresión p ⇒ q, la proposición q se denomina formalmente:",
    opciones: ["Recíproca", "Antecedente", "Premisa única", "Consecuente"],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta:
      "Si p ⇒ q es la implicación directa, la RECÍPROCA se escribe como:",
    opciones: ["q ⇒ p", "¬p ⇒ ¬q", "¬q ⇒ ¬p", "p ∧ q"],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta: "¿Cómo se construye la proposición INVERSA de una implicación?",
    opciones: [
      "Negando ambos: ¬p ⇒ ¬q",
      "Invirtiendo el orden: q ⇒ p",
      "Negando e invirtiendo: ¬q ⇒ ¬p",
      "Usando el bicondicional",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta:
      "¿Cuál de las variantes del condicional es lógicamente EQUIVALENTE a la directa (p ⇒ q)?",
    opciones: [
      "La recíproca",
      "La contrarrecíproca (¬q ⇒ ¬p)",
      "La inversa",
      "La negación total",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta: "El bicondicional (p ⇔ q) se lee habitualmente como:",
    opciones: [
      "Si ocurre p entonces ocurre q",
      "p si y solo si q",
      "O bien p, o bien q",
      "Ocurre p pero no ocurre q",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta:
      "Un condicional (p ⇒ q) donde p es falso (antecedente falso), tiene valor de verdad:",
    opciones: ["Falso", "Depende del valor de q", "Verdadero", "Indefinido"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta:
      "La frase 'Si llueve, entonces uso paraguas'. ¿Cuál es la CONTRARRECÍPROCA correcta?",
    opciones: [
      "Si uso paraguas, entonces llueve",
      "Si no llueve, entonces no uso paraguas",
      "Uso paraguas siempre que llueva",
      "Si no uso paraguas, entonces no llueve",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta: "¿Qué operación lógica se define como (p ⇒ q) ∧ (q ⇒ p)?",
    opciones: [
      "Doble implicación (⇔)",
      "Contrarrecíproca conjunta",
      "Leyes de Morgan compuestas",
      "Disyunción inclusiva",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "condicional",
    pregunta:
      "Si en un restaurante dicen: 'Tenemos helado o flan', ¿a qué tipo de disyunción se refieren comúnmente en el lenguaje coloquial?",
    opciones: ["Inclusiva", "Unitiva", "Exclusiva (⊻)", "Aritmética"],
    correcta: 2,
  },

  // ==========================================
  // BLOQUE 1: Progresiones (d, r) - 10 Preguntas
  // ==========================================
  {
    nivel: 3,
    tema: "progresiones",
    pregunta:
      "En una progresión aritmética {8, 3, -2, -7}, ¿cuál es el valor de la diferencia (d)?",
    options: ["d = -5", "d = 5", "d = 3", "d = -2"],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta: "¿Qué operación define a una sucesión geométrica?",
    opciones: [
      "Sumar una constante d al término anterior",
      "Elevar al cuadrado el término anterior",
      "Multiplicar el término anterior por una razón fija r",
      "Restar una razón r al término general",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta:
      "Si en una progresión geométrica el primer término es 3 y la razón es 4, ¿cuál es el segundo término?",
    opciones: ["7", "12", "1", "3.4"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta:
      "¿Cuál es la fórmula para hallar el término enésimo (aₙ) de una progresión aritmética?",
    opciones: [
      "aₙ = a₁ · rⁿ⁻¹",
      "aₙ = aⱼ₊₁ / aⱼ",
      "aₙ = a₁ + (n - 1) · d",
      "aₙ = (n + 1)²",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta:
      "Se dice que una sucesión es 'estrictamente decreciente' cuando se cumple que:",
    opciones: ["aₙ₊₁ < aₙ", "aₙ₊₁ > aₙ", "aₙ₊₁ ≤ aₙ", "aₙ = k"],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta:
      "¿Cómo se calcula la razón (r) si conocemos dos términos consecutivos de una sucesión geométrica?",
    opciones: ["r = aⱼ₊₁ - aⱼ", "r = a₁ + aₙ", "r = aⱼ₊₁ / aⱼ", "r = (aⱼ)²"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta: "¿Qué caracteriza a una sucesión constante?",
    opciones: [
      "Sus signos alternan entre positivo y negativo",
      "Cada término es el doble del anterior",
      "Todos sus términos son iguales (aₙ = k)",
      "La diferencia d cambia en cada paso",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta: "Dada la sucesión {3, 6, 12, 24}, ¿cuál es el valor de r?",
    opciones: ["r = 3", "r = 0.5", "r = 4", "r = 2"],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta:
      "Si una sucesión tiene términos que alternan sus signos (+, -, +, -), se denomina:",
    opciones: [
      "Sucesión Aritmética",
      "Sucesión Alternada o Alternante",
      "Sucesión de Fibonacci",
      "Sucesión Estricta",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "progresiones",
    pregunta:
      "En una progresión aritmética donde a₁=5 y d=3, ¿cuál es el valor del término a₄?",
    opciones: ["11", "17", "20", "14"],
    correcta: 3,
  },

  // ==========================================
  // BLOQUE 2: Sumatoria e Inducción - 10 Preguntas
  // ==========================================
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "¿Cuál es el primer paso (base inductiva) para demostrar una propiedad P(n) por inducción?",
    opciones: [
      "Demostrar que P(1) es verdadera",
      "Suponer que P(k) es verdadera",
      "Probar que P(k+1) es falsa",
      "Calcular el límite de la sumatoria",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "En el paso inductivo, ¿qué nombre recibe la premisa 'P(k) es verdadera'?",
    opciones: [
      "Tesis inductiva",
      "Hipótesis inductiva",
      "Base de inducción",
      "Conclusión deductiva",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta: "¿Cómo se definen los términos de la sucesión de Fibonacci (uₙ)?",
    opciones: [
      "Como una progresión aritmética de d=1",
      "Cada término es la suma de los dos anteriores (uₙ = uₙ₋₁ + uₙ₋₂)",
      "Como el producto de los términos pares",
      "Multiplicando por la razón r=1.5",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "El principio de 'inducción fuerte' se diferencia del simple porque supone verdadera la propiedad para:",
    opciones: [
      "Todos los valores h tales que n₀ ≤ h ≤ k",
      "Solamente el valor P(1)",
      "Únicamente valores pares de k",
      "Todos los números reales del intervalo",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "Si P(k) implica P(k+1) y P(1) es verdadera, el principio de inducción asegura que:",
    opciones: [
      "La propiedad es verdadera solo para k",
      "La propiedad es verdadera para todo n ∈ ℕ",
      "La propiedad es una contradicción",
      "La sucesión es alternada",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "¿Cuáles son los primeros cuatro términos de la sucesión de Fibonacci?",
    opciones: ["0, 1, 2, 3", "1, 2, 4, 8", "1, 1, 2, 3", "1, 3, 5, 7"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "El símbolo ∑ (sumatoria) se utiliza técnicamente para representar:",
    opciones: [
      "La resta de términos sucesivos",
      "La suma de una serie de términos",
      "La división entre la razón y la diferencia",
      "El conjunto de partes de un universal",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "En el ejercicio de sumatoria de números impares: 1+3+5+...+(2n-1), ¿cuál es el resultado explícito?",
    opciones: ["2n", "n(n+1)/2", "n²", "2ⁿ"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "Según el Trabajo Práctico, ¿cuántos términos mínimos se sugieren ingresar para identificar una sucesión fehacientemente?",
    opciones: ["2 términos", "5 términos", "1 término", "3 términos"],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "sumatoria",
    pregunta:
      "¿A qué área de la informática se aplica frecuentemente la inducción y las sumatorias?",
    opciones: [
      "Diseño de colores en CSS",
      "Instalación de hardware local",
      "Algoritmos y análisis de complejidad",
      "Configuración de redes WiFi",
    ],
    correcta: 2,
  },

  // ==========================================
  // BLOQUE 3: Razonamientos (D-I) - 10 Preguntas
  // ==========================================
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta:
      "¿En qué consiste una demostración directa de un teorema (H ⇒ C)?",
    opciones: [
      "Mostrar que si la hipótesis H es verdadera, la conclusión C lo es",
      "Negar la conclusión para ver qué pasa",
      "Dar un ejemplo que no cumpla la regla",
      "Asumir que H y C son falsas",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta: "La justificación mediante un CONTRAEJEMPLO se utiliza para:",
    opciones: [
      "Probar que una proposición es siempre verdadera",
      "Mostrar que un enunciado o proposición es falsa",
      "Verificar la hipótesis inductiva fuerte",
      "Aprobar el software en C#",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta:
      "¿Qué técnica de demostración utiliza la equivalencia lógica (p ⇒ q) ≡ (¬q ⇒ ¬p)?",
    opciones: [
      "Demostración Directa",
      "Inducción por Sumatoria",
      "Demostración por el absurdo o indirecta",
      "Prueba por contraejemplo",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta:
      "Si se afirma: 'Si un número es natural entonces es par', el número 3 actúa como:",
    opciones: [
      "Hipótesis verdadera",
      "Contraejemplo que invalida la afirmación",
      "Tesis de una demostración directa",
      "Razón de una progresión",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta:
      "Para demostrar la conclusión de un Teorema, los matemáticos hacen uso de:",
    opciones: [
      "Decretos institucionales",
      "La lógica y el razonamiento deductivo",
      "Opiniones de usuarios finales",
      "El manual de procedimientos",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta:
      "En una estructura de Teorema, la parte que se desea probar se denomina:",
    opciones: ["Lema", "Corolario", "Tesis o Conclusión", "Axioma base"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta: "¿Cuál es el objetivo central de la lógica proposicional?",
    opciones: [
      "Estudiar cómo se combinan las unidades básicas (proposiciones) para formar argumentos válidos",
      "Medir la probabilidad de que llueva",
      "Identificar los errores en la cinta magnética",
      "Calcular el promedio de los términos de una sucesión",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta:
      "Si en un razonamiento p implica q, pero resulta que q es falsa, por deducción:",
    opciones: [
      "p debe ser verdadera",
      "p puede ser cualquier cosa",
      "p debe ser falsa",
      "q se vuelve verdadera",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta: "Un argumento se considera válido cuando:",
    opciones: [
      "La conclusión se sigue necesariamente de las premisas",
      "A la mayoría del grupo le gusta la idea",
      "Es muy largo y difícil de leer",
      "No requiere el uso de conectivos lógicos",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "demostraciones",
    pregunta:
      "En los ejercicios de inducción del ISAUI, es indispensable 'artilugio matemático' para:",
    opciones: [
      "Que el profesor no entienda el proceso",
      "Poder reemplazar el n+1 por el cardinal",
      "Lograr que aparezca la hipótesis inductiva en la tesis",
      "Eliminar el símbolo de sumatoria de la hoja",
    ],
    correcta: 2,
  },
];
