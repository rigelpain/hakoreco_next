module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "styling",
        message: "スタイリング手法を選択してください。",
        choices: [
          {
            message: "CSS Modules",
            name: "cssModules",
          },
          {
            message: "Chakra UI",
            name: "chakraUi",
          },
          {
            message: "tailwindcss",
            name: "tailwindcss",
          },
        ],
      },
    ];

    return inquirer.prompt(questions).then(answers => {
      const { styling } = answers;
      const isCssModules = styling === "cssModules";
      const isChakraUi = styling === "chakraUi";
      const isTailwindCss = styling === "tailwindcss";

      return {
        isCssModules,
        isChakraUi,
        isTailwindCss,
      };
    });
  },
};
