import { useNavigate } from 'react-router-dom';

interface Props {
    productSeq: string;
    path: string;
    name: string;
}
export default function SendProductIdButton({ productSeq, path, name }: Props) {
    const navigate = useNavigate();

    return (
        <div className="my-5 px-4">
            <button
                type="button"
                className="text-wh h-12 w-full rounded-md bg-bk text-body2_b text-white"
                onClick={() => navigate(`${path}?id=${productSeq}`)}
            >
                {name}
            </button>
        </div>
    );
}
