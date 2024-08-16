import { Input } from '@/components/ui/input';
import { VscSettings } from 'react-icons/vsc';
import { IoIosCloseCircle } from 'react-icons/io';
import { TopHeader } from '../common';

interface IProps {
    result?: boolean;
}

export default function SearchInput({ result }: IProps) {
    return (
        <section>
            {result ? (
                <div className="relative flex w-full justify-end pl-1 pr-4">
                    <TopHeader.Back backUrl="/" />
                    <div className="relative w-[calc(100%-45px)]">
                        <Input
                            className="h-10 rounded-sm border-none bg-gray200 pl-3"
                            placeholder="상품을 검색해주세요."
                        />
                        <button
                            className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center"
                            type="button"
                        >
                            <span className="sr-only">닫기</span>
                            <IoIosCloseCircle className="h-6 w-6 text-gray400" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex px-4">
                    <div className="relative flex-1">
                        <Input
                            className="h-10 rounded-sm border-none bg-gray200 pl-3"
                            placeholder="상품을 검색해주세요."
                        />
                        <button
                            className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center"
                            type="button"
                        >
                            <span className="sr-only">카테고리 필터</span>
                            <VscSettings color="text-bk" className="h-6 w-6" />
                        </button>
                    </div>
                    <span className="flex items-center px-2 text-body1">
                        취소
                    </span>
                </div>
            )}
        </section>
    );
}
