import TopHeader from './components/common/TopHeader/TobHeader';
import { Button } from './components/ui/button';

export default function App() {
    return (
        <div className="flex items-center justify-center">
            <TopHeader>테스트</TopHeader>
            <div>
                <Button>Click me</Button>
            </div>
            <h2 className="text-xl font-bold text-blue-500">Tailwind Test</h2>
        </div>
    );
}
