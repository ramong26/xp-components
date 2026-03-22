import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import Carousel from './Carousel';

const items = [
  { title: 'Slide 1', text: 'Text 1', image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg', onClick: vi.fn() },
  { title: 'Slide 2', text: 'Text 2', image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg', onClick: vi.fn() },
  { title: 'Slide 3', text: 'Text 3', image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg', onClick: vi.fn() }
];

describe('Carousel', () => {
  test('navigates through indicators', async () => {
    render(<Carousel items={items} autoPlay={false} />);
    const indicators = screen.getAllByRole('button');
    await userEvent.click(indicators[1]);
    expect(screen.getByRole('heading', { name: 'Slide 2' })).toBeInTheDocument();
  });

  test('auto play advances active indicator', async () => {
    vi.useFakeTimers();
    render(<Carousel items={items} autoPlay interval={1000} />);
    const indicators = screen.getAllByRole('button');
    expect(indicators[0]).toHaveClass('active');
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    expect(indicators[1]).toHaveClass('active');
    vi.useRealTimers();
  });
});
