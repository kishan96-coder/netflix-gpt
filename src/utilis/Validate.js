
export const ValidateHanleder = (email,password) =>{
    const emails =/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const passwords =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

   if(! emails){
    return "email is not valid";
   }
   if(!passwords  ){
    return "password is not valid";
   }

   return null;
};

