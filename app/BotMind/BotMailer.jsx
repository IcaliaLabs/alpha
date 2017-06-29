import axios from 'axios';

function getCSRFToken() {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.getAttribute('name') === 'csrf-token') {
      return meta.getAttribute('content');
    }
  }

  return null;
}

export function mailRecommendation(userName, email, recommendation) {
  return axios.post(`/bot/mail`,
    {
      userName,
      email,
      recommendation,
    },
    {
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      },
    });
  }

  export function sendMailToOwner(userName, email, phone, digestedConversation) {
    return axios.post(`/bot/mail`,
      {
        userName,
        email,
        phone,
        recommendation: "summaryToOwner",
        conversation: JSON.stringify(digestedConversation),
      },
      {
        headers: {
          'X-CSRF-Token': getCSRFToken(),
        },
      });
    }
