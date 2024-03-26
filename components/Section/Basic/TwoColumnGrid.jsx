import React from 'react'

const TwoColumnGrid = ({
  children,
  backgroundImage,
  minHeight = '',
  display = '',
  justifyContent = '',
  alignItems = '',
  width = '',
  one = false,
}) => {
  const containerStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    minHeight: minHeight,
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    width: width,
  }

  return (
    <section
      className='container-section mask-background '
      style={containerStyle}
    >
      <section className={`${one ? 'grid-1' : 'grid-2'} column-reverse py-5`}>
        {children}
      </section>
    </section>
  )
}

export default TwoColumnGrid
