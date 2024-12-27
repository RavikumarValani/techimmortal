export const validateData = (data) => {
    for (const [key, value] of Object.entries(data)) {
      if (!value) {
        return { message: `${key} is required.`, success: false };
      }
      if(key == 'rating'){
        if(value > 5 || value < 0) {
          return { message: `Please enter valid rating.`, success: false };
        }
      }
    }
    return { success: true };
  };