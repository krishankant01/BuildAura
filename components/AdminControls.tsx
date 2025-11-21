// import React, { useState } from 'react';
// import { useData } from '../context/DataContext';
// import { Skill } from '../types';
// import { X, Save, Plus, Trash2, Upload, LogOut } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export const AdminControls = () => {
//   const {
//     isAdmin, login, logout, user, updateUser,
//     skills, addSkill, removeSkill,
//     projects, addProject, removeProject
//   } = useData();

//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'projects'>('profile');

//   // Form States
//   const [profileForm, setProfileForm] = useState(user);
//   const [newSkill, setNewSkill] = useState<Omit<Skill, 'id'>>({ name: '', level: 50, category: 'Frontend' });
//   const [newProject, setNewProject] = useState({ title: [""], description: '', image: '', tags: '', link: '' });

//   if (!isAdmin) {
//     return (
//       <button
//         onClick={login}
//         className="fixed bottom-4 right-4 p-3 rounded-full bg-white/5 hover:bg-red-500/50 text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/10 z-50 text-xs font-bold"
//       >
//         ADMIN LOGIN
//       </button>
//     );
//   }

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-4 right-4 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-500/30 transition-all z-50 font-semibold flex items-center gap-2"
//       >
//         Dashboard
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="w-full max-w-4xl h-[85vh] bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
//             >
//               {/* Header */}
//               <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0f172a]">
//                 <h2 className="text-xl font-bold text-white">Portfolio Builder</h2>
//                 <div className="flex items-center gap-4">
//                   <button onClick={logout} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1">
//                     <LogOut size={14}/> Logout
//                   </button>
//                   <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
//                     <X size={20} className="text-white" />
//                   </button>
//                 </div>
//               </div>

//               {/* Tabs */}
//               <div className="flex border-b border-white/10 bg-[#1e293b]">
//                 {['profile', 'skills', 'projects'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab as any)}
//                     className={`px-6 py-4 text-sm font-medium transition-colors ${
//                       activeTab === tab
//                         ? 'text-red-400 border-b-2 border-red-400 bg-white/5'
//                         : 'text-slate-400 hover:text-white'
//                     } capitalize`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {/* Content */}
//               <div className="flex-1 overflow-y-auto p-6 bg-[#0f172a]/50">

//                 {/* PROFILE TAB */}
//                 {activeTab === 'profile' && (
//                   <div className="space-y-6 max-w-2xl mx-auto">
//                     <div className="flex gap-6 items-start">
//                       <img src={profileForm.avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover border-2 border-red-500/50" />
//                       <div className="flex-1 space-y-4">
//                         <div>
//                           <label className="block text-xs text-slate-400 mb-1">Avatar URL</label>
//                           <input
//                             value={profileForm.avatar}
//                             onChange={(e) => setProfileForm({...profileForm, avatar: e.target.value})}
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs text-slate-400 mb-1">Name</label>
//                           <input
//                             value={profileForm.name}
//                             onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs text-slate-400 mb-1">Title</label>
//                           <input
//                             value={profileForm.title}
//                             onChange={(e) => setProfileForm({...profileForm, title: e.target.value})}
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                         </div>

//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-xs text-slate-400 mb-1">About Me</label>
//                       <textarea
//                         value={profileForm.about}
//                         onChange={(e) => setProfileForm({...profileForm, about: e.target.value})}
//                         rows={4}
//                         className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                       />
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                        <div>
//                           <label className="block text-xs text-slate-400 mb-1">Location</label>
//                           <input
//                             value={profileForm.location}
//                             onChange={(e) => setProfileForm({...profileForm, location: e.target.value})}
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs text-slate-400 mb-1">Email</label>
//                           <input
//                             value={profileForm.email}
//                             onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                         </div>
//                     </div>

//                     <button
//                       onClick={() => updateUser(profileForm)}
//                       className="w-full py-3 bg-red-600 hover:bg-red-500 rounded-lg text-white font-medium flex items-center justify-center gap-2"
//                     >
//                       <Save size={16} /> Save Profile
//                     </button>
//                   </div>
//                 )}

