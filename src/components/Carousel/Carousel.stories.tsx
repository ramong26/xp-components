import type { Meta, StoryObj } from '@storybook/react-vite';
import Carousel from './Carousel';

const items = [
  {
    image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
    title: 'Morning Edition',
    text: 'A bold hero panel with paper texture and loud headlines.'
  },
  {
    image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
    title: 'Evening Dispatch',
    text: 'Use the headline variant when the artwork should feel editorial.'
  },
  {
    image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
    title: 'Sunday Review',
    text: 'Indicators keep the interaction tactile and obvious.'
  }
];

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = { args: { items, autoPlay: true } };
export const Headline: Story = { args: { items, variant: 'headline' } };
