const audioPlayer = document.getElementById('audioPlayer');
const lirikDiv = document.getElementById('lirik');
const musikInfo = document.getElementById('musik-info');

const lirikLagu1 = `
`;

const lirikLagu2 = `
`;

function putarMusik(sumberMusik, lirik) {
    audioPlayer.src = sumberMusik;
    lirikDiv.innerHTML = lirik;
    const judulLagu = sumberMusik.split('.')[0]; // Ambil judul lagu dari nama file (tanpa ekstensi)
    musikInfo.innerHTML = `<h2>${judulLagu}</h2><p>Artis</p>`;
    audioPlayer.play();
}
