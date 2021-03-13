module.exports = {
  schema: {
    title: "A list of tasks",
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
        title: "Task list title",
      },
      parent: {
        type: "object",
        title: "Parent",
        properties: {
          child: {
            type: "string",
            title: "Task details",
            description: "Enter the task details",
          },
        },
      },
    },
  },
  uiSchema: {},
  formData: {},
};
