import { useLocalStorage } from './useLocalStorage'; 

/* useDarkMode :  use persistent state with Local storage. */
export const useDarkMode = (key, initialValue) => {

    const [value, setValue] = useLocalStorage(key, initialValue);
    const handleChanges = updatedValue => {
      setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
  };
  /* use */
   // const [darkMode, setDarkMode, handleChanges] =  useDarkMode('darkMode', false)