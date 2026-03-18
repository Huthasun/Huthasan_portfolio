import { FaWhatsapp, FaFileDownload } from "react-icons/fa";

function WhatsappFloat() {
  return (
    <>
      {/* Resume Button */}
      <a
        href="/2026.pdf"
        download
        className="resume-float"
      >
        <FaFileDownload size={26} />
        <span className="tooltip">Download Resume</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916302665139"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp size={30} />
        <span className="tooltip">Chat on WhatsApp</span>
      </a>
    </>
  );
}

export default WhatsappFloat;