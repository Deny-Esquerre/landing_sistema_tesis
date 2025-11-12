const Stats = () => {
  return (
    <div id="stats" className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) mx-auto w-full py-12 px-6 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
          El punto de partida perfecto para una IA educativa en evolución
        </h2>
        <p className="mt-4 text-lg max-w-2xl text-muted-foreground">
          NeurOS marca el inicio de un entorno inteligente en constante aprendizaje. Basado en modelos locales con Ollama, el sistema se adapta progresivamente según los datos, comportamientos y necesidades detectadas en el proceso educativo.
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 justify-center">
          <div>
            <span className="text-5xl md:text-6xl tracking-tight font-semibold">
              40+
            </span>
            <p className="mt-6 font-medium text-xl">
              Parámetros de ajuste dinámico
            </p>
            <p className="mt-2 text-muted-foreground">
              Variables que regulan color, ritmo, interfaz y respuestas del sistema en función del estado emocional y cognitivo del usuario.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl tracking-tight font-semibold text-muted-foreground">
              500+
            </span>
            <p className="mt-6 font-medium text-xl">Escenarios de aprendizaje en formación</p>
            <p className="mt-2 text-muted-foreground">
              El modelo genera preguntas, actividades y rutas personalizadas mientras evoluciona con cada interacción.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl tracking-tight font-semibold">
              20+
            </span>
            <p className="mt-6 font-medium text-xl">Diseños y prototipos de interfaz inclusiva</p>
            <p className="mt-2 text-muted-foreground">
              Componentes pensados para educadores, padres y estudiantes, priorizando accesibilidad, claridad y respuesta emocional positiva.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl tracking-tight font-semibold text-muted-foreground">
              100+
            </span>
            <p className="mt-6 font-medium text-xl">Recursos interactivos y visuales en desarrollo</p>
            <p className="mt-2 text-muted-foreground">
              Iconografía, estímulos visuales y componentes gráficos diseñados para fortalecer la comprensión y reducir la sobrecarga sensorial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;