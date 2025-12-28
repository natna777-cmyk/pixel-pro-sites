import { motion } from "framer-motion";
import { Check, Clock, TrendingUp, Shield, Headphones, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Экономия времени",
    description: "AI-решения работают 24/7, освобождая ваше время для важных задач"
  },
  {
    icon: TrendingUp,
    title: "Рост конверсии",
    description: "Оптимизированные лендинги увеличивают продажи на 40-60%"
  },
  {
    icon: Shield,
    title: "Надёжность",
    description: "Современные технологии и лучшие практики разработки"
  },
  {
    icon: Headphones,
    title: "Поддержка",
    description: "Постоянная техническая поддержка и консультации"
  },
  {
    icon: Rocket,
    title: "Быстрый запуск",
    description: "От идеи до готового решения за минимальные сроки"
  },
  {
    icon: Check,
    title: "Индивидуальный подход",
    description: "Решения, созданные под ваши конкретные задачи"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Преимущества</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Почему <span className="gradient-text">выбирают меня</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Объединяю экспертизу в AI и веб-разработке для создания 
            решений, которые действительно работают
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
