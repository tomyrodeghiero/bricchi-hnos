"use client";

import HeaderBackground from '@/components/header-background/HeaderBackground';
import TextInput from '@/components/text-input/TextInput';
import { CONTACT, CONTACT_BACKGROUND } from '@/utils/assets/contact/contact';
import { EMAIL, FACEBOOK, INSTAGRAM, LOCATION, TELEPHONE } from '@/utils/assets/icons/icons';
import { BRICCHI_HNOS_BACKGROUND } from '@/utils/assets/images';
import { FACEBOOK_URL, INSTAGRAM_URL, PHONE_NUMBER } from '@/utils/constants/constants';
import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
  const handleClickToWhatsApp = () => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}`,
      "_blank"
    );
  };

  return (
    <>
      <HeaderBackground
        background={BRICCHI_HNOS_BACKGROUND}
        title="Contáctanos"
        subtitle="Inicio - Contacto"
      />
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col p-4 lg:p-0 lg:flex-row gap-4'>
          <div className='flex w-full lg:w-1/2 mx-auto gap-5'>
            <img data-aos="fade-right" src={CONTACT} className='h-3/4 lg:h-full w-full object-cover rounded-3xl' />
          </div>

          <div className="w-full lg:w-1/2 lg:pl-4 mx-auto py-8" data-aos="fade-left">
            <h1 className="text-green-900 text-3xl font-semibold leading-[2.25rem]">Tu consulta es importante para nosotros.</h1>
            <p className="text-gray-800 font-family-jost mt-2 leading-[1.5rem] font-open-sans">
              ¿Tenés alguna consulta o querés más información sobre nuestros productos y servicios? No dudes en contactarnos. Nuestro equipo está listo para asistirte y encontrar la mejor solución para vos. <span className='font-medium'>¡Escribinos y empecemos a trabajar juntos!</span>
            </p>

            <div className="flex-col mt-6 space-y-4 md:w-3/4">
              <Link href="mailto:infod.pastel@gmail.com" className="flex p-2 items-center rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-300">
                <div className="flex items-center justify-center rounded-lg">
                  <img src={EMAIL} alt="E-mail" className="h-16" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-green-900">Mensaje</p>
                  <p className="text-gray-800">bricchihnos@gmail.com</p>
                </div>
              </Link>
              <div onClick={handleClickToWhatsApp} className="cursor-pointer flex p-2 items-center rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-300">
                <div className="flex items-center justify-center rounded-lg">
                  <img src={TELEPHONE} alt="E-mail" className="h-16" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-green-900">Teléfono</p>
                  <p className="text-gray-800">+54 9 3586214-729</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex font-family-jost items-center mt-6">
              <Link href={INSTAGRAM_URL} target='_blank'>
                <img
                  className="hover-lift h-10 w-10 mx-2"
                  src={INSTAGRAM}
                  alt="Instagram Icon"
                />
              </Link>

              <Link href={FACEBOOK_URL} target='_blank'>
                <img
                  className="hover-lift h-10 w-10 mx-2"
                  src={FACEBOOK}
                  alt="Facebook Icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-5xl mx-auto relative w-full overflow-hidden rounded-2xl shadow-lg">
        <img
          src={CONTACT_BACKGROUND}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="relative w-full flex justify-end">
          <div className="p-8 max-w-[30rem] bg-white bg-opacity-90 rounded-xl shadow-lg m-8">
            <h4 className="text-green-400 font-yellowtail text-2xl">Ubicación</h4>
            <h2 className="text-3xl font-bold text-green-900">Nuestra Sucursal</h2>
            <p className="text-gray-800 mt-2 font-open-sans">
              Encuentra nuestra sucursal donde ofrecemos las mejores soluciones en maquinaria agrícola y repuestos. Visítanos para descubrir cómo podemos ayudarte a mejorar la productividad y eficiencia de tu campo.
            </p>
            <div className="flex items-center mt-4 text-gray-800 leading-[1.5rem]">
              <img
                className="h-10 w-10 mx-2"
                src={LOCATION}
                alt="Location Icon"
              />
              <div>
                <p className="font-semibold">Río Cuarto, Argentina</p>
                <p className="text-gray-600">Ruta A005 km 1.2, Río Cuarto, Córdoba</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-5xl mx-auto mt-16 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextInput as="input" label="Nombre Completo" placeholder="Su nombre completo" />
          <TextInput as="input" label="Email" placeholder="ejemplo@suemail.com" />
          <TextInput as="input" label="Empresa" placeholder="Nombre de tu empresa aquí" />
          <TextInput as="input" label="Asunto" placeholder="¿Cómo podemos ayudarte?" />
        </div>
        <div className='py-8'>
          <TextInput
            as="textarea"
            label="Mensaje"
            placeholder="¡Hola! Me gustaría preguntar acerca de"
          />
        </div>
        <div className='flex w-full justify-end'>
          <button className="bg-green-900 w-full md:w-auto py-4 px-8 rounded-lg text-white font-medium">
            Enviar Mensaje
          </button>
        </div>
      </div>
    </>
  )
}

export default ContactPage;