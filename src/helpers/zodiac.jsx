// src/helpers/zodiac.js
export const getZodiacSign = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return ['Acuario', 'Hoy es un día para romper con la rutina y buscar nuevas formas de expresarte. La creatividad y la innovación fluirán fácilmente, así que no dudes en explorar nuevas ideas y proyectos.'];
  }
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return ['Piscis', 'Tus habilidades intuitivas estarán muy fuertes hoy. Confía en tu intuición y escucha tu voz interior. Es un buen momento para conectarte con tu lado espiritual y explorar emociones profundas.'];
  }
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return ['Aries', 'Hoy es un buen momento para tomar la iniciativa en proyectos que has estado posponiendo. La energía a tu alrededor es dinámica, lo que te permite avanzar con confianza. Cuida no ser demasiado impulsivo en tus decisiones.'];
  }
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return ['Tauro', 'Te sentirás más centrado en tus objetivos financieros. Es un buen día para planificar tus ahorros o inversiones. Sin embargo, no olvides relajarte y disfrutar de los pequeños placeres de la vida.'];
  }
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return ['Géminis', 'Tu lado social está en auge hoy, y te sentirás atraído por conversaciones interesantes y nuevas ideas. Es posible que recibas noticias inesperadas, así que mantente flexible y abierto a los cambios.'];
  }
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return ['Cáncer', 'Hoy podrías sentirte más emocional de lo habitual. Aprovecha esta energía para reflexionar sobre tus relaciones personales y cuidar tu bienestar emocional. Pasar tiempo en casa te ayudará a recargar energías.'];
  }
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return ['Leo', 'Tu carisma está en su punto más alto hoy, lo que te ayudará a destacarte en situaciones sociales o profesionales. No dudes en mostrar tus talentos, pero asegúrate de escuchar a los demás para mantener el equilibrio.'];
  }
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return ['Virgo', 'Hoy es un buen día para organizar tus tareas y proyectos. Tu enfoque en los detalles te permitirá avanzar sin problemas. Sin embargo, evita ser demasiado crítico contigo mismo o con los demás.'];
  }
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return ['Libra', 'El equilibrio en tus relaciones será clave hoy. Busca la armonía en las interacciones y no tengas miedo de expresar lo que sientes. Un compromiso justo te llevará lejos en cualquier discusión.'];
  }
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return ['Escorpio', 'Hoy podrías sentir una oleada de intensidad emocional. Usa esta energía para profundizar en tus relaciones y proyectos personales. No te dejes llevar por los celos o el resentimiento, enfócate en lo positivo.'];
  }
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return ['Sagitario', 'Es un día perfecto para expandir tus horizontes, ya sea a través de la educación o la planificación de un viaje. La aventura está en el aire, y te sentirás impulsado a explorar nuevas ideas y lugares.'];
  }
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return ['Capricornio', 'Tu enfoque en el trabajo y las metas a largo plazo se verá favorecido hoy. Es un buen momento para hacer planes a futuro y trabajar con determinación. Recuerda equilibrar tus responsabilidades con algo de tiempo para ti.'];
  }
  
  return ['Signo desconocido', ''];
  };