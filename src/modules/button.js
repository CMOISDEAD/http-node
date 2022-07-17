import axios from "axios";
import { pallete } from "../utils/colors";

export const Button = {
  align: "center",
  mouse: true,
  keys: true,
  shrink: true,
  name: "send",
  content: "send",
  style: {
    fg: pallete.yellow,
    hover: {
      fg: pallete.foreground_alt,
    },
  },
};

export const request = async (ctx, method, url, body) => {
  ctx.content = "Pending...";

  if (url.charAt(0) == ":") {
    url = `http://localhost${url}`;
  }

  try {
    const response = await axios({
      method,
      url,
      headers: {
        authorization: "Bearer YOUR_JWT_TOKEN_HERE",
      },
      data: body ? JSON.parse(body) : "",
    });
    ctx.content = "Correct";
    return response.data;
  } catch (error) {
    ctx.content = "Error";
    return error;
  }
};
