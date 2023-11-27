import React from 'react';
import WhatsAppButton from '../../components/whatsapp';


const Footer = ({ items }) => {

  const footer = items?.map(item => {
    return (
      <div className="footer-block" key={item.id}>
        <h2 className='chelseaFont  font-size-24 color-white'>{item?.TitleFooter}</h2>
        {(item?.TitleFooter == "Dirección") ? (<div className='py-5 manropeFont font-size-20 color-white'>{item?.contentFooter}</div>) : (<div className='py-5 color-white'>{item?.contentFooter}</div>)}
      </div>
    )
  })
  return (
    <footer style={{ backgroundImage: `url("/images/foooterBackround.png")`, backgroundSize: "100% 100%", backgroundSize: "cover" }} className='footer-wrapper'>
      <section className="footer center" >{footer}</section>
      <div className='lg:w-10vw p-5 m-5'>
        <img src="/images/logo-blanco.png" alt="" />
      </div>
      <WhatsAppButton phoneNumber="84797025" message="¡Hola! Quiero saber más." />
    </footer>
  );
};

export default Footer;
