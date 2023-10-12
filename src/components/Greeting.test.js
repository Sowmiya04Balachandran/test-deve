import Greeting from './Greeting';
import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting Component',()=>{
    test('renders "Hello World" as a text',()=>{
        //arrage
      render(<Greeting/>);
    
      //Act
      //....nothing
    
      //Assert
     const helloWorldElement= screen.getByText('Hello World');
      expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders good to see you if the button was clicked', () => {
      // arrange
      render(<Greeting />);
    
      // act
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
    
      // assert
      const outputElement = screen.getByText('good to see you');
      expect(outputElement).toBeInTheDocument();
    });

    test('renders "changed!" if the button was clicked ',()=>{
  //arrange
  render(<Greeting/>);

  //act
  const buttonElement=screen.getByRole('button');
  userEvent.click(buttonElement);

  //assert
  const outputElement= screen.getByText('changed!');
  expect(outputElement).toBeInTheDocument();

    })

    test('does not render good to see you if the button was clicked',()=>{
      render(<Greeting/>);

      //act
      const buttonElement=screen.getByRole('button');
      userEvent.click(buttonElement);
    
      //assert
      const outputElement= screen.queryByText('good to see you',{exact:false});
      expect(outputElement).toBeNull();
    })
});

