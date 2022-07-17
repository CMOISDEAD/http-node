import { pallete } from "../utils/colors";

const Method = {
  keys: true,
  label: "Method",
  content: "GET",
  inputOnFocus: true,
  align: "center",
  border: {
    type: "line",
  },
  style: {
    fg: pallete.green,
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

export default Method;
