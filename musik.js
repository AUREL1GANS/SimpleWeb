fetch('lirik.json')
    .then(response => response.json())
    .then(data => {
        // Di sini, Anda dapat mengakses data dari file JSON
        // dan menampilkannya di elemen HTML yang sesuai
        const laguPertamaLirik = data.Enchanted;

        const lirikContainer = document.getElementById('lirik-container');

        // Loop melalui data lirik dan tambahkan mereka ke elemen HTML
        laguPertamaLirik.forEach(baris => {
            const barisLirikElem = document.createElement('p');
            barisLirikElem.textContent = baris.teks;
            lirikContainer.appendChild(barisLirikElem);
        });
    })
    .catch(error => console.error('Gagal memuat data lirik:', error));
