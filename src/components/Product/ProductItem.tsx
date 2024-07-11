import { memo } from 'react';
import { LikeBtn } from '../common';

interface IProductItemProps {
    handleClickLike: () => void;
    isClicked: boolean;
}

function ProductItem({ isClicked, handleClickLike }: IProductItemProps) {
    return (
        <li className={'basis-6/12'}>
            <div>
                <img
                    src={
                        'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg'
                    }
                    alt={'TEST 이미지'}
                />
            </div>
            <div className={'px-2.5'}>
                <div className={'mb-1 flex items-center justify-between'}>
                    <span className={'text-body4_b'}>{'stussy'}</span>
                    <LikeBtn
                        isClicked={isClicked}
                        handleClickLike={handleClickLike}
                    />
                </div>
                <p className={'line-clamp-2 text-body2 leading-tight'}>
                    {'Stussy World Tour T-Shirt White 2024'}
                </p>
                <div className={'mt-3'}>
                    <del className={'block text-body4 text-gray-400'}>
                        {'304,000원'}
                    </del>
                    <em
                        className={'mr-2 text-body2_b not-italic text-pointRed'}
                    >
                        {'30%'}
                    </em>
                    <em className={'text-body2_b not-italic'}>{'222,333원'}</em>
                </div>
            </div>
        </li>
    );
}

export default memo(
    ProductItem,
    (prevProps, nextProps) => prevProps.isClicked === nextProps.isClicked,
);