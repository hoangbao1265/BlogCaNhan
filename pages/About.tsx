
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Download, Award, User } from 'lucide-react';
import { MY_PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto space-y-16">
      {/* Introduction */}
      <section className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl shrink-0">
          <img src="https://picsum.photos/400/400" alt={MY_PROFILE.name} className="w-full h-full object-cover" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {MY_PROFILE.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-slate-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand transition-all duration-1000" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <ExternalLink className="text-brand" /> Khóa học & Chứng chỉ
        </h2>
        <div className="space-y-4">
          {MY_PROFILE.courses.map((course, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="font-bold">{course.name}</h3>
                <p className="text-slate-500 text-sm">{course.provider}</p>
              </div>
              <span className="text-sm font-medium text-brand">{course.year}</span>
            </div>
          ))}
        </div>
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
