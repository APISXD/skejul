const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {
  async introduction(request) {
    if (request.text.toLowerCase().includes("afp")) {
      return Response.menu.fromArrayOfString(
        [f("menu.daftarProduk"), f("menu.sched")],
        f("intro", [request.name]),
        f("template.menu")
      );
    } else {
      // Jika pesan tidak mengandung kata "halo", tidak memberikan respons
      return null;
    }
  }

  async product(request) {
    // Jadwal kereta KP Bandan ke PS Senen pada tanggal 25/04/24
    const jadwalKereta = `
*Jadwal kereta KP Bandan ke PS Senen pada tanggal 25/04/24*
JAM *07:00 - 08:00*
Berangkat
Dari Stasiun:
*BEKASI:* _06:30, 06:40, 07:06_
*KRANJI:* _06:33, 06:43, 07:07_
*CAKUNG:* _06:38, 06:48, 07:14_
  
Pulang
Arah:
*CIKARANG:* _18:02, 18:07, 18:12, 18:22, 18:36, 18:47, 19:00_
*BEKASI:*_18:00, 18:17, 18:27, 18:54, 19:08_
    `;

    // Mengembalikan jadwal sebagai balasan
    return this.reply(jadwalKereta);
}


  async sched(request) {
    // Menampilkan gambar alamat kantor dari URL
    return Response.image.fromURL(
      "https://i.ibb.co/LdGpHXZ/Gambar-Whats-App-2024-04-23-pukul-19-33-04-3213685b.jpg",
      "Jadwal"
    );
  }
};
