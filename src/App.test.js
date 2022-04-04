import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

/* window.fetch = jest.fn(() => {
  const user = {name :  'Jack', email : 'jack@abc.com'}
  return Promise.resolve({
    json: () => Promise.resolve(user),
});
}); */

describe("Testing App component", () =>{

test("user's name is rendered", async () => {
  render(<App />);

  const userName = await screen.findByText("Jack");
  expect(userName).toBeInTheDocument(); 

});

  test('Loading text appearing', async () => {
    render(<App />);
  
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));



  });
});


  //screen.debug();     
  //const linkElement = screen.getByText(/Hello/);
  //const linkElement = screen.getByText("Hello World");

  //const listElement = screen.getByRole('list');
  //const listItems = screen.getAllByRole('listitem');

  //expect(linkElement).toBeInTheDocument();
  /* expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass('animals');
  expect(listItems.length).toEqual(4); */


