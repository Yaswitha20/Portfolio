import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`,
    );
    window.location.href = `mailto:yaswirami29@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-body pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-gold/80 via-bronze/40 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
                    LET&apos;S BUILD
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                    SOMETHING NEXT.
                  </span>
                </h2>
              </motion.div>

              <p className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8">
                Open to opportunities in AI/ML engineering, LLM systems, and
                applied research. Reach out via any channel below.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="mailto:yaswirami29@gmail.com"
                  className="block text-[#EAD8C7] hover:text-gold transition-colors"
                >
                  yaswirami29@gmail.com
                </a>
                <a
                  href="tel:+12149975560"
                  className="block text-[#EAD8C7] hover:text-gold transition-colors"
                >
                  +1 214 997 5560
                </a>
                <a
                  href="https://linkedin.com/in/yramisetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#EAD8C7] hover:text-gold transition-colors"
                >
                  linkedin.com/in/yramisetty
                </a>
                <a
                  href="https://github.com/Yaswitha20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#EAD8C7] hover:text-gold transition-colors"
                >
                  github.com/Yaswitha20
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-bronze/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold text-gold text-sm">
                  ✓
                </div>
                <h3 className="font-display text-3xl text-white uppercase">
                  MESSAGE READY
                </h3>
                <p className="text-xs text-[#A8988B] font-light">
                  Your email client should now be open to send the message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-bronze mb-2">
                      // NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#120F0C] border border-bronze/30 focus:border-gold text-xs text-white placeholder-bronze/50 p-4 outline-none rounded-sm transition-colors"
                    />
                  </div>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-bronze mb-2">
                      // EMAIL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#120F0C] border border-bronze/30 focus:border-gold text-xs text-white placeholder-bronze/50 p-4 outline-none rounded-sm transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-bronze mb-2">
                    // MESSAGE
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#120F0C] border border-bronze/30 focus:border-gold text-xs text-white placeholder-bronze/50 p-4 outline-none rounded-sm transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 border border-bronze/50 bg-[#14100D] hover:border-gold hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300"
                >
                  SEND MESSAGE ↗
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="pt-16 mt-16 border-t border-bronze/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-bronze uppercase">
            PORTFOLIO // EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-bronze">
            © {new Date().getFullYear()} Yaswitha Ramisetty
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
