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
