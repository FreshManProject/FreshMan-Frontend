import { useNavigate } from 'react-router-dom';

interface Props {
    productSeq: string;
}
export default function QnABtn({ productSeq }: Props) {
    const navigate = useNavigate();

    return (
        <div className="my-5 px-4">
            <button
                type="button"
                className="text-wh h-12 w-full rounded-md bg-bk text-body2_b text-white"
                onClick={() => navigate(`/qna/submit?id=${productSeq}`)}
            >
                문의하기
            </button>
        </div>
    );
}