//                 {/* SKILLS TAB */}
//                 {activeTab === 'skills' && (
//                   <div className="space-y-8">
//                     <div className="glass-panel p-6 rounded-xl">
//                       <h3 className="text-sm font-semibold text-red-300 mb-4">Add New Skill</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
//                         <div className="md:col-span-1">
//                           <label className="block text-xs text-slate-400 mb-1">Name</label>
//                           <input
//                             value={newSkill.name}
//                             onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
//                             placeholder="e.g. React"
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs text-slate-400 mb-1">Level (1-100)</label>
//                           <input
//                             type="number"
//                             value={newSkill.level}
//                             onChange={(e) => setNewSkill({...newSkill, level: Number(e.target.value)})}
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs text-slate-400 mb-1">Category</label>
//                           <select
//                             value={newSkill.category}
//                             onChange={(e) => setNewSkill({...newSkill, category: e.target.value as any})}
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           >
//                             <option value="Frontend">Frontend</option>
//                             <option value="Backend">Backend</option>
//                             <option value="Design">Design</option>
//                             <option value="Tools">Tools</option>
//                           </select>
//                         </div>
//                         <button
//                           onClick={() => {
//                             if(newSkill.name) {
//                               addSkill(newSkill);
//                               setNewSkill({ name: '', level: 50, category: 'Frontend' });
//                             }
//                           }}
//                           className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center justify-center gap-2"
//                         >
//                           <Plus size={16} /> Add
//                         </button>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <h3 className="text-sm font-semibold text-slate-400">Existing Skills</h3>
//                       {skills.map(skill => (
//                         <div key={skill.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
//                           <div className="flex items-center gap-4">
//                             <span className="font-medium text-white">{skill.name}</span>
//                             <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300">{skill.category}</span>
//                             <span className="text-xs text-red-400">{skill.level}%</span>
//                           </div>
//                           <button onClick={() => removeSkill(skill.id)} className="text-red-400 hover:text-red-300 p-1">
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* PROJECTS TAB */}
//                 {activeTab === 'projects' && (
//                    <div className="space-y-8">
//                     <div className="glass-panel p-6 rounded-xl space-y-4">
//                       <h3 className="text-sm font-semibold text-red-300">Add New Project</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                          <input
//                             value={newProject.title}
//                             onChange={(e) => setNewProject({...newProject, title: e.target.value})}
//                             placeholder="Project Title"
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                           <input
//                             value={newProject.image}
//                             onChange={(e) => setNewProject({...newProject, image: e.target.value})}
//                             placeholder="Image URL (e.g. picsum.photos)"
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                           <div className="md:col-span-2">
//                              <textarea
//                               value={newProject.description}
//                               onChange={(e) => setNewProject({...newProject, description: e.target.value})}
//                               placeholder="Description"
//                               rows={2}
//                               className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                             />
//                           </div>
//                           <input
//                             value={newProject.tags}
//                             onChange={(e) => setNewProject({...newProject, tags: e.target.value})}
//                             placeholder="Tags (comma separated)"
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                            <input
//                             value={newProject.link}
//                             onChange={(e) => setNewProject({...newProject, link: e.target.value})}
//                             placeholder="Project Link"
//                             className="w-full px-4 py-2 rounded-lg glass-input text-sm"
//                           />
//                       </div>
//                       <button
//                           onClick={() => {
//                             if(newProject.title) {
//                               addProject({
//                                 ...newProject,
//                                 tags: newProject.tags.split(',').map(t => t.trim())
//                               });
//                               setNewProject({ title: '', description: '', image: '', tags: '', link: '' });
//                             }
//                           }}
//                           className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center justify-center gap-2"
//                         >
//                           <Plus size={16} /> Add Project
//                         </button>
//                     </div>

