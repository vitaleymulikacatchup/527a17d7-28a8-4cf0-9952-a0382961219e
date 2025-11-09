"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="animatedGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Restaurante Español"
          button={{
            text: "Reservar Mesa",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Restaurante Español"
          description="Auténtica cocina española en el corazón de la ciudad. Descubre los sabores tradicionales de España con ingredientes frescos y recetas familiares."
          buttons={[
            {
              text: "Ver Menú",
              href: "feature"
            },
            {
              text: "Reservar",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/g6126df63e26cba0951ab0a66f8f38c986ad34e0366613d9ae79d047cd5b9488cd4613d1c67e341472a9fbf5724a89a54356584fa0f33d513c95d30b2465a2278_1280.jpg"
          imageAlt="Interior elegante del restaurante español"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Nuestra Historia"
          description="En Restaurante Español, llevamos tres generaciones compartiendo la auténtica tradición culinaria española. Cada plato cuenta la historia de nuestras raíces, preparado con amor y los secretos familiares transmitidos de generación en generación."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Especialidades de la Casa"
          description="Descubre nuestros platos más emblemáticos, preparados con ingredientes importados directamente de España"
          tag="Menú"
          features={[
            {
              title: "Paella Valenciana",
              description: "Nuestra paella tradicional con mariscos frescos, azafrán auténtico y arroz bomba importado de Valencia",
              imageSrc: "https://pixabay.com/get/g855fcedd20e619c24d8d36b45ddce2061a9415fc3b15ae880058878ac0a4c1c10d3792f5d5d989c35cf1b31de1bb055d75397e2e99f58ec754a8b0d8ce7a2878_1280.jpg",
              imageAlt: "Paella valenciana auténtica"
            },
            {
              title: "Selección de Tapas",
              description: "Variedad de tapas tradicionales: jamón ibérico, manchego curado, patatas bravas y croquetas caseras",
              imageSrc: "https://pixabay.com/get/g4b8434806140fc52b26ecacc7f2cce363c47ba1df9889c25a407b0b9843331234ed14b8673bb49076f998c0d85042fb8dc0c6c3bb313a9c022a496cc947dfc9e_1280.jpg",
              imageAlt: "Variedad de tapas españolas"
            },
            {
              title: "Ambiente Flamenco",
              description: "Disfruta de espectáculos de flamenco en vivo los fines de semana en un ambiente auténticamente español",
              imageSrc: "https://pixabay.com/get/gc8d69b02db02e8626de01b4c0ca3aa604ca1a8d94360d8e9081c7d1d94db093b7745dd61f035fa3f27ccfc49d8f91333ab081b1a14715ae970309f8b7ef2a402_1280.jpg",
              imageAlt: "Ambiente de flamenco en restaurante"
            },
            {
              title: "Bodega Española",
              description: "Carta de vinos cuidadosamente seleccionada con las mejores denominaciones de origen de España",
              imageSrc: "https://pixabay.com/get/gf00dc14bf3ea30254ca7de128efc01813def11819d0e89ae2fef322c28b6873a332c5b3d348c4fd4fb1954272baa989fc1d3f089243b47afdf3ba470aa808ee5_1280.jpg",
              imageAlt: "Selección de vinos españoles"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Lo Que Dicen Nuestros Clientes"
          description="Testimonios reales de comensales que han disfrutado de nuestra auténtica cocina española"
          tag="Reseñas"
          testimonials={[
            {
              id: "1",
              name: "María García",
              role: "Cliente Habitual",
              company: "Foodie & Blogger",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga132b88dd6f7c459d5b7cb45fe3cd30327d01632a75fd84a2d9755321c0564562db4bcd907c4916eb3c02addf0b7b125665d7ddfb8ea342c3b99e0f6a3596d30_1280.jpg",
              imageAlt: "María García cliente satisfecha"
            },
            {
              id: "2",
              name: "Carlos Mendoza",
              role: "Chef Profesional",
              company: "Academia Culinaria",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga79ae1ea752400c61666d49f890000aee04fd2770b6b348e76f4878315ab26f426b23dd3f46200ab205a49b2407bb9ae6a93436fc51486bea2ee1650b4c0547c_1280.jpg",
              imageAlt: "Carlos Mendoza chef profesional"
            },
            {
              id: "3",
              name: "Elena Rodríguez",
              role: "Crítica Gastronómica",
              company: "Revista Sabores",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g3ada0099609fa2d816731e3b4003a4127a7b250751ad405cfcddc8ca77182f47142af29170d8e74e6d678b11634fa10ccb33ca79fd2d4aa06813e49d813731ef_1280.jpg",
              imageAlt: "Elena Rodríguez crítica gastronómica"
            },
            {
              id: "4",
              name: "Antonio Fernández",
              role: "Empresario Local",
              company: "Cámara de Comercio",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g88b2e0fed5504b90dfefd6d7ba324342aae621d393db2bdabe09edf48c4314dcd8240679c8c0d7a955570424091fbbb95dc37f9c19569f7c319aac77b1793351_1280.jpg",
              imageAlt: "Antonio Fernández empresario"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Reconocido Por"
          description="Nuestro restaurante ha sido destacado por las principales publicaciones gastronómicas y guías culinarias"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          speed={30}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservaciones"
          title="Reserve Su Mesa"
          description="Haga su reserva para disfrutar de una experiencia gastronómica auténticamente española. También puede contactarnos para eventos especiales y celebraciones."
          imageSrc="https://pixabay.com/get/g69c3c4a7e37141aa7ca0f462539544e4845ad064cda8244f82389f61dd5cf15196b00b97946ab3981274ab9a809edc08433a271a3b8e90fe40c7b1ad11e767c1_1280.jpg"
          imageAlt="Entrada del restaurante español"
          mediaPosition="right"
          inputPlaceholder="Su email para confirmación"
          buttonText="Reservar Ahora"
          termsText="Al hacer su reserva, confirma que acepta nuestras políticas de reservación y cancelación."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Restaurante Español"
          columns={[
            {
              title: "Información",
              items: [
                {
                  label: "Sobre Nosotros",
                  href: "about"
                },
                {
                  label: "Nuestra Historia",
                  href: "about"
                },
                {
                  label: "Chefs",
                  href: "about"
                }
              ]
            },
            {
              title: "Menú",
              items: [
                {
                  label: "Especialidades",
                  href: "feature"
                },
                {
                  label: "Carta de Vinos",
                  href: "feature"
                },
                {
                  label: "Postres",
                  href: "feature"
                }
              ]
            },
            {
              title: "Servicios",
              items: [
                {
                  label: "Reservaciones",
                  href: "contact"
                },
                {
                  label: "Eventos Privados",
                  href: "contact"
                },
                {
                  label: "Delivery",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contacto",
              items: [
                {
                  label: "Ubicación",
                  href: "contact"
                },
                {
                  label: "Horarios",
                  href: "contact"
                },
                {
                  label: "Teléfono",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/restauranteespanol",
              ariaLabel: "Síguenos en Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/restauranteespanol",
              ariaLabel: "Síguenos en Facebook"
            }
          ]}
          copyrightText="© 2025 | Restaurante Español. Todos los derechos reservados."
        />
      </div>
    </ThemeProvider>
  );
}