import { useState } from "react";

import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Toasty from "./components/Toasty/Toasty";
import Toggle from "./components/Toggle/Toggle";
import WidgetProcessor from "./components/WidgetProcessor/WidgerProcessor";

import range from "lodash.range";
import BookPage from "./components/BookPage/BookPage";

function App() {
  const [widgets, setWidgets] = useState(() => {
    return range(8).map(() => {
      return {
        id: crypto.randomUUID(),
        status: "unprocessed",
      };
    });
  });

  function processWidget(id, status) {
    const nextWidgets = widgets.map((widget) => {
      if (widget.id !== id) {
        return widget;
      }
      return {
        id,
        status,
      };
    });

    setWidgets(nextWidgets);
  }
  return (
    <>
      <Navigation />
      <WidgetProcessor widgets={widgets} processWidget={processWidget} />
      <Toggle />
      <div style={{ color: "red" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
        laboriosam repudiandae dolor in neque! Labore quisquam rerum cupiditate
        quae debitis doloremque, animi officia, odit error adipisci harum, eaque
        eum nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore corporis consequatur quasi harum deleniti. Voluptate provident
        consequatur reiciendis laborum veritatis, facilis architecto impedit
        esse et magnam accusantium itaque dolore corporis. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. In, accusantium dolores, natus totam
        necessitatibus, ipsam odio odit iusto nesciunt tenetur ullam modi quidem
        voluptas. Natus dolorem a quod temporibus sit! Quibusdam odio nesciunt
        optio accusamus eveniet perspiciatis incidunt vel quam. Ex repellat
        laboriosam quidem, illo ea nostrum eius vel suscipit, facere nulla
        velit! Recusandae ullam voluptatum aspernatur numquam asperiores quidem.
        Recusandae voluptas quae eligendi vel libero dignissimos sapiente fugiat
        autem, sint nihil dolores ut consequatur? Animi veritatis voluptatem
        corrupti? Aspernatur officia ducimus corporis! Eaque reprehenderit,
        praesentium aut suscipit ducimus dolore! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Quibusdam laboriosam repudiandae dolor in
        neque! Labore quisquam rerum cupiditate quae debitis doloremque, animi
        officia, odit error adipisci harum, eaque eum nulla? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Inventore corporis consequatur
        quasi harum deleniti. Voluptate provident consequatur reiciendis laborum
        veritatis, facilis architecto impedit esse et magnam accusantium itaque
        dolore corporis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. In, accusantium dolores, natus totam necessitatibus, ipsam odio
        odit iusto nesciunt tenetur ullam modi quidem voluptas. Natus dolorem a
        quod temporibus sit! Quibusdam odio nesciunt optio accusamus eveniet
        perspiciatis incidunt vel quam. Ex repellat laboriosam quidem, illo ea
        nostrum eius vel suscipit, facere nulla velit! Recusandae ullam
        voluptatum aspernatur numquam asperiores quidem. Recusandae voluptas
        quae eligendi vel libero dignissimos sapiente fugiat autem, sint nihil
        dolores ut consequatur? Animi veritatis voluptatem corrupti? Aspernatur
        officia ducimus corporis! Eaque reprehenderit, praesentium aut suscipit
        ducimus dolore!
      </div>
      <Toasty />
      <BookPage />
    </>
  );
}

export default App;
