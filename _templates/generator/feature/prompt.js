exports.prompt = ({ inquirer }) => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "機能の名前をいれてください",
      validate: answer => {
        if (answer) {
          return true;
        }
      },
    },
    {
      type: "select",
      multiple: true,
      name: "dirs",
      message: "利用するディレクトリを選択してください",
      choices: ["api", "components", "hooks", "types", "utils"],
      initial: ["api", "components", "hooks", "types", "utils"],
    },
  ];

  return inquirer.prompt(questions).then(answers => {
    const { name, dirs } = answers;

    return {
      name,
      hasApi: dirs.includes("api"),
      hasComponents: dirs.includes("components"),
      hasHooks: dirs.includes("hooks"),
      hasTypes: dirs.includes("types"),
      hasUtils: dirs.includes("utils"),
    };
  });
};
