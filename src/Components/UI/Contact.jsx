import { discord, gmail, instagram, youtube } from "../../assets/data/Icons";

export default function Contact() {
  const copas = () => {
    const textToCopy = "cyber@unusa.ac.id";
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("berhasil di salin");
  };

  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10 text-yel font-rubik">
        HUBUNGI KAMI
      </h2>

      <div className="container">
        <div className="lg:w-96 text-center px-4 mx-auto">
          <h3 className="font-poppin">
            Anda dapat bekerja sama dengan{" "}
            <span className="font-bold">UKM CYBER UNUSA</span> dengan
            menghubungi sosial media kami dibawah ini:
          </h3>
          <div className="flex items-center">
            {/* Youtube */}
            <a
              href="https://www.youtube.com/channel/UC7YBQJ7wAoXW_W5VtouTLyA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-red-600 hover:bg-lowprim hover:text-white"
            >
              {youtube()}
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/cyberunusa_official"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-pink-500 hover:bg-lowprim hover:text-white"
            >
              {instagram()}
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/Q6qH4Xf9JR"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-indigo-600 hover:bg-lowprim hover:text-white"
            >
              {discord()}
            </a>

            {/* Email */}
            <button
              onClick={copas}
              className="mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-red-400 hover:bg-lowprim hover:text-white"
            >
              {gmail()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
