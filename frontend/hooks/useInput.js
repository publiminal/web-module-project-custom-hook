import { useState } from 'react';

export const useInput = initValue => {
  const [value, setValue] = useState(initValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};
/* use */
// const [username, setUsername, handleUsername] = useInput("");