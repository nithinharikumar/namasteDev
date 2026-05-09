# ⚛️ The classes notes and codes for React 😄

**📦 Parcel**

- Takes the dev build
- Acts as a local server 🌐
- Supports HMR (HOT MODULE REPLACEMENT) 🔥
- Uses a file watching algorithm using C++ 👀

**⚡ Parcel Caching**

- Uses caching to build and develop faster 🚀
- On production, it bundles and minifies the project 🏗️

**🖼️ Image Optimization**

- Image optimization is also done by Parcel
- It will compress the files 🗜️
  **🔄 Consistent Hashing**
- Keeps track of all data in it 🗃️

**✂️ Code Splitting**

- Splits your code into smaller chunks 🧩

**🌐 Differential Bundling**

- Gives you different bundles for different browsers and older browser support 🌍

**🛠️ Error Handling and Diagnostics**

- Provides beautiful error logs and diagnostics 📋
  **🔒 HTTPS Support**
- Allows you to easily handle HTTPS configurations 🔐

**🌳 Tree Shaking**

- Uses a tree shaking algorithm to remove unused code 🍂
- If there are 100s of functions and only a few are used, it removes the unused ones, minifies, and compresses the bundle 📉
  **🔄 Diffrent Bundles**
- Gives you different bundles for development and production 📦
  &react aelement and babel
  / JSX is not HTML in JS; it has an HTML-like syntax. JSX code is transpiled to code that browsers or React understand.
  // Babel is a package that helps to transpile JSX code into code that React understands.its a compailer
  //react.createElement is converted to an object and then the js object is rendered as an html elemet this is how the react code works .jsx code is not converted to html directly .FIRST it converted to react.createElement() and then to an object and then to an html elemet .ie they are  
  //install prettier ,bracket pair colorizer ,live server ,better comment,eslint
  //there are two types of component in react  
  //1.Class Based components-old way of writing components
  //2.Functional Components-new way of writing components
  //it is just a function in js that returns jsx code
  //the root .render isa convert every react element tot html
  // the component composition is writing the component inside another componetn is called as component composition
  // const jsxHeading = (<div>
  // <h1 id="heading" className="rott" tabIndex="5">the hedaing is here funde</h1>

// </div>);
//component composition is writing the component inside another componetn
//cross site scriptiong is a security risk in react that somweone can run malicious code in your website
//even a function can called inside a component because js is there right

## // App Architecture Plan:

- Header
- - Logo
- - Nav Items
-
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, Cuisine, delivery time
-
- Footer
- - Copyright
- - Links
- - Address
- - Contact
- props are nothing but like passing args to function .same as normal js function
  for passing the data w e can pass as data to another componenets
  #install json viewer in chrome
  #config driven ui
  the config driven ui means the ui is driven by the data we are getting from the api.so we can change the ui by just changing the data
  there are two type of export and import😄

  -> default export and named export

           -> default export  -we can export only one thing at a time
           ->   export default  Nameoffun
           ->  import  Nameoffun from "./file"
           ->   named export -we can export multiple things at a time
           ->   export  Nameoffun1,Nameoffun2
           ->  import  {Nameoffun1,Nameoffun2} from "./file"

  😆react hooks
  these are normal js fucntions with some predevined feautures utility function
  why normal js vaiable is not enough for the state in react
  when i try to modify the normal js variable ,react doesn't know about this variable
  so it won't re-render the component when this variable changes
  that's why we need to use useState hook for this
  #building the body component
  this is for learning purpose only,we don't usually write the code in this way
  #react reconcilliation and render
  first it will create a dummy dom tree and then it will update the real dom tree
  this is called as reconcilliation
  #react fibre
  react fibre is a mechanism by which react reconcilliation is done
  there are two very important hooks
  1.useState()---->for manupulating the state variables
  becuase the hook maintains the state of the component
  const listofrestuarent
  2.useEffect()---->for side effects(side effects can be anything that is not related to the rendering)
  eg:-api calls,timers,event listeners,etc
  #react router
  when ever thre state variable changes or updates react will rerender the componenet
