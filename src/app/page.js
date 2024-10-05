function Listado(){
  return(
    <ul>
      <li className="list"> Licua-DORA deLux la exploradora: 37.000 </li>
      <li className="list"> Tosta-DORA deLux la exploradora: 24.000</li>
      <li className="list"> Lava-DORA deLux la exploradora: 150.000 </li>
      <li className="list"> Seca-DORA deLux la exploradora: 140.000</li>
      <li className="list"> Aspira-DORA deLux la explorada: 100.000</li>
    </ul>
  );
}

function Links(){
  return(
    <ul>
      <li><a href="https://www.youtube.com/watch?v=S3eKMGbQIUg"> Video promocional de la "Lava-Dora deLux la exploradora" </a></li>
      <li><a href="https://www.youtube.com/watch?v=8WPD7mGIWVw"> Video promocional de la "Aspira-Dora deLux la explorada" </a> </li>
      <li><a href="https://www.youtube.com/watch?v=6hwBhHqxOxc"> Video promocional de la "Licua-Dora deLux la exploradora" </a></li>
    </ul>
  );
}

function HomePage() {
  return (
    <div>
      <h1> Bienvenido a Electrodomésticos DORA </h1>
      <h2> ¡Presentamos DORA! La Nueva Línea de Electrodomésticos que Revolucionará tu Hogar </h2>
      <p> Con el perfecto equilibrio entre tecnología avanzada y un toque de cariño hogareño, <strong>DORA</strong> llega para hacerte la vida más fácil y elegante. Inspirada en aquellos nombres tan familiares que nos acompañan en las tareas del día a día como la lava-dora, la seca-dora, y más, esta línea de electrodomésticos representa la <strong>evolución hacia la comodidad definitiva</strong>, sin perder esa conexión cálida que nos hace sentir en casa.</p>
      <h3> - En el siguiente listado puedes encontrar algunos de nuestros productos de la linea DORA:</h3>
      <Listado/>
      <h3> - A continuación te recomiendo ver unos videos de nuestros productos DORA</h3>
      <Links/>
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

export default HomePage;
