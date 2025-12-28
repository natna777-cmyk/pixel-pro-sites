import { motion } from "framer-motion";
import { Bot, Globe, Zap, MessageSquare, BarChart3, Palette } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Чат-боты",
    description: "Умные чат-боты для автоматизации общения с клиентами 24/7. Интеграция с мессенджерами и CRM.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Процессная автоматизация",
    description: "Автоматизация рутинных задач с помощью AI. Экономия времени и ресурсов вашей команды.",
    color: "accent"
  },
  {
    icon: MessageSquare,
    title: "AI-ассистенты",
    description: "Персональные AI-помощники для вашего бизнеса. Обработка запросов, ответы на вопросы.",
    color: "primary"
  },
  {
    icon: Globe,
    title: "Лендинг-сайты",
    description: "Современные продающие сайты с уникальным дизайном и оптимизацией для конверсии.",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "AI-аналитика",
    description: "Анализ данных и прогнозирование с использованием машинного обучения.",
    color: "primary"
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    description: "Профессиональный дизайн интерфейсов, ориентированный на пользователя.",
    color: "accent"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Услуги</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Что я <span className="gradient-text">предлагаю</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Комплексные решения для роста вашего бизнеса с использованием 
            передовых технологий искусственного интеллекта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group gradient-border p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  service.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
