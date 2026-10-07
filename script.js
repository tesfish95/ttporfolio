// One orchestrated moment: the terminal "types" a short intro on load.
// Respects prefers-reduced-motion by skipping straight to the final text.

const lines = [
  { command: "whoami", output: "Tesfaw Tadesse — computer science student" },
  { command: "interests.txt", output: "networks, backend systems, distributed things that shouldn't work (but do)" }
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function typeInto(el, text, speed, onDone) {
  if (reduceMotion) {
    el.textContent = text;
    if (onDone) onDone();
    return;
  }
  let i = 0;
  (function step() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(step, speed);
    } else if (onDone) {
      onDone();
    }
  })();
}

function fadeIn(el) {
  el.style.transition = "opacity 0.3s ease";
  el.style.opacity = "1";
}

function runSequence() {
  const targets = document.querySelectorAll(".type-target");
  const outputs = document.querySelectorAll(".term-out");

  outputs.forEach(o => { o.style.opacity = "0"; });

  let idx = 0;

  function next() {
    if (idx >= lines.length) return;
    const target = targets[idx];
    const output = outputs[idx];
    const line = lines[idx];

    typeInto(target, line.command, 32, () => {
      setTimeout(() => {
        output.textContent = line.output;
        fadeIn(output);
        idx++;
        setTimeout(next, 250);
      }, 200);
    });
  }

  next();
}

document.addEventListener("DOMContentLoaded", runSequence);
