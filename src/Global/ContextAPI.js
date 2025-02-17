import React, {useState, createContext} from 'react';

export const ContextAPI = createContext();

export const ContextAPIProvider = ({children}) => {
  const [user, setUser] = useState({
    name: 'Dr. Floyd Miles',
    role: 'Dentist',
    profileImage: null,
    nationalId: '',
    phone: '123-456-7890',
    email: 'floyd.miles@example.com',
    dob: '01/01/1980',
    gender: 'male',
    language: 'English',
    password: '',
    bio: 'Pellentesque placerat arcu in risus facilisis, sed laoreet eros laoreet...',
    licenseNo: '1225466652',
    imageUri: null,
  });

  return (
    <ContextAPI.Provider value={{user, setUser}}>
      {children}
    </ContextAPI.Provider>
  );
};
