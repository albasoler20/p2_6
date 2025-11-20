let estado = 0;
let estabaEncima = false;

let coloresFondo = [
  "#000000",
  "#1a1d2e",
  "#1e252f",
  "#2b1d2a",
  "#132820",
  "#2c2410",
  "#1b1f26"
];

let coloresLampara = [
  "#ffffff",
  "#F9F5E7",
  "#FFF3B0",
  "#FFD9C2",
  "#D9ECFF",
  "#D8F7E3",
  "#F8D6E5"
];

let vibracion = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (estado === 0) {
    background(0);
    return;
  }

  background(coloresFondo[estado]);

  let t = min(width, height) * 0.33;
  let cx = width / 2;
  let cy = height / 2 + t * 0.08;

  dibujarLampara(estado, cx, cy, t);
}

function mousePressed() {
  if (estado === 0) estado = 1;
}

function mouseMoved() {
  if (estado === 0) return;

  let t = min(width, height) * 0.33;
  let cx = width / 2;
  let cy = height / 2 + t * 0.08;

  let dentro =
    mouseX > cx - t &&
    mouseX < cx + t &&
    mouseY > cy - t &&
    mouseY < cy + t;

  if (dentro && !estabaEncima) {
    if (estado < 6) estado++;
    else estado = 0;
  }

  estabaEncima = dentro;
}

function dibujarLampara(n, cx, cy, t) {
  switch (n) {
    case 1: {
      let yTop = cy - t * 0.55;
      let hPant = t * 0.75;
      let yBomb = yTop + hPant * 0.25;
      let rBomb = hPant * 0.35;

      dibujarBombillaMesa(yBomb, rBomb, cx);
      dibujarRayosArriba(yBomb, t * 1.1, t * 0.9, cx);

      fill(coloresLampara[n]);

      let hPalo = t * 0.45;
      let yPalo = cy + t * 0.1;
      let hBase = t * 0.12;
      let yBase = yPalo + hPalo / 2 + hBase / 2;
      let ySuelo = yBase + hBase / 2;

      dibujarSuelo(n, ySuelo);
      dibujarPalo(cx, yPalo, t * 0.06, hPalo);
      dibujarBase(cx, yBase, t * 0.7, hBase);
      dibujarPantallaTrapezoide(cx, yTop, hPant, t * 0.5, t * 0.9);
      break;
    }

    case 2: {
      let yTop = cy - t * 0.6;
      let hPant = t * 0.9;
      let yBomb = yTop + hPant * 0.2;
      let rBomb = hPant * 0.33;

      dibujarBombillaMesa(yBomb, rBomb, cx);
      dibujarRayosArriba(yBomb, t * 1.25, t * 0.95, cx);

      fill(coloresLampara[n]);

      let hBase = t * 0.14;
      let yBase = cy + t * 0.45;
      let ySuelo = yBase + hBase / 2;

      dibujarSuelo(n, ySuelo);
      dibujarBase(cx, yBase, t * 0.9, hBase);
      dibujarPalo(cx, cy + t * 0.15, t * 0.06, t * 0.5);
      dibujarPantallaTrapezoide(cx, yTop, hPant, t * 0.6, t * 1.2);
      break;
    }

    case 3: {
      let yTop = cy - t * 0.7;
      let hPant = t * 0.9;
      let yBomb = yTop + hPant * 0.25;
      let rBomb = hPant * 0.32;

      dibujarBombillaMesa(yBomb, rBomb, cx);
      dibujarRayosArriba(yBomb, t * 1.2, t * 1.0, cx);

      fill(coloresLampara[n]);

      let hPalo = t * 0.8;
      let yPalo = cy + t * 0.25;
      let hBase = t * 0.12;
      let yBase = yPalo + hPalo / 2 + hBase / 2;
      let ySuelo = yBase + hBase / 2;

      dibujarSuelo(n, ySuelo);
      dibujarPalo(cx, yPalo, t * 0.06, hPalo);
      dibujarBase(cx, yBase, t * 0.7, hBase);
      dibujarPantallaTrapezoide(cx, yTop, hPant, t * 0.55, t * 0.85);
      break;
    }

    case 4: {
      let hBarra = t * 0.12;
      let yBarra = hBarra / 2;

      let hPalo = t;
      let yPalo = yBarra + hPalo * 0.5;
      let yTop = yPalo + t * 0.1;
      let hPant = t * 0.9;

      let yAbajo = yTop + hPant;
      let rBomb = (t * 0.2) * 0.4;

      fill(coloresLampara[n]);
      dibujarBarraSuperior(cx, yBarra, t * 1.2, hBarra);
      dibujarPalo(cx, yPalo, t * 0.05, hPalo);
      dibujarPantallaTrapezoide(cx, yTop, hPant, t * 0.4, t * 0.2);

      let ySuelo = cy + t * 0.6;
      dibujarSuelo(n, ySuelo);

      dibujarRayosAbajo(yAbajo + rBomb * 0.2, t * 1.0, t * 0.8, cx);
      dibujarBombillaTecho(yAbajo, rBomb, cx);
      break;
    }

    case 5: {
      let hBarra = t * 0.12;
      let yBarra = hBarra / 2;

      let hPalo = t * 0.9;
      let yPalo = yBarra + hPalo * 0.5;
      let yTop = yPalo + t * 0.25;
      let hPant = t * 0.8;

      let yCuenco = yTop + hPant * 0.5;
      let yAbajo = yCuenco + hPant * 0.5;
      let rBomb = hPant * 0.22;

      fill(coloresLampara[n]);
      dibujarBarraSuperior(cx, yBarra, t * 1.3, hBarra);
      dibujarPalo(cx, yPalo, t * 0.05, hPalo);
      dibujarPantallaCuenco(cx, yCuenco, t * 1.6, hPant);

      let ySuelo = cy + t * 0.6;
      dibujarSuelo(n, ySuelo);

      dibujarRayosAbajo(yAbajo + rBomb * 0.15, t * 1.3, t * 1.0, cx);
      dibujarBombillaTecho(yAbajo, rBomb, cx);
      break;
    }

    case 6: {
      let yCentro = cy - t * 0.35;
      let hPant = t * 0.4;
      let yArriba = yCentro - hPant / 2;

      let yBomb = yArriba + hPant * 0.25;
      let rBomb = hPant * 0.45;

      dibujarBombillaMesa(yBomb, rBomb, cx);
      dibujarRayosArriba(yBomb, t * 1.2, t * 1.0, cx);

      fill(coloresLampara[n]);

      let hBase = t * 0.14;
      let yBase = cy + t * 0.65;
      let ySuelo = yBase + hBase / 2;

      dibujarSuelo(n, ySuelo);
      dibujarBase(cx, yBase, t * 1.0, hBase);
      dibujarPalo(cx, cy + t * 0.2, t * 0.06, t * 0.9);
      dibujarTableroMesa(cx, yCentro, t * 1.8, hPant);
      break;
    }
  }
}

