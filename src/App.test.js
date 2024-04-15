import React from 'react'
import { render, screen } from '@testing-library/react'
// import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'
import App  from './App.js'
test('renders Logo element', () => {
  render(<App />);
  expect(screen.getByRole('Logo')).toBeDefined();
 
});
// test('Enter Search text', () => {
//   render(<App />);
//   const textbox = screen.getByRole('searchbox');
//   const button = screen.getByRole('searchbutton');
//     userEvent.type(textbox, 'Epic');
//     // Simulate clicking button
//     userEvent.click(button);
//       // Assert textbox has text content 'Hello!'
//       expect( screen.findByText('Loading...')).toBeInTheDocument()
// });
// describe('App', () => {
//   beforeEach(() => {
//     fetchMock.resetMocks()
//   })

//   test('renders Books when API call succeeds', async () => {
//     const fakeBook = [
//         { title: "Epic", authors: ['walaa','ahmed'],first_publish_year:1800,cover_id:123456 },
       
//       ]
   
    
//       fetchMock.mockResolvedValue({ status: 200, json: jest.fn(() => fakeBook) })
    
//       render(<App />)
    
      
//       expect(await screen.findByText('Epic')).toBeInTheDocument()
    
    
//       expect(screen.queryByText('No users found')).not.toBeInTheDocument()

//   })

//   test('renders error when API call fails', async () => {

//     fetchMock.mockReject(() => Promise.reject('API error'))

//   render(<App />)

//   expect(await screen.findByText('Loading...')).toBeInTheDocument()

//   })
// })