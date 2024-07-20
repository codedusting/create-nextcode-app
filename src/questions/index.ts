export const questions: Array<{
  type: string;
  name: string;
  message: string;
  choices?: Array<{ title: string; value: string }>;
  initial?: number;
}> = [
  {
    type: "text",
    name: "name",
    message: "What is your project name?",
  },
  {
    type: "select",
    name: "language",
    message: "Do you want JavaScript or TypeScript?",
    choices: [
      {
        title: "JavaScript",
        value: "javascript",
      },
      {
        title: "TypeScript",
        value: "typescript",
      },
    ],
    initial: 1,
  },
];
