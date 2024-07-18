import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { IoOptionsOutline, IoCloseOutline, IoCheckmark } from 'react-icons/io5';
import { Sheet } from 'react-modal-sheet';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState<string>('');
    const [recentSearchList, setRecentSearchList] = useState<string[]>([]);
    const [bottomOptionSheetOpen, setBottomOptionSheetOpen] =
        useState<boolean>(false);
    const [options, setOptions] = useState<string[]>([]);
    const [optionButton, setOptionButton] = useState<string>('');

    const ref = useRef();

    // const queryClient = useQueryClient();
    const {
        data = { data: [] },
        isLoading,
        error,
    } = useQuery({
        queryKey: ['recentSearchList'],
        queryFn: async () => {
            const response = await fetch('/api/search/recent', {
                method: 'GET',
            });
            if (!response.ok) throw new Error('Network response is not ok');
            return response.json();
        },
    });

    useEffect(() => {
        if (data && data.data) setRecentSearchList(data.data);
    }, [data]);
    const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        console.log(query);
    };
    const handleOption = async () => {
        try {
            const response = await fetch('/api/search/option', {
                method: 'GET',
            });
            if (!response.ok) throw new Error('Network response is not ok');
            const optionsData = await response.json();
            setOptions(optionsData.option);
            setBottomOptionSheetOpen((state: boolean) => !state);
            return optionsData.option;
        } catch (e) {
            console.error(e);
            return null;
        }
    };
    const handleSearchOption = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOptionButton(e.currentTarget.textContent!);
        setBottomOptionSheetOpen((state: boolean) => !state);
    };
    const handleCancel = () => {
        setQuery('');
    };
    const handleQuerySearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log(query);
            navigate('/categories');
        }
    };

    const handleDeleteRecentSearch = (recentSearch: string) => {
        setRecentSearchList(
            recentSearchList.filter((item: string) => item !== recentSearch),
        );
        // queryClient.invalidateQueries(['recentSearchList']);
    };
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error : {error.message}</div>;
    return (
        <div className="m-6 w-[375px]">
            <div className="mb-12 flex flex-row justify-center">
                <div className="relative flex flex-row items-center rounded-[6px] bg-gray-200 text-black">
                    <input
                        className="w-[295px] bg-gray-200"
                        type="text"
                        value={query}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleQuery(e)
                        }
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                            handleQuerySearch(e)
                        }
                    />
                    <IoOptionsOutline
                        className="absolute right-2 cursor-pointer text-black"
                        size={24}
                        onClick={handleOption}
                    />
                </div>
                <button
                    className="h-8 w-12"
                    type="button"
                    onClick={handleCancel}
                >
                    취소
                </button>
            </div>
            <Sheet
                ref={ref}
                isOpen={bottomOptionSheetOpen}
                onClose={() => setBottomOptionSheetOpen(false)}
                snapPoints={[0.6]}
            >
                <Sheet.Container>
                    <div>
                        {options &&
                            options.map((option: string, index: number) => (
                                <div
                                    className="mx-2 flex h-16 flex-row items-center justify-between border-b-[1px] border-gray-200"
                                    key={index}
                                >
                                    <button
                                        type="button"
                                        onClick={(
                                            e: React.MouseEvent<HTMLButtonElement>,
                                        ) => handleSearchOption(e)}
                                    >
                                        <p
                                            className={`${optionButton === option ? 'font-bold' : 'text-gray-200'}`}
                                        >
                                            {option}
                                        </p>
                                    </button>
                                    {optionButton && optionButton === option ? (
                                        <IoCheckmark size={24} />
                                    ) : (
                                        <div />
                                    )}
                                </div>
                            ))}
                    </div>
                </Sheet.Container>
            </Sheet>
            <div>
                <p className="mb-3 text-body1 font-bold">최근 검색어</p>
                <div className="flex flex-row flex-wrap">
                    {recentSearchList &&
                        recentSearchList.map(
                            (search: string, index: number) => (
                                <div key={index}>
                                    <div className="mx-1 my-1 flex h-9 flex-row items-center justify-center rounded-[15px] border-[1px] border-gray-400 text-body1 text-black">
                                        <button
                                            className="ml-4 flex items-center justify-center"
                                            type="button"
                                            onClick={() =>
                                                navigate('/categories')
                                            }
                                        >
                                            {search}
                                        </button>
                                        <IoCloseOutline
                                            className="mx-1 text-gray-400"
                                            size={20}
                                            onClick={() =>
                                                handleDeleteRecentSearch(search)
                                            }
                                        />
                                    </div>
                                </div>
                            ),
                        )}
                </div>
            </div>
        </div>
    );
}
