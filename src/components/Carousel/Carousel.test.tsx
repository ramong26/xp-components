import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import Carousel from './Carousel';

const items = [
  {
    image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
    title: 'Slide 1',
    text: 'This is the first slide.',
    onClick: vi.fn(),
    imageStyle: { width: '500px', height: 'auto' }
  },
  {
    image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
    title: 'Slide 2',
    text: 'This is the second slide.',
    onClick: vi.fn(),
    imageStyle: { width: '500px', height: 'auto' }
  },
  {
    image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
    title: 'Slide 3',
    text: 'This is the third slide.',
    onClick: vi.fn(),
    imageStyle: { width: '500px', height: 'auto' }
  }
];

test('renders Carousel and 클릭', async () => {
  render(<Carousel items={items} autoPlay={false} />);
  const indicators = screen.getAllByRole('button');

  for (const [index, item] of items.entries()) {
    if (index > 0) {
      await userEvent.click(indicators[index]);
    }
    const slide = screen.getByRole('heading', {
      name: new RegExp(item.title, 'i')
    });
    expect(slide).toBeInTheDocument();
    await userEvent.click(slide);
    expect(item.onClick).toHaveBeenCalled();
  }
});

test('자동 슬라이드 동작 (타이머 기반)', async () => {
  vi.useFakeTimers();
  render(<Carousel items={items} autoPlay={true} interval={1000} />);

  const indicators = screen.getAllByRole('button');

  expect(indicators[0]).toHaveClass('active');

  for (let i = 0; i < items.length; i++) {
    const currentIndex = i;
    const nextIndex = (i + 1) % items.length;
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    expect(indicators[currentIndex]).not.toHaveClass('active');
    expect(indicators[nextIndex]).toHaveClass('active');
  }

  vi.useRealTimers();
});
