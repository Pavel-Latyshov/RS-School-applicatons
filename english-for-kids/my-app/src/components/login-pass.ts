import { useState } from 'react';

const useLoginPass = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useLoginPass;
