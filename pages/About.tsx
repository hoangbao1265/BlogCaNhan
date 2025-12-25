
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Download, Award, User } from 'lucide-react';
import { MY_PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto space-y-16">
      {/* Introduction */}
      <section className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl shrink-0">
          <img src={`${import.meta.env.BASE_URL}images/profile.png`} alt={MY_PROFILE.name} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{MY_PROFILE.name}</h1>
            <p className="text-xl text-brand font-medium">{MY_PROFILE.title}</p>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {MY_PROFILE.bio}
          </p>
          <div className="flex gap-4">
            <a href={MY_PROFILE.social.github} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:text-brand transition-colors"><Github size={20} /></a>
            <a href={MY_PROFILE.social.linkedin} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:text-brand transition-colors"><Linkedin size={20} /></a>
            <a href={MY_PROFILE.social.twitter} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:text-brand transition-colors"><Twitter size={20} /></a>
            <a href={MY_PROFILE.social.email} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:text-brand transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Award className="text-brand" /> Kỹ năng chuyên môn
        </h2>
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {MY_PROFILE.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium hover:bg-brand/10 hover:text-brand transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Hobbies */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <User className="text-brand" /> Sở thích cá nhân
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {MY_PROFILE.hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-brand transition-all"
            >
              <h3 className="font-bold text-lg mb-2 text-brand">{hobby.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{hobby.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand/5 dark:bg-brand/10 p-8 rounded-3xl text-center space-y-4">
        <h2 className="text-2xl font-bold">Bạn có ý tưởng dự án?</h2>
        <p className="text-slate-600 dark:text-slate-400">Hãy liên hệ với tôi để cùng nhau xây dựng những hệ thống mạng tuyệt vời.</p>
        <a
          href={MY_PROFILE.social.email}
          className="inline-flex items-center gap-2 px-8 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-all"
        >
          <Mail size={18} /> Gửi Email ngay
        </a>
      </section>
    </div>
  );
};

export default About;
