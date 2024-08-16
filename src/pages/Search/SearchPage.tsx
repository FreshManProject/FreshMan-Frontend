import RecentSearchList from '@/components/search/RecentSearchList';
import SearchInput from '@/components/search/SearchInput';

export default function SearchPage() {
    return (
        <div className="py-4">
            <SearchInput />
            {/* 최근 검색어 */}
            <section className="px-4">
                <RecentSearchList />
            </section>
        </div>
    );
}
