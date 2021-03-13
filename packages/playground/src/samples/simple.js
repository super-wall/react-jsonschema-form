module.exports = {
  schema: {
    title: "A registration form",
    description: "A simple form example.",
    type: "object",
    required: ["firstName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
        default: "Chuck",
      },
    },
  },
  uiSchema: {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:autocomplete": "family-name",
    },
  },
  formData: {
    firstName: "Norris",
  },
};
