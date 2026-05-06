// Chat rules for Medicare Health Chatbot (React JS RegEx rules)

export const rules = [
  {
    pattern: /hi|hello|hey|good morning|good afternoon|sasa|wozah/i,
    responses: [
      "Hello 👋 Welcome to Medicare Assistant. How can I help you today?",
      "Hi there 😊 I'm here to assist you with health-related questions."
    ]
  },

  {
    pattern: /how are you|uko aje/i,
    responses: [
      "I'm doing well 😊 Ready to help you with your health concerns!",
      "I'm fine 👍 How are you feeling today?"
    ]
  },

  {
    pattern: /(.*)headache|head pain(.*)/i,
    responses: [
      "Headaches can be caused by stress, dehydration, or lack of sleep. Drink water and rest. If it persists, consult a doctor."
    ]
  },

  {
    pattern: /(.*)fever|high temperature(.*)/i,
    responses: [
      "For fever, stay hydrated, rest, and monitor your temperature. If it is high or persistent, seek medical attention."
    ]
  },

  {
    pattern: /(.*)cough|coughing(.*)/i,
    responses: [
      "A cough may be caused by flu or infection. Warm fluids and rest can help. If it lasts more than a week, see a doctor."
    ]
  },

  {
    pattern: /(.*)malaria(.*)/i,
    responses: [
      "Malaria is common in some regions. If you have symptoms like fever and chills, please visit a health facility for testing and treatment."
    ]
  },

  {
    pattern: /(.*)hospital|clinic(.*)/i,
    responses: [
      "You should visit a nearby clinic or hospital for proper diagnosis and treatment."
    ]
  },

  {
    pattern: /(.*)medicine|drugs|prescription(.*)/i,
    responses: [
      "Please use medication only as prescribed by a qualified healthcare professional."
    ]
  },

  {
    pattern: /(.*)emergency|urgent|help me(.*)/i,
    responses: [
      "🚨 This sounds urgent. Please contact emergency services or go to the nearest hospital immediately."
    ]
  },

  {
    pattern: /(.*)nutrition|diet|food(.*)/i,
    responses: [
      "A balanced diet with fruits, vegetables, proteins, and water is important for good health."
    ]
  },

  {
    pattern: /(.*)stress|anxiety(.*)/i,
    responses: [
      "Try deep breathing, rest, and talking to someone you trust. If it continues, consider speaking to a health professional."
    ]
  },

  {
    pattern: /(.*)/i,
    responses: [
      "I'm not fully sure I understood that. Could you rephrase it?",
      "Please ask something related to your health so I can assist you better."
    ]
  }
];