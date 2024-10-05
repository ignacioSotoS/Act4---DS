function MostrarSeccion({ params }) {
  if (params.secc.toLowerCase() === "cocina") {
    return (
      <div>
        <h1>Bienvenido a la sección de Cocina</h1>
        <p> nota que ingresaste a esta página usando /{params.secc}</p>
      </div>);
  } else if (params.secc.toLowerCase() === "lavanderia") {
    return (
      <div>
        <h1>Bienvenido a la sección de Lavandería</h1>
        <p> nota que ingresaste a esta página usando /{params.secc}</p>
      </div>);
  } else if (params.secc.toLowerCase() === 'limpieza') {
    return (
    <div>
      <h1>Bienvenido a la sección de Limpieza</h1>
      <p> nota que ingresaste a esta página usando /{params.secc}</p>
    </div>);
  } else {
    return (
    <div>
      <h1> Error :( </h1>
        <p> nota que ingresaste a esta página usando /{params.secc}</p>
      <h2>La sección "{params.secc}" no fue encontrada: prueba con cocina, limpiaza o lavanderia</h2>
      <h3>Estamos trabajando para añadir más secciones en nuestro catálogo.</h3>
      <h3>Por eso te queremos regalar un codigo de descuento: VamosPorEl7 </h3>
      <img src= "/emoji.png" alt="a" className="image"/>
    </div>);
  }
}

function Contenido({ params }){
  if (params.secc.toLowerCase() === "cocina") {
    return (
      <div>
        <p> <strong>¡Bienvenidos a la cocina de tus sueños con DORA!</strong> Aquí encontrarás todo lo que necesitas para preparar tus platos favoritos de manera fácil y divertida. Desde licuadoras hasta hornos eléctricos, tenemos los electrodomésticos que convertirán tus recetas en verdaderas obras maestras. Dale rienda suelta a tu creatividad culinaria y haz que cada comida sea especial.</p>
      </div>);
  } else if (params.secc.toLowerCase() === "lavanderia") {
    return (
      <div>
        <p> <strong>¡Bienvenido a la lavandería de tus sueños con DORA!</strong> Donde el lavado se convierte en algo simple y sin esfuerzo! Tenemos todo lo que necesitas para mantener tu ropa siempre impecable, desde nuestras lavadoras y secadoras inteligentes hasta los accesorios perfectos para cada prenda. ¡Porque con DORA, lavar nunca fue tan sencillo y eficiente.</p>
      </div>);
  } else if (params.secc.toLowerCase() === 'limpieza') {
    return (
    <div>
      <p> <strong>¡Bienvenido a la sección de limpieza DORA!</strong> Donde la comodidad y la eficiencia van de la mano! Aquí encontrarás todos los electrodomésticos que necesitas para mantener tu hogar limpio y reluciente sin complicaciones. Ya sea con nuestras aspiradoras súper potentes o con limpiadores a vapor, DORA está aquí para hacer de la limpieza algo rápido y efectivo, ¡para que tengas más tiempo de disfrutar de lo que realmente te gusta.</p>
    </div>);
  }
}

function Producto_estrella({ params }){
  const mensaje = "Producto destacado de la sección:";
  if (params.secc.toLowerCase() === "cocina") {
    return (
      <div>
        <h3>{mensaje} Tosta-DORA deLux la exploradora, a tan solo $24.000 </h3>
        <h2>Ve más de nuestros productos de la sección {params.secc}:</h2>
      </div>);
  } else if (params.secc.toLowerCase() === "lavanderia") {
    return (
      <div>
        <h3>{mensaje} Seca-DORA deLux la exploradora, a tan solo $140.000 </h3>
        <h2>Ve más de nuestros productos de la sección {params.secc}:</h2>
      </div>);
  } else if (params.secc.toLowerCase() === 'limpieza') {
    return (
    <div>
      <h3>{mensaje} Aspira-DORA deLux la explorada, a tan solo $100.000</h3>
      <h2>Ve más de nuestros productos de la sección {params.secc}:</h2>
    </div>);
  }
}

function Producto({image, nombre, descripción}){
  return(
    <div>
      <h3> - {nombre} </h3>
      <figure>
        <img src={image} alt= "aa"  className="img"/>
        <figcaption> {descripción} </figcaption>
      </figure>
    </div>
  );
}


function Producs({ params }){
  if (params.secc.toLowerCase() === "cocina") {
    return (
      <div>
        <Producto image="/BatidoradeManoDORAMixPro.jpg" nombre="Batidora de Mano DORA MixPro 2000" descripción="Descripción: La Batidora de Mano DORA MixPro 2000 es ligera y potente, ideal para mezclar, batir y triturar. Cuenta con múltiples velocidades y un diseño ergonómico que facilita su uso. Incluye un vaso medidor y un accesorio para picar."/>
        <Producto image="/HornoDORABakeMaster.jpg" nombre="Horno DORA BakeMaster 5000" descripción="Descripción: El Horno DORA BakeMaster 5000 es un horno eléctrico multifuncional con capacidades de convección y asado. Cuenta con una capacidad de 70 litros, un termostato digital y múltiples modos de cocción, incluyendo asar, hornear y gratinar. Su diseño elegante y su panel de control intuitivo lo convierten en un complemento ideal para cualquier cocina." /> 
      </div>);
  } else if (params.secc.toLowerCase() === "lavanderia") {
    return (
      <div>
        <Producto image="/LavadoraDORAUltraClean3000.jpg" nombre="Lavadora DORA Ultra-Clean 3000" descripción="Descripción: Esta lavadora de carga frontal cuenta con tecnología de lavado inteligente, permitiendo un ahorro de agua y energía. Con programas de lavado específicos para cada tipo de tejido, garantiza que tus prendas salgan impecables y bien cuidadas."/>
        <Producto image="/SecadoraDORAEcoDry.jpg" nombre= "Secadora DORA Eco-Dry 200" descripción= "Descripción: Con un sistema de secado por bomba de calor, esta secadora es un sueño hecho realidad. Su función de sensor de humedad ajusta automáticamente el tiempo de secado, protegiendo tus prendas del sobrecalentamiento."/>
      </div>);
  } else if (params.secc.toLowerCase() === 'limpieza') {
    return (
      <div>
        <Producto image="/LimpiadoradeVaporDORASteamPro.jpg" nombre="Limpiadora de Vapor DORA SteamPro 2000" descripción="Descripción: La Limpiadora de Vapor DORA SteamPro 2000 utiliza vapor a alta presión para desinfectar y limpiar diversas superficies del hogar, desde pisos hasta muebles. Con un calentamiento rápido y múltiples accesorios, es ideal para eliminar grasa y gérmenes sin necesidad de productos químicos."/>
        <Producto image="/LimpiadordeVentanasDORAClear.jpg" nombre="Limpiador de Ventanas DORA ClearView 1000" descripción="Descripción: El Limpiador de Ventanas DORA ClearView 1000 es un dispositivo eléctrico diseñado para facilitar la limpieza de ventanas. Su diseño ergonómico y su función de succión permiten limpiar sin dejar marcas ni goteos."/>
      </div>);
    }
}

function page({params}) {
  return (
    <div>
      <MostrarSeccion params={params}/>
      <Contenido params={params}/>
      <Producto_estrella params={params}/>
      <Producs params={params}/>
      <p> <strong>Para ver las otras páginas/partes de nuestra empresa realiza un:</strong> </p>
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

export default page;