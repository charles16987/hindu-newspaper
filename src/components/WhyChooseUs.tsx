import { motion } from "motion/react";
import { ShieldCheck, Clock, Smartphone } from "lucide-react";

const features = [
  {
    title: "Trusted Source",
    description: "We provide high-quality, readable PDFs sourced reliably every day.",
    icon: ShieldCheck
  },
  {
    title: "Daily Morning Updates",
    description: "Get your newspaper as soon as it's released, usually before 7 AM.",
    icon: Clock
  },
  {
    title: "Easy Mobile Access",
    description: "Optimized for reading on smartphones and tablets via Telegram.",
    icon: Smartphone
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose Our Telegram Channel?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              We understand the importance of timely news for aspirants and professionals. Our channel is dedicated to providing a seamless experience without any clutter.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-slate-100">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl blur-2xl" />
              <img
                src="https://picsum.photos/seed/newspaper/800/600"
                alt="Reading newspaper on mobile"
                className="relative rounded-2xl shadow-2xl border border-slate-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
