import { render, screen } from '@testing-library/react';
import App from './App';

test('checking 1', () => {
  render(<App />)
  //yeh render kar diya because isi component mein test karna h
  const buttonElem = screen.queryByRole("button", { name: 'Cartoons are great' })
  //yeh button pakkad rhe h hum like kya element par test karna h
  //isme hum role ke hisaab se pick kar rhe h because woh bahut feasible hota h

  expect(buttonElem).not.toBeInTheDocument()
  //yeh to be wali cheeze hoti h assert statement to tell what we expect
  //toBe walle cheeze hoti h matchers 

  //render -> use for rendering our required component
  // screen -> used to catch the elements in render

  //agar pata nhi kiska kya role h toh we can use logRole
})