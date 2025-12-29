import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, Send, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://hook.us2.make.com/8eirs14nx0hvsoycnelqycd1wyr3icev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Я свяжусь с вами в ближайшее время.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте ещё раз или свяжитесь напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Давайте <span className="gradient-text">обсудим проект</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Готова помочь вам автоматизировать бизнес-процессы и создать эффективный сайт. Свяжитесь со мной любым удобным способом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="gradient-border p-8 h-full">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-11 bg-secondary/50 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Номер телефона"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="pl-11 bg-secondary/50 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-11 bg-secondary/50 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                  
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                    <Textarea
                      name="message"
                      placeholder="Опишите ваш запрос или проект..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="pl-11 bg-secondary/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Отправка..."
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="gradient-border p-8 h-full">
              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <p className="text-muted-foreground mb-8">
                    Вы также можете связаться со мной напрямую через телефон или email
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a
                    href="tel:+19168278993"
                    className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Телефон / Telegram / WhatsApp</p>
                      <p className="font-semibold text-foreground">+1 916 827 8993</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:natna777@gmail.com"
                    className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
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

                <div className="pt-6 border-t border-border/50">
                  <p className="text-muted-foreground text-center">
                    Отвечаю на все обращения в течение 24 часов
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
