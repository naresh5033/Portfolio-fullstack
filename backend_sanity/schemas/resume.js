export default {
  title: "Resume",
  name: "Resume",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Description",
    },
    {
      name: "cv",
      type: "file",
      title: "CV",
      options: {
        hotspot: true,
      },
    },
  ],
};
