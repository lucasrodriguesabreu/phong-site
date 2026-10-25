export const COMPANY = {
  name: 'Phong',
  tagline: 'Consultoria de TI',
  // Número no formato internacional, apenas dígitos: 55 + DDD + número
  whatsappNumber: '5551992556945',
  whatsappDefaultMessage: 'Olá! Gostaria de saber mais sobre os serviços da Phong.',
}

export function whatsappLink(message = COMPANY.whatsappDefaultMessage) {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`
}
