export default function PrivacyPage() {
  const lastUpdate = new Date(2022, 0, 8).toLocaleDateString();
  return (
    <div className="pt-32 pb-20">
      <div className=" mx-5 md:mx-10 2xl:mx-auto max-w-7xl  bg-white p-8 m-5 rounded-lg snap-top">
        <h1 className="text-4xl font-bold hr-font-hr-title text-primary-500">
          Términos de Privacidad - Heyscar Romero
        </h1>

        <p className="mb-10 ml-2 text-slate-400 ">
          Última actualización: {lastUpdate}
        </p>

        <h2 className="text-2xl font-bold mt-4  mb-2">
          Recopilación de Información:
        </h2>
        <p className="mb-4">
          Al utilizar este sitio web, &quot;Heyscar Romero&quot;, usted acepta
          la recopilación de información personal a través de nuestro formulario
          de contacto. Los datos recopilados incluyen nombre, apellido, correo
          electrónico, teléfono y mensaje.
        </p>

        <h2 className="text-2xl font-bold mt-4 mb-2">Uso de la Información:</h2>
        <p className="mb-4">
          La información proporcionada será utilizada exclusivamente con el
          propósito de responder a sus consultas y brindarle información sobre
          nuestros servicios. Nos comprometemos a no compartir su información
          con terceros sin su consentimiento previo.
        </p>

        <h2 className="text-2xl font-bold mt-4 mb-2">
          Almacenamiento y Seguridad:
        </h2>
        <p className="mb-4">
          Los datos recopilados se almacenan de manera segura en nuestra base de
          datos y se protegen mediante medidas de seguridad para garantizar la
          confidencialidad de la información.
        </p>

        <h2 className="text-2xl font-bold mt-4 mb-2">Consentimiento:</h2>
        <p className="mb-4">
          Al enviar el formulario de contacto, usted otorga su consentimiento
          para que `&quot;Heyscar Romero&quot; utilice la información
          proporcionada con el fin de contactarlo. Además, acepta recibir
          comunicaciones relacionadas con sus consultas y nuestros servicios.
        </p>

        <h2 className="text-2xl font-bold mt-4 mb-2">Derechos del Usuario:</h2>
        <p className="mb-4">
          Usted tiene el derecho de solicitar acceso, corrección o eliminación
          de sus datos personales. Para ejercer estos derechos, contáctenos a
          través de la información proporcionada al final de estos términos.
        </p>

        <h2 className="text-2xl font-bold mt-4 mb-2">Cookies:</h2>
        <p className="mb-4">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
          Puede ajustar la configuración de su navegador para gestionar o
          deshabilitar las cookies según sus preferencias.
        </p>

        <h2 className="text-2xl font-bold mt-4 mb-2">
          Cambios en la Política:
        </h2>
        <p className="mb-4">
          Nos reservamos el derecho de realizar cambios en esta política de
          privacidad. Las actualizaciones se publicarán en esta página, y se le
          notificará sobre cualquier cambio significativo.
        </p>

        <h2 className="text-2xl font-bold mt-4 mb-2">
          Información de Contacto:
        </h2>
        <p className="mb-4">
          Para cualquier pregunta o inquietud relacionada con nuestra política
          de privacidad, puede contactarnos a través de [correo electrónico] o
          [número de teléfono].
        </p>
        <div className="flex w-full justify-end gap-10">
          <button className="transition-all  animate-infinite hover:animate-none duration-500 bg-red-400 hover:bg-red-500 group mt-5   flex text-3xl p-4 rounded-lg font-hr-title font-medium text-white hover:shadow-2xl">
            no acepto
          </button>
          <button className="transition-all animate-pulse animate-infinite hover:animate-none duration-500 bg-green-500 group mt-5   flex text-3xl p-4 rounded-lg font-hr-title font-medium text-white hover:shadow-2xl">
            Aceptar los terminos
          </button>
        </div>
      </div>
    </div>
  );
}