//                      <div className="space-y-4">
//                       <h3 className="text-sm font-semibold text-slate-400">Existing Projects</h3>
//                       <div className="grid grid-cols-1 gap-4">
//                         {projects.map(p => (
//                           <div key={p.id} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/5">
//                             <img src={p.image} className="w-16 h-16 object-cover rounded-md" alt={p.title}/>
//                             <div className="flex-1">
//                               <h4 className="font-bold text-white">{p.title}</h4>
//                               <p className="text-xs text-slate-400 truncate">{p.description}</p>
//                             </div>
//                              <button onClick={() => removeProject(p.id)} className="text-red-400 hover:text-red-300 p-2">
//                                 <Trash2 size={18} />
//                               </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                    </div>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { Skill } from "../types";
import { X, Save, Plus, Trash2, Upload, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AdminControls = () => {
  const {
    isAdmin,
    login,
    logout,
    user,
    updateUser,
    skills,
    addSkill,
    removeSkill,
    projects,
    addProject,
    removeProject,
  } = useData();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "skills" | "projects">(
    "profile"
  );

  // Profile form with multiple titles
  const [profileForm, setProfileForm] = useState({
    ...user,
    titles: user?.titles || [""],
  });

  const [newSkill, setNewSkill] = useState<Omit<Skill, "id">>({
    name: "",
    level: 50,
    category: "Frontend",
  });

  // FIXED: newProject title was mistakenly an array
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    link: "",
  });

  if (!isAdmin) {
    return (
      <button
        onClick={login}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-white/5 hover:bg-red-500/50 text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/10 z-50 text-xs font-bold"
      >
        ADMIN LOGIN
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-500/30 transition-all z-50 font-semibold flex items-center gap-2"
      >
        Dashboard
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-4xl h-[85vh] bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0f172a]">
                <h2 className="text-xl font-bold text-white">
                  Portfolio Builder
                </h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={logout}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                  >
                    <LogOut size={14} /> Logout
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex border-b border-white/10 bg-[#1e293b]">
                {["profile", "skills", "projects"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-6 py-4 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "text-red-400 border-b-2 border-red-400 bg-white/5"
                        : "text-slate-400 hover:text-white"
                    } capitalize`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* CONTENT */}
              <div className="flex-1 overflow-y-auto p-6 bg-[#0f172a]/50">
                {/* PROFILE TAB */}
                {activeTab === "profile" && (
                  <div className="space-y-6 max-w-2xl mx-auto">
                    <div className="flex gap-6 items-start">
                      <img
                        src={profileForm.avatar}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover border-2 border-red-500/50"
                      />

                      <div className="flex-1 space-y-4">
                        {/* Avatar */}
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">
                            Avatar URL
                          </label>
                          <input
                            value={profileForm.avatar}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                avatar: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                          />
                        </div>

                        {/* Name */}
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">
                            Name
                          </label>
                          <input
                            value={profileForm.name}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                          />
                        </div>

                        {/* MULTIPLE TITLES */}
                        <div className="space-y-2">
                          <label className="block text-xs text-slate-400 mb-1">
                            Titles
                          </label>

                          {profileForm.titles.map((t, index) => (
                            <div
                              key={index}
                              className="flex gap-2 items-center"
                            >
                              <input
                                value={t}
                                onChange={(e) => {
                                  const updated = [...profileForm.titles];
                                  updated[index] = e.target.value;
                                  setProfileForm({
                                    ...profileForm,
                                    titles: updated,
                                  });
                                }}
                                placeholder={`Title ${index + 1}`}
                                className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                              />

                              {/* Delete title */}
                              {profileForm.titles.length > 1 && (
                                <button
                                  onClick={() =>
                                    setProfileForm({
                                      ...profileForm,
                                      titles: profileForm.titles.filter(
                                        (_, i) => i !== index
                                      ),
                                    })
                                  }
                                  className="p-2 text-red-400 hover:text-red-300"
                                >
                                  <Trash2 size={16} />
                                </button>
                              )}
                            </div>
                          ))}

                          {/* ADD TITLE */}
                          <button
                            onClick={() =>
                              setProfileForm({
                                ...profileForm,
                                titles: [...profileForm.titles, ""],
                              })
                            }
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs hover:bg-white/20"
                          >
                            + Add Title
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ABOUT */}
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        About Me
                      </label>
                      <textarea
                        value={profileForm.about}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            about: e.target.value,
                          })
                        }
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                      />
                    </div>

                    {/* LOCATION + EMAIL */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Location
                        </label>
                        <input
                          value={profileForm.location}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              location: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Email
                        </label>
                        <input
                          value={profileForm.email}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              email: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                        />
                      </div>
                    </div>

                    {/* SAVE PROFILE */}
                    <button
                      onClick={() => updateUser(profileForm)}
                      className="w-full py-3 bg-red-600 hover:bg-red-500 rounded-lg text-white font-medium flex items-center justify-center gap-2"
                    >
                      <Save size={16} /> Save Profile
                    </button>
                  </div>
                )}
                {/* SKILLS TAB */}
                {activeTab === "skills" && (
                  <div className="space-y-8">
                    <div className="glass-panel p-6 rounded-xl">
                      <h3 className="text-sm font-semibold text-red-300 mb-4">
                        Add New Skill
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="md:col-span-1">
                          <label className="block text-xs text-slate-400 mb-1">
                            Name
                          </label>
                          <input
                            value={newSkill.name}
                            onChange={(e) =>
                              setNewSkill({ ...newSkill, name: e.target.value })
                            }
                            placeholder="e.g. React"
                            className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-400 mb-1">
                            Level (1-100)
                          </label>
                          <input
                            type="number"
                            value={newSkill.level}
                            onChange={(e) =>
                              setNewSkill({
                                ...newSkill,
                                level: Number(e.target.value),
                              })
                            }
                            className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-400 mb-1">
                            Category
                          </label>
                          <select
                            value={newSkill.category}
                            onChange={(e) =>
                              setNewSkill({
                                ...newSkill,
                                category: e.target.value as any,
                              })
                            }
                            className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                          >
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Design">Design</option>
                            <option value="Tools">Tools</option>
                            <option value="Languages">Languages</option>
                          </select>
                        </div>

                        <button
                          onClick={() => {
                            if (newSkill.name) {
                              addSkill(newSkill);
                              setNewSkill({
                                name: "",
                                level: 50,
                                category: "Frontend",
                              });
                            }
                          }}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center justify-center gap-2"
                        >
                          <Plus size={16} /> Add
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-slate-400">
                        Existing Skills
                      </h3>
                      {skills.map((skill) => (
                        <div
                          key={skill.id}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5"
                        >
                          <div className="flex items-center gap-4">
                            <span className="font-medium text-white">
                              {skill.name}
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300">
                              {skill.category}
                            </span>
                            <span className="text-xs text-red-400">
                              {skill.level}%
                            </span>
                          </div>
                          <button
                            onClick={() => removeSkill(skill.id)}
                            className="text-red-400 hover:text-red-300 p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PROJECTS TAB */}
                {activeTab === "projects" && (
                  <div className="space-y-8">
                    {/* Add New Project */}
                    <div className="glass-panel p-6 rounded-xl space-y-4">
                      <h3 className="text-sm font-semibold text-red-300">
                        Add New Project
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          value={newProject.title}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              title: e.target.value,
                            })
                          }
                          placeholder="Project Title"
                          className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                        />

                        <input
                          value={newProject.image}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              image: e.target.value,
                            })
                          }
                          placeholder="Image URL (e.g. picsum.photos)"
                          className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                        />

                        <div className="md:col-span-2">
                          <textarea
                            value={newProject.description}
                            onChange={(e) =>
                              setNewProject({
                                ...newProject,
                                description: e.target.value,
                              })
                            }
                            placeholder="Description"
                            rows={2}
                            className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                          />
                        </div>

                        <input
                          value={newProject.tags}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              tags: e.target.value,
                            })
                          }
                          placeholder="Tags (comma separated)"
                          className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                        />

                        <input
                          value={newProject.link}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              link: e.target.value,
                            })
                          }
                          placeholder="Project Link"
                          className="w-full px-4 py-2 rounded-lg glass-input text-sm"
                        />
                      </div>

                      {/* Add Project Button */}
                      <button
                        onClick={() => {
                          if (newProject.title) {
                            addProject({
                              ...newProject,
                              tags: newProject.tags
                                .split(",")
                                .map((t) => t.trim()),
                            });

                            setNewProject({
                              title: "",
                              description: "",
                              image: "",
                              tags: "",
                              link: "",
                            });
                          }
                        }}
                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center justify-center gap-2"
                      >
                        <Plus size={16} /> Add Project
                      </button>
                    </div>

                    {/* Existing Projects */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-slate-400">
                        Existing Projects
                      </h3>

                      <div className="grid grid-cols-1 gap-4">
                        {projects.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/5"
                          >
                            <img
                              src={p.image}
                              className="w-16 h-16 object-cover rounded-md"
                              alt={p.title}
                            />

                            <div className="flex-1">
                              <h4 className="font-bold text-white">
                                {p.title}
                              </h4>
                              <p className="text-xs text-slate-400 truncate">
                                {p.description}
                              </p>
                            </div>

                            <button
                              onClick={() => removeProject(p.id)}
                              className="text-red-400 hover:text-red-300 p-2"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>{" "}
              {/* END CONTENT */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
