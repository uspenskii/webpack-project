import { SomeModule } from "./someModule";
import "./test.css";
import "./otherTest.scss";
import "./index.pug";

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context("./icons/", true, /\.svg$/));

const instance = new SomeModule();
instance.test();
