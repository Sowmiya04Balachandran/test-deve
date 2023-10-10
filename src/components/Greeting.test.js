import Greeting from './Greeting';
import { render,screen } from '@testing-library/react';

describe('Greeting Component',()=>{
    test('renders Hello World as a text',()=>{
        //arrage
      render(<Greeting/>);
    
      //Act
      //....nothing
    
      //Assert
     const helloWorldElement= screen.getByText('Hello World');
      expect(helloWorldElement).toBeInTheDocument();
    })
});
