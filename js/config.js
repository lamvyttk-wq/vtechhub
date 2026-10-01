// Single place to edit contact points and the lead-capture integration.
export const CONFIG = {
  phone: '+842873068789',
  phoneDisplay: '(+84) 28 7306 8789',
  email: 'contact@vnetwork.vn',
  website: 'https://vnetwork.vn',
  zalo: 'https://zalo.me/842873068789', // TODO: confirm the official Zalo OA / number
  offices: [
    'Level 23, UOA Tower, 6 Tan Trao, Tan My Ward, Ho Chi Minh City, Vietnam',
    '111 North Bridge Road #17-06 Peninsula Plaza, Singapore'
  ],
  // Lead capture integration point. Set to an endpoint that accepts JSON POST
  // (Formspree, Web3Forms, Google Apps Script, your CRM webhook...).
  // While null the form validates, logs the payload and shows the success state.
  leadEndpoint: null,
  industries: ['bfsi','government','healthcare','retail','manufacturing','logistics','media','education']
};
