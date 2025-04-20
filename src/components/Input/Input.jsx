import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, placeholder, label, type, editable = true }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const displayValue = !editable && type === 'password'
    ? '•'.repeat(value?.length || 8)
    : value;

  return (
    <div className='w-3/4'>
      <label className="text-[13px] text-slate-800">{label}</label>
      <div
        className={`input-box flex items-center justify-between p-2 rounded-md ${
          editable ? 'border bg-white' : 'bg-transparent border-none'
        }`}
      >
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className={`w-full bg-transparent outline-none text-sm ${
            editable ? 'text-slate-700' : 'text-slate-600 font-medium'
          } disabled:cursor-default disabled:text-slate-500`}
          value={displayValue}
          onChange={(e) => onChange(e)}
          disabled={!editable}
        />

        {type === 'password' && editable && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-slate-400 cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
