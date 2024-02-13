import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext({ color: null, setColor: null });
const ShapeContext = createContext({ shape: null, setShape: null });

function ColorContextProvider({ children }: ContainerProps) {
   const [color, setColor] = useState('red');

   return (
      <ColorContext.Provider value={{ color, setColor }}>
        { children }
      </ColorContext.Provider>
   );
}

function ShapeContextProvider({ children }: ContainerProps) {
   const [shape, setShape] = useState('circle');

   return (
     <ShapeContext.Provider value={{ shape, setShape }}>
       {children}
     </ShapeContext.Provider>
   );
}

// Segregate interface Figure > Color and Shape (s.o.l.I.d principle)
type Color = {
 color: string;
};

type Shape = {
 shape: string;
}

type ContainerProps = {
 children: React.ReactNode;
};


const Container = ({ children }: ContainerProps) => {
 return <div className="App">{children}</div>;
};

const Color = () => {
 const { color } = useContext(ColorContext);

 return <div>The color is {color}</div>;
};

const Shape = () => {
 const { shape } = useContext(ShapeContext);

 return <div>The shape is {shape}</div>;
};

const Header = () => {
 return (
     <>
       <Color />
       <Shape />
     </>
 );
};

export default function App() {
 return (
  <ColorContextProvider>
       <ShapeContextProvider>   
         <Container>
           <div>
             <Header />
           </div>
         </Container>
       </ShapeContextProvider>
   </ColorContextProvider>
 );
}


// In the following code in the Header component, we have an object figure in the state. 
// We need to pass property color from it to the Color component
// and shape to the Shape component.

// + additional question - How to change change color and shape using context in children
