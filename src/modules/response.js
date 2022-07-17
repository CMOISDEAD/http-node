import { pallete } from "../utils/colors";

const Response = {
  label: "Response",
  content: "Status {bold}200{/bold}!",
  tags: true,
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

export default Response;
