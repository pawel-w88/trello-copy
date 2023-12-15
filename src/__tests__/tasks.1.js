import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import Board from '../Components/Board';

afterEach(cleanup);

const mockListOfCards = [
  {
    id: 1,
    title: 'Test List',
    children: [
      {
        id: 1,
        text: 'FrontEnd',
      },
    ],
  },
];

describe('1.App', () => {
  it('Top level App component should render', () => {
    render(<App />);
    expect(
      screen.getByText(/Product Backlog/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Parking Lot/i)
    ).toBeInTheDocument();
  });

  it('Board Component should takes in `listOfCards` as props and renders it', () => {
    render(<Board cards={mockListOfCards} />);
    expect(
      screen.getByText(mockListOfCards[0].title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockListOfCards[0].children[0].text)
    ).toBeInTheDocument();
  });
});
