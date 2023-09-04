import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class MenuBurger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    // Función para abrir/cerrar el menú
    handleMenuToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    // Función para cerrar el menú
    closeMenu = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <div className='menuMobil'>
                <section className='wrapperMenuMobil'>
                    <div className='wrapperLogo'>
                        <img src="/images/LogoBlanco.png" alt="Logo" />
                    </div>
                    <button onClick={this.handleMenuToggle} className='btn-boton-menu'>Abrir Menú</button>
                </section>
                <Menu
                    isOpen={this.state.isOpen}
                    onStateChange={({ isOpen }) => this.setState({ isOpen })}
                    width={'100vw'} 
                    right 
                    noOverlay 
                    pageWrapId={'page-wrap'} // ID del elemento que contiene el contenido principal
                    outerContainerId={'outer-container'} // ID del elemento que contiene tanto el menú como el contenido principal
                    className={'menu-custom'} // Clase CSS personalizada
                >
                    <a className="menu-item" href="/">
                        Inicio
                    </a>
                    <a className="menu-item" href="/about">
                        Acerca de
                    </a>
                    <a className="menu-item" href="/contact">
                        Contacto
                    </a>
                    <button onClick={this.closeMenu}>Cerrar Menú</button>
                </Menu>
            </div>
        );
    }
}

export default MenuBurger;
