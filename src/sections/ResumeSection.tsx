import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Section } from "../components/ui/section";

export function ResumeSection() {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = "/path-to-your-resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <Section id="resume" title="Resume">
      <div className="flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <Card className="p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">View My Resume</h3>
                <p className="text-muted-foreground">
                  Download my resume to learn more about my experience and
                  skills
                </p>
              </div>
              <Button
                onClick={handleDownload}
                className="flex items-center gap-2"
                variant="outline"
              >
                <Download size={18} />
                Download Resume
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
