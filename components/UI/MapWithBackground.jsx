import React from 'react'
import CanvasElement from './CanvasElement'
import useScreenSize from '../../hooks/useScreenSize'
const MapWithBackground = ({ backgroundImage, children }) => {
  const { screenSize } = useScreenSize()
  const mapStyle = {
    position: 'relative',
    maxWidth: '100vw',
    height: screenSize <= 768 ? '70vh' : '75vh',
    overflowX: 'auto', // Habilita el desplazamiento
  }

  const backgroundContainerStyle = {
    position: 'absolute',
    top: '50%', // Centrado vertical
    left: '50%', // Centrado horizontal
    transform: 'translate(-50%, -50%)', // Ajuste para centrar perfectamente
    width: '100%',
    height: '100%',
  }

  const backgroundStyle = {
    width: '1500px', // Tamaño fijo para la imagen de fondo
    height: '1500px', // Tamaño fijo para la imagen de fondo
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    display: 'flex',
    flexWrap: 'nowrap',
  }

  const scrollableContentStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2,
  }

  return (
    <section className='headerSectionMap' style={mapStyle}>
      <div style={backgroundContainerStyle}>
        <div style={backgroundStyle} className='mapa'></div>
      </div>
      <div style={scrollableContentStyle}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const { x, y } = child.props
            
            return (
              <CanvasElement key={child.key} x={x} y={y} className='test'>
                {child}
              </CanvasElement>
            )
          }
          return child
        })}
      </div>
    </section>
  )
}

export default MapWithBackground