import HomeContent from '@/components/Home/HomeContent';
import { TopHeader } from '@/components/common';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HomePage() {
    const homeTabs = [
        { value: 'home', name: '홈' },
        { value: 'sale', name: '세일' },
        { value: 'ranking', name: '랭킹' },
    ];
    return (
        <>
            <TopHeader>
                <TopHeader.Title logo />
                <TopHeader.Util cart />
            </TopHeader>
            <Tabs defaultValue="home" className="">
                <TabsList className="grid w-full grid-cols-2">
                    {homeTabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="home">
                    <HomeContent />
                </TabsContent>
                <TabsContent value="sale" />
                <TabsContent value="ranking" />
            </Tabs>
        </>
    );
}
