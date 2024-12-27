export const validateData = (data) => {
    for (const [key, value] of Object.entries(data)) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        return { message: `${key} is required.`, success: false };
      }
      if(key == 'rating'){
        if(value > 5 || value < 0) {
          return { message: `Please enter valid rating.`, success: false };
        }
      }
      if(key == 'description'){
        if(JSON.parse(value)[0].children.length === 0){
          return { message: `Please enter atleast one sub description.`, success: false };
        }
      }
    }
    return { success: true };
  };