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
    return this.reply(
      "Ini : https://faizz.vercel.app"
    );
  }

  async sched(request) {
    return this.reply(
      "Jadwal : https://ibb.co/cvkPXn9"
    );
  }
};
