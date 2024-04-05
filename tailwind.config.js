/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.2) 0px 0px 4px 2px',
        all: 'rgba(0, 0, 0, 0.2) 0px 1px 11px 0px'
      },

      backgroundImage: {
        'custom-name':
          'url(https://es.nissanusa.com/content/dam/Nissan/us/vehicles/sentra/2024/overview/PFA/2024-nissan-sentra-blue-driveway-front-building-d.jpg)'
      },
      screens: {
        phone: '280px', // Tu valor personalizado para teléfono
        tablet: '640px', // Tu valor personalizado para tablet
        mac: '1280px', // Tu valor personalizado para tablet
        laptop: '1536px', // Tu valor personalizado para laptop
        desktop: '1920px' // Tu valor personalizado para desktop
        // Puedes añadir más breakpoints personalizados si lo necesitas
      }
    }
  }
}
