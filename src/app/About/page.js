function Imagen({img, texto}){
  return (
    <div>
      <figure>
        <img src={img} alt="a" className="img"/>
        <figcaption> {texto} </figcaption>
      </figure>
    </div>);
}

function Objetivos(){
  return(
    <ul>
      <li className="list"> <strong>Hacerte la Vida Más Fácil:</strong> Nuestro primer objetivo es hacerte sentir como el dueño de tu hogar, y no al revés. Que nadie tenga que recurrir a un manual de 150 páginas solo para lavar unos calcetines.</li>
      <li className="list"> <strong>Convertir el Caos en Comodidad:</strong> Aspiramos a que, con nuestros productos, la frase "no tengo tiempo para hacer eso" se convierta en "DORA ya lo hizo por mí". Porque sí, nuestros electrodomésticos también tienen cosas mejores que hacer, como ayudarte.</li>
      <li className="list"> <strong>Dominar el Mundo, Pero Con Humor:</strong>Lo admitimos, queremos conquistar el mundo, pero no como en las películas de robots malvados. Queremos dominarlo con aspiradoras inteligentes que hablen contigo, lavadoras que te feliciten por no haber mezclado ropa de color con blanca, y microondas que sepan cuál es el punto exacto de tus palomitas (sin convertirlas en carbón).</li>
    </ul>
  );
}


function About() {
  return (
    <div>
      <h1>Sobre nosotros: DORA</h1>
      <h2>history time:</h2>
      <p>Todo comenzó una lluviosa tarde de domingo, cuando un grupo de amigos decidió enfrentarse al más grande de los desafíos modernos: la <strong>flojera</strong>. Con la voluntad a medias y el café corriendo por nuestras venas, miramos nuestros hogares y nos preguntamos: ¿por qué todo tiene que ser tan complicado? Después de pasar 45 minutos tratando de programar la lavadora (que todavía nos miraba desafiante), nació nuestra gran idea: hacer electrodomésticos que te comprendan, o al menos que no te hagan sentir como un incompetente. Así, en la comodidad de un garaje lleno de cajas de pizza y viejas aspiradoras que solo decoraban el lugar, nació DORA, S.A., la empresa que cambiaría para siempre la forma de ver las tareas del hogar. Inspirados por nuestra vieja lava-DORA y la seca-DORA que nos sacaban canas verdes, decidimos crear una línea de electrodomésticos que, como buenos compañeros, se encargan de lo suyo sin preguntar demasiado.</p>
      <h2>Objetivos de DORA:</h2>
      <Objetivos/>
      <h3> - En el siguiente apartado puedes encontrar algunos electrodomésticos que nos inspiraron a ser lo que somos hoy</h3>
      <Imagen img="licu_ant.jpg" texto="Esta era ruidosa, difícil de limpiar y salpicaba por todas partes. Mientras que DORA es silenciosa, elegante y ofrece mezclas perfectas con un solo toque. ¡Haz que tu cocina brille con DORA!" />
      <Imagen img="lavadora_ant.jpg" texto="Esta es Ruidosa, complicada y tarda una eternidad en lavar. En cambio, DORA es silenciosa, compacta y se adapta automáticamente a tus necesidades, ¡todo con un solo toque! La comodidad y eficiencia han llegado para quedarse."/>
      <p><strong>Para ver las otras páginas/partes de nuestra empresa realiza un:</strong></p>
      <ul>
        <li className="list"> /About para saber de nosotros </li>
        <li className="list"> /Sucursales para ver nuestras sucursales</li>
        <li className="list"> /Sec/algo para ver nuestras secciones, recomendamos ver nuestras secciones oficiales: </li>
        <ul>
          <li>/Sec/limpieza para ver nuestra sección de limpieza</li>
          <li>/Sec/cocina para ver nuestra sección de cocina</li>
          <li>/Sec/lavanderia para ver nuestra sección de lavandería</li>
          <strong>Notar:</strong> si hace/Sec/algo en que algo no sea ninguna de las anterior puede encontrar una sorpresa
        </ul> 
      </ul>
    </div>
  );
}

export default About;
