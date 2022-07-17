import { pallete } from "../utils/colors";

const Route = {
  label: "Route",
  content: "http://localhost:8080/user",
  keys: true,
  inputOnFocus: true,
  border: {
    type: "line",
  },
  style: {
    fg: pallete.blue,
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

export default Route;
