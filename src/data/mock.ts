export type Person = { id: string; name: string; initials: string; plan: string; cycle: string; delivery: string; charge: string; order: string; orderStatus: string; flavor: string; avatar: string };
export const people: Person[] = [
  { id: 'maria', name: 'Maria Oliveira', initials: 'MO', plan: 'Puríssima Premium', cycle: '3 de 12', delivery: '14 out 2026', charge: '10 out 2026', order: '#48392', orderStatus: 'Em manipulação', flavor: 'Baunilha', avatar: '#c97959' },
  { id: 'joao', name: 'João Oliveira', initials: 'JO', plan: 'Puríssima Essencial', cycle: '2 de 6', delivery: '18 out 2026', charge: '14 out 2026', order: '#48407', orderStatus: 'Programado', flavor: 'Cacau', avatar: '#537a71' }
];
export const plans = [
  { name: 'Essencial', eyebrow: 'Para começar com leveza', price: 'A partir de R$ 189', detail: 'Uma fórmula e acompanhamento da sua jornada.', points: ['1 fórmula personalizada', 'Ciclos recorrentes', 'Acompanhamento digital'] },
  { name: 'Premium', eyebrow: 'Uma rotina mais completa', price: 'A partir de R$ 329', detail: 'Uma experiência contínua, com mais possibilidades de personalização.', points: ['Até 3 fórmulas personalizadas', 'Preferências e sabor', 'Acompanhamento de ciclo', 'Suporte prioritário'], featured: true },
  { name: 'Família', eyebrow: 'Cuidado para mais pessoas', price: 'Sob consulta', detail: 'Gerencie pessoas e jornadas em uma única conta.', points: ['Múltiplas pessoas', 'Visão por pessoa', 'Endereços e entregas organizados'] }
];
export const orderSteps = ['Pedido confirmado', 'Pagamento confirmado', 'Informações validadas', 'Em manipulação', 'Controle de qualidade', 'Preparando envio', 'Em transporte', 'Entregue'];
export const notifications = [
  { id: 1, title: 'Seu pedido entrou em produção', text: 'Acompanhe o preparo do pedido #48392.', href: '/app/pedidos/48392', time: 'Agora', unread: true },
  { id: 2, title: 'Próxima cobrança em 5 dias', text: 'O ciclo de outubro está confirmado.', href: '/app/pagamentos', time: 'Hoje', unread: true },
  { id: 3, title: 'Seu sabor foi atualizado', text: 'Baunilha será aplicada ao próximo ciclo.', href: '/app/assinatura', time: 'Ontem', unread: false }
];
export const formulas = [
  { id: 'energia', moment: 'Manhã', name: 'Fórmula Energia', dose: '2 cápsulas', description: 'Parte da sua rotina personalizada.', composition: ['Magnésio bisglicinato', 'Coenzima Q10', 'Vitamina B12'], color: 'coral' },
  { id: 'sono', moment: 'Noite', name: 'Fórmula Sono', dose: '1 dose', description: 'Parte da sua rotina personalizada.', composition: ['Magnésio', 'L-teanina', 'Melatonina'], color: 'sage' }
];
export const faqs = [
  ['Como funciona a saúde personalizada?', 'Começamos conhecendo seu momento e suas preferências. Quando necessário, há participação de profissional habilitado. A plataforma organiza a jornada, seus ciclos e acompanhamentos.'],
  ['A Puríssima substitui uma consulta profissional?', 'Não. A experiência digital facilita a organização e o entendimento da jornada. Qualquer decisão clínica ou prescrição é conduzida por profissional habilitado.'],
  ['Posso acompanhar minha entrega?', 'Sim. Na área Minha Puríssima você acompanha cada etapa, da confirmação ao envio.'],
  ['Como funciona a assinatura?', 'A assinatura organiza seus ciclos recorrentes. Você visualiza a próxima cobrança, entrega e preferências antes de cada ciclo.']
] as const;