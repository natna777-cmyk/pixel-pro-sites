import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Контакты</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Давайте <span className="gradient-text">обсудим проект</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Готов помочь вам автоматизировать бизнес-процессы и создать 
            эффективный сайт. Свяжитесь со мной любым удобным способом
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="gradient-border p-8 md:p-12">
            <div className="relative z-10 space-y-8">
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="tel:+19168278993"
                  className="flex items-center gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                    <p className="font-semibold text-foreground">+1 916 827 8993</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:natna777@gmail.com"
                  className="flex items-center gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-semibold text-foreground">natna777@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* CTA */}
              <div className="text-center pt-6 border-t border-border/50">
                <p className="text-muted-foreground mb-6">
                  Напишите мне, и я отвечу в течение 24 часов
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="mailto:natna777@gmail.com">
                      <MessageCircle className="h-5 w-5" />
                      Написать на почту
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href="tel:+19168278993">
                      <Phone className="h-5 w-5" />
                      Позвонить
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
