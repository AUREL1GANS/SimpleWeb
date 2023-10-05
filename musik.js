const audioPlayer = document.getElementById('audioPlayer');
const lirikDiv = document.getElementById('lirik');
const musikInfo = document.getElementById('musik-info');

const lirikLagu1 = `
`;

const lirikLagu2 = `
`;

const lirikLagu3 = `
`;

const lirikLagu4 = `
`;

const lirikLagu5 = `
`;

const lirikLagu6 = `
`;

const lirikLagu7 = `
`;

const lirikLagu8 = `
`;

function putarMusik(sumberMusik, lirik) {
    audioPlayer.src = sumberMusik;
    lirikDiv.innerHTML = lirik;
    const judulLagu = sumberMusik.split('.')[0]; // Ambil judul lagu dari nama file (tanpa ekstensi)
    musikInfo.innerHTML = `<h2>${judulLagu}</h2><p>Artis</p>`;
    audioPlayer.play();
}
