import { Bookmark } from './Bookmark';

export default {
    title: 'Components/Bookmark', // 스토리 분류 및 컴포넌트 이름
    component: Bookmark, // 테스트할 컴포넌트(Icon)
    parameters: {
        backgrounds: { default: { value: 'light' } }, // 스토리의 배경색 설정
        controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
    },
    argTypes: {
        size: {
            options: [16, 24, 48],
            control: { type: 'radio' }
        }
    }
};

const Template = (args) => <Bookmark {...args} />;

export const Default = Template.bind({});
Default.args = {
    isBookmarked: false,
};

export const BookmarkOn = Template.bind({});
BookmarkOn.args = {
    isBookmarked: true,
};