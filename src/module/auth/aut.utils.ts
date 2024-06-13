import bcryptjs  from 'bcryptjs';


export  const isPasswordMacthed = async (
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> => {
    const isMacthed = await bcryptjs.compare(plainPassword, hashedPassword);
    return isMacthed;
  };