function dibujarSuelo(i, ySuelo) {
  push();
  noStroke();
  let cFondo = color(coloresFondo[i]);
  let cSuelo = lerpColor(cFondo, color(0), 0.35);
  fill(cSuelo);
  rect(width / 2, (height + ySuelo) / 2, width, height - ySuelo);
  pop();
}

function dibujarBase(cx, cy, w, h) { rect(cx, cy, w, h); }
function dibujarPalo(cx, cy, w, h) { rect(cx, cy, w, h); }

function dibujarPantallaTrapezoide(cx, yTop, h, wTop, wBot) {
  let yBot = yTop + h;
  quad(
    cx - wTop / 2, yTop,
    cx + wTop / 2, yTop,
    cx + wBot / 2, yBot,
    cx - wBot / 2, yBot
  );
}

function dibujarBarraSuperior(cx, cy, w, h) { rect(cx, cy, w, h); }

function dibujarPantallaCuenco(cx, cy, w, h) {
  let yTop = cy - h / 2, yBot = cy + h / 2;
  quad(
    cx - w * 0.45, yTop,
    cx + w * 0.45, yTop,
    cx + w * 0.5,  yBot,
    cx - w * 0.5,  yBot
  );
}

function dibujarTableroMesa(cx, cy, w, h) {
  let yTop = cy - h / 2, yBot = cy + h / 2;
  quad(
    cx - w * 0.35, yTop,
    cx + w * 0.35, yTop,
    cx + w * 0.5,  yBot,
    cx - w * 0.5,  yBot
  );
}

function dibujarBombillaMesa(y, r, cx) {
  fill(255, 230, 120);
  arc(cx, y, r * 2, r * 2, PI, 0, CHORD);
}

function dibujarBombillaTecho(y, r, cx) {
  fill(255, 230, 120);
  arc(cx, y, r * 2, r * 2, 0, PI, CHORD);
}

function vibra(v) {
  return v + random(-vibracion, vibracion);
}

function dibujarRayosArriba(y, ancho, alto, cx) {
  noStroke();
  fill(255, 250, 210, 80);
  let h = alto * 3;

  triangle(
    cx, vibra(y),
    vibra(cx - ancho * 0.12), vibra(y - h * 0.7),
    vibra(cx + ancho * 0.12), vibra(y - h * 0.7)
  );

  triangle(
    cx, vibra(y),
    vibra(cx - ancho * 0.3),  vibra(y - h * 0.5),
    vibra(cx - ancho * 0.05), vibra(y - h * 0.85)
  );

  triangle(
    cx, vibra(y),
    vibra(cx + ancho * 0.05), vibra(y - h * 0.85),
    vibra(cx + ancho * 0.3),  vibra(y - h * 0.5)
  );
}

function dibujarRayosAbajo(y, ancho, alto, cx) {
  noStroke();
  fill(255, 250, 210, 80);
  let h = alto * 3;

  triangle(
    cx, vibra(y),
    vibra(cx - ancho * 0.12), vibra(y + h * 0.7),
    vibra(cx + ancho * 0.12), vibra(y + h * 0.7)
  );

  triangle(
    cx, vibra(y),
    vibra(cx - ancho * 0.3),  vibra(y + h * 0.5),
    vibra(cx - ancho * 0.05), vibra(y + h * 0.85)
  );

  triangle(
    cx, vibra(y),
    vibra(cx + ancho * 0.05), vibra(y + h * 0.85),
    vibra(cx + ancho * 0.3),  vibra(y + h * 0.5)
  );
}
