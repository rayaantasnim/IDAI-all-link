// Define color palettes for background and buttons
const bgColors = [
  ['#0f0c29', '#302b63', '#24243e'], // dark cosmic
  ['#1a2a6c', '#b21f1f', '#fdbb2d'], // red-gold intense
  ['#000000', '#1a1a1a', '#4d0000'], // pure black-red glow
  ['#3a1c71', '#d76d77', '#ffaf7b'], // purple-red sunset
  ['#360033', '#0b8793', '#1e3c72']  // deep teal cosmic
];

const btnColors = [
  '#FF0000', // red neon
  '#FFD700', // gold
  '#00FFFF', // cyan
  '#FF69B4', // hot pink
  '#32CD32', // lime green
  '#8A2BE2', // violet
  '#00CED1'  // turquoise
];


let bgIndex = 0;
let btnIndex = 0;

// Function to change background
function changeBackground() {
  const colors = bgColors[bgIndex];
  document.body.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
  bgIndex = (bgIndex + 1) % bgColors.length;
}

// Function to change button colors
function changeButtons() {
  const color = btnColors[btnIndex];
  document.querySelectorAll('a.btn').forEach(btn => {
    btn.style.background = color;
    btn.style.boxShadow = `0 0 25px ${color}, 0 0 50px ${color}`;
    btn.style.color = '#fff';
  });
  btnIndex = (btnIndex + 1) % btnColors.length;
}

// Run both functions every few seconds
setInterval(() => {
  changeBackground();
  changeButtons();
}, 4000);
