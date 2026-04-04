import { motion } from "motion/react";
import { CheckCircle2, Download, Zap, UserPlus } from "lucide-react";

const benefits = [
  {
    title: "Daily Updated Newspaper",
    description: "Get the latest edition every single morning without fail.",
    icon: Zap,
  },
  {
    title: "Free PDF Download",
    description: "No hidden costs or subscriptions. High-quality PDF files.",
    icon: Download,
  },
  {
    title: "Fast & Easy Access",
    description: "One-click download directly from your Telegram app.",
    icon: CheckCircle2,
  },
  {
    title: "No Signup Required",
    description: "Skip the long forms. Just join and start downloading.",
    icon: UserPlus,
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Use Our Service?</h2>
          <p className="text-slate-600 max-w-xl mx-auto">We provide the most reliable way to access your daily news on the go.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-blue-600" aria-label={benefit.title} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
