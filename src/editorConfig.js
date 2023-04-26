import ExampleTheme from "./themes/exampleTheme";

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  }
};

export default editorConfig;
