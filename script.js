function reserveParking() {
    // Ambil nilai dari input
    var name = document.getElementById("name").value;
    var vehicle = document.getElementById("vehicle").value;
    var date = document.getElementById("date").value;
    var hours = document.getElementById("hours").value;

    // Validasi input
    if (!name || !vehicle || !date || !hours) {
        alert("Please fill in all fields");
        return;
    }

    // Hitung biaya reservasi berdasarkan jenis kendaraan
    var rate;

    switch (vehicle) {
        case "Mobil":
            rate = 15; // Harga per jam untuk mobil
            break;
        case "Motor":
            rate = 10; // Harga per jam untuk sepeda motor
            break;
        case "Sepeda":
            rate = 5; // Harga per jam untuk sepeda
            break;
        case "Truck":
            rate = 20; // Harga per jam untuk truk
            break;
        default:
            alert("Invalid vehicle type");
            return;
    }

    var totalCost = rate * hours;

    // Konversi biaya ke rupiah
    var exchangeRate = 2000; // Gantilah dengan nilai tukar yang sesuai
    var totalCostInRupiah = totalCost * exchangeRate;

    // Tampilkan informasi reservasi
    var reservationInfo = document.getElementById("reservationInfo");
    reservationInfo.innerHTML = `<h3>Informasi Reservasi</h3>
        <p>Nama: ${name}</p>
        <p>Kendaraan: ${vehicle}</p>
        <p>Tanggal: ${date}</p>
        <p>Jam: ${hours}</p>
        <p>Biaya Total: Rp ${totalCostInRupiah.toLocaleString()}</p>`;
}

function clearForm() {
    // Mengosongkan nilai input dan informasi reservasi
    document.getElementById("name").value = "";
    document.getElementById("vehicle").value = "Mobil";
    document.getElementById("date").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("reservationInfo").innerHTML = "";
}

function exitPage() {
    // Menutup halaman
    window.close();
}
