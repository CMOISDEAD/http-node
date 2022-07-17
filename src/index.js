import * as blessed from "blessed";
import * as contrib from "blessed-contrib";

import Method from "./modules/method";
import Route from "./modules/route";
import { Button, request } from "./modules/button";
import Editor from "./modules/editor";
import Header from "./modules/header";
import Response from "./modules/response";

const screen = blessed.screen();

const grid = new contrib.grid({ rows: 12, cols: 12, screen: screen });

const method = grid.set(0, 0, 1, 1, blessed.textbox, Method);
const route = grid.set(0, 1, 1, 10, blessed.textbox, Route);
const send = grid.set(0, 11, 1, 1, blessed.button, Button);
const editor = grid.set(1, 0, 8, 8, blessed.textarea, Editor);
const header = grid.set(9, 0, 3, 8, blessed.textarea, Header);
const result = grid.set(1, 8, 11, 4, blessed.box, Response);

// Events
send.on("press", async () => {
  let response = await request(
    send,
    method.content,
    route.content,
    editor.content
  );
  result.content = JSON.stringify(response);
});

screen.key(["C-c"], (_ch, _key) => {
  return process.exit(0);
});

screen.on("resize", () => {
  method.emit("attach");
  route.emit("attach");
  send.emit("attach");
  editor.emit("attach");
  header.emit("attach");
  result.emit("attach");
});

screen.render();
