import { SomeModule } from "./js/someModule";
import "./assets/scss/app.scss";
import "./index.pug";

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context("./icons/", true, /\.svg$/));

const instance = new SomeModule();
instance.test();
