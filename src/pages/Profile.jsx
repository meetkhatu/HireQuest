import React, {  useState } from 'react';
import Input from '../components/Input/Input';
import JobsLayout from '../components/Layouts/JobsLayout';
import ProfilePhotoSelector from '../components/Input/ProfilePhotoSelector';
import { validateEmail } from '../utils/helper';
import { motion } from 'framer-motion';




const LOCAL_STORAGE_KEY = "userProfile";

const Profile = () => {
  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem("userProfile");
    return stored ? JSON.parse(stored) : {
      name: "Meet Khatu", email: "meet@gmail.com", linkedinurl: "https://www.linkedin.com/in/meetkhatu/", resumeurl: "https://drive.google.com/file/d/14FF_HdQQxFsR073-rUVF7Hcxy_vhy6Pp/view?usp=sharing", password: "test", photo: ""
    };
  });

  const [editingField, setEditingField] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e, field) => {
    const key = field.toLowerCase().replace(/\s+/g, '');
    setProfile({ ...profile, [key]: e.target.value });
  };

  const handleEditToggle = (field) => {
    const key = field.toLowerCase().replace(/\s+/g, '');
    const value = profile[key];

    if (editingField === field) {
      const newErrors = { ...errors };

      if (key === "email") {
        const isValidEmail = validateEmail(value);
        if (!isValidEmail) {
          newErrors[key] = "Invalid email format";
          setErrors(newErrors);
          return;
        } else {
          delete newErrors[key];
        }
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profile));
        setEditingField(null);
      }
    } else {
      setEditingField(field);
    }
  };



  const setImage = (newImage) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      photo: newImage,
    }));
  };

  return (
    <JobsLayout>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto mt-10 p-6 bg-blue-100/20 rounded-2xl shadow-lg"
      >

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Your Profile</h2>
        </div>


        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-25 h-25 mb-6 mx-auto"
        >
          <ProfilePhotoSelector image={profile.photo} setImage={setImage} />
        </motion.div>


        <div className="space-y-6">
          {["Name", "Email", "Password", "Linkedin URL", "Resume URL"].map((field) => (
            <div key={field}>
              <div className="flex justify-between items-center mb-1">


                <Input
                  value={profile[field.toLowerCase().replace(/\s+/g, '')]}
                  onChange={(e) => handleChange(e, field)}
                  placeholder={`Enter ${field}`}
                  label={field}
                  type={field === "Password" ? "password" : field === "Email" ? "email" : "text"}
                  editable={editingField === field}
                />

                <button
                  onClick={() => handleEditToggle(field)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  {editingField === field ? "Save" : "Edit"}
                </button>


              </div>
              {errors[field.toLowerCase().replace(/\s+/g, '')] && (
                <p className="text-xs text-red-500 mt-1">
                  {errors[field.toLowerCase().replace(/\s+/g, '')]}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </JobsLayout>
  );
}

export default Profile