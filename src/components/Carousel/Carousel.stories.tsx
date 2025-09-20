import type { Meta, StoryObj } from '@storybook/react-vite';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    items: [
      {
        image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
        title: 'Slide 1',
        text: 'This is the first slide.',
        onClick: () => alert('Slide 1 clicked!'),
        imageStyle: { width: '500px', height: 'auto' }
      },
      {
        image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
        title: 'Slide 2',
        text: 'This is the second slide.',
        onClick: () => alert('Slide 2 clicked!'),
        imageStyle: { width: '500px', height: 'auto' }
      },
      {
        image: 'https://wikidocs.net/images/page/279778/boardwalk.jpg',
        title: 'Slide 3',
        text: 'This is the third slide.',
        onClick: () => alert('Slide 3 clicked!'),
        imageStyle: { width: '500px', height: 'auto' }
      }
    ],
    autoPlay: true
  }
};
