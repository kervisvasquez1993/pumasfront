import React from 'react'

const SantuarioPage = () => {
  return (
    <body>
    <div className="container">
        <div className="container-sactuary">
            <h3 className="sanctuary-title">Nuestro Santuario</h3>
            <div className="grid-2">
                <div className="sanctuary__imagen">
                    <img src="imgsantuario.png" alt="imagen santuario">
                    
                </div>
                <div className="about-sanctuary_text">
                    <p>
                        Nuestro Santuario está completamente abierto al público. Aquí es donde permanecen los animales que no pudieron ser liberados nuevamente a la naturaleza por diversas razones, por ejemplo, animales que tienen lesiones físicas que no les permiten valerse por sí mismos o que fueron mantenidos ilegalmente como mascotas y se acostumbraron a vivir con las personas. 
                    </p>
                    <p>
                        Cada animal tiene un recinto ambientado naturalmente y cada uno de ellos tiene una historia detrás de su rescate que explica el por qué deben vivir en cautiverio.
                    </p>
                    <p>
                        Estos animales son utilizados como parte de nuestro Programa de Educación Ambiental, para enseñar a las personas sobre la vida silvestre y las amenazas que enfrentan como la pérdida de hábitat, la caza y la tenencia ilegal. 
                        <a href="#">¡Conocé más de nuestro Programa de Educación Ambiental acá!</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="container-rout">
            
            <div className="grid-2">
                <h3 className="rout-title">Reserva tu recorrido</h3>
                <div className="rout_text">
                    <p>
                        En este recorrido aprenderás sobre los animales silvestres que viven de forma permanente en el Santuario: conocerás su comportamiento, historia natural, ecología y descubrirás la razón por la que no pudieron ser devueltos a la naturaleza. El recorrido guiado no tiene ningún costo económico adicional, pero está sujeto a disponibilidad, 
                    </p>
                    
                 <p><b>¡Será un gusto mostrarte nuestro Santuario!</b></p>
                 <button className="route-button">Reservar Recorrido</button>
                </div>
            </div>
        </div>
        <div className="container-rules">
            <h3 className="rules-title">Reglas y recomendaciones</h3>
            
                
                <div className="rules_text">
                    <p>
                        Si vas a venir de visita a nuestro Santuario, acá te mostramos nuestras reglas. Además, cuando nos visités te recomendamos traer bloqueador, repelente e hidratación.
                    </p>
                    
                </div>
           <div className="icons-container">
            <div className="flex-2">
                <div className="icons__imagen">
                    <img src="hand.png" alt="imagen santuario">
                    
                </div>
                <div className="icons_text">
                    <p>
                        No tocar, molestar ni alimentar a los animales
                    </p>
                    
                </div>
            </div>
            <div className="flex-2">
                <div className="icons__imagen">
                    <img src="hand.png" alt="imagen santuario">
                    
                </div>
                <div className="icons_text">
                    <p>
                        Respetar lasbarandas de seguridad
                    </p>
                    
                </div>
            </div>
            <div className="flex-2">
                <div className="icons__imagen">
                    <img src="hand.png" alt="imagen santuario">
                    
                </div>
                    <div className="icons_text">
                    <p>
                        No usar flash en fotos o videos
                    </p>
                    
                    </div>
                </div>
                <div className="flex-2">
                    <div className="icons__imagen">
                        <img src="hand.png" alt="imagen santuario">
                        
                    </div>
                    <div className="icons_text">
                        <p>
                            No tocar, molestar ni alimentar a los animales
                        </p>
                        
                    </div>
                </div>
                <div className="flex-2">
                    <div className="icons__imagen">
                        <img src="hand.png" alt="imagen santuario">
                        
                    </div>
                    <div className="icons_text">
                        <p>
                            Respetar lasbarandas de seguridad
                        </p>
                        
                    </div>
                </div>
                <div className="flex-2">
                    <div className="icons__imagen">
                        <img src="hand.png" alt="imagen santuario">
                        
                    </div>
                        <div className="icons_text">
                        <p>
                            No usar flash en fotos o videos
                        </p>
                        
                        </div>
                    </div>
             </div><!---icons container--> 
             
        </div>
    </div>
</body>
  )
}

export default SantuarioPage