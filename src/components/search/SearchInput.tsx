import { Input } from '@/components/ui/input';
import { VscSettings } from 'react-icons/vsc';
import { IoIosCloseCircle } from 'react-icons/io';
import { FormEvent, useState } from 'react';
import { SortITemType } from '@/types/Product/productList';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { SortBottomSheetContent, TopHeader } from '../common';
import { Drawer, DrawerPortal, DrawerTrigger } from '../ui/drawer';

interface IProps {
    result?: boolean;
}

export default function SearchInput({ result }: IProps) {
    const [searchParams] = useSearchParams();
    const lowPrice = Number(searchParams.get('lowPrice'));
    const highPrice = Number(searchParams.get('highPrice'));
    const sort = searchParams.get('sort') ?? 'newest';
    const keyword = searchParams.get('keyword') ?? '';
    const [inputKeyword, setInputKeyword] = useState('');

    const navigate = useNavigate();

    const [sortList, setSortList] = useState<SortITemType[]>([
        {
            id: 1,
            name: '스킨케어',
            value: 'skincare',
            checked: true,
        },
        {
            id: 2,
            name: '바디케어',
            value: 'bodycare',
            checked: false,
        },
        {
            id: 3,
            name: '헤어케어',
            value: 'haircare',
            checked: false,
        },
        {
            id: 4,
            name: '발케어',
            value: 'footcare',
            checked: false,
        },
        {
            id: 5,
            name: '마스크팩',
            value: 'maskpack',
            checked: false,
        },
        {
            id: 6,
            name: '립',
            value: 'lip',
            checked: false,
        },
        {
            id: 7,
            name: '향수',
            value: 'perfume',
            checked: false,
        },
    ]);
    const [searchFilter, setsearchFilter] = useState({ category: false });
    const toggleFilter = (filterName: string, open: boolean) => {
        setsearchFilter({
            ...searchFilter,
            [filterName]: open,
        });
    };

    const onSortChange = (id: number, checked: boolean) => {
        setSortList((prevSort) => {
            return prevSort.map((item) => {
                return {
                    ...item,
                    checked: item.id === id ? checked : false,
                };
            });
        });
    };

    const handleSubmitToSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const filters = {
            lowPrice,
            highPrice,
            sort,
        };

        let queries = `?keyword=${inputKeyword}`;

        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                queries += `&${key}=${value}`;
            }
        });
        navigate(`/search/result${queries}`);
    };

    const handleKeyDownSearch = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter') {
            handleSubmitToSearch(
                e.nativeEvent as unknown as FormEvent<HTMLFormElement>,
            );
        }
    };

    const handleClickInput = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLInputElement) {
            navigate('/search');
        }
    };

    const handleKeywordDelete = () => {
        navigate('/search');
    };

    return (
        <form
            className={`${result ? 'pt-4' : 'py-4'} `}
            onSubmit={handleSubmitToSearch}
        >
            {result ? (
                <div className="relative flex w-full justify-end pl-1 pr-4">
                    <TopHeader.Back backUrl="/" />
                    <div
                        className="relative w-[calc(100%-45px)]"
                        onClick={handleClickInput}
                        aria-hidden="true"
                    >
                        <Input
                            className="h-10 rounded-sm border-none bg-gray200 pl-3"
                            value={keyword}
                            onChange={(e) => setInputKeyword(e.target.value)}
                        />
                        <button
                            className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center"
                            type="button"
                            onClick={handleKeywordDelete}
                        >
                            <span className="sr-only">닫기</span>
                            <IoIosCloseCircle className="h-6 w-6 text-gray400" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex px-4">
                    <div className="relative flex flex-1">
                        <Input
                            autoFocus
                            value={inputKeyword}
                            onChange={(e) => setInputKeyword(e.target.value)}
                            className="order-transparent h-10 rounded-l-sm rounded-r-none bg-gray200 pl-3"
                            placeholder="상품을 검색해주세요."
                        />
                        <Drawer
                            open={searchFilter.category}
                            onOpenChange={(open: boolean) =>
                                setsearchFilter({
                                    ...searchFilter,
                                    category: open,
                                })
                            }
                        >
                            <div className="flex rounded-r-sm bg-gray-200">
                                <DrawerTrigger
                                    className="flex h-10 w-8 items-center justify-center"
                                    onClick={() =>
                                        toggleFilter('category', true)
                                    }
                                >
                                    <span className="sr-only">
                                        카테고리 필터
                                    </span>
                                    <VscSettings
                                        color="text-bk"
                                        className="h-5 w-5 text-gray400"
                                    />
                                </DrawerTrigger>
                                <button
                                    type="submit"
                                    onKeyDown={handleKeyDownSearch}
                                    className="flex h-10 w-8 items-center justify-center"
                                >
                                    <span className="sr-only">검색</span>
                                    <IoSearchOutline className="h-5 w-5 text-gray400" />
                                </button>
                            </div>
                            <DrawerPortal>
                                <SortBottomSheetContent
                                    filterName="category"
                                    onSortChange={onSortChange}
                                    sortList={sortList}
                                    toggleFilter={toggleFilter}
                                />
                            </DrawerPortal>
                        </Drawer>
                    </div>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="flex items-center px-2 text-body1"
                    >
                        취소
                    </button>
                </div>
            )}
        </form>
    );
}
