/* exported buildScene */

function buildScene() {
  
  let scene = {};

  scene.background = "black"
  scene.panels = [];
  scene.texts = [];
  
  
  for( var s = 0; s < 200; s++){
    let skull_x = (-Math.random()*1000) + 600;
    scene.texts.push({
      text: "💀",
      size: 60,
      z: 10,
      x: skull_x,
      y: -Math.random()*100})
  }
  
  scene.panels.push({ x: -1000, y: 10, w: 30, h: 50, color: "grey", z: -50 });
  scene.panels.push({ x: 0, y: 100, w: 60, h: 200, color: "grey", z: +190 });
  scene.panels.push({ x: 0, y: 0, w: 30, h: 50, color: "grey", z: +190 });
  scene.panels.push({ x: 0, y: 0, w: 10, h: 50, color: "grey", z: +190 });

  scene.texts.push({ text: "Kong", size: 100, color: "white", z: -150, y: 30, x: 40 });
  scene.texts.push({ text: "King", color: "ehite", size: 100, z: +5, x: -350, y: 80 });
  scene.texts.push({ text: "🦍", size:176, color: "black", x: -30, y: 60, z: 10});
  scene.texts.push({ text: "🦖", size:176, color: "black", x: 200, y: 60, z: 10});
  scene.texts.push({ text: "🦖", size:176, color: "black", x: -250, y: 60, z: 10});


  return scene;

}

/*
  return {
    background: "#feb",
    panels: [
      { x: 0, y: 0, w: 30, h: 50, color: "#bef", z: -50 },
      { x: 0, y: 0, w: 30, h: 50, color: "#bef", z: +50 },
    ],
    texts: [
      { text: "obscure", color: "black" },
      { text: "messages", color: "white", z: +20, y: 10 }
    ]
  };
  */
  
