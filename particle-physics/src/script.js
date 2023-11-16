setTimeout((event) => {
  const rotateBtn = document.querySelector(".btn");

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframeBackground: "#fff",
      wireframes: false
    }
  });

  const nbElements = window.screen.width > 700 ? 1000 : 300;
  const particlesSize =
    window.screen.width > 700
      ? window.innerWidth / 150
      : window.innerWidth / 100;
  const boxes = Array.from({ length: nbElements }, () => {
    const elementType = getRandom(0, 2);
    const constructor = elementType ? Bodies.rectangle : Bodies.circle;
    const constructorData = elementType
      ? [particlesSize, particlesSize]
      : [particlesSize / 2];
    return constructor(
      getRandom(window.innerWidth / 2.6, window.innerWidth / 1.6),
      getRandom(
        window.innerHeight / 2 - window.innerWidth / 8,
        window.innerHeight / 2 - window.innerWidth / 4
      ),
      ...constructorData,
      {
        mass: 0.01,
        render: {
          fillStyle: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          strokeStyle: "rgba(0,0,0,0)"
        }
      }
    );
  });

  const lineParams = {
    width: window.innerWidth / 4,
    height: 2,
    options: {
      isStatic: true,
      render: {
        strokeStyle: "#55ccff",
        lineWidth: 2
      }
    }
  };
  const maskParams = {
    width: window.innerWidth / 4 + 60,
    height: 80,
    options: {
      isStatic: true,
      render: {
        fillStyle: "rgba(0,0,0,0)"
      }
    }
  };
  const hourglassData = [
    {
      // top
      x: window.innerWidth / 2,
      y: window.innerHeight / 2 - window.innerWidth / 4,
      ...lineParams
    },
    {
      // bottom
      x: window.innerWidth / 2,
      y: window.innerHeight / 2 + window.innerWidth / 4,
      ...lineParams
    },
    {
      // top left
      x: window.innerWidth / 2 - window.innerWidth / 8,
      y: window.innerHeight / 2 - window.innerWidth / 5.4,
      rotate: Math.PI / 2,
      ...lineParams,
      width: window.innerWidth / 7.4
    },
    {
      // top right
      x: window.innerWidth / 2 + window.innerWidth / 8,
      y: window.innerHeight / 2 - window.innerWidth / 5.4,
      rotate: Math.PI / 2,
      ...lineParams,
      width: window.innerWidth / 7.4
    },
    {
      // bottom left
      x: window.innerWidth / 2 - window.innerWidth / 8,
      y: window.innerHeight / 2 + window.innerWidth / 5.4,
      rotate: Math.PI / 2,
      ...lineParams,
      width: window.innerWidth / 7.4
    },
    {
      // bottom right
      x: window.innerWidth / 2 + window.innerWidth / 8,
      y: window.innerHeight / 2 + window.innerWidth / 5.4,
      rotate: Math.PI / 2,
      ...lineParams,
      width: window.innerWidth / 7.4
    },
    {
      // x top left
      x: window.innerWidth / 2 - window.innerWidth / 15,
      y: window.innerHeight / 2 - window.innerWidth / 17,
      rotate: Math.PI / 4,
      ...lineParams,
      width: window.innerWidth / 6
    },
    {
      // x top right
      x: window.innerWidth / 2 + window.innerWidth / 15,
      y: window.innerHeight / 2 - window.innerWidth / 17,
      rotate: -Math.PI / 4,
      ...lineParams,
      width: window.innerWidth / 6
    },
    {
      // x bottom left
      x: window.innerWidth / 2 - window.innerWidth / 15,
      y: window.innerHeight / 2 + window.innerWidth / 17,
      rotate: -Math.PI / 4,
      ...lineParams,
      width: window.innerWidth / 6
    },
    {
      // x bottom left
      x: window.innerWidth / 2 + window.innerWidth / 15,
      y: window.innerHeight / 2 + window.innerWidth / 17,
      rotate: Math.PI / 4,
      ...lineParams,
      width: window.innerWidth / 6
    },
    // MASK
    {
      // top
      x: window.innerWidth / 2,
      y: window.innerHeight / 2 - window.innerWidth / 4 - 30,
      ...maskParams
    },
    {
      // bottom
      x: window.innerWidth / 2,
      y: window.innerHeight / 2 + window.innerWidth / 4 + 30,
      ...maskParams
    },
    {
      // top left
      x: window.innerWidth / 2 - window.innerWidth / 8 - 30,
      y: window.innerHeight / 2 - window.innerWidth / 5.4,
      rotate: Math.PI / 2,
      ...maskParams,
      width: window.innerWidth / 5
    },
    {
      // top right
      x: window.innerWidth / 2 + window.innerWidth / 8 + 30,
      y: window.innerHeight / 2 - window.innerWidth / 5.4,
      rotate: Math.PI / 2,
      ...maskParams,
      width: window.innerWidth / 5
    },
    {
      // bottom left
      x: window.innerWidth / 2 - window.innerWidth / 8 - 30,
      y: window.innerHeight / 2 + window.innerWidth / 5.4,
      rotate: Math.PI / 2,
      ...maskParams,
      width: window.innerWidth / 5
    },
    {
      // bottom right
      x: window.innerWidth / 2 + window.innerWidth / 8 + 30,
      y: window.innerHeight / 2 + window.innerWidth / 5.4,
      rotate: Math.PI / 2,
      ...maskParams,
      width: window.innerWidth / 5
    },
    {
      // x top left
      x: window.innerWidth / 2 - window.innerWidth / 15 - 45,
      y: window.innerHeight / 2 - window.innerWidth / 17 + 10,
      rotate: Math.PI / 4,
      ...maskParams,
      width: window.innerWidth / 6 + 50
    },
    {
      // x top right
      x: window.innerWidth / 2 + window.innerWidth / 15 + 45,
      y: window.innerHeight / 2 - window.innerWidth / 17 + 10,
      rotate: -Math.PI / 4,
      ...maskParams,
      width: window.innerWidth / 6 + 50
    },
    {
      // x bottom left
      x: window.innerWidth / 2 - window.innerWidth / 15 - 45,
      y: window.innerHeight / 2 + window.innerWidth / 17 - 10,
      rotate: -Math.PI / 4,
      ...maskParams,
      width: window.innerWidth / 6 + 50
    },
    {
      // x bottom left
      x: window.innerWidth / 2 + window.innerWidth / 15 + 45,
      y: window.innerHeight / 2 + window.innerWidth / 17 - 10,
      rotate: Math.PI / 4,
      ...maskParams,
      width: window.innerWidth / 6 + 50
    }
  ];
  const hourglassComposite = Composite.create();
  hourglassData.forEach((data) => {
    const line = Bodies.rectangle(
      data.x,
      data.y,
      data.width,
      data.height,
      data.options
    );
    if (data.rotate) {
      Body.rotate(line, data.rotate);
    }
    Composite.add(hourglassComposite, line);
  });

  Composite.add(engine.world, [hourglassComposite, ...boxes]);
  // run the renderer
  Render.run(render);

  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  var gravity = true;
  rotateBtn.addEventListener("click", () => {
    engine.world.gravity.y = gravity ? -1 : 1;
    gravity = !gravity;
  });

  window.addEventListener("resize", () => {
    var canvas = render.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}, 1000);
