import { pallete } from "../utils/colors";

const editor = {
  label: "Editor",
  content: "test",
  inputOnFocus: true,
  keys: true,
  border: {
    type: "line",
  },
  style: {
    fg: pallete.foreground,
    bg: pallete.background,
    border: {
      fg: pallete.foreground,
    },
    hover: {
      border: {
        fg: pallete.green,
      },
    },
  },
};

export default editor;
