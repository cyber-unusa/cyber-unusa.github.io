// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
import { bph, kadiv } from "../../assets/assets";

// Card for BPH (Badan Pengurus Harian)
function BphCard({ foto, nama, jabatan, color }) {
  return (
    <div
      className={`bg-white rounded-lg border p-6 text-center hover:shadow-lg transition-shadow w-full max-w-xs mx-auto ${
        color?.mt || ""
      }`}
    >
      <div className="flex items-center justify-center mx-auto mb-4">
        <img
          src={foto}
          alt=""
          className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg mb-1">{nama}</h3>
      <p className={`${color?.text || "text-blue-600"} text-sm mb-3`}>
        {jabatan}
      </p>
    </div>
  );
}

// Card for Devisi
function DevisiCard({ foto, nama, jabatan, color, desc }) {
  return (
    <div className="bg-white rounded-lg border p-6 text-center hover:shadow-lg transition-shadow w-full max-w-xs mx-auto ">
      <div
        className={`h-20 w-20 ${color.bg} ${color.text} rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-semibold overflow-hidden`}
      >
        <img
          src={foto}
          alt=""
          className="rounded-full w-20 h-20 object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg mb-1">{nama}</h3>
      <p className={`${color.text} text-sm mb-3`}>{jabatan}</p>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default function Pengurus() {
  // Data for BPH
  const bphList = [
    {
      ...bph.ketum,
      color: { text: "text-blue-600", mt: "lg:mt-10" },
    },
    {
      ...bph.pembina,
      color: { text: "text-green-600" },
    },
    {
      ...bph.watum,
      color: { text: "text-purple-600", mt: "lg:mt-10" },
    },
  ];

  // Data for Devisi
  const devisiList = [
    {
      ...kadiv.psdm,
      color: { bg: "bg-blue-100", text: "text-blue-600" },
      desc: "Devisi Pengembangan Sumber Daya Mahasiswa berfokus pada pengembangan potensi, kemampuan, serta kualitas anggota",
    },
    {
      ...kadiv.pendidikan,
      color: { bg: "bg-green-100", text: "text-green-600" },
      desc: "Devisi Pendidikan bertujuan untuk meningkatkan kemampuan dan keahlian anggotanya dalam bidang teknologi informasi dan komunikasi.",
    },
    {
      ...kadiv.pengmas,
      color: { bg: "bg-purple-100", text: "text-purple-600" },
      desc: "Devisi Pengabdian Masyarakat hadir untuk memberikan dampak nyata bagi masyarakat menggunakan keahlian teknologi",
    },
    {
      ...kadiv.inovation,
      color: { bg: "bg-red-100", text: "text-red-600" },
      desc: "Devisi INNOVATION & ENTERPRENUER hadir untuk implementasi skill setiap individu dari bidang digital hingga kewirausahaan",
    },
  ];

  return (
    <section id="tim">
      <div className="container mx-auto">
        {/* Judul dan deskripsi BPH */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-600 mb-4 mx-5">
            Badan Pengurus Cyber
          </h2>
        </div>

        {/* BPH Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 my-5">
          {bphList.map((item, idx) => (
            <BphCard key={idx} {...item} />
          ))}
        </div>

        {/* Judul dan deskripsi Devisi */}
        <div className="text-center mb-5">
          <div className="inline-block mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
            Devisi Cyber
          </div>
          <p className="text-gray-600 max-w-2xl mx-5 sm:mx-auto">
            Devisi kami terdiri dari individu berpengalaman di berbagai bidang
            yang siap membantu mewujudkan visi dan misi UKM Cyber.
          </p>
        </div>

        {/* Devisi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {devisiList.map((item, idx) => (
            <DevisiCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
