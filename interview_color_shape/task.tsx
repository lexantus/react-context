import React, { useState } from 'react';

type Figure = {
 color: string;
 shape: string;
};

type ContainerProps = {
 children: React.ReactNode;
};


const Container = ({ children }: ContainerProps) => {
 return <div className="App">{children}</div>;
};

const Color = () => {
 const color = 'red'; // pass it
 return <div>The color is {color}</div>;
};

const Shape = () => {
 const shape = 'circle'; // pass it
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
 const [figure, setFigure] = useState<Figure>({ color: 'red', shape: 'circle' });
 
 return (
   <Container>
     <div>
       <Header />
     </div>
   </Container>
 );
}


// In the following code in the Header component, we have an object figure in the state. 
// We need to pass property color from it to the Color component
// and shape to the Shape component.

