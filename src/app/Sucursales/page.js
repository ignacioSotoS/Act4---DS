function Sucursal({image, nombre, descripción}){
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

function Sucursaless(){
  return (
    <div>
      <h1>Tiendas oficiales de DORA</h1>
      <h2>¡Descubre las 4 sucursales de DORA, donde la innovación se une a la cultura pop! Cada tienda tiene su propio toque especial:</h2>
      <Sucursal image="batman.jpg" nombre="Gotham City:" descripción="Diseñada para héroes y villanos, nuestra sucursal en Gotham ofrece productos que iluminan incluso los días más oscuros. ¡Perfectos para cualquier superhéroe!)" />
      <Sucursal image="Springfield.png" nombre= "Springfield:" descripción="¡Ven a nuestra tienda en Springfield, donde cada rincón está lleno de color y sorpresas! Desde licuadoras que podrían competir con las ocurrencias de Homer hasta lavadoras que dejarían a Marge impresionada. ¡No te olvides de pasar por la barra de donas en la esquina mientras eliges tus nuevos aliados en la cocina!"/>
      <Sucursal image="sp.jpg" nombre="South Park:" descripción="Ubicada en el corazón de esta ciudad caótica, nuestra sucursal de South Park es tan divertida como los personajes que la habitan. Aquí, no solo encontrarás electrodomésticos de última generación, ¡sino también la posibilidad de llevarte a casa una máquina que te hará reír mientras limpia!"/>
      <Sucursal image="grove_street_gta.jpg" nombre= "Grove Street:" descripción="En esta icónica ubicación del GTA San Andreas, nuestra tienda está dedicada a hacer la vida más fácil en el barrio. Con electrodomésticos que funcionan tan bien como un buen truco en una carrera, estarás listo para impresionar a tus amigos mientras te preparas para la próxima misión. ¡Haz que tu hogar sea el mejor lugar de Grove Street!"/>
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

export default Sucursaless;