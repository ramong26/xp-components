import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

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
  const slide1 = screen.getByRole('heading', { name: /Slide 1/i });
  const slide2 = screen.getByRole('heading', { name: /Slide 2/i });
  const slide3 = screen.getByRole('heading', { name: /Slide 3/i });
  await userEvent.click(slide1);
  expect(items[0].onClick).toHaveBeenCalled();
  await userEvent.click(slide2);
  expect(items[1].onClick).toHaveBeenCalled();
  await userEvent.click(slide3);
  expect(items[2].onClick).toHaveBeenCalled();
});

test('자동 슬라이드 동작 (타이머 기반)', () => {
  vi.useFakeTimers();
  render(<Carousel items={items} autoPlay={true} interval={1000} />);

  const indicators = screen.getAllByRole('button');

  expect(indicators[0]).toHaveClass('active');

  vi.advanceTimersByTime(1000);
  expect(indicators[0]).not.toHaveClass('active');
  expect(indicators[1]).toHaveClass('active');

  vi.advanceTimersByTime(1000);
  expect(indicators[1]).not.toHaveClass('active');
  expect(indicators[2]).toHaveClass('active');

  vi.advanceTimersByTime(1000);
  expect(indicators[2]).not.toHaveClass('active');
  expect(indicators[0]).toHaveClass('active');

  vi.useRealTimers();
});
