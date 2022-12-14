import { WordToGuess } from '../../../types/article';
import { BLUR_CHARACTER } from '../../../utils/constants';
import { BlurredText } from './Word.styled';

type PropsType = {
    children: WordToGuess;
};

const Word = ({ children }: PropsType) => {
    if (children.isVisible) {
        return <span>{children.word}</span>;
    }

    const blurredWord = BLUR_CHARACTER.repeat(children.word.length);

    return (
        <>
            <BlurredText>{blurredWord}</BlurredText>
        </>
    );
};

export default Word;
