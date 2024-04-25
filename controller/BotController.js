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
JAM 07:00 - 08:00
Dari Stasiun:
BEKASI: 06:30, 06:40, 07:06
KRANJI:06:33, 06:43, 07:07
CAKUNG: 06:38, 06:48, 07:14
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
