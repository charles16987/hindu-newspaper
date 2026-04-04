import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Click Join Telegram",
    description: "Tap the button to be redirected to the official channel link."
  },
  {
    number: "02",
    title: "Open Channel",
    description: "Your Telegram app will open. Click 'Join' at the bottom."
  },
  {
    number: "03",
    title: "Download Daily PDF",
    description: "Access the latest The Hindu PDF pinned or shared daily."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600">Three simple steps to get your daily newspaper.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
