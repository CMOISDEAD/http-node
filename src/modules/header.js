import { pallete } from "../utils/colors";

const header = {
  label: "Headers",
  content: "{ nil }",
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

export default header;
