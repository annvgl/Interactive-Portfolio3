import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-[#E1EBF3]/30 border-t-2 border-[#E1EBF3] py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >

            <a
              href="https://www.linkedin.com/in/ann-vogel-83361639a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B6B] hover:text-[#7A6F5D] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ann.vogel@hfg-gmuend.de"
              className="text-[#6B6B6B] hover:text-[#7A6F5D] transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#727272] flex items-center gap-2"
          >
            © {currentYear} Made by Ann Vogel
          </motion.p>
        </div>
      </Container>
    </footer>
  );
}
