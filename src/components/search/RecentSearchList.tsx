import { useKeywordStore } from '@/store/keyword';
import { GrayBorderToggleButton } from '../common/Button';

export default function RecentSearchList() {
    const { keywordList, setRemoveKeywordList } = useKeywordStore();

    return (
        <section className="mt-8">
            <h3 className="text-body1_b">최근 검색어</h3>
            <ul className="mt-3 flex flex-row flex-wrap gap-2">
                {!keywordList.length ? (
                    <div className="text-sm text-gray400">
                        최근 검색어가 없습니다
                    </div>
                ) : (
                    <>
                        {keywordList.map((keyword: string, index: number) => (
                            <li key={index}>
                                <GrayBorderToggleButton
                                    close
                                    removeKeywordList={() =>
                                        setRemoveKeywordList(index)
                                    }
                                >
                                    {keyword}
                                </GrayBorderToggleButton>
                            </li>
                        ))}
                    </>
                )}
            </ul>
        </section>
    );
}
