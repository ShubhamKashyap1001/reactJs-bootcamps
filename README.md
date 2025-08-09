# Virtual Dom
- https://github.com/acdlite/react-fiber-architecture

# useState
- useState React ka hook hai jo component ke andar data ko store karta hai jo UI ke saath linked hota hai. Jab tu is data ko update karta hai, toh React automatically component ko re-render kar deta hai.

# useEffect
- React me tu directly browser ya server ke saath interact nahi karta (jaise fetch, timeout, event listener).
Uske liye useEffect use hota hai — ye tere component ke lifecycle ko handle karta hai.

- Agar tu chahta hai ki koi kaam automatically ho jab component mount ho, ya state change ho — jaise API call, timer, ya document title update — toh useEffect use hota hai.

# Context API
React me agar koi data (like user, theme, language) app ke bahut components me chahiye, toh tu baar-baar props pass nahi karega.
Tab tu Context API use karega, jisse ek central jagah se sabko data milta hai.

