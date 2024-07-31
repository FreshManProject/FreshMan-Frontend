import useDeleteRecentSearch from '@/hooks/query/search/useDeleteRecentSearch';
import useGetRecentSearchList from '@/hooks/query/search/useGetRecentSearchList';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function RecentSearchList() {
    const navigate = useNavigate();
    const { recentSearchList, isLoadingRecentSearchList } =
        useGetRecentSearchList();
    const { mutate: deleteRecentSearch } = useDeleteRecentSearch();
    const handleDeleteRecentSearch = (index: number) => {
        deleteRecentSearch(index);
        // queryClient.invalidateQueries(['recentSearchList']);
    };
    if (isLoadingRecentSearchList) return <div>Loading...</div>;
    return (
        <div className="mx-4">
            <p className="mb-3 text-body1 font-bold">최근 검색어</p>
            <div className="flex flex-row flex-wrap">
                {recentSearchList &&
                    recentSearchList.map((search: string, index: number) => (
                        <div key={index}>
                            <div className="mx-1 my-1 flex h-9 flex-row items-center justify-center rounded-[15px] border-[1px] border-gray-400 text-body1 text-black">
                                <button
                                    className="ml-4 flex items-center justify-center"
                                    type="button"
                                    onClick={() => navigate('/categories')}
                                >
                                    {search}
                                </button>
                                <IoCloseOutline
                                    className="mx-1 text-gray-400"
                                    size={20}
                                    onClick={() =>
                                        handleDeleteRecentSearch(index)
                                    }
                                />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
