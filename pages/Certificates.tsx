
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, X } from 'lucide-react';
import { MY_PROFILE } from '../constants';

const Certificates: React.FC = () => {
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

    return (
        <div className="py-12 px-4 max-w-4xl mx-auto space-y-12">
            <header className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Certificates</h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Hành trình học tập không ngừng nghỉ để nâng cao kỹ năng và kiến thức chuyên môn.
                </p>
            </header>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                {MY_PROFILE.courses.map((course, idx) => (
                    <motion.div
                        key={idx}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        onClick={() => setSelectedPdf(course.pdf)}
                        className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-brand hover:shadow-xl transition-all"
                    >
                        <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                            <img
                                src={course.image}
                                alt={course.name}
                                className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold rounded-full shadow-sm">
                                {course.year}
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-2 text-brand mb-2">
                                <Award size={18} />
                                <span className="text-sm font-medium">{course.provider}</span>
                            </div>
                            <h3 className="text-xl font-bold group-hover:text-brand transition-colors flex items-center justify-between">
                                {course.name}
                                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* PDF Modal Viewer */}
            {selectedPdf && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedPdf(null)}
                >
                    <div
                        className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedPdf(null)}
                            className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors z-10"
                        >
                            <X size={24} className="text-slate-700 dark:text-slate-300" />
                        </button>
                        <iframe
                            src={selectedPdf}
                            className="w-full h-full"
                            title="Certificate Preview"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificates;
