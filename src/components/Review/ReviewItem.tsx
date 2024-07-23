import Star from './Star';

export default function ReviewItem() {
    const handleImgView = () => {};
    return (
        <li className="border-t border-gray100 pt-9 text-body3 text-gray400 first:border-t-0 first:pt-0">
            <div className="flex justify-between">
                <span className="flex gap-2">
                    <Star readonly rate={4.5} w="w-4" h="h-4" />
                    gogdg1234
                </span>
                <span>2023.12.22</span>
            </div>
            <p className="mt-2">옵션: ㅇㅇㅇㅇ매</p>
            <button onClick={handleImgView} type="button" className="mt-2">
                <img
                    src="https://cosmereg.com/wp-content/uploads/2023/03/beauty-g2b308465c_1920-1.jpg"
                    className="h-[100px] w-[100px] object-cover"
                    alt="test"
                />
            </button>
            <p className="mt-3 text-bk">
                대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...
                재구매 의사 있어요
            </p>
        </li>
    );
}
